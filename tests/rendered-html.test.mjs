import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const routes = [
  ["/", "Know what is behind your hair change", "Inruut | Personalized Hair Care"],
  ["/men", "Understand the pattern before you choose the plan", "Men's Hair Loss Guide | Inruut"],
  ["/women", "Your hair change deserves more than one explanation", "Women's Hair Loss Guide | Inruut"],
  ["/science", "Hair biology, explained without turning it into a sales trick", "Hair Science | Inruut"],
  ["/quiz", "Seven useful questions", "Hair Quiz | Inruut"],
  ["/design-2", "Know what is behind your hair change", "Inruut Design 2 | Personalized Hair Care"],
  ["/design-2/men", "Understand the pattern before you choose the plan", "Men's Hair Loss Guide | Inruut Design 2"],
  ["/design-2/women", "Your hair change deserves more than one explanation", "Women's Hair Loss Guide | Inruut Design 2"],
  ["/design-2/science", "Hair biology, explained without turning it into a sales trick", "Hair Science | Inruut Design 2"],
  ["/design-2/quiz", "Seven useful questions", "Hair Quiz | Inruut Design 2"],
  ["/design-2/plan", "A system, not a pill", "The Inruut Wellness Box | Design 2"],
  ["/design-2/food-guide", "The Inruut Food Guide", "The Inruut Food Guide | Design 2"],
  ["/design-3", "Know what is behind your hair change", "Inruut Design 3 | Personalized Hair Care"],
  ["/design-3/men", "Understand the pattern before you choose the plan", "Men's Hair Loss Guide | Inruut Design 3"],
  ["/design-3/women", "Your hair change deserves more than one explanation", "Women's Hair Loss Guide | Inruut Design 3"],
  ["/design-3/science", "Hair biology, explained without turning it into a sales trick", "Hair Science | Inruut Design 3"],
  ["/design-3/quiz", "Seven useful questions", "Hair Quiz | Inruut Design 3"],
];

for (const [pathname, heading, title] of routes) {
  test(`server-renders ${pathname}`, async () => {
    const response = await render(pathname);
    assert.equal(response.status, 200);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

    const html = await response.text();
    const normalizedHtml = html.replaceAll("&#x27;", "'");
    assert.match(normalizedHtml, new RegExp(`<title>${escapeRegExp(title)}<\\/title>`, "i"));
    assert.match(normalizedHtml, new RegExp(escapeRegExp(heading), "i"));
    assert.doesNotMatch(html, /codex-preview|Building your site|react-loading-skeleton/i);
  });
}

test("includes generated editorial assets and the U.S.-only brief", async () => {
  const assets = [
    "home-hero.jpg", "men-hero.jpg", "women-hero.jpg", "science-hero.jpg", "quiz-hero.jpg",
    "case-men-simulation.jpg", "case-women-simulation.jpg", "routine-application.jpg",
    "product-scalp-tool.jpg", "personalized-box.jpg", "root-wellness-box.jpg", "practitioner-conversation.jpg",
    "science-baldness-concern.png", "science-genetics-family.png", "science-research-table.png",
    "science-reversible-spectrum.png", "science-transplant-care.png",
    "reviews/men-month-0.png", "reviews/men-month-3.png", "reviews/men-month-6.png", "reviews/men-month-12.png",
    "reviews/women-month-0.png", "reviews/women-month-3.png", "reviews/women-month-6.png", "reviews/women-month-12.png",
    "reviews/practitioner-progress-review.jpg", "reviews/progress-photo-setup.png", "reviews/quality-preparation.png",
    "food-guide-hero.jpg", "food-guide-plate.jpg", "food-guide-water.jpg",
  ];
  await Promise.all(assets.map((name) => access(new URL(`../public/assets/${name}`, import.meta.url))));
  await access(new URL("../public/og-inruut.png", import.meta.url));
  await access(new URL("../vercel.json", import.meta.url));
  await access(new URL("../scripts/build-vercel-static.mjs", import.meta.url));

  const readme = await readFile(new URL("../README.md", import.meta.url), "utf8");
  assert.match(readme, /Launch market:\*\* United States only/);
  assert.match(readme, /Inruut is a personalized Hair Root Wellness brand/);
  assert.match(readme, /U\.S\. English, USD pricing/);
  assert.match(readme, /Vercel build command: `npm run build:vercel`/);
  assert.match(readme, /Vercel preview deployment may be used for review/);
  assert.match(readme, /Traya homepage is the primary structural design reference/);
  assert.match(readme, /Alitura homepage is the primary design-language reference/);
  assert.match(readme, /\/design-2\/men/);
  assert.match(readme, /\/design-3\/men/);
  assert.doesNotMatch(readme, /Man Matters hair assessment|NHS: hair loss/);
});
