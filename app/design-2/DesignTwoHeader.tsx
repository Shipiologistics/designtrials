import Link from "next/link";
import { CircleHelp, Menu, Search, UserRound } from "lucide-react";

const links = [
  ["Men", "/design-2/men"],
  ["Women", "/design-2/women"],
  ["The science", "/design-2/science"],
  ["The box", "/design-2/plan"],
  ["Food guide", "/design-2/food-guide"],
];

export function DesignTwoHeader() {
  return (
    <>
      <div className="d2-announcement">Understand the change. Support the root. Build a routine that fits.</div>
      <header className="d2-header">
        <Link className="d2-icon-link d2-search" href="/design-2/science" aria-label="Search the science"><Search size={19} /></Link>
        <nav className="d2-nav d2-nav-left" aria-label="Design 2 primary navigation">
          <Link href="/design-2/men">Men</Link>
          <Link href="/design-2/women">Women</Link>
        </nav>
        <Link className="d2-wordmark" href="/design-2" aria-label="Inruut Design 2 home">
          <span>Inruut</span><small>Hair Root Wellness</small>
        </Link>
        <nav className="d2-nav d2-nav-right" aria-label="Design 2 secondary navigation">
          <Link href="/design-2/science">The science</Link>
          <Link href="/design-2/plan">The box</Link>
          <Link href="/design-2/food-guide">Food guide</Link>
          <Link href="/design-2/quiz">Hair profile</Link>
        </nav>
        <div className="d2-actions">
          <Link className="d2-icon-link" href="/design-2/science#red-flags" aria-label="Review care guidance"><CircleHelp size={19} /></Link>
          <Link className="d2-icon-link" href="/design-2/quiz" aria-label="Open hair profile"><UserRound size={19} /></Link>
          <details className="d2-mobile-nav">
            <summary className="d2-icon-link" aria-label="Open navigation"><Menu size={20} /></summary>
            <div className="d2-mobile-panel">
              {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
              <Link href="/design-2/quiz">Take the hair quiz</Link>
            </div>
          </details>
        </div>
      </header>
    </>
  );
}
