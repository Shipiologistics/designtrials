"use client";

import Image from "next/image";
import { useState } from "react";

const phases = [
  { name: "Anagen", stat: "Growth phase", copy: "The follicle actively produces a hair fiber. Most scalp follicles are normally in this long phase at a given time." },
  { name: "Catagen", stat: "Transition phase", copy: "Growth stops and the lower follicle regresses. This short transition prepares the strand for rest." },
  { name: "Telogen", stat: "Resting phase", copy: "The follicle rests before the old strand is released and a new cycle begins. A shift of many hairs into this phase can increase shedding." },
];

export function HairCycleExplorer() {
  const [active, setActive] = useState(0);
  return (
    <div className="cycle-explorer">
      <div className="cycle-image"><Image src="/assets/hair-cycle.jpg" alt="Illustration of growth, transition and resting phases of a hair follicle" fill sizes="(max-width: 800px) 100vw, 56vw" /></div>
      <div className="cycle-panel">
        <div className="cycle-buttons">
          {phases.map((phase, index) => <button key={phase.name} className={active === index ? "active" : ""} onClick={() => setActive(index)}>{phase.name}</button>)}
        </div>
        <p className="kicker">{phases[active].stat}</p>
        <h3>{phases[active].name}</h3>
        <p>{phases[active].copy}</p>
      </div>
    </div>
  );
}
