import type { Metadata } from "next";
import { PatternExplorer } from "../../components/PatternExplorer";
import { ProgressSimulation } from "../../components/ProgressSimulation";
import { D3CareBoundary, D3Catalogue, D3Definition, D3DoubleFeature, D3Explainer, D3FeatureGrid, D3Final, D3Hero, D3IndexStrip, D3Principles, D3Quote, D3TopicRail } from "../D3Editorial";

export const metadata: Metadata = { title: "Women's Hair Loss Guide | Inruuts Design 3", description: "Understand widening parts, shedding, breakage, life-stage factors and realistic hair-care routes." };

const patterns = [
  { label: "Widening part", title: "Density changing through the center", copy: "Female pattern hair loss often appears as gradual thinning over the top and a widening part while the frontal hairline may remain relatively preserved.", image: "/assets/women-part.jpg", alt: "Widening center part with visible scalp" },
  { label: "Shedding", title: "More full-length hairs releasing", copy: "A noticeable increase in shed hairs can follow illness, major stress, childbirth, weight change or medication changes. Timing and trigger history are important.", image: "/assets/women-shedding.jpg", alt: "Woman examining shed hairs in a brush" },
  { label: "Breakage", title: "Fibers snapping along the length", copy: "Bleach, heat, friction, tension and dryness can break strands. Breakage needs fiber protection, not a claim that a topical product regrows a follicle.", image: "/assets/women-breakage.jpg", alt: "Close view of breakage in coily hair" },
];

export default function DesignThreeWomen() {
  return <main className="d3-page d3-women">
    <D3Hero eyebrow="Women's hair loss" title="Your hair change deserves more than one explanation." copy="A widening part, postpartum shedding, breakage, traction and sudden patches are different stories. Start by separating what you see, when it began and how your scalp feels." image="/assets/women-hero.jpg" alt="A woman examining her center part in a mirror" note="Specific / Respectful / No one-cause assumptions" />
    <D3IndexStrip items={["Part", "Shedding", "Breakage", "Life stage", "Scalp"]} />
    <D3Definition word="cycle" line="The trigger can happen months before the shedding becomes visible." />
    <D3Principles eyebrow="Life stage matters" title="Hormonal change can shift the hair cycle, but it is not the only factor." copy="Pattern, timing, fiber condition, health history and styling practices can overlap. One generic hormone answer can miss the real picture." items={[
      { title: "Postpartum", copy: "Hormonal changes can move more hairs into a resting phase after birth." },
      { title: "Perimenopause", copy: "Age, medications, thyroid disease and iron status can overlap." },
      { title: "Styling + processing", copy: "Tension, bleach, heat and friction can affect fibers and edges." },
      { title: "Practitioner boundary", copy: "Scarring, sudden patches or a painful scalp should pause the product route." },
    ]} />
    <D3Catalogue eyebrow="Concern guide" title="Loss, shedding, or breakage?" items={patterns.map((item,index) => ({...item, meta: `Concern 0${index + 1}`}))} />
    <D3Explainer image="/assets/shedding-breakage.jpg" alt="Comparison of shedding, breakage and follicle growth" eyebrow="The distinction" title="Shedding and breakage leave different clues." intro="The words are often used interchangeably, but the difference changes what questions and care make sense." rows={[
      ["Shedding", "Full-length strands release from the follicle"],
      ["Breakage", "Fibers snap along the length"],
      ["Pattern loss", "Follicles produce finer hairs over time"],
      ["Traction", "Repeated tension can affect edges and density"],
      ["Sudden patches", "Require professional medical assessment"],
    ]} closing="Separate the clue before choosing the care." />
    <D3TopicRail title={<>Life stage changes the questions</>} items={[
      { label: "Postpartum", title: "Delayed shedding", image: "/assets/postpartum-profile.jpg", alt: "Postpartum shedding profile", copy: "", meta: "" },
      { label: "Pattern", title: "Widening part", image: "/assets/women-part.jpg", alt: "Widening part", copy: "", meta: "" },
      { label: "Fiber", title: "Breakage", image: "/assets/women-breakage.jpg", alt: "Hair breakage", copy: "", meta: "" },
      { label: "Nutrition", title: "Health context", image: "/assets/nutrition-hair.jpg", alt: "Nutrient-rich foods", copy: "", meta: "" },
    ]} />
    <D3FeatureGrid eyebrow="Interactive concern explorer" title="What are you actually noticing?" copy="Use the views for orientation, not self-diagnosis. Location, speed, symptoms and medical history still matter."><PatternExplorer items={patterns} /></D3FeatureGrid>
    <D3FeatureGrid eyebrow="Illustrative journey" title="A widening part changes gradually, and response is individual." copy="The slider shows a modest generated simulation, not a real customer and not a promise of regrowth."><ProgressSimulation image="/assets/case-women-simulation.jpg" subject="women" /></D3FeatureGrid>
    <D3DoubleFeature items={[
      { label: "Postpartum profile", title: "Look backward for the trigger", image: "/assets/postpartum-profile.jpg", alt: "Mother examining shed hair", copy: "Birth, illness, surgery, major stress and weight change can shift the cycle months before shedding becomes noticeable." },
      { label: "Example personalized routine", title: "Breakage + a dry scalp", image: "/assets/bundle-women.jpg", alt: "Illustrative women's Inruuts routine", copy: "Gentle cleansing, conditioner and a weekly mask can support slip and reduce snapping; a scalp step belongs only when it fits." },
    ]} />
    <D3Quote quote="Hair needs nutrients. That does not mean everyone needs a supplement." detail="Visible loss does not prove a deficiency. Testing and treatment belong with a clinician when history and symptoms suggest them." />
    <D3CareBoundary image="/assets/practitioner-conversation.jpg" alt="Hair wellness practitioner reviewing a client's routine journal" eyebrow="When a practitioner pauses the route" title="Sudden patches, pain, burning, scaling, scarring or eyebrow loss." copy="Do not cover these signs with a generic growth bundle. They should be assessed by an appropriate licensed medical professional outside Inruuts." alert />
    <D3Final image="/assets/bundle-women.jpg" alt="Personalized women's hair-care routine" eyebrow="Specific / Respectful / Explained" title="Build a routine around your actual pattern and day." copy="The profile organizes concern, timing, scalp, routine and goal before showing an illustrative route." />
  </main>;
}
