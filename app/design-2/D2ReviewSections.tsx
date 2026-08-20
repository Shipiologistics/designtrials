"use client";

import Image from "next/image";
import { Camera, Check, ScanSearch, ShieldCheck } from "lucide-react";
import { useState } from "react";

type Subject = "men" | "women";

const phases = [
  { month: "Month 0", title: "Document the baseline", copy: "Record the visible pattern before changing the routine." },
  { month: "Month 3", title: "Review fit and consistency", copy: "An early checkpoint is useful for routine fit, not a result deadline." },
  { month: "Month 6", title: "Compare like with like", copy: "Use the same angle, part, hair length, wash timing and light." },
  { month: "Month 12", title: "Reassess the whole route", copy: "Review direction, tolerance and whether an Inruut practitioner should pause or adjust the route." },
];

const profiles = {
  men: { label: "Crown journal", heading: "A crown-density review", alt: "Generated men's crown-density checkpoint" },
  women: { label: "Part journal", heading: "A center-part review", alt: "Generated women's center-part checkpoint" },
};

export function D2PhotoJournal({ subject }: { subject?: Subject }) {
  const [activeSubject, setActiveSubject] = useState<Subject>(subject || "men");
  const profile = profiles[activeSubject];

  return (
    <section className="d2-review-journal">
      <div className="d2-review-heading">
        <div><span>Illustrative photo journal</span><h2>A fair review shows the quiet middle, too.</h2></div>
        <p>Progress photography is most useful when the presentation stays consistent. These generated phases demonstrate a review method, not a customer result or a guaranteed outcome.</p>
      </div>
      {!subject && <div className="d2-review-controls" role="tablist" aria-label="Choose an illustrative hair journal">
        <button role="tab" aria-selected={activeSubject === "men"} className={activeSubject === "men" ? "active" : ""} onClick={() => setActiveSubject("men")}>Men / Crown</button>
        <button role="tab" aria-selected={activeSubject === "women"} className={activeSubject === "women" ? "active" : ""} onClick={() => setActiveSubject("women")}>Women / Part</button>
      </div>}
      <div className="d2-review-profile"><span>{profile.label}</span><h3>{profile.heading}</h3></div>
      <div className="d2-review-sequence">
        {phases.map((phase, index) => <article key={phase.month}>
          <div><Image src={`/assets/reviews/${activeSubject}-month-${index === 3 ? 12 : index * 3}.png`} alt={`${profile.alt} at ${phase.month}`} fill sizes="(max-width: 760px) 78vw, 25vw" /></div>
          <span>0{index + 1} / {phase.month}</span><h4>{phase.title}</h4><p>{phase.copy}</p>
        </article>)}
      </div>
      <div className="d2-review-disclosure"><ShieldCheck size={18} /><p><b>Generated educational sequence.</b> Individual response depends on the cause, treatment, consistency and biology. Some forms of hair loss do not regrow.</p></div>
    </section>
  );
}

const trustItems = [
  { icon: Camera, image: "/assets/reviews/progress-photo-setup.png", label: "Photo standard", title: "Same angle. Same light. Honest context.", copy: "Useful comparison controls part placement, lighting, styling, wash timing and camera distance." },
  { icon: ScanSearch, image: "/assets/reviews/practitioner-progress-review.jpg", label: "Practitioner review", title: "Know when the profile should stop.", copy: "An Inruut practitioner can review context and consistency, then pause the box route when warning signs need outside medical assessment." },
  { icon: Check, image: "/assets/reviews/quality-preparation.png", label: "Quality context", title: "Show the process, not vague authority.", copy: "Formula, manufacturing, stability and claims require documented review before a finished product earns trust." },
];

export function D2TrustFramework() {
  return (
    <section className="d2-trust-framework">
      <div className="d2-review-heading"><div><span>Trust, made visible</span><h2>What an honest practitioner review includes.</h2></div><p>Trust is not a row of unsupported badges. It comes from comparable documentation, clear evidence labels and a practitioner who knows when the online profile has reached its limit.</p></div>
      <div className="d2-trust-grid">{trustItems.map(({ icon: Icon, image, label, title, copy }) => <article key={title}><div><Image src={image} alt={title} fill sizes="(max-width: 760px) 90vw, 33vw" /></div><span><Icon size={16} />{label}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
      <p className="d2-trust-note">All people and scenarios shown in this section are generated educational visuals. They are not customer endorsements or evidence of product performance.</p>
    </section>
  );
}
