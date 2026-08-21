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
        <a className="d2-icon-link d2-search" href="/design-2/science" aria-label="Search the science"><Search size={19} /></a>
        <nav className="d2-nav d2-nav-left" aria-label="Design 2 primary navigation">
          <a href="/design-2/men">Men</a>
          <a href="/design-2/women">Women</a>
        </nav>
        <a className="d2-wordmark" href="/design-2" aria-label="Inruut Design 2 home">
          <span>Inruut</span><small>Hair Root Wellness</small>
        </a>
        <nav className="d2-nav d2-nav-right" aria-label="Design 2 secondary navigation">
          <a href="/design-2/science">The science</a>
          <a href="/design-2/plan">The box</a>
          <a href="/design-2/food-guide">Food guide</a>
          <a href="/design-2/quiz">Hair profile</a>
        </nav>
        <div className="d2-actions">
          <a className="d2-icon-link" href="/design-2/science#red-flags" aria-label="Review care guidance"><CircleHelp size={19} /></a>
          <a className="d2-icon-link" href="/design-2/quiz" aria-label="Open hair profile"><UserRound size={19} /></a>
          <details className="d2-mobile-nav">
            <summary className="d2-icon-link" aria-label="Open navigation"><Menu size={20} /></summary>
            <div className="d2-mobile-panel">
              {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
              <a href="/design-2/quiz">Take the hair quiz</a>
            </div>
          </details>
        </div>
      </header>
    </>
  );
}
