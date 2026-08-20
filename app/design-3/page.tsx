import type { Metadata } from "next";
import { D3CareBoundary, D3Catalogue, D3Definition, D3DoubleFeature, D3Explainer, D3FeatureGrid, D3Final, D3Hero, D3IndexStrip, D3Principles, D3Quote, D3TopicRail } from "./D3Editorial";

export const metadata: Metadata = { title: "Inruut Design 3 | Personalized Hair Care", description: "A clean editorial personalized hair-care experience for the U.S. market." };

const products = [
  { label: "Cleanse", title: "Scalp Balance Cleanser", image: "/assets/product-cleanser.jpg", alt: "Scalp Balance Cleanser", copy: "Oil, buildup and wash frequency shape the cleanser format.", meta: "Selected when appropriate" },
  { label: "Target", title: "Daily Scalp Serum", image: "/assets/product-serum.jpg", alt: "Daily Scalp Serum", copy: "A direct-to-scalp step chosen only when it fits the concern.", meta: "Selected when appropriate" },
  { label: "Protect", title: "Fiber Support Conditioner", image: "/assets/product-conditioner.jpg", alt: "Fiber Support Conditioner", copy: "Slip and conditioning help reduce avoidable mechanical breakage.", meta: "Selected when appropriate" },
  { label: "Repair", title: "Weekly Hair Mask", image: "/assets/product-mask.jpg", alt: "Weekly Hair Mask", copy: "Extra conditioning for dry, processed or breakage-prone lengths.", meta: "Selected when appropriate" },
  { label: "Review", title: "Nutrient Support", image: "/assets/product-vitamins.jpg", alt: "Nutrient Support", copy: "Diet, medications and possible deficiencies matter before supplements.", meta: "Selected when appropriate" },
];

const concerns = [
  { label: "Men", title: "Crown thinning", image: "/assets/case-men-simulation.jpg", alt: "Generated men's crown-density sequence", copy: "", meta: "" },
  { label: "Women", title: "Widening part", image: "/assets/case-women-simulation.jpg", alt: "Generated women's part-density sequence", copy: "", meta: "" },
  { label: "Routine", title: "Scalp consistency", image: "/assets/routine-application.jpg", alt: "Scalp serum application", copy: "", meta: "" },
  { label: "Care", title: "Practitioner boundary", image: "/assets/practitioner-conversation.jpg", alt: "Hair wellness practitioner reviewing a routine journal", copy: "", meta: "" },
];

export default function DesignThreeHome() {
  return <main className="d3-page">
    <D3Hero eyebrow="Science-led personalized hair care" title="Know what is behind your hair change." copy="Inruut looks at pattern, timing, scalp, life stage and routine before building a plan, because thinning, shedding and breakage are not the same problem." image="/assets/home-hero.jpg" alt="A diverse group of adults representing different hair textures" note="Education first / No instant-regrowth promises" />
    <D3IndexStrip />
    <D3Definition line="Personalized hair care built around pattern, scalp, routine and goal." />
    <D3Principles eyebrow="The Inruut difference" title="Immaculate reasoning. Explainable recommendations." copy="Good personalization begins by admitting what the quiz cannot know, then making every recommendation and limitation visible." items={[
      { title: "Pattern before product", copy: "Where the change appears helps determine the next useful question." },
      { title: "Timing changes the route", copy: "Gradual, sudden and delayed changes should not receive one answer." },
      { title: "The whole routine matters", copy: "Scalp, fiber, habits and time available shape the plan." },
      { title: "Clear practitioner boundary", copy: "Warning signs make the practitioner pause the product route." },
    ]} />
    <D3Catalogue eyebrow="Possible plan components" title="Every product has to earn its place" items={products} />
    <D3Explainer image="/assets/personalization-system.jpg" alt="Inputs feeding a personalized recommendation" eyebrow="The problem" title="One visible symptom can come from very different routes." intro="Pattern, timing and symptoms change what care makes sense. A useful profile separates the signals before it recommends a routine." rows={[
      ["Gradual pattern", "Review location, progression and clinical options"],
      ["More shedding", "Look backward for illness, birth, stress or weight change"],
      ["Breakage", "Protect the fiber from heat, chemistry, friction and tension"],
      ["Scalp discomfort", "Support comfort and identify signs needing assessment"],
      ["Sudden patches", "Pause the bundle and recommend outside medical assessment"],
    ]} closing="Read the pattern. Then build the route." />
    <D3TopicRail title={<>Discover a personalized route</>} items={concerns} />
    <D3FeatureGrid eyebrow="Real patterns / Responsible expectations" title="What are you actually seeing?" copy="These generated educational visuals explain patterns and time. They are not customer testimonials or guaranteed outcomes." items={[
      { label: "Pattern", title: "Crown thinning over time", image: "/assets/case-men-simulation.jpg", alt: "Generated crown-density sequence", copy: "Start with pattern stage, progression and evidence-based options.", meta: "Generated educational visual" },
      { label: "Density", title: "A part that looks wider", image: "/assets/case-women-simulation.jpg", alt: "Generated part-density sequence", copy: "Separate pattern loss from shedding, life stage and health factors.", meta: "Generated educational visual" },
      { label: "Consistency", title: "A routine that fits real life", image: "/assets/routine-application.jpg", alt: "Careful scalp serum application", copy: "Choose fewer justified steps and make every one understandable.", meta: "Illustrative routine" },
      { label: "Boundary", title: "When the practitioner pauses", image: "/assets/practitioner-conversation.jpg", alt: "Hair wellness practitioner speaking with a client", copy: "Sudden, patchy, painful or inflamed changes sit outside an online product route.", meta: "Referral guidance" },
    ]} />
    <D3DoubleFeature items={[
      { label: "What we are made of", title: "Evidence before claims", image: "/assets/lab-ingredients.jpg", alt: "Cosmetic formulation laboratory", copy: "Ingredient evidence is useful context, but it does not automatically prove a finished formula performs the same way." },
      { label: "Whole-routine approach", title: "More than one bottle", image: "/assets/personalized-box.jpg", alt: "Open personalized Inruut kit", copy: "Product selection, usage instructions and routine cadence change with the profile instead of sending everyone the same set." },
    ]} />
    <D3Quote quote="Good personalization begins by admitting what the quiz cannot know." detail="Pattern, speed and symptoms can guide the next question. They cannot replace a scalp examination, medical history or laboratory testing when those are needed." />
    <D3CareBoundary image="/assets/practitioner-conversation.jpg" alt="Hair wellness practitioner reviewing a routine journal with a client" eyebrow="When the profile should pause" title="A responsible practitioner knows the boundary." copy="Sudden shedding, round patches, pain, inflammation, scaling, scarring or eyebrow loss should be referred for outside licensed medical assessment." alert />
    <D3IndexStrip items={["Understand", "Assess", "Explain", "Build", "Review"]} />
    <D3Final image="/assets/bundle-men.jpg" alt="Inruut personalized hair-care routine" eyebrow="Your plan, explained" title="See what fits. See what does not. Know why." copy="The profile is free, takes about three minutes and does not ask for contact details." />
  </main>;
}
