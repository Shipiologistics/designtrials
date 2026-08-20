import type { Metadata } from "next";
import { D2Definition, D2FinalCampaign, D2Hero, D2MethodStrip, D2ProblemSplit, D2RootSystem, D2Statement } from "../D2Wireframe";

export const metadata: Metadata = {
  title: "Hair Root Wellness Box | Inruut Design 2",
  description: "Explore the five-part Inruut Hair Root Wellness Box and see how a personalized system is explained before purchase.",
};

export default function DesignTwoPlan() {
  return <main className="d2w-page d2w-plan">
    <D2Hero eyebrow="The Inruut Hair Root Wellness Box" title="A system, not just products." copy="One personalized box brings the internal foundation, scalp environment, growth-cycle review, root-focused ritual and simple guidance into one explainable routine." image="/assets/root-wellness-box.jpg" alt="Illustrative open Hair Root Wellness Box with five coordinated ritual components" note="Illustrative framework · Final contents shown before purchase" cta="Build my personalized box" />
    <D2MethodStrip items={["Foundation", "Scalp", "Cycle", "Root", "Ritual"]} />
    <D2Definition word="system" line="Individually, each element has a role. Together, they become a routine you can understand and maintain." />
    <D2RootSystem />
    <D2ProblemSplit image="/assets/practitioner-conversation.jpg" alt="Hair wellness practitioner reviewing a routine journal with a client" eyebrow="Before anything is selected" title="Your history shapes the box." intro="An Inruut practitioner-led profile organizes the visible concern and the practical context before a recommendation is shown." rows={[
      ["What you notice", "Pattern, shedding, breakage or scalp discomfort"],
      ["When it changed", "Recent, gradual, recurring or long-standing"],
      ["Life context", "Stress, cycle or life-stage signals you choose to share"],
      ["What fits", "Topical, internal, ritual-based or open to all"],
      ["Safety boundary", "Signs that should pause a product recommendation"],
    ]} closing="One profile. One recommended box. Every decision explained." />
    <section className="d2-plan-transparency">
      <div><span>Full transparency</span><h2>You will know what you are buying.</h2></div>
      <div className="d2-plan-transparency-list">
        <article><b>01</b><h3>Exact contents</h3><p className="d2-desktop-supporting-copy">Product names, ingredients or Supplement Facts, quantities and manufacturers are shown before checkout.</p><details className="d2-mobile-inline-disclosure"><summary>View details</summary><p>Product names, ingredients or Supplement Facts, quantities and manufacturers are shown before checkout.</p></details></article>
        <article><b>02</b><h3>Use + cautions</h3><p className="d2-desktop-supporting-copy">Daily and weekly instructions sit beside allergies, contraindications and reasons to stop.</p><details className="d2-mobile-inline-disclosure"><summary>View details</summary><p>Daily and weekly instructions sit beside allergies, contraindications and reasons to stop.</p></details></article>
        <article><b>03</b><h3>Price + delivery</h3><p className="d2-desktop-supporting-copy">USD price, recurring terms if any, U.S. delivery timing, returns and support appear before payment.</p><details className="d2-mobile-inline-disclosure"><summary>View details</summary><p>USD price, recurring terms if any, U.S. delivery timing, returns and support appear before payment.</p></details></article>
        <article><b>04</b><h3>Review point</h3><p className="d2-desktop-supporting-copy">The plan explains when to check routine fit and when an outside licensed medical professional may be more appropriate.</p><details className="d2-mobile-inline-disclosure"><summary>View details</summary><p>The plan explains when to check routine fit and when an outside licensed medical professional may be more appropriate.</p></details></article>
      </div>
    </section>
    <D2Statement quote="The framework can create curiosity. The purchase must create clarity." detail="This local prototype does not yet represent final formulas, claims, prices or a purchasable box. Those details remain visible requirements, not details to hide after payment." />
    <D2FinalCampaign image="/assets/root-wellness-box.jpg" alt="Illustrative Inruut Hair Root Wellness Box" eyebrow="Your box begins with your profile" title="Five layers. One understandable route." copy="Answer seven focused questions and receive one illustrative system recommendation with visible reasoning and a clear safety boundary." />
  </main>;
}
