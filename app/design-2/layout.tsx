import type { ReactNode } from "react";
import { DesignPathProvider } from "../components/ThemeLink";
import { DesignTwoFooter } from "./DesignTwoFooter";
import { DesignTwoHeader } from "./DesignTwoHeader";

export default function DesignTwoLayout({ children }: { children: ReactNode }) {
  return (
    <DesignPathProvider basePath="/design-2">
      <div className="design-two">
        <DesignTwoHeader />
        {children}
        <DesignTwoFooter />
      </div>
    </DesignPathProvider>
  );
}
