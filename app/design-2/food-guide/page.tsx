import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Check, Droplets, Leaf, ShieldAlert, Sprout } from "lucide-react";
import { ThemeLink as Link } from "../../components/ThemeLink";

export const metadata: Metadata = {
  title: "The Inruut Food Guide | Design 2",
  description: "A practical, food-first guide to nourishment, hydration and intentional supplementation within the Inruut root-first system.",
};

const systemLayers = [
  ["Nourish", "Build the everyday foundation with varied whole foods and targeted support only when it has a clear purpose."],
  ["Balance", "Consider stress, health history, life stage and internal factors without pretending one food or herb can diagnose or correct them."],
  ["Root", "Keep the scalp environment comfortable and use topical products according to their instructions."],
  ["Stimulate", "Treat tools and active topical practices as optional, not automatic. Stop if the scalp becomes irritated."],
  ["Ritual", "Use a simple routine long enough to understand how it fits, then review rather than endlessly adding more."],
];

const foodSections = [
  {
    title: "Start with real food",
    copy: "Choose meals built from recognizable ingredients most of the time. Packaged foods can still fit; read the full ingredient and nutrition labels so the choice stays intentional.",
    points: ["Seasonal vegetables and fruit", "Eggs, fish, legumes, meat or another protein that fits you", "Minimally processed grains and starches", "Pasteurized dairy or a suitable fortified alternative"],
  },
  {
    title: "Choose carbohydrates that work for you",
    copy: "Potatoes, rice, oats, sourdough and other minimally processed grains or legumes can all be useful options. Quality, preparation, portion and personal tolerance matter more than a universal banned-food list.",
    points: ["Favor simple ingredient lists", "Use fiber-rich options regularly", "Choose pasta or bread that suits your digestion", "Notice energy, comfort and consistency"],
  },
  {
    title: "Find nutrients in the meal",
    copy: "Food can provide protein, iron, zinc, essential fats and other nutrients involved in normal body and hair function. Supplements are not a substitute for a varied diet or a way to guarantee hair growth.",
    points: ["Include protein across the day", "Eat oily fish or another omega-3 source", "Use fermented foods if they suit you", "Treat collagen as optional food support, not a regrowth treatment"],
  },
];

export default function DesignTwoFoodGuide() {
  return <main className="d2w-page d2-food-guide">
    <section className="d2-food-hero">
      <Image src="/assets/food-guide-hero.jpg" alt="Whole foods arranged on a warm kitchen table" fill priority sizes="100vw" />
      <div className="d2-food-hero-shade" />
      <article>
        <span>Included with the Inruut Wellness Box</span>
        <h1>The Inruut Food Guide</h1>
        <p>Hair growth starts at the root. But the root is your body.</p>
        <a href="#guide">Begin the guide <ArrowRight size={16} /></a>
      </article>
    </section>

    <section className="d2-food-intro" id="guide">
      <div>
        <span>The root-first philosophy</span>
        <h2>This is a lifestyle, not a diet.</h2>
      </div>
      <div>
        <p>Hair does not operate independently. It reflects the nourishment, health and daily patterns of the whole person. That is why Inruut goes beyond surface-level fixes and supports the foundation from the root outward.</p>
        <p>The aim is not perfection or a miracle menu. It is to make simple choices more often, use supplements intentionally and create a routine you can maintain.</p>
      </div>
    </section>

    <section className="d2-food-system">
      <header><span>The Inruut system</span><h2>One box. Five connected layers.</h2><p>The Food Guide supports the same system that shapes the box.</p></header>
      <div>{systemLayers.map(([title, copy], index) => <article key={title}><b>0{index + 1}</b><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </section>

    <section className="d2-food-supplements">
      <div><Image src="/assets/product-vitamins.jpg" alt="Supplement bottles arranged for an intentional routine" fill sizes="(max-width: 760px) 100vw, 46vw" /></div>
      <article>
        <span>The purpose of supplements</span>
        <h2>Use them with a reason, a dose and a review point.</h2>
        <p>Supplements can help fill a documented gap or support a specific goal, but more is not automatically better. Fat-soluble vitamins, iodine, herbs and other active ingredients can cause side effects or interact with medicines.</p>
        <ul>
          <li><Check size={17} /> Know what each ingredient is intended to do.</li>
          <li><Check size={17} /> Check the amount, duration and possible interactions.</li>
          <li><Check size={17} /> Tell a qualified health professional what you take.</li>
          <li><Check size={17} /> Stop and seek advice if something feels wrong.</li>
        </ul>
        <p className="d2-food-note"><ShieldAlert size={18} /> The current prototype does not publish a final formula or recommend DMSO, high-dose iodine, hormone-active herbs or at-home dermarolling as universal steps. Product-specific safety and legal review must come first.</p>
      </article>
    </section>

    <section className="d2-food-plate">
      <div>
        <span>Balance the plate</span>
        <h2>A simple framework, not a rigid equation.</h2>
        <p>Build meals around protein, plants or quality carbohydrates, and fats that support satisfaction. The exact balance can change with appetite, activity, health needs and professional advice.</p>
        <div className="d2-food-thirds" aria-label="A balanced plate framework">
          <span><b>Protein</b><small>Build and repair</small></span>
          <span><b>Plants + carbs</b><small>Energy and variety</small></span>
          <span><b>Fats</b><small>Flavor and satisfaction</small></span>
        </div>
      </div>
      <div><Image src="/assets/food-guide-plate.jpg" alt="A balanced meal with protein, potatoes and green vegetables" fill sizes="(max-width: 760px) 100vw, 50vw" /></div>
    </section>

    <section className="d2-food-principles">
      <header><span>Food guidelines</span><h2>Eat simply. Eat intentionally.</h2></header>
      <div>{foodSections.map((section, index) => <details key={section.title} open={index === 0}>
        <summary><span>0{index + 1}</span><h3>{section.title}</h3><ArrowRight size={18} /></summary>
        <div><p>{section.copy}</p><ul>{section.points.map((point) => <li key={point}>{point}</li>)}</ul></div>
      </details>)}</div>
    </section>

    <section className="d2-food-water">
      <div><Image src="/assets/food-guide-water.jpg" alt="Filtered water in a glass and carafe on a kitchen counter" fill sizes="(max-width: 760px) 100vw, 50vw" /></div>
      <article><Droplets size={30} /><span>Water is foundational</span><h2>Make hydration easy to repeat.</h2><p>Keep safe drinking water accessible throughout the day. A certified household filter can be useful when it addresses contaminants in the local water supply; choose and maintain it according to its certification and instructions.</p></article>
    </section>

    <section className="d2-food-safety">
      <header><Leaf size={28} /><span>Use the guide with context</span><h2>Natural does not mean risk-free.</h2></header>
      <div>
        <p><b>Choose pasteurized dairy.</b> Raw milk can carry harmful germs; pasteurization provides the nutritional benefits of dairy with substantially lower infection risk.</p>
        <p><b>Do not force a scalp tool.</b> Avoid microneedling on irritated, infected or healing skin. At-home use can cause irritation, infection or scarring and should be discussed with a dermatologist.</p>
        <p><b>Check supplement interactions.</b> Vitamins, minerals and herbs can interact with prescription medicines and may be harmful at high doses.</p>
      </div>
      <footer>
        <p>This guide supports general wellness and does not diagnose a deficiency, hormonal condition or cause of hair loss. Speak with a qualified medical professional for personalized nutrition, medication and treatment advice.</p>
        <div><a href="https://ods.od.nih.gov/factsheets/WYNTK-Consumer/">NIH supplement guidance</a><a href="https://www.cdc.gov/food-safety/foods/raw-milk.html">CDC dairy safety</a><a href="https://www.aad.org/public/cosmetic/scars-stretch-marks/microneedling-fade-scars">AAD microneedling guidance</a></div>
      </footer>
    </section>

    <section className="d2-food-final">
      <Sprout size={34} />
      <span>Keep building the foundation</span>
      <h2>Stay present. Focus on the process.</h2>
      <p>The goal is not to force a result. It is to support the body, protect the hair you have and build a routine that can be reviewed honestly over time.</p>
      <Link href="/quiz">Build my Inruut profile <ArrowRight size={16} /></Link>
    </section>
  </main>;
}
