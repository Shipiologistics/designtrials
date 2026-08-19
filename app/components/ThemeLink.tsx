"use client";

import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { createContext, useContext } from "react";

const DesignPathContext = createContext("");

export function DesignPathProvider({ basePath, children }: { basePath: string; children: ReactNode }) {
  return <DesignPathContext.Provider value={basePath}>{children}</DesignPathContext.Provider>;
}

export function ThemeLink({ href, ...props }: ComponentProps<typeof Link>) {
  const basePath = useContext(DesignPathContext);
  let routedHref = href;

  if (basePath && typeof href === "string" && href.startsWith("/") && !href.startsWith(basePath)) {
    routedHref = href === "/" ? basePath : `${basePath}${href}`;
  }

  return <Link href={routedHref} {...props} />;
}
