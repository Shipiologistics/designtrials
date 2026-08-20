import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = dirname(fileURLToPath(new URL("../package.json", import.meta.url)));
const distClient = join(root, "dist", "client");
const outputRoot = join(root, ".vercel", "output");
const outputStatic = join(outputRoot, "static");

const routes = [
  "/",
  "/men",
  "/women",
  "/science",
  "/quiz",
  "/design-2",
  "/design-2/men",
  "/design-2/women",
  "/design-2/science",
  "/design-2/quiz",
  "/design-2/plan",
  "/design-3",
  "/design-3/men",
  "/design-3/women",
  "/design-3/science",
  "/design-3/quiz",
];

process.env.NEXT_PUBLIC_SITE_URL ??=
  process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "https://inruut.com";

const contentTypes = new Map([
  [".css", "text/css; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".svg", "image/svg+xml"],
  [".png", "image/png"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".webp", "image/webp"],
]);

function contentTypeFor(pathname) {
  const extension = pathname.match(/\.[^.]+$/)?.[0]?.toLowerCase();
  return contentTypes.get(extension ?? "") ?? "application/octet-stream";
}

async function fetchAsset(request) {
  const url = new URL(request.url);
  const pathname = decodeURIComponent(url.pathname).replace(/^\/+/, "");

  if (!pathname || pathname.includes("..")) {
    return new Response("Not found", { status: 404 });
  }

  try {
    const body = await readFile(join(distClient, pathname));
    return new Response(body, {
      headers: { "content-type": contentTypeFor(pathname) },
    });
  } catch {
    return new Response("Not found", { status: 404 });
  }
}

function htmlPathFor(route) {
  if (route === "/") {
    return join(outputStatic, "index.html");
  }
  return join(outputStatic, route.replace(/^\/+/, ""), "index.html");
}

async function renderRoute(worker, route) {
  const response = await worker.fetch(
    new Request(`https://vercel.local${route}`, {
      headers: { accept: "text/html" },
    }),
    { ASSETS: { fetch: fetchAsset } },
    { waitUntil() {}, passThroughOnException() {} },
  );

  if (!response.ok) {
    throw new Error(`Failed to pre-render ${route}: ${response.status}`);
  }

  const html = await response.text();
  const filePath = htmlPathFor(route);
  await mkdir(dirname(filePath), { recursive: true });
  await writeFile(filePath, html);
}

async function main() {
  await rm(outputRoot, { recursive: true, force: true });
  await mkdir(outputStatic, { recursive: true });
  await cp(distClient, outputStatic, { recursive: true });

  const workerUrl = pathToFileURL(join(root, "dist", "server", "index.js"));
  workerUrl.searchParams.set("vercelStaticBuild", `${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  for (const route of routes) {
    await renderRoute(worker, route);
  }

  await writeFile(
    join(outputRoot, "config.json"),
    JSON.stringify({
      version: 3,
      framework: { version: "vinext-static" },
      routes: [
        {
          src: "/(.*)",
          headers: {
            "x-content-type-options": "nosniff",
            "x-frame-options": "SAMEORIGIN",
          },
          continue: true,
        },
      ],
    }, null, 2),
  );

  console.log(`Vercel output ready at ${outputRoot}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
