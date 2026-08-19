import type { Metadata } from "next";
import { HairCycleExplorer } from "../../components/HairCycleExplorer";
import { D2ConcernRail, D2Definition, D2EditorialSplit, D2FinalCampaign, D2Hero, D2Manifesto, D2MethodStrip, D2ProblemSplit, D2ProductRail, D2PromoPair, D2ResultsGallery, D2RootSystem, D2Statement } from "../D2Wireframe";

export const metadata: Metadata = { title: "Hair Science | Inruuts Design 2", description: "Learn how follicles grow, what DHT does, why shedding happens and how evidence should shape personalized hair care." };

export default function DesignTwoScience() {
  return <main className="d2w-page d2w-science">
    <D2Hero eyebrow="The science" title="Hair biology, explained without turning it into a sales trick." copy="Explore the growth cycle, follicle miniaturization, DHT, scalp health, nutrition and the evidence boundaries that shape a responsible personalized plan." image="/assets/science-hero.jpg" alt="Magnified examination of human hair and scalp" note="Reviewed sources · Plain-language limits" cta="Build my hair profile" />
    <D2MethodStrip items={["Follicle", "Cycle", "DHT", "Scalp", "Evidence"]} />
    <D2Definition word="follicle" line="A living mini-organ below the skin that cycles, receives signals and produces a hair fiber." />
    <D2Manifesto eyebrow="Start with the follicle" title="The visible fiber is the output of a living system." copy="The shaft above the skin is made of keratinized cells. Growth activity happens below the surface, where the follicle cycles and produces a new fiber." items={[
      { title: "Anagen", copy: "The active growth phase can last years for scalp hair." },
      { title: "Catagen", copy: "A short transition phase prepares the strand for rest." },
      { title: "Telogen", copy: "The resting phase ends as the old strand releases." },
      { title: "Repeated cycles", copy: "Changes today can reflect biology that shifted months earlier." },
    ]} />
    <D2RootSystem eyebrow="How the science becomes a system" title="Five layers, five different jobs" copy="Inruuts practitioners use the profile to explain which layers may fit, where the evidence stops and which details must be reviewed before any recommendation becomes purchasable." />
    <D2ProductRail eyebrow="Science library" title="Five systems shape the route" items={[
      { label: "01", title: "Healthy terminal follicle", image: "/assets/follicle-healthy.jpg", alt: "Healthy growing follicle", copy: "A longer growth phase supports a thicker, longer fiber.", meta: "Follicle anatomy" },
      { label: "02", title: "Miniaturizing follicle", image: "/assets/follicle-miniaturized.jpg", alt: "Miniaturized follicle", copy: "Susceptible follicles can produce progressively finer fibers.", meta: "Pattern loss" },
      { label: "03", title: "Growth cycle", image: "/assets/hair-cycle.jpg", alt: "Hair growth cycle", copy: "Growth, transition, rest and release happen on a delayed timeline.", meta: "Cycle biology" },
      { label: "04", title: "Scalp environment", image: "/assets/scalp-barrier.jpg", alt: "Scalp barrier illustration", copy: "Comfort and cleansing matter, but cannot diagnose the cause of loss.", meta: "Scalp care" },
      { label: "05", title: "Nutrition pathway", image: "/assets/nutrient-pathway.jpg", alt: "Nutrients reaching a follicle", copy: "Adequacy matters; more supplementation is not unlimited growth.", meta: "Health context" },
    ]} />
    <D2ProblemSplit image="/assets/dht-mechanism.jpg" alt="DHT signaling and follicle miniaturization" eyebrow="DHT + pattern loss" title="Genes determine which scalp follicles are sensitive." intro="DHT is a normal hormone. The issue in androgenetic alopecia is follicle susceptibility and signaling, not simply having too much testosterone." rows={[
      ["Genes + androgens", "Gradual patterned miniaturization"],
      ["Cycle disruption", "Illness, birth, surgery or major stress"],
      ["Immune activity", "Sudden smooth patches need assessment"],
      ["Scalp disease", "Inflammation, infection or scarring"],
      ["Fiber damage", "Heat, bleach, friction and tension"],
      ["Nutrition + health", "Deficiencies, thyroid, medication or illness"],
    ]} closing="Hair loss is an outcome, not one diagnosis." />
    <D2ConcernRail title={<>Explore the <i>contributing factors</i></>} items={[
      { label: "Pattern", title: "Genes + DHT", image: "/assets/dht-mechanism.jpg", alt: "DHT mechanism", copy: "", meta: "" },
      { label: "Cycle", title: "Delayed shedding", image: "/assets/hair-cycle.jpg", alt: "Hair cycle", copy: "", meta: "" },
      { label: "Scalp", title: "Barrier + comfort", image: "/assets/scalp-barrier.jpg", alt: "Scalp barrier", copy: "", meta: "" },
      { label: "Health", title: "Nutrition context", image: "/assets/nutrition-hair.jpg", alt: "Nutrition for hair", copy: "", meta: "" },
    ]} />
    <D2ResultsGallery eyebrow="Interactive growth cycle" title="Growth and shedding are parts of the same system." copy="Click each phase to see why hair changes need time to observe."><div className="d2w-interactive"><HairCycleExplorer /></div></D2ResultsGallery>
    <D2PromoPair items={[
      { label: "Healthy terminal follicle", title: "Longer growth, thicker fiber", image: "/assets/follicle-healthy.jpg", alt: "Healthy terminal follicle", copy: "A longer anagen phase allows a terminal scalp hair to grow longer and thicker before transition and rest." },
      { label: "Miniaturizing follicle", title: "Shorter cycle, finer fiber", image: "/assets/follicle-miniaturized.jpg", alt: "Miniaturized hair follicle", copy: "In pattern loss, susceptible follicles can progressively produce shorter, finer hairs over repeated cycles." },
    ]} />
    <D2Statement quote="Not every science-backed statement means the same thing." detail="Finished-product studies, ingredient evidence, instrumental cosmetic testing and customer perception answer different questions." />
    <D2EditorialSplit image="/assets/reviews/practitioner-progress-review.jpg" alt="Hair wellness practitioner reviewing standardized progress photographs" eyebrow="How Inruuts practitioners use the science" title="Finite rules. Visible reasoning. Clear limits." copy="The profile organizes the reported concern, checks timing and warning signs, maps the five system layers and shows why each category was selected." />
    <section id="red-flags"><D2EditorialSplit image="/assets/practitioner-conversation.jpg" alt="Hair wellness practitioner reviewing a client's history" eyebrow="When the practitioner pauses" title="Sudden, patchy, painful, inflamed or scarring loss." copy="These signs may need physical examination, medical history, laboratory testing or prescription treatment outside Inruuts. The online profile should pause the box route rather than force a sale." alert /></section>
    <D2MethodStrip items={["Classify", "Check", "Match", "Explain", "Limit"]} />
    <D2FinalCampaign image="/assets/root-wellness-box.jpg" alt="Illustrative five-part Hair Root Wellness Box" eyebrow="Evidence before claims" title="Understand the biology. Then build the system." copy="A transparent practitioner-led profile can organize the next question without pretending to replace medical assessment." />
  </main>;
}
