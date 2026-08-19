import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, CircleAlert, Dna, Gauge, Repeat2, ShieldCheck } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { PatternExplorer } from "../components/PatternExplorer";
import { ProgressSimulation } from "../components/ProgressSimulation";
import { ThemeLink as Link } from "../components/ThemeLink";

export const metadata: Metadata = { title: "Men's Hair Loss Guide | Inruuts", description: "Understand common male hair-loss patterns, DHT, realistic care options and when to see a dermatologist." };

const patterns = [
  { label: "Temples", title: "A hairline that slowly moves back", copy: "Male pattern hair loss often begins with recession at the temples. A gradual, symmetric change differs from a sudden patch or inflamed edge.", image: "/assets/men-temples.jpg", alt: "Mild symmetric temple recession" },
  { label: "Crown", title: "Thinning centered at the vertex", copy: "Crown thinning can expand gradually as genetically susceptible follicles produce finer, shorter hairs over repeated cycles.", image: "/assets/men-crown.jpg", alt: "Moderate thinning at the crown" },
  { label: "Diffuse", title: "Density changing across the top", copy: "Diffuse thinning can occur in pattern loss, but sudden all-over shedding may also follow illness, stress, weight change or medication changes.", image: "/assets/men-diffuse.jpg", alt: "Diffuse thinning across the top of the scalp" },
];

export default function MenPage() {
  return <main className="men-page">
    <PageHero eyebrow="Men's hair loss" title="Understand the pattern before you choose the plan." copy="Hairline recession, crown thinning, shedding and patchy loss are not interchangeable. Learn what each pattern can mean and where personalized care begins." image="/assets/men-hero.jpg" alt="A man calmly checking his hairline in a mirror" note="Private · Practical · No diagnosis" />

    <section className="section"><div className="section-title left"><p className="kicker">Pattern explorer</p><h2>What are you seeing?</h2><p>Use the views below as orientation, not self-diagnosis. Location, speed, symptoms and medical history still matter.</p></div><PatternExplorer items={patterns} /></section>

    <section className="dark-band" id="dht">
      <div className="dark-copy"><p className="kicker">DHT, explained</p><h2>DHT does not simply “clog” the scalp.</h2><p>Dihydrotestosterone is made when the enzyme 5-alpha-reductase converts testosterone. In genetically susceptible scalp follicles, DHT binds androgen receptors and contributes to progressive miniaturization: the growth phase shortens and new fibers become finer and shorter.</p><div className="fact-row"><div><Dna size={22} /><b>Genes set susceptibility</b><span>Not every follicle responds the same way.</span></div><div><Repeat2 size={22} /><b>Cycles become shorter</b><span>Terminal hairs can shift toward finer fibers.</span></div><div><Gauge size={22} /><b>Progression varies</b><span>Age, stage and consistency influence outcomes.</span></div></div><Link className="primary-button" href="/science#dht">Explore the mechanism <ArrowRight size={17} /></Link></div>
      <div className="dark-media"><Image src="/assets/dht-mechanism.jpg" alt="Illustration of DHT interaction and follicle miniaturization" fill sizes="(max-width: 800px) 100vw, 50vw" /></div>
    </section>

    <section className="section cause-section"><div className="section-title"><p className="kicker">More than one cause</p><h2>Five routes that can look like “hair fall.”</h2></div><div className="cause-grid">
      <article><span>01</span><h3>Androgenetic alopecia</h3><p>Gradual patterned thinning influenced by genes and androgen sensitivity. Commonly affects temples, crown and top.</p></article>
      <article><span>02</span><h3>Telogen effluvium</h3><p>More follicles enter rest after illness, surgery, rapid weight change, major stress or other triggers, causing diffuse shedding months later.</p></article>
      <article><span>03</span><h3>Alopecia areata</h3><p>An autoimmune condition often presenting as sudden smooth patches. It belongs with a clinician, not a cosmetic quiz.</p></article>
      <article><span>04</span><h3>Scalp disease</h3><p>Inflammation, infection, scaling or scarring can contribute to loss and may need targeted medical treatment.</p></article>
      <article><span>05</span><h3>Breakage + traction</h3><p>Fiber damage or repeated pulling can reduce visible density without the same follicle process as pattern loss.</p></article>
    </div></section>

    <section className="split-band split-band-blue"><div className="split-media"><Image src="/assets/follicle-miniaturized.jpg" alt="Illustration of a miniaturized hair follicle and thin hair shaft" fill sizes="(max-width: 800px) 100vw, 50vw" /></div><div className="split-copy"><p className="kicker">What may help</p><h2>Match the tool to the cause.</h2><div className="evidence-list"><div><b>Cosmetic support</b><p>Gentle cleansing, conditioning and scalp comfort can support the environment and reduce breakage. They do not change genetics.</p></div><div><b>OTC medication</b><p>Topical minoxidil is an FDA-approved drug option for certain pattern hair loss. Label directions, side effects and suitability matter.</p></div><div><b>Prescription care</b><p>Finasteride is FDA approved for male pattern hair loss in men and requires a clinician discussion about benefits, risks and ongoing use.</p></div><div><b>Nutrition</b><p>Correcting a real deficiency can matter. More biotin or iron is not automatically better and supplements can interact with testing or medications.</p></div></div></div></section>

    <section className="section simulation-section" id="progress"><div className="section-title left"><p className="kicker">Illustrative journey</p><h2>Hair timelines are measured in months, not mornings.</h2><p>Use the slider to view a modest simulated density journey. It is not a testimonial and does not predict an individual result.</p></div><ProgressSimulation image="/assets/case-men-simulation.jpg" subject="men" /></section>

    <section className="routine-band"><div className="routine-copy"><p className="kicker">Example personalized routine</p><h2>A focused plan for gradual crown thinning + an oily scalp.</h2><ul><li><ShieldCheck size={18} /><span><b>Cleanser</b> matched to oil and wash frequency</span></li><li><ShieldCheck size={18} /><span><b>Scalp serum</b> for a simple direct-application step</span></li><li><ShieldCheck size={18} /><span><b>Conditioner</b> kept on lengths to reduce breakage</span></li></ul><p className="disclosure">Illustrative cosmetic routine. Prescription and OTC treatment options are separate and require appropriate review.</p><Link className="primary-button" href="/quiz">Build my profile <ArrowRight size={17} /></Link></div><div className="routine-image"><Image src="/assets/bundle-men.jpg" alt="Illustrative men's personalized hair-care bundle" fill sizes="(max-width: 800px) 100vw, 50vw" /></div></section>

    <section className="red-flag-band"><CircleAlert size={30} /><div><p className="kicker">Do not wait on these signs</p><h2>Sudden patches, pain, inflammation, scarring, heavy scaling or eyebrow loss.</h2><p>These changes can point beyond routine pattern loss. A dermatologist can examine the scalp and decide whether testing or prescription care is needed.</p></div><Link className="secondary-button" href="/science#red-flags">Review care guidance <ArrowRight size={17} /></Link></section>
  </main>;
}
