import type { Metadata } from "next";
import { HairCycleExplorer } from "../../components/HairCycleExplorer";
import { D3CareBoundary, D3Catalogue, D3Definition, D3DoubleFeature, D3Explainer, D3FeatureGrid, D3Final, D3Hero, D3IndexStrip, D3Principles, D3Quote, D3TopicRail } from "../D3Editorial";

export const metadata: Metadata = { title: "Hair Science | Inruuts Design 3", description: "Learn how follicles grow, what DHT does, why shedding happens and how evidence should shape personalized hair care." };

export default function DesignThreeScience() {
  return <main className="d3-page d3-science">
    <D3Hero eyebrow="The science" title="Hair biology, explained without turning it into a sales trick." copy="Explore the growth cycle, follicle miniaturization, DHT, scalp health, nutrition and the evidence boundaries that shape a responsible personalized plan." image="/assets/science-hero.jpg" alt="Magnified examination of human hair and scalp" note="Reviewed sources / Plain-language limits" cta="Build my hair profile" />
    <D3IndexStrip items={["Follicle", "Cycle", "DHT", "Scalp", "Evidence"]} />
    <D3Definition word="follicle" line="A living mini-organ below the skin that cycles, receives signals and produces a hair fiber." />
    <D3Principles eyebrow="Start with the follicle" title="The visible fiber is the output of a living system." copy="The shaft above the skin is made of keratinized cells. Growth activity happens below the surface, where the follicle cycles and produces a new fiber." items={[
      { title: "Anagen", copy: "The active growth phase can last years for scalp hair." },
      { title: "Catagen", copy: "A short transition phase prepares the strand for rest." },
      { title: "Telogen", copy: "The resting phase ends as the old strand releases." },
      { title: "Repeated cycles", copy: "Changes today can reflect biology that shifted months earlier." },
    ]} />
    <D3Catalogue eyebrow="Science library" title="Five systems shape the route" items={[
      { label: "01", title: "Healthy terminal follicle", image: "/assets/follicle-healthy.jpg", alt: "Healthy growing follicle", copy: "A longer growth phase supports a thicker, longer fiber.", meta: "Follicle anatomy" },
      { label: "02", title: "Miniaturizing follicle", image: "/assets/follicle-miniaturized.jpg", alt: "Miniaturized follicle", copy: "Susceptible follicles can produce progressively finer fibers.", meta: "Pattern loss" },
      { label: "03", title: "Growth cycle", image: "/assets/hair-cycle.jpg", alt: "Hair growth cycle", copy: "Growth, transition, rest and release happen on a delayed timeline.", meta: "Cycle biology" },
      { label: "04", title: "Scalp environment", image: "/assets/scalp-barrier.jpg", alt: "Scalp barrier illustration", copy: "Comfort and cleansing matter, but cannot diagnose the cause of loss.", meta: "Scalp care" },
      { label: "05", title: "Nutrition pathway", image: "/assets/nutrient-pathway.jpg", alt: "Nutrients reaching a follicle", copy: "Adequacy matters; more supplementation is not unlimited growth.", meta: "Health context" },
    ]} />
    <D3Explainer image="/assets/dht-mechanism.jpg" alt="DHT signaling and follicle miniaturization" eyebrow="DHT + pattern loss" title="Genes determine which scalp follicles are sensitive." intro="DHT is a normal hormone. The issue in androgenetic alopecia is follicle susceptibility and signaling, not simply having too much testosterone." rows={[
      ["Genes + androgens", "Gradual patterned miniaturization"],
      ["Cycle disruption", "Illness, birth, surgery or major stress"],
      ["Immune activity", "Sudden smooth patches need assessment"],
      ["Scalp disease", "Inflammation, infection or scarring"],
      ["Fiber damage", "Heat, bleach, friction and tension"],
      ["Nutrition + health", "Deficiencies, thyroid, medication or illness"],
    ]} closing="Hair loss is an outcome, not one diagnosis." />
    <D3TopicRail title={<>Explore the contributing factors</>} items={[
      { label: "Pattern", title: "Genes + DHT", image: "/assets/dht-mechanism.jpg", alt: "DHT mechanism", copy: "", meta: "" },
      { label: "Cycle", title: "Delayed shedding", image: "/assets/hair-cycle.jpg", alt: "Hair cycle", copy: "", meta: "" },
      { label: "Scalp", title: "Barrier + comfort", image: "/assets/scalp-barrier.jpg", alt: "Scalp barrier", copy: "", meta: "" },
      { label: "Health", title: "Nutrition context", image: "/assets/nutrition-hair.jpg", alt: "Nutrition for hair", copy: "", meta: "" },
    ]} />
    <D3FeatureGrid eyebrow="Interactive growth cycle" title="Growth and shedding are parts of the same system." copy="Click each phase to see why hair changes need time to observe."><HairCycleExplorer /></D3FeatureGrid>
    <D3DoubleFeature items={[
      { label: "Healthy terminal follicle", title: "Longer growth, thicker fiber", image: "/assets/follicle-healthy.jpg", alt: "Healthy terminal follicle", copy: "A longer anagen phase allows a terminal scalp hair to grow longer and thicker before transition and rest." },
      { label: "Miniaturizing follicle", title: "Shorter cycle, finer fiber", image: "/assets/follicle-miniaturized.jpg", alt: "Miniaturized hair follicle", copy: "In pattern loss, susceptible follicles can progressively produce shorter, finer hairs over repeated cycles." },
    ]} />
    <D3Quote quote="Not every science-backed statement means the same thing." detail="Finished-product studies, ingredient evidence, instrumental cosmetic testing and customer perception answer different questions." nextTone="white" />
    <D3CareBoundary image="/assets/lab-ingredients.jpg" alt="Cosmetic formulation laboratory" eyebrow="How Inruuts uses the science" title="Finite rules. Visible reasoning. Clear limits." copy="The profile classifies the reported concern, checks timing and red flags, matches cosmetic categories to scalp and fiber needs, and shows why each item was selected." />
    <section id="red-flags"><D3CareBoundary image="/assets/practitioner-conversation.jpg" alt="Hair wellness practitioner reviewing a client's history" eyebrow="When the practitioner pauses" title="Sudden, patchy, painful, inflamed or scarring loss." copy="These signs may need physical examination, medical history, laboratory testing or prescription treatment outside Inruuts. The online profile should pause rather than force a sale." alert /></section>
    <D3IndexStrip items={["Classify", "Check", "Match", "Explain", "Limit"]} />
    <D3Final image="/assets/personalization-system.jpg" alt="Personalization inputs feeding a recommendation" eyebrow="Evidence before claims" title="Understand the biology. Then build the route." copy="A transparent profile can organize the next question without pretending to replace a clinician." />
  </main>;
}
