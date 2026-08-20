import type { Metadata } from "next";
import { D2ConcernRail, D2Definition, D2EditorialSplit, D2FinalCampaign, D2Hero, D2Manifesto, D2MethodStrip, D2ProblemSplit, D2PromoPair, D2ResultsGallery, D2RootSystem, D2Statement } from "./D2Wireframe";
import { D2PhotoJournal, D2TrustFramework } from "./D2ReviewSections";

export const metadata: Metadata = { title: "Inruut Design 2 | Personalized Hair Care", description: "An editorial personalized hair-care experience for the U.S. market." };

const concerns = [
  {
    label: "Men",
    title: "Crown thinning",
    image: "/assets/case-men-simulation.jpg",
    alt: "Generated men's crown-density sequence",
    copy: "",
    meta: "",
    slides: [
      { image: "/assets/reviews/men-month-0.png", alt: "Crown density at the beginning of a generated sequence" },
      { image: "/assets/reviews/men-month-3.png", alt: "Crown density at month three of a generated sequence" },
      { image: "/assets/reviews/men-month-6.png", alt: "Crown density at month six of a generated sequence" },
      { image: "/assets/reviews/men-month-12.png", alt: "Crown density at month twelve of a generated sequence" },
    ],
  },
  {
    label: "Women",
    title: "Widening part",
    image: "/assets/case-women-simulation.jpg",
    alt: "Generated women's part-density sequence",
    copy: "",
    meta: "",
    slides: [
      { image: "/assets/reviews/women-month-0.png", alt: "Part density at the beginning of a generated sequence" },
      { image: "/assets/reviews/women-month-3.png", alt: "Part density at month three of a generated sequence" },
      { image: "/assets/reviews/women-month-6.png", alt: "Part density at month six of a generated sequence" },
      { image: "/assets/reviews/women-month-12.png", alt: "Part density at month twelve of a generated sequence" },
    ],
  },
  {
    label: "Routine",
    title: "Scalp consistency",
    image: "/assets/routine-application.jpg",
    alt: "Scalp serum application",
    copy: "",
    meta: "",
    slides: [
      { image: "/assets/routine-application.jpg", alt: "Applying a scalp serum as part of a consistent routine" },
      { image: "/assets/product-serum.jpg", alt: "Scalp serum prepared for a daily routine" },
      { image: "/assets/product-scalp-tool.jpg", alt: "Scalp massage tool prepared for routine use" },
      { image: "/assets/scalp-barrier.jpg", alt: "Educational comparison of comfortable and disrupted scalp environments" },
    ],
  },
  {
    label: "Care",
    title: "Practitioner boundary",
    image: "/assets/reviews/practitioner-progress-review.jpg",
    alt: "Practitioner reviewing standardized hair progress photographs",
    copy: "",
    meta: "",
    slides: [
      { image: "/assets/reviews/practitioner-progress-review.jpg", alt: "Practitioner reviewing standardized progress photographs with a client" },
      { image: "/assets/practitioner-conversation.jpg", alt: "Hair wellness practitioner discussing a routine with a client" },
      { image: "/assets/reviews/progress-photo-setup.png", alt: "Client preparing standardized hair progress photographs" },
      { image: "/assets/personalization-system.jpg", alt: "Educational framework connecting profile factors to a personalized routine" },
    ],
  },
];

export default function DesignTwoHome() {
  return <main className="d2w-page d2w-home">
    <D2Hero eyebrow="Personalized Hair Root Wellness" title="Know what is behind your hair change." copy="Inruut practitioners look at the pattern, timeline, scalp context, life rhythm and preferences before recommending one coordinated Hair Root Wellness Box." image="/assets/home-hero.jpg" alt="A diverse group of adults representing different hair textures" note="One profile · One box · Every layer explained" />
    <D2MethodStrip />
    <D2Definition line="A personalized five-layer system built around pattern, scalp, timing, preference and safety." />
    <D2Manifesto eyebrow="The Inruut difference" title="Immaculate reasoning. Explainable recommendations." copy="Good personalization begins by admitting what the quiz cannot know, then making every recommendation and limitation visible." items={[
      { title: "Pattern before product", copy: "Where the change appears helps determine the next useful question." },
      { title: "Timing changes the route", copy: "Gradual, sudden and delayed changes should not receive one answer." },
      { title: "The whole routine matters", copy: "Scalp, fiber, habits and time available shape the plan." },
      { title: "Clear practitioner boundary", copy: "Warning signs make the practitioner pause the box and recommend outside care." },
    ]} />
    <D2RootSystem />
    <D2ProblemSplit image="/assets/root-wellness-box.jpg" alt="Illustrative open Hair Root Wellness Box with five coordinated components" eyebrow="The problem" title="One visible symptom can come from very different routes." intro="Pattern, timing and symptoms change what care makes sense. A useful profile separates the signals before it recommends one coordinated box." rows={[
      ["Gradual pattern", "Review location, progression and available routes"],
      ["More shedding", "Look backward for illness, birth, stress or weight change"],
      ["Breakage", "Protect the fiber from heat, chemistry, friction and tension"],
      ["Scalp discomfort", "Support comfort and identify signs needing assessment"],
      ["Sudden patches", "Pause the box and recommend outside medical assessment"],
    ]} closing="Read the pattern. Then build the route." />
    <D2ConcernRail title={<>Discover a <i>personalized</i> route</>} items={concerns} />
    <D2ResultsGallery eyebrow="Real patterns · Responsible expectations" title="What are you actually seeing?" copy="These generated educational visuals explain patterns and time. They are not customer testimonials or guaranteed outcomes." items={[
      { label: "Pattern", title: "Crown thinning over time", image: "/assets/results-crown-progression-v2.png", alt: "Generated side-by-side crown thinning progression", copy: "Start with pattern stage, progression and evidence-based options.", meta: "Generated educational visual" },
      { label: "Density", title: "A part that looks wider", image: "/assets/results-part-density-v2.png", alt: "Generated side-by-side part-density comparison", copy: "Separate pattern loss from shedding, life stage and health factors.", meta: "Generated educational visual" },
      { label: "Consistency", title: "A routine that fits real life", image: "/assets/routine-application.jpg", alt: "Careful scalp serum application", copy: "Choose fewer justified steps and make every one understandable.", meta: "Illustrative routine" },
      { label: "Boundary", title: "When the practitioner pauses", image: "/assets/practitioner-conversation.jpg", alt: "Hair wellness practitioner speaking with a client", copy: "Sudden, patchy, painful or inflamed changes sit outside an online box recommendation.", meta: "Referral guidance" },
    ]} />
    <D2PhotoJournal />
    <D2TrustFramework />
    <D2PromoPair items={[
      { label: "What we are made of", title: "Evidence before claims", image: "/assets/lab-ingredients.jpg", alt: "Cosmetic formulation laboratory", copy: "Ingredient evidence is useful context, but it does not automatically prove a finished formula performs the same way." },
      { label: "Whole-system approach", title: "More than one bottle", image: "/assets/root-wellness-box.jpg", alt: "Illustrative Hair Root Wellness Box", copy: "Foundation, scalp, cycle, root and ritual layers change with the profile instead of sending everyone the same set." },
    ]} />
    <D2Statement quote="Good personalization begins by admitting what the quiz cannot know." detail="Pattern, speed and symptoms can guide the next question. They cannot replace a scalp examination, medical history or laboratory testing when those are needed." />
    <D2EditorialSplit image="/assets/practitioner-conversation.jpg" alt="Hair wellness practitioner reviewing a client's routine journal" eyebrow="When the profile should pause" title="A responsible practitioner knows the boundary." copy="Sudden shedding, round patches, pain, inflammation, scaling, scarring or eyebrow loss should be referred for outside licensed medical assessment before a box is recommended." alert />
    <D2MethodStrip items={["Understand", "Assess", "Explain", "Build", "Review"]} />
    <D2FinalCampaign image="/assets/root-wellness-box.jpg" alt="Illustrative Inruut Hair Root Wellness Box" eyebrow="Your system, explained" title="Five layers. One personalized box. No mystery at checkout." copy="The profile takes about three minutes, shows one working recommendation and lets you view the result without providing contact details." />
  </main>;
}
