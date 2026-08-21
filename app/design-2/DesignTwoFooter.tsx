import { ArrowUpRight } from "lucide-react";

export function DesignTwoFooter() {
  return (
    <footer className="d2-footer">
      <div className="d2-footer-brand">
        <a className="d2-wordmark d2-wordmark-footer" href="/design-2">
          <span>Inruut</span><small>Hair Root Wellness</small>
        </a>
        <h2>Understand the change.<br />Build one clear system.</h2>
      </div>
      <div className="d2-footer-links">
        <div><span>Explore</span><a href="/design-2/men">Men</a><a href="/design-2/women">Women</a><a href="/design-2/science">The science</a></div>
        <div><span>Your system</span><a href="/design-2/plan">The Inruut Wellness Box</a><a href="/design-2/food-guide">The Food Guide</a><a href="/design-2/quiz">Take the hair quiz</a></div>
        <a className="d2-footer-cta" href="/design-2/quiz">Build my plan <ArrowUpRight size={18} /></a>
      </div>
      <div className="d2-footer-legal">
        <p>Educational prototype only. Inruut practitioners do not diagnose, treat, cure, or prevent disease. Product formulas, claims, pricing and referral pathways require U.S. regulatory and qualified professional review before launch.</p>
        <span>© 2026 Inruut</span>
      </div>
    </footer>
  );
}
