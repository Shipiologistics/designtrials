"use client";

import Image from "next/image";
import { Camera, ScanSearch, ShieldCheck } from "lucide-react";
import { useState, type CSSProperties } from "react";

const stages = ["Month 0", "Month 3", "Month 6", "Month 12"];

const stageCopy = {
  men: [
    ["Document the starting pattern", "Use the same angle, lighting and hair length so later comparisons are not distorted by presentation."],
    ["Review tolerance and consistency", "Three months is an early checkpoint for routine fit and shedding context, not a guaranteed regrowth deadline."],
    ["Compare like with like", "Look for directional change in standardized photos while considering the cause and any clinician-led treatment."],
    ["Reassess the whole plan", "A longer review can help decide what should continue, change or move to professional evaluation."],
  ],
  women: [
    ["Document the part and density", "Use the same part placement, light, wash timing and styling so the baseline is genuinely comparable."],
    ["Review shedding and fiber care", "Track full-length shed hairs separately from breakage while checking whether the routine is realistic."],
    ["Compare density with context", "Life stage, recent health events and clinical treatment can all shape what a six-month comparison means."],
    ["Reassess persistent change", "Ongoing widening, symptoms or uncertainty may deserve a dermatologist review rather than more cosmetic steps."],
  ],
};

const dimensions = {
  men: { width: 1536, height: 1024 },
  women: { width: 1691, height: 930 },
};

export function ProgressSimulation({ image, subject }: { image: string; subject: "men" | "women" }) {
  const [stage, setStage] = useState(0);
  const copy = stageCopy[subject][stage];
  const source = dimensions[subject];

  return (
    <div className={`simulation simulation-${subject}`}>
      <div className="simulation-visual">
        <div className="simulation-frame" role="img" aria-label={`Illustrative ${subject}'s hair-density simulation at ${stages[stage]}`}>
          <Image
            className="simulation-strip"
            src={image}
            alt=""
            aria-hidden="true"
            width={source.width}
            height={source.height}
            sizes="(max-width: 760px) 90vw, 480px"
            style={{ "--simulation-stage": stage } as CSSProperties}
          />
          <div className="simulation-badge"><span>Illustrative stage 0{stage + 1}</span><strong>{stages[stage]}</strong></div>
        </div>

        <div className="simulation-copy">
          <p className="kicker">Standardized progress review</p>
          <h3>{copy[0]}</h3>
          <p className="simulation-desktop-guidance">{copy[1]}</p>
          <div className="comparison-rules simulation-desktop-guidance">
            <span><Camera size={17} /> Same light</span>
            <span><ScanSearch size={17} /> Same angle</span>
            <span><ShieldCheck size={17} /> Honest context</span>
          </div>
          <details className="simulation-mobile-guidance">
            <summary>Photo review guidance</summary>
            <p>{copy[1]}</p>
            <div className="comparison-rules">
              <span><Camera size={17} /> Same light</span>
              <span><ScanSearch size={17} /> Same angle</span>
              <span><ShieldCheck size={17} /> Honest context</span>
            </div>
          </details>
        </div>
      </div>

      <div className="simulation-control">
        <div className="simulation-control-heading"><span>Move through the illustrative timeline</span><strong>{stages[stage]}</strong></div>
        <input aria-label="Illustrative progress month" type="range" min="0" max="3" step="1" value={stage} onChange={(event) => setStage(Number(event.target.value))} />
        <div className="range-labels">
          {stages.map((label, index) => <button type="button" className={stage === index ? "active" : ""} key={label} onClick={() => setStage(index)}><span>0{index + 1}</span>{label}</button>)}
        </div>
      </div>

      <p className="disclosure">Generated simulation, not a customer result. Response depends on the cause, treatment, consistency and individual biology; some forms of hair loss do not regrow.</p>
    </div>
  );
}
