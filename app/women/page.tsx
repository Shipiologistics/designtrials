import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Baby, CircleAlert, HeartPulse, Scissors, ShieldCheck } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { PatternExplorer } from "../components/PatternExplorer";
import { ProgressSimulation } from "../components/ProgressSimulation";
import { ThemeLink as Link } from "../components/ThemeLink";

export const metadata: Metadata = { title: "Women's Hair Loss Guide | Inruut", description: "Understand widening parts, shedding, breakage, life-stage factors and realistic hair-care routes." };

const patterns = [
  { label: "Widening part", title: "Density changing through the center", copy: "Female pattern hair loss often appears as gradual thinning over the top and a widening part while the frontal hairline may remain relatively preserved.", image: "/assets/women-part.jpg", alt: "Widening center part with visible scalp" },
  { label: "Shedding", title: "More full-length hairs releasing", copy: "A noticeable increase in shed hairs can follow illness, major stress, childbirth, weight change or medication changes. Timing and trigger history are important.", image: "/assets/women-shedding.jpg", alt: "Woman examining shed hairs in a brush" },
  { label: "Breakage", title: "Fibers snapping along the length", copy: "Bleach, heat, friction, tension and dryness can break strands. Breakage needs fiber protection, not a claim that a topical product regrows a follicle.", image: "/assets/women-breakage.jpg", alt: "Close view of breakage in coily hair" },
];

export default function WomenPage() {
  return <main className="women-page">
    <PageHero eyebrow="Women's hair loss" title="Your hair change deserves more than one explanation." copy="A widening part, postpartum shedding, breakage, traction and sudden patches are different stories. Start by separating what you see, when it began and how your scalp feels." image="/assets/women-hero.jpg" alt="A woman examining her center part in a mirror" note="Specific · Respectful · No one-cause assumptions" theme="light" />

    <section className="section"><div className="section-title left"><p className="kicker">Concern explorer</p><h2>Loss, shedding, or breakage?</h2><p>Those words are often used interchangeably, but the distinction changes what questions and care make sense.</p></div><PatternExplorer items={patterns} /></section>

    <section className="life-stage-band">
      <div className="section-title left"><p className="kicker">Life stage matters</p><h2>Hormonal change can shift the hair cycle, but it is not the only factor.</h2></div>
      <div className="life-stage-grid">
        <article><Baby size={24} /><span>Postpartum</span><h3>A delayed shed after birth</h3><p>Hormonal changes can move more hairs into a resting phase. Shedding often becomes noticeable months after delivery; persistent or severe changes deserve clinical review.</p></article>
        <article><HeartPulse size={24} /><span>Perimenopause + menopause</span><h3>Density can change with age and hormones</h3><p>Pattern thinning, aging, medications, thyroid disease and iron status can overlap. A single “hormone” answer may miss the real picture.</p></article>
        <article><Scissors size={24} /><span>Styling + processing</span><h3>Tension and chemistry affect fibers</h3><p>Tight styles can cause traction; bleach, heat and friction can drive breakage. Scarring or a receding edge needs prompt assessment.</p></article>
      </div>
    </section>

    <section className="split-band split-band-coral"><div className="split-media"><Image src="/assets/postpartum-profile.jpg" alt="A mother calmly examining shed hair after brushing" fill sizes="(max-width: 800px) 100vw, 50vw" /></div><div className="split-copy"><p className="kicker">Postpartum profile</p><h2>The trigger can happen months before the shedding.</h2><p>Hair-cycle shifts are delayed. That is why a useful assessment asks about birth, illness, surgery, major stress and weight change over recent months rather than only what happened this week.</p><ul className="check-list"><li><ShieldCheck size={17} /> Track onset and intensity</li><li><ShieldCheck size={17} /> Avoid panic-supplementing</li><li><ShieldCheck size={17} /> Use gentle fiber care</li><li><ShieldCheck size={17} /> Discuss persistent or severe loss with a clinician</li></ul></div></section>

    <section className="section compare-section"><div className="section-title"><p className="kicker">Know what you are looking at</p><h2>Shedding and breakage leave different clues.</h2></div><div className="compare-visual"><div className="compare-image"><Image src="/assets/shedding-breakage.jpg" alt="Illustration comparing a naturally shed hair, a broken fiber and a growing follicle" fill sizes="(max-width: 800px) 100vw, 58vw" /></div><div className="compare-copy"><div><span>01</span><h3>Shedding</h3><p>Full-length strands release from the follicle as part of the cycle. A large synchronized shift can create noticeable diffuse shedding.</p></div><div><span>02</span><h3>Breakage</h3><p>Fibers snap along the length. Short pieces, rough ends and uneven length point toward mechanical or chemical damage.</p></div><div><span>03</span><h3>Follicle loss</h3><p>Patterned miniaturization, autoimmune loss and scarring conditions involve the follicle and require different evaluation.</p></div></div></div></section>

    <section className="section simulation-section" id="progress"><div className="section-title left"><p className="kicker">Illustrative journey</p><h2>A widening part changes gradually, and response is individual.</h2><p>The slider shows a modest generated simulation, not a real customer and not a promise of regrowth.</p></div><ProgressSimulation image="/assets/case-women-simulation.jpg" subject="women" /></section>

    <section className="split-band split-band-blue"><div className="split-copy"><p className="kicker">Nutrition without the hype</p><h2>Hair needs nutrients. That does not mean everyone needs a supplement.</h2><p>Protein and micronutrients support normal biology, but hair loss can have many causes. Iron, vitamin D, thyroid or other testing belongs with a clinician when history and symptoms suggest it. High-dose biotin can interfere with some laboratory tests.</p><Link className="secondary-button" href="/science#nutrition">Explore nutrition + evidence <ArrowRight size={17} /></Link></div><div className="split-media"><Image src="/assets/nutrition-hair.jpg" alt="Protein-rich foods, greens, beans, eggs, berries and nuts" fill sizes="(max-width: 800px) 100vw, 50vw" /></div></section>

    <section className="routine-band"><div className="routine-copy"><p className="kicker">Example personalized routine</p><h2>A fiber-first plan for breakage + a dry scalp.</h2><ul><li><ShieldCheck size={18} /><span><b>Gentle cleanser</b> paced to comfort and wash frequency</span></li><li><ShieldCheck size={18} /><span><b>Conditioner + mask</b> to improve slip and reduce snapping</span></li><li><ShieldCheck size={18} /><span><b>Scalp step</b> only when it fits the concern</span></li></ul><p className="disclosure">Illustrative cosmetic routine. Pregnancy, breastfeeding, medications and medical conditions can change product suitability.</p><Link className="primary-button" href="/quiz">Build my profile <ArrowRight size={17} /></Link></div><div className="routine-image"><Image src="/assets/bundle-women.jpg" alt="Illustrative women's personalized hair-care bundle" fill sizes="(max-width: 800px) 100vw, 50vw" /></div></section>

    <section className="red-flag-band"><CircleAlert size={30} /><div><p className="kicker">Professional-care signs</p><h2>Sudden patches, pain, burning, inflammation, scaling, scarring or eyebrow loss.</h2><p>Do not cover these signs with a generic growth bundle. A dermatologist can examine the scalp and determine whether medical testing or treatment is appropriate.</p></div><Link className="secondary-button" href="/science#red-flags">Review care guidance <ArrowRight size={17} /></Link></section>
  </main>;
}
