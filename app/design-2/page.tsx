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
    title: "Know when to pause",
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
    <D2Hero eyebrow="Personalized Hair Root Wellness" title="Know what is behind your hair change." copy="Your hair is giving you information. Inruut helps you understand what may be behind the change, then supports it from the root outward." image="/assets/home-hero.jpg" alt="A diverse group of adults representing different hair textures" note="Understand the change · Support the root" />
    <D2MethodStrip items={["Nourish", "Balance", "Root", "Stimulate", "Ritual"]} />
    <D2Definition line="Your hair does not operate independently. It reflects what is happening at the scalp, at the root and throughout the body." />
    <D2Manifesto eyebrow="The Inruut difference" title="Hair growth starts at the root. But the root is your body." copy="Hair does not exist in isolation. Nourishment, scalp health, lifestyle, hormones, stress and routine can all influence what you see in the mirror. Inruut brings those layers together into one personalized system." items={[
      { title: "Listen to the change", copy: "Where, when and how your hair changes can reveal which questions are worth asking first." },
      { title: "Look at the whole person", copy: "Food, stress, health history, life stage and daily habits belong in the same conversation." },
      { title: "Support from within and out", copy: "Nourishment and scalp care work as coordinated layers, not disconnected quick fixes." },
      { title: "Build something livable", copy: "A useful system should fit real life and make every step easy to understand." },
    ]} />
    <D2RootSystem eyebrow="One personalized system" title="Nourish. Balance. Root. Stimulate. Ritual." copy="The Inruut Wellness Box brings five connected layers together around your profile, so the routine supports the foundation instead of chasing one visible symptom." />
    <D2ProblemSplit image="/assets/root-wellness-box.jpg" alt="Illustrative open Inruut Wellness Box with coordinated components" eyebrow="Why personalized care matters" title="The same hair change can have a different story behind it." intro="A widening part, a thinner crown, extra shedding, breakage and scalp discomfort do not all begin in the same place. Inruut starts with the context before building the routine." rows={[
      ["What changed", "Thinning, shedding, breakage or scalp discomfort"],
      ["Where it changed", "Hairline, crown, part, patches or all over"],
      ["When it began", "Recent, gradual, recurring or long-standing"],
      ["What surrounds it", "Food, stress, health, life stage and routine"],
      ["What feels realistic", "A system that fits your preferences and daily life"],
    ]} closing="Understand the change. Then support the root." />
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
      { label: "The Inruut Food Guide", title: "Food first. Supplements with a job.", image: "/assets/food-guide-hero.jpg", alt: "Whole foods arranged on a warm kitchen table", copy: "Build the nutritional foundation with real food, thoughtful choices and supplements used intentionally rather than automatically.", href: "/food-guide", cta: "Open the Food Guide" },
      { label: "The Inruut Wellness Box", title: "A system, not a pill", image: "/assets/root-wellness-box.jpg", alt: "Illustrative Inruut Wellness Box", copy: "Nourishment, internal balance, scalp care, targeted practices and a simple ritual work together around the profile.", href: "/plan", cta: "Explore the system" },
    ]} />
    <D2Statement quote="This is not about throwing another supplement at the problem. It is about rebuilding the foundation." detail="Inruut treats supplements as targeted support, food as the everyday base and consistency as the part that turns a collection of products into a real routine." />
    <D2EditorialSplit image="/assets/food-guide-plate.jpg" alt="A simple balanced meal prepared in a home kitchen" eyebrow="A lifestyle, not a diet" title="Eat simply. Eat intentionally. Make the routine sustainable." copy="The Inruut Food Guide turns the root-first philosophy into practical choices for meals, hydration and intentional supplementation after your box arrives." href="/food-guide" cta="Read the Food Guide" />
    <D2MethodStrip items={["Understand", "Nourish", "Support", "Practice", "Review"]} />
    <D2FinalCampaign image="/assets/root-wellness-box.jpg" alt="Illustrative Inruut Wellness Box" eyebrow="Your system, explained" title="Understand the change. Support the root. Build a routine you can follow." copy="The profile takes about three minutes and brings the five layers together in one clear, personalized starting point." />
  </main>;
}
