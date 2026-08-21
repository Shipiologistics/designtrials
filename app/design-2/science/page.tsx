import type { Metadata } from "next";
import Image from "next/image";
import { HairCycleExplorer } from "../../components/HairCycleExplorer";
import { ScienceStatusExplorer } from "../../components/ScienceStatusExplorer";
import { D2ConcernRail, D2Definition, D2EditorialSplit, D2FinalCampaign, D2Hero, D2Manifesto, D2MethodStrip, D2ProblemSplit, D2ProductRail, D2PromoPair, D2ResultsGallery, D2Statement } from "../D2Wireframe";

export const metadata: Metadata = { title: "Hair Science | Inruut Design 2", description: "Learn how follicles grow, what DHT does, why shedding happens and how evidence should shape personalized hair care." };

const scienceStatus = [
  { label: "Well established", level: 5, copy: "Pattern hair loss is linked to inherited follicle sensitivity, androgen signaling, shortened growth cycles and follicle miniaturization.", proof: "Gradual temple, crown or part-line change can be classified by pattern, timing and miniaturization signs.", action: "Start with pattern mapping before suggesting support products." },
  { label: "Often manageable", level: 4, copy: "Earlier pattern loss may be slowed or partly improved with evidence-based medical options, but consistency and ongoing use matter.", proof: "Visible change is usually reviewed across months, not days, because follicles move through delayed cycles.", action: "Set a realistic review rhythm and clarify when licensed care is needed." },
  { label: "Often recoverable", level: 3, copy: "Temporary shedding from stressors, illness, childbirth, medication changes or deficiency may improve when the trigger is corrected.", proof: "A sudden shed can feel severe while follicles remain capable of producing a new fiber.", action: "Ask what changed 2-4 months before shedding started." },
  { label: "Needs medical care", level: 5, copy: "Patchy, painful, inflamed, infected or scarring loss should not be handled as a cosmetic quiz result.", proof: "These signs can require examination, labs, prescription treatment or urgent medical assessment.", action: "Pause the box route and recommend outside care." },
  { label: "Still developing", level: 2, copy: "PRP, light devices, exosomes, cell signaling and future regenerative approaches are active research areas with different evidence levels.", proof: "Emerging categories can be promising, but the evidence varies by method, protocol and condition.", action: "Label experimental or clinic-led routes separately from routine support." },
];

const reversibilityCards = [
  { label: "Recoverable", title: "The follicle is still capable", copy: "Shedding can look dramatic while follicles remain alive. When the trigger settles, density may return over months." },
  { label: "Manageable", title: "The follicle is miniaturizing", copy: "Pattern loss is not a simple on/off switch. Earlier intervention may preserve more active follicles and improve visible coverage." },
  { label: "Limited", title: "The follicle has been damaged or lost", copy: "Long-standing smooth bald areas, scarring inflammation or traction damage may not regrow without medical or surgical options." },
];

const treatmentLadder = [
  ["Cosmetic routine", "Cleansing, conditioning, scalp comfort and breakage reduction can improve the hair you keep, but they do not diagnose the cause."],
  ["Nutritional correction", "Protein, iron, zinc and other deficiencies matter when present; unnecessary high-dose supplements are not a shortcut to unlimited growth."],
  ["OTC options", "Topical minoxidil is an FDA-approved option for pattern hair loss, but it requires consistent use and time before change is assessed."],
  ["Prescription review", "Finasteride and other prescription routes require licensed clinical decision-making, contraindication review and ongoing monitoring."],
  ["Procedures", "Transplants move hair; they do not stop the biology affecting native hairs around the grafts."],
];

export default function DesignTwoScience() {
  return <main className="d2w-page d2w-science">
    <D2Hero eyebrow="The science" title="Hair biology, explained without turning it into a sales trick." copy="Explore why baldness feels personal, how genetics and DHT affect follicles, what can sometimes recover, what needs medical care and why even transplanted hair needs a long-term maintenance plan." image="/assets/science-baldness-concern.png" alt="Man noticing crown thinning in a bathroom mirror" note="Science-led · No guaranteed regrowth claims" cta="Build my hair profile" />
    <D2MethodStrip items={["Follicle", "Cycle", "DHT", "Scalp", "Evidence"]} />
    <D2Definition word="follicle" line="A living mini-organ below the skin that cycles, receives signals and produces a hair fiber." />
    <section className="d2-science-impact">
      <div>
        <span>Why baldness hits hard</span>
        <h2>Hair loss is visible biology, but it is also social and emotional.</h2>
        <p>People do not panic because a follicle changed size under the skin. They panic because the mirror changes first. Crown thinning, a receding hairline, a wider part or sudden shedding can affect privacy, age perception, confidence and how quickly someone starts buying random products.</p>
        <p>That is why the first job of the science page is not to sell hope. It is to separate what might be recoverable, what may be manageable, what needs outside medical assessment and what no cosmetic routine should promise.</p>
      </div>
      <div><Image src="/assets/science-research-table.png" alt="Hair progress photographs and trichology tools arranged for review" fill sizes="(max-width: 760px) 100vw, 46vw" /></div>
    </section>
    <D2Manifesto eyebrow="Start with the follicle" title="The visible fiber is the output of a living system." copy="The shaft above the skin is made of keratinized cells. Growth activity happens below the surface, where the follicle cycles and produces a new fiber." items={[
      { title: "Anagen", copy: "The active growth phase can last years for scalp hair." },
      { title: "Catagen", copy: "A short transition phase prepares the strand for rest." },
      { title: "Telogen", copy: "The resting phase ends as the old strand releases." },
      { title: "Repeated cycles", copy: "Changes today can reflect biology that shifted months earlier." },
    ]} />
    <D2ProductRail eyebrow="Science library" title="Five systems shape the route" items={[
      { label: "01", title: "Healthy terminal follicle", image: "/assets/science-library-healthy-v2.jpg", alt: "Three healthy terminal follicles producing thick hair fibers", copy: "A longer growth phase supports a thicker, longer fiber.", meta: "Follicle anatomy" },
      { label: "02", title: "Miniaturizing follicle", image: "/assets/science-library-miniaturization-v2.jpg", alt: "Three follicles showing progressive miniaturization", copy: "Susceptible follicles can produce progressively finer fibers.", meta: "Pattern loss" },
      { label: "03", title: "Growth cycle", image: "/assets/science-library-cycle-v2.jpg", alt: "Follicles shown at different stages of the growth cycle", copy: "Growth, transition, rest and release happen on a delayed timeline.", meta: "Cycle biology" },
      { label: "04", title: "Scalp environment", image: "/assets/science-library-scalp-v2.jpg", alt: "Balanced scalp barrier surrounding healthy follicles", copy: "Comfort and cleansing matter, but cannot diagnose the cause of loss.", meta: "Scalp care" },
      { label: "05", title: "Nutrition pathway", image: "/assets/science-library-nutrition-v2.jpg", alt: "Nutrients traveling through capillaries toward a hair follicle", copy: "Adequacy matters; more supplementation is not unlimited growth.", meta: "Health context" },
    ]} />
    <D2ProblemSplit image="/assets/science-genetics-family.png" alt="Father and adult son reviewing family photos with similar hairline patterns" eyebrow="Genetics + DHT" title="Genes decide which follicles hear the signal too loudly." intro="DHT is a normal hormone. In androgenetic alopecia, inherited follicle sensitivity changes how certain scalp regions respond, shortening the growth phase and gradually producing finer fibers." rows={[
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
    <section className="d2-science-status">
      <header>
        <div><span>Where hair science is now</span><h2>We know more than marketing says, and less than miracle ads suggest.</h2></div>
        <p>Choose a category to see what is understood, what it means for a person looking at their hair, and how Inruut should route the conversation without pretending every case has the same answer.</p>
      </header>
      <ScienceStatusExplorer items={scienceStatus} />
    </section>
    <D2ProblemSplit image="/assets/science-reversible-spectrum.png" alt="Educational sequence of active, miniaturized and inactive follicles" slides={[
      { image: "/assets/science-reversible-active-v3.jpg", mobileImage: "/assets/science-reversible-active-mobile-v3.jpg", alt: "Active follicles producing thick hair fibers" },
      { image: "/assets/science-reversible-miniaturized-v3.jpg", mobileImage: "/assets/science-reversible-miniaturized-mobile-v3.jpg", alt: "Miniaturized follicles producing progressively finer hair fibers" },
      { image: "/assets/science-reversible-limited-v3.jpg", mobileImage: "/assets/science-reversible-limited-mobile-v3.jpg", alt: "Smooth scalp area with limited remaining follicle structures" },
    ]} eyebrow="Is it reversible?" title="Recovery depends on whether the follicle is alive, miniaturized or gone." intro="The better question is not simply whether hair loss is reversible. It is what kind of loss is happening, how long it has been happening and whether the follicle can still produce a meaningful fiber." rows={[
      ["Temporary shedding", "Often improves after the trigger settles"],
      ["Pattern miniaturization", "Earlier care can preserve more follicles"],
      ["Scalp inflammation", "Needs diagnosis before product selection"],
      ["Traction or scarring", "Can become permanent when follicles are destroyed"],
      ["Fiber breakage", "Improves with routine and damage control"],
      ["Long-smooth bald areas", "Usually have limited cosmetic response"],
    ]} closing="Inruut should explain the category before it recommends the box." />
    <section className="d2-science-reversal">
      {reversibilityCards.map((item) => <article key={item.label}><span>{item.label}</span><h3>{item.title}</h3><p className="d2-desktop-supporting-copy">{item.copy}</p><details className="d2-mobile-inline-disclosure"><summary>Read the explanation</summary><p>{item.copy}</p></details></article>)}
    </section>
    <D2ResultsGallery eyebrow="Interactive growth cycle" title="Growth and shedding are parts of the same system." copy="Click each phase to see why hair changes need time to observe."><div className="d2w-interactive"><HairCycleExplorer /></div></D2ResultsGallery>
    <section className="d2-science-ladder">
      <div><span>Treatment reality</span><h2>The strongest plan is layered, not magical.</h2><p>Hair science has a ladder. Cosmetic care can support the scalp environment and fiber quality. Medical options may be appropriate for pattern loss. Procedures can move follicles. None of these replace correct classification, consistency or safety screening.</p></div>
      <div>{treatmentLadder.map(([title, copy], index) => <article key={title}><b>{String(index + 1).padStart(2, "0")}</b><h3>{title}</h3><p className="d2-desktop-supporting-copy">{copy}</p><details className="d2-mobile-inline-disclosure"><summary>Read why</summary><p>{copy}</p></details></article>)}</div>
    </section>
    <D2PromoPair items={[
      { label: "Healthy terminal follicle", title: "Longer growth, thicker fiber", image: "/assets/follicle-healthy.jpg", alt: "Healthy terminal follicle", copy: "A longer anagen phase allows a terminal scalp hair to grow longer and thicker before transition and rest." },
      { label: "Miniaturizing follicle", title: "Shorter cycle, finer fiber", image: "/assets/follicle-miniaturized.jpg", alt: "Miniaturized hair follicle", copy: "In pattern loss, susceptible follicles can progressively produce shorter, finer hairs over repeated cycles." },
    ]} />
    <D2Statement quote="Not every science-backed statement means the same thing." detail="A finished-product clinical study, an ingredient study, a lab measurement, a customer survey and a personal review are different levels of evidence. The page should label them differently." />
    <D2ProblemSplit image="/assets/science-transplant-care.png" alt="Man applying scalp serum after a hair transplant while monitoring native hair density" eyebrow="After a transplant" title="Transplanted hair does not freeze the rest of the scalp." intro="A transplant can move more resistant follicles into a visible area, but the native non-transplanted hair around it can continue to miniaturize with age and genetics. That is why many people still need long-term scalp, native-hair and medical maintenance planning." rows={[
      ["Transplanted zone", "Moved follicles can keep growing"],
      ["Native hair", "May keep thinning around the grafts"],
      ["Donor limits", "There is only so much movable hair"],
      ["Scalp health", "Comfort, scale and irritation still matter"],
      ["Medication review", "Belongs with licensed medical care"],
      ["Routine consistency", "Protects the look, not a guarantee"],
    ]} closing="A transplant changes placement; it does not end hair biology." />
    <D2EditorialSplit image="/assets/reviews/practitioner-progress-review.jpg" alt="Hair wellness practitioner reviewing standardized progress photographs" eyebrow="How Inruut practitioners use the science" title="Finite rules. Visible reasoning. Clear limits." copy="The profile organizes the reported concern, checks timing and warning signs, maps the five system layers and shows why each category was selected." />
    <section id="red-flags"><D2EditorialSplit image="/assets/practitioner-conversation.jpg" alt="Hair wellness practitioner reviewing a client's history" eyebrow="When the practitioner pauses" title="Sudden, patchy, painful, inflamed or scarring loss." copy="These signs may need physical examination, medical history, laboratory testing or prescription treatment outside Inruut. The online profile should pause the box route rather than force a sale." alert /></section>
    <D2MethodStrip items={["Classify", "Check", "Match", "Explain", "Limit"]} />
    <D2FinalCampaign image="/assets/root-wellness-box.jpg" alt="Illustrative five-layer Inruut Wellness Box" eyebrow="Understand before you add" title="Learn what may be behind the change. Then support the root." copy="The Inruut profile brings nourishment, balance, scalp care, targeted support and ritual together without pretending to replace medical assessment." />
  </main>;
}
