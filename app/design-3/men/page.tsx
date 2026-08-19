import type { Metadata } from "next";
import { PatternExplorer } from "../../components/PatternExplorer";
import { ProgressSimulation } from "../../components/ProgressSimulation";
import { D3CareBoundary, D3Catalogue, D3Definition, D3DoubleFeature, D3Explainer, D3FeatureGrid, D3Final, D3Hero, D3IndexStrip, D3Principles, D3Quote, D3TopicRail } from "../D3Editorial";

export const metadata: Metadata = { title: "Men's Hair Loss Guide | Inruuts Design 3", description: "Understand common male hair-loss patterns, DHT, realistic care options and when to see a dermatologist." };

const patterns = [
  { label: "Temples", title: "A hairline that slowly moves back", copy: "Male pattern hair loss often begins with recession at the temples. A gradual, symmetric change differs from a sudden patch or inflamed edge.", image: "/assets/men-temples.jpg", alt: "Mild symmetric temple recession" },
  { label: "Crown", title: "Thinning centered at the vertex", copy: "Crown thinning can expand gradually as genetically susceptible follicles produce finer, shorter hairs over repeated cycles.", image: "/assets/men-crown.jpg", alt: "Moderate thinning at the crown" },
  { label: "Diffuse", title: "Density changing across the top", copy: "Diffuse thinning can occur in pattern loss, but sudden all-over shedding may also follow illness, stress, weight change or medication changes.", image: "/assets/men-diffuse.jpg", alt: "Diffuse thinning across the top of the scalp" },
];

export default function DesignThreeMen() {
  return <main className="d3-page d3-men">
    <D3Hero eyebrow="Men's hair loss" title="Understand the pattern before you choose the plan." copy="Hairline recession, crown thinning, shedding and patchy loss are not interchangeable. Learn what each pattern can mean and where personalized care begins." image="/assets/men-hero.jpg" alt="A man calmly checking his hairline in a mirror" note="Private / Practical / No diagnosis" />
    <D3IndexStrip items={["Temples", "Crown", "Diffuse", "Timing", "Symptoms"]} />
    <D3Definition word="dht" line="A normal hormone. Pattern loss depends on genetically susceptible follicles and androgen signaling." />
    <D3Principles eyebrow="DHT, explained" title="DHT does not simply clog the scalp." copy="Dihydrotestosterone is made when 5-alpha-reductase converts testosterone. In susceptible follicles it can contribute to progressive miniaturization." items={[
      { title: "Genes set susceptibility", copy: "Not every follicle responds to androgen signaling in the same way." },
      { title: "Cycles become shorter", copy: "Terminal hairs can shift toward finer and shorter fibers." },
      { title: "Progression varies", copy: "Age, stage and consistency influence the individual timeline." },
      { title: "The route has limits", copy: "Sudden patches or inflammation need clinical assessment." },
    ]} />
    <D3Catalogue eyebrow="Pattern guide" title="What are you seeing?" items={patterns.map((item,index) => ({...item, meta: `Pattern 0${index + 1}`}))} />
    <D3Explainer image="/assets/dht-mechanism.jpg" alt="DHT interaction and follicle miniaturization" eyebrow="The mechanism" title="Genes determine which scalp follicles are sensitive." intro="Pattern hair loss follows recognizable scalp regions because susceptible follicles can respond differently over repeated cycles." rows={[
      ["Testosterone", "A normal androgen hormone"],
      ["5-alpha-reductase", "The enzyme involved in conversion"],
      ["DHT", "Binds androgen receptors throughout the body"],
      ["Susceptible follicle", "Can miniaturize over repeated growth cycles"],
      ["Visible pattern", "Often temples, crown and top"],
    ]} closing="The issue is follicle sensitivity, not simply too much testosterone." />
    <D3TopicRail title={<>Five routes that can look like hair fall</>} items={[
      { label: "01", title: "Pattern loss", image: "/assets/men-temples.jpg", alt: "Temple recession", copy: "", meta: "" },
      { label: "02", title: "Cycle disruption", image: "/assets/men-diffuse.jpg", alt: "Diffuse thinning", copy: "", meta: "" },
      { label: "03", title: "Patchy change", image: "/assets/men-crown.jpg", alt: "Crown view", copy: "", meta: "" },
      { label: "04", title: "Scalp condition", image: "/assets/scalp-barrier.jpg", alt: "Scalp barrier illustration", copy: "", meta: "" },
    ]} />
    <D3FeatureGrid eyebrow="Interactive pattern explorer" title="Location is one clue, not a diagnosis." copy="Switch between the common views, then use timing and symptoms to decide the next useful question."><PatternExplorer items={patterns} /></D3FeatureGrid>
    <D3FeatureGrid eyebrow="Illustrative journey" title="Hair timelines are measured in months, not mornings." copy="Use the slider to view a modest generated density journey. It is not a testimonial and does not predict an individual result."><ProgressSimulation image="/assets/case-men-simulation.jpg" subject="men" /></D3FeatureGrid>
    <D3DoubleFeature items={[
      { label: "What may help", title: "Match the tool to the cause", image: "/assets/follicle-miniaturized.jpg", alt: "Miniaturized hair follicle", copy: "Cosmetic support, OTC medication, prescription care and nutrition have different roles, evidence and suitability requirements." },
      { label: "Example personalized routine", title: "Gradual crown thinning + an oily scalp", image: "/assets/bundle-men.jpg", alt: "Illustrative men's Inruuts routine", copy: "A cleanser matched to oil and wash frequency, a direct scalp step and conditioning kept on the lengths." },
    ]} />
    <D3Quote quote="Match the tool to the cause." detail="Gentle care can support the scalp and reduce breakage. It does not change genetics, and supplements are not automatically useful." />
    <D3CareBoundary image="/assets/practitioner-conversation.jpg" alt="Hair wellness practitioner discussing a routine with a client" eyebrow="When a practitioner pauses the route" title="Sudden patches, pain, inflammation, scarring or heavy scaling." copy="These changes sit outside an Inruuts wellness profile and should be assessed by an appropriate licensed medical professional." alert />
    <D3Final image="/assets/routine-application.jpg" alt="Direct scalp application" eyebrow="Private / Practical / Explained" title="Build a profile around what you are actually seeing." copy="Seven questions organize pattern, timing, scalp, routine and goal without pretending to diagnose." />
  </main>;
}
