import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function DesignThreeFooter() {
  return (
    <footer className="d3-footer">
      <div className="d3-footer-lead"><span>Continue with clarity</span><h2>Understand the change.<br />Build the right routine.</h2><Link href="/design-3/quiz">Start my profile <ArrowUpRight size={18} /></Link></div>
      <div className="d3-footer-map">
        <Link className="d3-footer-brand" href="/design-3">INRUUTS</Link>
        <nav aria-label="Design 3 footer navigation"><Link href="/design-3/men">Men</Link><Link href="/design-3/women">Women</Link><Link href="/design-3/science">Science</Link><Link href="/design-3/quiz">Hair profile</Link></nav>
      </div>
      <div className="d3-footer-legal"><p>Educational prototype only. Inruuts does not diagnose, treat, cure, or prevent disease. Product formulas, claims, pricing, and clinical pathways require U.S. regulatory and professional review before launch.</p><span>United States / 2026</span></div>
    </footer>
  );
}
