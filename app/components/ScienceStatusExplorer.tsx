"use client";

import { useState } from "react";

type ScienceStatusItem = {
  label: string;
  copy: string;
  proof: string;
  action: string;
  level: number;
};

export function ScienceStatusExplorer({ items }: { items: ScienceStatusItem[] }) {
  const [active, setActive] = useState(0);
  const current = items[active];

  return (
    <div className="science-status-explorer">
      <div className="science-status-tabs" role="tablist" aria-label="Hair science status categories">
        {items.map((item, index) => (
          <button
            aria-controls="science-status-panel"
            aria-selected={active === index}
            className={active === index ? "active" : ""}
            id={`science-status-tab-${index}`}
            key={item.label}
            onClick={() => setActive(index)}
            role="tab"
            type="button"
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            {item.label}
          </button>
        ))}
      </div>
      <article aria-labelledby={`science-status-tab-${active}`} id="science-status-panel" role="tabpanel">
        <div>
          <span>Evidence confidence</span>
          <div aria-label={`${current.level} out of 5 evidence confidence`} className="science-status-meter">
            {Array.from({ length: 5 }).map((_, index) => <i className={index < current.level ? "filled" : ""} key={index} />)}
          </div>
        </div>
        <h3>{current.label}</h3>
        <p>{current.copy}</p>
        <dl>
          <div><dt>What this means</dt><dd>{current.proof}</dd></div>
          <div><dt>Inruut route</dt><dd>{current.action}</dd></div>
        </dl>
      </article>
    </div>
  );
}
