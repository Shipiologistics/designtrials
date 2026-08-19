import type { Metadata } from "next";
import { PatternExplorer } from "../../components/PatternExplorer";
import { ProgressSimulation } from "../../components/ProgressSimulation";
import { D2PhotoJournal } from "../D2ReviewSections";
import { D2ConcernRail, D2Definition, D2EditorialSplit, D2FinalCampaign, D2Hero, D2Manifesto, D2MethodStrip, D2ProblemSplit, D2ProductRail, D2PromoPair, D2ResultsGallery, D2RootSystem, D2Statement } from "../D2Wireframe";

export const metadata: Metadata = { title: "Men's Hair Loss Guide | Inruuts Design 2", description: "Understand common male hair-loss patterns, DHT, realistic Hair Root Wellness routes and responsible referral boundaries." };

const patterns = [
  { label: "Temples", title: "A hairline that slowly moves back", copy: "Male pattern hair loss often begins with recession at the temples. A gradual, symmetric change differs from a sudden patch or inflamed edge.", image: "/assets/men-temples.jpg", alt: "Mild symmetric temple recession" },
  { label: "Crown", title: "Thinning centered at the vertex", copy: "Crown thinning can expand gradually as genetically susceptible follicles produce finer, shorter hairs over repeated cycles.", image: "/assets/men-crown.jpg", alt: "Moderate thinning at the crown" },
  { label: "Diffuse", title: "Density changing across the top", copy: "Diffuse thinning can occur in pattern loss, but sudden all-over shedding may also follow illness, stress, weight change or medication changes.", image: "/assets/men-diffuse.jpg", alt: "Diffuse thinning across the top of the scalp" },
];

export default function DesignTwoMen() {
  return <main className="d2w-page d2w-men">
    <D2Hero eyebrow="Men's hair loss" title="Understand the pattern before you choose the plan." copy="Hairline recession, crown thinning, shedding and patchy loss are not interchangeable. Learn what each pattern can mean and where personalized care begins." image="/assets/men-hero.jpg" alt="A man calmly checking his hairline in a mirror" note="Private · Practical · No diagnosis" />
    <D2MethodStrip items={["Temples", "Crown", "Diffuse", "Timing", "Symptoms"]} />
    <D2Definition word="dht" line="A normal hormone. Pattern loss depends on genetically susceptible follicles and androgen signaling." />
    <D2Manifesto eyebrow="DHT, explained" title="DHT does not simply clog the scalp." copy="Dihydrotestosterone is made when 5-alpha-reductase converts testosterone. In susceptible follicles it can contribute to progressive miniaturization." items={[
      { title: "Genes set susceptibility", copy: "Not every follicle responds to androgen signaling in the same way." },
      { title: "Cycles become shorter", copy: "Terminal hairs can shift toward finer and shorter fibers." },
      { title: "Progression varies", copy: "Age, stage and consistency influence the individual timeline." },
      { title: "The route has limits", copy: "Sudden patches or inflammation should pause a practitioner-led box recommendation." },
    ]} />
    <D2RootSystem eyebrow="The men's box framework" title="Five layers, selected around the pattern" copy="The profile can organize a pattern-focused system while keeping exact formulas, instructions and limitations visible before purchase." />
    <D2ProductRail eyebrow="Pattern guide" title="What are you seeing?" items={patterns.map((item,index) => ({...item, meta: `Pattern 0${index + 1}`}))} />
    <D2ProblemSplit image="/assets/dht-mechanism.jpg" alt="DHT interaction and follicle miniaturization" eyebrow="The mechanism" title="Genes determine which scalp follicles are sensitive." intro="Pattern hair loss follows recognizable scalp regions because susceptible follicles can respond differently over repeated cycles." rows={[
      ["Testosterone", "A normal androgen hormone"],
      ["5-alpha-reductase", "The enzyme involved in conversion"],
      ["DHT", "Binds androgen receptors throughout the body"],
      ["Susceptible follicle", "Can miniaturize over repeated growth cycles"],
      ["Visible pattern", "Often temples, crown and top"],
    ]} closing="The issue is follicle sensitivity, not simply too much testosterone." />
    <D2ConcernRail title={<>Five routes that can look like <i>hair fall</i></>} items={[
      { label: "01", title: "Pattern loss", image: "/assets/men-temples.jpg", alt: "Temple recession", copy: "", meta: "" },
      { label: "02", title: "Cycle disruption", image: "/assets/men-diffuse.jpg", alt: "Diffuse thinning", copy: "", meta: "" },
      { label: "03", title: "Patchy change", image: "/assets/men-crown.jpg", alt: "Crown view", copy: "", meta: "" },
      { label: "04", title: "Scalp condition", image: "/assets/scalp-barrier.jpg", alt: "Scalp barrier illustration", copy: "", meta: "" },
    ]} />
    <D2ResultsGallery eyebrow="Interactive pattern explorer" title="Location is one clue, not a diagnosis." copy="Switch between the common views, then use timing and symptoms to decide the next useful question."><div className="d2w-interactive"><PatternExplorer items={patterns} /></div></D2ResultsGallery>
    <D2ResultsGallery eyebrow="Illustrative journey" title="Hair timelines are measured in months, not mornings." copy="Use the slider to view a modest generated density journey. It is not a testimonial and does not predict an individual result."><div className="d2w-interactive"><ProgressSimulation image="/assets/case-men-simulation.jpg" subject="men" /></div></D2ResultsGallery>
    <D2PhotoJournal subject="men" />
    <D2PromoPair items={[
      { label: "What may help", title: "Match the tool to the cause", image: "/assets/follicle-miniaturized.jpg", alt: "Miniaturized hair follicle", copy: "Cosmetic support, OTC medication, prescription care and nutrition have different roles, evidence and suitability requirements." },
      { label: "Example personalized routine", title: "Gradual crown thinning + an oily scalp", image: "/assets/bundle-men.jpg", alt: "Illustrative men's Inruuts routine", copy: "A cleanser matched to oil and wash frequency, a direct scalp step and conditioning kept on the lengths." },
    ]} />
    <D2Statement quote="Match the tool to the cause." detail="Gentle care can support the scalp and reduce breakage. It does not change genetics, and supplements are not automatically useful." />
    <D2EditorialSplit image="/assets/practitioner-conversation.jpg" alt="Hair wellness practitioner discussing a routine with a client" eyebrow="When a practitioner pauses the box" title="Sudden patches, pain, inflammation, scarring or heavy scaling." copy="These changes sit outside an Inruuts wellness profile. The responsible route is an outside licensed medical assessment before adding products or tools." alert />
    <D2FinalCampaign image="/assets/routine-application.jpg" alt="Direct scalp application" eyebrow="Private · Practical · Explained" title="Build a profile around what you are actually seeing." copy="Seven questions organize pattern, timing, scalp, routine and goal without pretending to diagnose." />
  </main>;
}
