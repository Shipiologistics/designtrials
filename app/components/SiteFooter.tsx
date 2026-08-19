import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <Link className="wordmark wordmark-light" href="/">INRUUTS<span>.</span></Link>
          <p>Personalized cosmetic hair care built for U.S. routines.</p>
        </div>
        <div className="footer-nav">
          <Link href="/men">Men</Link><Link href="/women">Women</Link><Link href="/science">Science</Link><Link href="/quiz">Hair quiz</Link>
        </div>
        <Link className="footer-cta" href="/quiz">Build my plan <ArrowUpRight size={18} /></Link>
      </div>
      <div className="footer-bottom">
        <p>Educational prototype only. Inruuts does not diagnose, treat, cure, or prevent disease. Product formulas, claims, pricing, and clinical pathways require U.S. regulatory and professional review before launch.</p>
        <span>© 2026 Inruuts</span>
      </div>
    </footer>
  );
}
