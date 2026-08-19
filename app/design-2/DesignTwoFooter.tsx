import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function DesignTwoFooter() {
  return (
    <footer className="d2-footer">
      <div className="d2-footer-brand">
        <Link className="d2-wordmark d2-wordmark-footer" href="/design-2">
          <span>Inruuts</span><small>Hair Root Wellness</small>
        </Link>
        <h2>Understand the change.<br />Build one clear system.</h2>
      </div>
      <div className="d2-footer-links">
        <div><span>Explore</span><Link href="/design-2/men">Men</Link><Link href="/design-2/women">Women</Link><Link href="/design-2/science">The science</Link></div>
        <div><span>Your system</span><Link href="/design-2/plan">The Hair Root Wellness Box</Link><Link href="/design-2/quiz">Take the hair quiz</Link><Link href="/design-2/science#red-flags">Referral guidance</Link></div>
        <Link className="d2-footer-cta" href="/design-2/quiz">Build my plan <ArrowUpRight size={18} /></Link>
      </div>
      <div className="d2-footer-legal">
        <p>Educational prototype only. Inruuts practitioners do not diagnose, treat, cure, or prevent disease. Product formulas, claims, pricing and referral pathways require U.S. regulatory and qualified professional review before launch.</p>
        <span>© 2026 Inruuts</span>
      </div>
    </footer>
  );
}
