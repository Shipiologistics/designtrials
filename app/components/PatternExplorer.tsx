"use client";

import Image from "next/image";
import { useState } from "react";

type Item = { label: string; title: string; copy: string; image: string; alt: string };

export function PatternExplorer({ items }: { items: Item[] }) {
  const [active, setActive] = useState(0);
  const item = items[active];
  return (
    <div className="pattern-explorer">
      <div className="pattern-tabs" role="tablist" aria-label="Hair concern patterns">
        {items.map((entry, index) => (
          <button key={entry.label} role="tab" aria-selected={active === index} className={active === index ? "active" : ""} onClick={() => setActive(index)}>
            <span>0{index + 1}</span>{entry.label}
          </button>
        ))}
      </div>
      <div className="pattern-display">
        <div className="pattern-image"><Image src={item.image} alt={item.alt} fill sizes="(max-width: 800px) 100vw, 52vw" /></div>
        <div className="pattern-copy"><p className="kicker">{item.label}</p><h3>{item.title}</h3><p>{item.copy}</p><span className="education-tag">Education, not diagnosis</span></div>
      </div>
    </div>
  );
}
