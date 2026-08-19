"use client";

import Image from "next/image";
import { FormEvent, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Check, Clock3, Mail, RotateCcw, ShieldAlert, ShieldCheck } from "lucide-react";
import { ThemeLink as Link } from "./ThemeLink";

type Answers = Record<string, string>;
type Question = {
  key: string;
  stage: string;
  title: string;
  helper: string;
  options: string[] | ((answers: Answers) => string[]);
};

const questions: Question[] = [
  { key: "path", stage: "About you", title: "Which path feels most relevant?", helper: "This changes the next questions without treating identity as a diagnosis.", options: ["Men's hair concerns", "Women's hair concerns", "General hair and scalp care"] },
  { key: "concern", stage: "What you notice", title: "What are you experiencing most?", helper: "Choose the one change you most want the box to address.", options: (answers) => answers.path === "Women's hair concerns"
    ? ["Shedding around my cycle or life stage", "Thinning plus stress", "Overall thinning or a wider part", "Breakage and dryness", "Scalp irritation", "A sudden or patchy change"]
    : answers.path === "Men's hair concerns"
      ? ["A receding hairline", "Thinning at the crown", "General thinning or shedding", "Scalp irritation", "A sudden or patchy change"]
      : ["Overall thinning or shedding", "Breakage and dryness", "Scalp irritation", "A sudden or patchy change"] },
  { key: "signal", stage: "Useful context", title: "Which detail sounds closest?", helper: "This helps organize the route. It does not determine a hormone, thyroid, adrenal or DHT diagnosis.", options: (answers) => answers.path === "Women's hair concerns"
    ? ["The timing seems cycle or life-stage related", "High stress or burnout came first", "A health or medication change came first", "There is no obvious trigger", "Pain, burning or scarring is present", "Prefer not to answer"]
    : ["The change has been gradual", "Hair loss runs in my family", "Shedding increased recently", "My scalp is oily or irritated", "Pain, burning or scarring is present", "Prefer not to answer"] },
  { key: "timeline", stage: "Timeline", title: "How long has this been noticeable?", helper: "Hair-cycle changes are measured in months, while sudden changes can need a different next step.", options: ["Recently started", "3-6 months", "More than a year", "Ongoing for years", "Not sure"] },
  { key: "stress", stage: "Life rhythm", title: "How would you describe your recent stress?", helper: "Stress is one piece of context, not a diagnosis or a promise that one supplement will fix the concern.", options: ["High or overwhelming", "Moderate", "Low", "Prefer not to answer"] },
  { key: "preference", stage: "Your preference", title: "What kind of routine feels most natural to you?", helper: "The final system still shows why every selected element belongs.", options: ["Natural or botanical", "Internal nourishment", "Topical scalp care", "A guided ritual", "Open to all appropriate options"] },
  { key: "safety", stage: "Safety check", title: "Are any of these warning signs present?", helper: "This final check helps an Inruuts practitioner know when to pause a box recommendation.", options: ["No warning signs", "Sudden distinct patches", "Pain, burning or inflammation", "Heavy scaling or possible scarring", "Eyebrow or eyelash loss", "Prefer not to answer"] },
];

const boxes = {
  cycle: {
    name: "Cycle Root Balance Box",
    summary: "A working recommendation for cycle or life-stage context, designed around a manageable scalp, nourishment and review ritual without claiming to diagnose hormone status.",
  },
  reset: {
    name: "Root Reset Box",
    summary: "A working recommendation for stress-linked shedding context, with a deliberately simple routine and a review point that looks beyond products alone.",
  },
  pattern: {
    name: "Pattern Root Support Box",
    summary: "A working recommendation for gradual hairline, crown or overall pattern concerns, organized around scalp fit, consistency and realistic timelines.",
  },
  scalp: {
    name: "Scalp Restore Box",
    summary: "A working recommendation centered on comfort, cleansing rhythm and topical fit when irritation or buildup is the main reported concern.",
  },
};

const layerCopy = [
  ["Foundation support", "Internal nourishment considered with formula, amount and cautions shown before purchase."],
  ["Scalp environment", "Cleansing and topical care matched to the reported scalp context."],
  ["Growth-cycle alignment", "A realistic timeline for consistency, documentation and reassessment."],
  ["Root-focused ritual", "A direct scalp or tool-based step only when approved and appropriate."],
  ["Guided ritual", "A concise daily, weekly and review routine."],
];

function recommendBox(answers: Answers) {
  if (answers.concern?.includes("Scalp irritation") || answers.signal === "My scalp is oily or irritated") return boxes.scalp;
  if (answers.path === "Women's hair concerns" && (answers.concern?.includes("cycle") || answers.signal?.includes("cycle"))) return boxes.cycle;
  if (answers.stress === "High or overwhelming" || answers.concern === "Thinning plus stress" || answers.signal === "High stress or burnout came first") return boxes.reset;
  return boxes.pattern;
}

export function HairQuiz() {
  const [step, setStep] = useState(-1);
  const [answers, setAnswers] = useState<Answers>({});
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState("");
  const finished = step === questions.length;
  const current = questions[step];
  const options = current ? (typeof current.options === "function" ? current.options(answers) : current.options) : [];
  const recommendedBox = useMemo(() => recommendBox(answers), [answers]);
  const needsOutsideCare = answers.concern === "A sudden or patchy change"
    || answers.signal === "Pain, burning or scarring is present"
    || (answers.safety !== undefined && !["No warning signs", "Prefer not to answer"].includes(answers.safety));

  function answer(value: string) {
    setAnswers((existing) => ({ ...existing, [current.key]: value }));
    window.setTimeout(() => {
      setStep((valueNow) => valueNow + 1);
      window.scrollTo(0, 0);
    }, 140);
  }

  function reset() {
    setAnswers({});
    setStep(-1);
    setShowResults(false);
    setEmail("");
    window.scrollTo(0, 0);
  }

  function begin() { setStep(0); window.scrollTo(0, 0); }
  function goBack() { setStep((currentStep) => currentStep - 1); window.scrollTo(0, 0); }

  function submitEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setShowResults(true);
    window.scrollTo(0, 0);
  }

  if (step === -1) {
    return (
      <div className="quiz-welcome">
        <div className="quiz-welcome-image"><Image src="/assets/quiz-hero.jpg" alt="Diverse adults with a range of hair textures" fill priority sizes="(max-width: 800px) 100vw, 48vw" /></div>
        <div className="quiz-welcome-copy">
          <p className="kicker">The Inruuts Hair Root Wellness profile</p>
          <h1>Seven useful questions. One box you can understand.</h1>
          <p>Tell us what you notice, when it began, the context around it and what kind of ritual fits. We&apos;ll show one working box recommendation or pause the route when outside medical care belongs first.</p>
          <div className="quiz-promises"><span><Clock3 size={18} /> About 3 minutes</span><span><ShieldCheck size={18} /> No diagnosis</span><span><Check size={18} /> Results without email</span></div>
          <button className="primary-button" onClick={begin}>Start my hair analysis <ArrowRight size={18} /></button>
        </div>
      </div>
    );
  }

  if (finished && needsOutsideCare) {
    return (
      <div className="care-result">
        <div className="care-image"><Image src="/assets/practitioner-conversation.jpg" alt="Hair wellness practitioner reviewing a routine journal with a client" fill sizes="(max-width: 800px) 100vw, 44vw" /></div>
        <div>
          <p className="kicker">The responsible next step</p><ShieldAlert size={34} />
          <h1>Pause the box and arrange an outside medical assessment.</h1>
          <p>Your answers include a sudden, patchy, painful, inflamed, heavily scaling or possibly scarring change. An Inruuts practitioner can recognize when the profile has reached its limit, but cannot diagnose these signs. A licensed medical professional can examine the area and decide whether testing or treatment is appropriate.</p>
          <div className="care-actions"><button className="secondary-button" onClick={reset}><RotateCcw size={17} /> Retake profile</button><Link className="primary-button" href="/science#red-flags">Review the warning signs <ArrowRight size={17} /></Link></div>
        </div>
      </div>
    );
  }

  if (finished && !showResults) {
    return (
      <div className="result-capture">
        <Mail size={28} strokeWidth={1.4} />
        <p className="kicker">Your recommendation is ready</p>
        <h1>See your personalized Hair Root Wellness Box.</h1>
        <p>Enter an email to continue with a saved-result concept, or view the complete recommendation without sharing contact details.</p>
        <form onSubmit={submitEmail}>
          <label htmlFor="result-email">Email address</label>
          <input id="result-email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" required />
          <button className="primary-button" type="submit">Continue with email <ArrowRight size={17} /></button>
        </form>
        <button className="text-action" onClick={() => setShowResults(true)}>View my results without email</button>
        <small>Local prototype only. This form does not send or store your email.</small>
      </div>
    );
  }

  if (finished) {
    return (
      <div className="quiz-results">
        <section className="result-overview">
          <p className="kicker">Your one-box recommendation</p>
          <h1>{recommendedBox.name}</h1>
          <p>{recommendedBox.summary}</p>
          <div className="answer-tags">{Object.entries(answers).map(([key, value]) => <span key={key}>{value}</span>)}</div>
          <button className="text-action" onClick={reset}><RotateCcw size={16} /> Retake the profile</button>
        </section>
        <section className="result-plan">
          <div className="plan-heading"><div><span>Illustrative system</span><h2>Why these five layers</h2></div><strong>01</strong></div>
          <div className="result-layers">
            {layerCopy.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}
          </div>
          <div className="not-included"><b>Shown before any purchase:</b> exact products, ingredients or Supplement Facts, quantities, usage, cautions, USD price and recurring terms. None are finalized in this prototype.</div>
          <Link className="primary-button plan-button" href="/plan">View the full box framework <ArrowRight size={18} /></Link>
          <p className="disclosure">Working recommendation only. The profile does not diagnose a condition or determine hormone, thyroid, adrenal, nutrient or DHT status.</p>
        </section>
      </div>
    );
  }

  return (
    <div className="quiz-shell">
      <aside>
        <p className="kicker">Your profile</p>
        <ol>{questions.map((question, index) => <li key={question.key} className={index === step ? "active" : index < step ? "done" : ""}><span>{index < step ? <Check size={14} /> : index + 1}</span>{question.stage}</li>)}</ol>
        <div className="privacy-note"><ShieldCheck size={18} /><p>Your answers stay in this browser and are not sent to advertising tools.</p></div>
      </aside>
      <section className="quiz-stage">
        <div className="quiz-count">Question {step + 1} of {questions.length}</div>
        <p className="kicker">{current.stage}</p><h1>{current.title}</h1><p className="question-help">{current.helper}</p>
        <div className="answer-grid">{options.map((option) => <button key={option} onClick={() => answer(option)}><span>{option}</span><ArrowRight size={18} /></button>)}</div>
        <button className="text-action" onClick={goBack}><ArrowLeft size={16} /> Back</button>
      </section>
    </div>
  );
}
