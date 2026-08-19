import Link from "next/link";
import { ArrowUpRight, Menu } from "lucide-react";

const links = [
  ["Men", "/design-3/men"],
  ["Women", "/design-3/women"],
  ["Science", "/design-3/science"],
];

export function DesignThreeHeader() {
  return (
    <>
      <div className="d3-notice"><span>Inruuts field notes</span><p>Personalized hair care for the United States</p><Link href="/design-3/quiz">Start the profile <ArrowUpRight size={14} /></Link></div>
      <header className="d3-header">
        <Link className="d3-brand" href="/design-3" aria-label="Inruuts Design 3 home"><b>INRUUTS</b><span>03</span></Link>
        <nav className="d3-nav" aria-label="Design 3 primary navigation">
          {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
        <Link className="d3-header-cta" href="/design-3/quiz">Build my plan <ArrowUpRight size={16} /></Link>
        <details className="d3-mobile-nav">
          <summary aria-label="Open navigation"><Menu size={21} /></summary>
          <div>{links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}<Link href="/design-3/quiz">Take the hair quiz</Link></div>
        </details>
      </header>
    </>
  );
}
