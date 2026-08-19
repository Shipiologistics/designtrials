import Link from "next/link";
import { ArrowRight, CircleHelp, Menu } from "lucide-react";

const links = [
  ["Men", "/men"],
  ["Women", "/women"],
  ["The science", "/science"],
];

export function SiteHeader() {
  return (
    <>
      <div className="utility"><span>Your hair profile, care plan, and routine in one place.</span><Link href="/quiz">Start free profile</Link></div>
      <header className="header">
        <Link className="wordmark" href="/" aria-label="Inruuts home">INRUUTS<span>.</span></Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
        <div className="header-actions">
          <Link className="quiz-link" href="/quiz">Take the hair quiz <ArrowRight size={16} /></Link>
          <Link className="icon-control" href="/science#red-flags" aria-label="Review hair care guidance"><CircleHelp size={20} /></Link>
          <details className="mobile-nav">
            <summary className="icon-control" aria-label="Open navigation"><Menu size={21} /></summary>
            <div className="mobile-menu-panel">
              {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
              <Link href="/quiz">Take the hair quiz</Link>
            </div>
          </details>
        </div>
      </header>
    </>
  );
}
