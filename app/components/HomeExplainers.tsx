"use client";

import Image from "next/image";
import { Activity, Apple, Dna, Droplets, HeartPulse, Scissors, ShieldCheck } from "lucide-react";
import { useState } from "react";

const causes = [
  { label: "Pattern + genetics", title: "Follicles can become sensitive to androgen signaling", copy: "In androgenetic alopecia, susceptible follicles gradually miniaturize. The location and pace of change help distinguish it from sudden shedding or patchy loss.", image: "/assets/dht-mechanism.jpg", icon: Dna },
  { label: "Cycle disruption", title: "A past event can change shedding months later", copy: "Illness, childbirth, surgery, rapid weight change, major stress and some medication changes can shift more follicles into rest before increased shedding is visible.", image: "/assets/hair-cycle.jpg", icon: Activity },
  { label: "Scalp condition", title: "Inflammation and heavy scale need the right level of care", copy: "Oil and buildup can be managed cosmetically, but pain, pustules, burning, scarring or persistent heavy scale belong with a clinician.", image: "/assets/scalp-barrier.jpg", icon: Droplets },
  { label: "Nutrition + health", title: "Deficiency is possible, but it should not be guessed", copy: "Protein, iron and other nutrients support normal growth. History, symptoms and appropriate testing are more useful than automatically adding a high-dose supplement.", image: "/assets/nutrition-hair.jpg", icon: Apple },
  { label: "Stress + life stage", title: "Timing matters as much as the visible pattern", copy: "Postpartum shifts, menopause, acute stress and health events can overlap with pattern loss. A useful profile keeps those routes separate.", image: "/assets/postpartum-profile.jpg", icon: HeartPulse },
  { label: "Breakage + traction", title: "Not every loss of density begins inside the follicle", copy: "Bleach, heat, friction and repeated tension can snap fibers or stress the hairline. Fiber protection and gentler styling may be the more relevant first step.", image: "/assets/shedding-breakage.jpg", icon: Scissors },
];

const profiles = {
  men: [
    { stage: "Hairline", label: "Gradual temple recession", image: "/assets/men-temples.jpg", route: "Pattern education + clinical options" },
    { stage: "Crown", label: "Visible vertex thinning", image: "/assets/men-crown.jpg", route: "Early assessment matters" },
    { stage: "Diffuse", label: "Density changing across the top", image: "/assets/men-diffuse.jpg", route: "Separate pattern from shedding" },
  ],
  women: [
    { stage: "Part", label: "A widening center part", image: "/assets/women-part.jpg", route: "Pattern + life-stage review" },
    { stage: "Shedding", label: "More full-length hairs releasing", image: "/assets/women-shedding.jpg", route: "Look back at recent triggers" },
    { stage: "Breakage", label: "Uneven length and snapped fibers", image: "/assets/women-breakage.jpg", route: "Fiber-first routine" },
  ],
};

const timelines = {
  men: [
    ["Month 0", "Document the pattern"], ["Month 1", "Build a repeatable routine"], ["Month 2", "Track scalp tolerance"],
    ["Month 3", "Compare shedding and photos"], ["Month 6", "Review density with context"], ["Month 12", "Reassess the plan"],
  ],
  women: [
    ["Month 0", "Separate loss from breakage"], ["Month 1", "Reduce avoidable fiber stress"], ["Month 2", "Track cycle and scalp clues"],
    ["Month 3", "Review trigger timing"], ["Month 6", "Compare like-for-like photos"], ["Month 12", "Reassess with a clinician if needed"],
  ],
};

export function RootCauseExplorer() {
  const [active, setActive] = useState(0);
  const cause = causes[active];
  return (
    <div className="root-cause-explorer">
      <div className="cause-selector" role="tablist" aria-label="Hair concern contributors">
        {causes.map((item, index) => {
          const Icon = item.icon;
          return <button key={item.label} className={active === index ? "active" : ""} role="tab" aria-selected={active === index} onClick={() => setActive(index)}><Icon size={30} /><span>{item.label}</span></button>;
        })}
      </div>
      <div className="cause-explainer">
        <div className="cause-explainer-image"><Image src={cause.image} alt="Educational visual for the selected hair concern contributor" fill sizes="(max-width: 760px) 100vw, 46vw" /></div>
        <div><p className="kicker">Selected contributor</p><h3>{cause.title}</h3><p>{cause.copy}</p><span className="micro-note"><ShieldCheck size={15} /> One person can have more than one contributor</span></div>
      </div>
    </div>
  );
}

export function ProfileStageExplorer() {
  const [group, setGroup] = useState<"men" | "women">("men");
  return (
    <div className="stage-explorer">
      <div className="segmented" role="tablist" aria-label="Profile type"><button className={group === "men" ? "active" : ""} onClick={() => setGroup("men")}>Men</button><button className={group === "women" ? "active" : ""} onClick={() => setGroup("women")}>Women</button></div>
      <div className="stage-grid">
        {profiles[group].map((profile, index) => <article key={profile.stage}><div className="stage-image"><Image src={profile.image} alt={profile.label} fill sizes="(max-width: 760px) 72vw, 28vw" /></div><span className="stage-status">0{index + 1} / {profile.stage}</span><h3>{profile.label}</h3><p>{profile.route}</p></article>)}
        <article className="stage-care"><CircleMark /><span className="stage-status">Professional care</span><h3>Sudden, patchy, painful or inflamed</h3><p>This route should pause product recommendations and prioritize a dermatologist.</p></article>
      </div>
    </div>
  );
}

function CircleMark() { return <div className="care-mark"><span>!</span></div>; }

export function JourneyTimeline() {
  const [group, setGroup] = useState<"men" | "women">("men");
  return (
    <div className="journey-panel">
      <div className="segmented" role="tablist" aria-label="Journey type"><button className={group === "men" ? "active" : ""} onClick={() => setGroup("men")}>Men</button><button className={group === "women" ? "active" : ""} onClick={() => setGroup("women")}>Women</button></div>
      <h2>What a responsible review timeline looks like</h2>
      <div className="timeline-track">
        {timelines[group].map(([month, copy], index) => <div key={month}><span className="timeline-dot">{index + 1}</span><b>{month}</b><p>{copy}</p></div>)}
      </div>
      <p className="timeline-note">This is a review cadence, not a promise of regrowth. Timelines vary by cause, treatment and individual biology.</p>
    </div>
  );
}
