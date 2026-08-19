import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, CircleAlert, ClipboardCheck, PackageCheck, ScanSearch } from "lucide-react";
import { HairCycleExplorer } from "./components/HairCycleExplorer";
import { JourneyTimeline, ProfileStageExplorer, RootCauseExplorer } from "./components/HomeExplainers";
import { PageHero } from "./components/PageHero";
import { ThemeLink as Link } from "./components/ThemeLink";

export const metadata: Metadata = { title: "Inruuts | Personalized Hair Care", description: "Understand your hair pattern and build a transparent U.S. hair-care plan." };

const products = [
  ["Cleanse", "Scalp Balance Cleanser", "/assets/product-cleanser.jpg", "Oil, buildup and wash frequency shape the cleanser format."],
  ["Target", "Daily Scalp Serum", "/assets/product-serum.jpg", "A direct-to-scalp step chosen only when it fits the concern."],
  ["Protect", "Fiber Support Conditioner", "/assets/product-conditioner.jpg", "Slip and conditioning help reduce avoidable mechanical breakage."],
  ["Repair", "Weekly Hair Mask", "/assets/product-mask.jpg", "Extra conditioning for dry, processed or breakage-prone lengths."],
  ["Review", "Nutrient Support", "/assets/product-vitamins.jpg", "Diet, medications and possible deficiencies matter before supplements."],
  ["Optional", "Scalp Massage Tool", "/assets/product-scalp-tool.jpg", "A gentle application aid, never a substitute for medical treatment."],
];

export default function Home() {
  return (
    <main className="home-page">
      <PageHero eyebrow="Science-led personalized hair care" title="Know what is behind your hair change." copy="Inruuts looks at pattern, timing, scalp, life stage and routine before building a plan, because thinning, shedding and breakage are not the same problem." image="/assets/home-hero.jpg" alt="A diverse group of adults representing different hair textures" note="Education first · No instant-regrowth promises" stats={[["7", "Guided questions"], ["5", "Profile inputs"], ["0", "Email gates"]]} />

      <section className="reference-section story-section">
        <div className="reference-heading"><div><p className="kicker">Pattern library</p><h2>Three concerns that should not get the same answer</h2></div><Link href="/quiz">Find my route <ArrowRight size={17} /></Link></div>
        <div className="story-grid">
          <article><div className="story-image"><Image src="/assets/case-men-simulation.jpg" alt="Generated educational sequence showing a men's crown-density scenario" fill sizes="(max-width: 760px) 86vw, 32vw" /></div><span>Men / gradual pattern</span><h3>Crown thinning over time</h3><p>Start with pattern stage, progression and clinical options.</p></article>
          <article><div className="story-image"><Image src="/assets/case-women-simulation.jpg" alt="Generated educational sequence showing a women's part-density scenario" fill sizes="(max-width: 760px) 86vw, 32vw" /></div><span>Women / density change</span><h3>A part that looks wider</h3><p>Separate pattern loss from shedding, life-stage and health factors.</p></article>
          <article><div className="story-image"><Image src="/assets/routine-application.jpg" alt="Careful application of scalp serum along a hair part" fill sizes="(max-width: 760px) 86vw, 32vw" /></div><span>Routine / consistency</span><h3>A plan that fits real life</h3><p>Choose fewer justified steps and make every one understandable.</p></article>
        </div>
        <p className="simulation-label">Generated educational visuals. They are not customer testimonials or guaranteed outcomes.</p>
      </section>

      <section className="root-section">
        <div className="reference-heading"><div><p className="kicker">Root-cause map</p><h2>Hair health is shaped by more than the product shelf</h2></div><p>Choose a contributor to see the biology and the questions it changes.</p></div>
        <RootCauseExplorer />
      </section>

      <section className="research-panel">
        <div className="research-copy"><p className="kicker">Evidence before claims</p><h2>Good personalization begins by admitting what the quiz cannot know.</h2><p>Pattern, speed and symptoms can guide the next question. They cannot replace a scalp examination, medical history or laboratory testing when those are needed.</p><div className="research-points"><span><b>Pattern</b> Where the change appears</span><span><b>Timing</b> Gradual, sudden or delayed</span><span><b>Boundary</b> Cosmetic plan or clinician</span></div><Link className="outline-link" href="/science">Read the science <ArrowRight size={16} /></Link></div>
        <div className="research-visual"><Image src="/assets/follicle-healthy.jpg" alt="Educational illustration of a healthy growing hair follicle" fill sizes="(max-width: 760px) 100vw, 50vw" /></div>
      </section>

      <section className="reference-section care-model-section">
        <div className="reference-heading"><div><p className="kicker">Whole-routine approach</p><h2>Hair care requires more than one bottle</h2></div></div>
        <div className="care-model-grid">
          <article><div><span>01</span><h3>Personalized products</h3><p>Cosmetic categories matched to scalp, fiber and routine needs.</p></div><Image src="/assets/personalized-box.jpg" alt="Open Inruuts personalized hair-care kit" fill sizes="(max-width: 760px) 100vw, 31vw" /></article>
          <article><div><span>02</span><h3>Nutrition context</h3><p>Food first, testing when relevant, and no automatic supplement stack.</p></div><Image src="/assets/nutrition-hair.jpg" alt="Protein-rich foods, greens, beans and berries" fill sizes="(max-width: 760px) 100vw, 31vw" /></article>
          <article><div><span>03</span><h3>Practitioner boundary</h3><p>Warning signs pause the product route and point to outside licensed care.</p></div><Image src="/assets/practitioner-conversation.jpg" alt="Hair wellness practitioner reviewing a routine journal with a client" fill sizes="(max-width: 760px) 100vw, 31vw" /></article>
        </div>
      </section>

      <section className="reference-section stage-section">
        <div className="reference-heading"><div><p className="kicker">Honest expectations</p><h2>What are you actually seeing?</h2></div><p>Switch between men and women, then compare the concern routes. These are orientation profiles, not diagnoses.</p></div>
        <ProfileStageExplorer />
      </section>

      <section className="timeline-section"><JourneyTimeline /></section>

      <section className="reference-section getting-started">
        <div className="reference-heading"><div><p className="kicker">How to get started</p><h2>Take the first useful step toward healthier hair habits</h2></div></div>
        <div className="step-grid">
          <article><span>Step 1</span><ScanSearch size={34} /><h3>Take the hair profile</h3><p>Seven questions establish pattern, timing, scalp, routine and your main goal.</p></article>
          <article><span>Step 2</span><ClipboardCheck size={34} /><h3>See the reasoning</h3><p>Review what shaped the route, what was excluded and where the limits are.</p></article>
          <article><span>Step 3</span><PackageCheck size={34} /><h3>Build the routine</h3><p>Choose a focused plan in U.S. dollars with clear cadence and no hidden bundle logic.</p></article>
        </div>
      </section>

      <section className="science-inside-section">
        <div className="reference-heading"><div><p className="kicker">It is all happening inside</p><h2>Follow one follicle through the growth cycle</h2></div><p>Use the phase controls to understand why shedding today may reflect biology that shifted months earlier.</p></div>
        <HairCycleExplorer />
      </section>

      <section className="product-band">
        <div className="reference-heading light"><div><p className="kicker">Plan building blocks</p><h2>Every product has to earn its place</h2></div><p>Illustrative U.S. product concepts. Formulas and claims require review before launch.</p></div>
        <div className="product-scroll">
          {products.map(([tag, name, image, copy]) => <article key={name}><div className="product-image"><Image src={image} alt={name} fill sizes="300px" /></div><span>{tag}</span><h3>{name}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="plan-cta">
        <div><p className="kicker">Your plan, explained</p><h2>See what fits. See what does not. Know why.</h2><p>The profile is free, takes about three minutes and does not ask for contact details.</p><Link className="primary-button" href="/quiz">Take the hair quiz <ArrowRight size={18} /></Link></div>
        <div className="plan-cta-image"><Image src="/assets/bundle-men.jpg" alt="Inruuts personalized hair-care routine" fill sizes="(max-width: 760px) 100vw, 50vw" /></div>
      </section>

      <section className="reference-section faq-section">
        <div className="reference-heading"><div><p className="kicker">Questions, answered</p><h2>What responsible personalized care should make clear</h2></div></div>
        <div className="faq-list">
          <details open><summary>Can a quiz diagnose hair loss?</summary><p>No. It can organize reported patterns and identify reasons to seek professional care. Diagnosis can require a physical exam, history and testing.</p></details>
          <details><summary>Does every plan include vitamins?</summary><p>No. A supplement is not automatically useful, and high doses can be unnecessary or interfere with some laboratory tests.</p></details>
          <details><summary>Why are results shown as simulations?</summary><p>They explain time and modest change without presenting invented people as customers. They are not promises or clinical evidence.</p></details>
          <details><summary>When should I see a dermatologist?</summary><p>Sudden patches, pain, inflammation, heavy scaling, scarring, eyebrow loss or rapid progression should move the next step away from a cosmetic bundle.</p></details>
        </div>
      </section>

      <section className="safety-strip"><CircleAlert size={26} /><div><b>Some changes need a dermatologist first.</b><p>Sudden shedding, round patches, pain, inflammation, scaling, scarring or eyebrow loss can require professional assessment.</p></div><Link href="/science#red-flags">See the red flags <ArrowRight size={17} /></Link></section>
    </main>
  );
}
