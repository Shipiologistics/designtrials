import type { ReactNode } from "react";
import { DesignPathProvider } from "../components/ThemeLink";
import { DesignThreeFooter } from "./DesignThreeFooter";
import { DesignThreeHeader } from "./DesignThreeHeader";

export default function DesignThreeLayout({ children }: { children: ReactNode }) {
  return (
    <DesignPathProvider basePath="/design-3">
      <div className="design-three">
        <DesignThreeHeader />
        {children}
        <DesignThreeFooter />
      </div>
    </DesignPathProvider>
  );
}
