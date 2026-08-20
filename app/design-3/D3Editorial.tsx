import Image from "next/image";
import type { ReactNode } from "react";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Check, CircleAlert } from "lucide-react";
import { ThemeLink as Link } from "../components/ThemeLink";

type HeroProps = { eyebrow: string; title: string; copy: string; image: string; alt: string; note: string; cta?: string };
type RailItem = { image: string; alt: string; label: string; title: string; copy: string; meta?: string };
type ProofItem = { title: string; copy: string };
type CurveTone = "white" | "paper" | "powder" | "ink" | "mineral" | "signal" | "yellow";

function D3Curve({ tone, variant = "wave", compact = false }: { tone: CurveTone; variant?: "wave" | "swoop" | "arch"; compact?: boolean }) {
  const paths = {
    wave: "M0 45 C210 5 430 100 720 52 C1010 4 1230 96 1440 38 L1440 120 L0 120Z",
    swoop: "M0 88 C360 12 1040 12 1440 88 L1440 120 L0 120Z",
    arch: "M0 96 C410 -18 1030 -18 1440 96 L1440 120 L0 120Z",
  };
  return <svg className={`d3-curve d3-curve-${tone} ${compact ? "d3-curve-compact" : ""}`} viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true"><path d={paths[variant]} /></svg>;
}

export function D3Hero({ eyebrow, title, copy, image, alt, note, cta = "Take the hair quiz" }: HeroProps) {
  return (
    <section className="d3-hero d3-has-curve">
      <Image src={image} alt={alt} fill priority sizes="100vw" />
      <div className="d3-hero-veil" />
      <span className="d3-hero-edition">INRUUT / FIELD NOTE 03</span>
      <div className="d3-hero-copy"><p>{eyebrow}</p><h1>{title}</h1><div><span>{copy}</span><Link href="/quiz">{cta} <ArrowUpRight size={17} /></Link></div></div>
      <aside>{note}</aside>
      <D3Curve tone="white" variant="wave" />
    </section>
  );
}

export function D3IndexStrip({ items = ["Pattern", "Timing", "Scalp", "Routine", "Safety"] }: { items?: string[] }) {
  return <section className="d3-index-strip d3-has-curve">{items.map((item, index) => <div key={item}><span>0{index + 1}</span><b>{item}</b></div>)}<D3Curve tone="mineral" variant="swoop" compact /></section>;
}

export function D3Definition({ word = "ruuts", line }: { word?: string; line: string }) {
  return <section className="d3-definition d3-has-curve"><span>Definition / 01</span><strong>{word}</strong><p>{line}</p><ArrowDownRight size={34} /><D3Curve tone="white" variant="wave" /></section>;
}

export function D3Principles({ eyebrow, title, copy, items }: { eyebrow: string; title: string; copy: string; items: ProofItem[] }) {
  return (
    <section className="d3-principles d3-has-curve">
      <header><span>{eyebrow}</span><h2>{title}</h2><p>{copy}</p></header>
      <div>{items.map((item, index) => <article key={item.title}><b>0{index + 1}</b><h3>{item.title}</h3><p>{item.copy}</p></article>)}</div>
      <D3Curve tone="powder" variant="arch" />
    </section>
  );
}

export function D3Catalogue({ eyebrow, title, items }: { eyebrow: string; title: string; items: RailItem[] }) {
  return (
    <section className="d3-catalogue d3-has-curve">
      <div className="d3-heading"><span>{eyebrow}</span><h2>{title}</h2><Link href="/quiz">See my route <ArrowRight size={16} /></Link></div>
      <div className="d3-catalogue-grid">{items.map((item, index) => <article key={item.title}><div><Image src={item.image} alt={item.alt} fill sizes="(max-width: 700px) 78vw, 22vw" /><span>0{index + 1}</span></div><small>{item.label}</small><h3>{item.title}</h3><p>{item.copy}</p>{item.meta && <em>{item.meta}</em>}</article>)}</div>
      <D3Curve tone="ink" variant="swoop" />
    </section>
  );
}

export function D3Explainer({ image, alt, eyebrow, title, intro, rows, closing }: { image: string; alt: string; eyebrow: string; title: string; intro: string; rows: Array<[string,string]>; closing: string }) {
  return (
    <section className="d3-explainer d3-has-curve">
      <div className="d3-explainer-image"><Image src={image} alt={alt} fill sizes="(max-width: 760px) 100vw, 55vw" /></div>
      <article><span>{eyebrow}</span><h2>{title}</h2><p>{intro}</p><dl>{rows.map(([term, detail], index) => <div key={term}><i>0{index + 1}</i><dt>{term}</dt><dd>{detail}</dd></div>)}</dl><strong>{closing}</strong></article>
      <D3Curve tone="white" variant="wave" />
    </section>
  );
}

export function D3TopicRail({ title, items }: { title: ReactNode; items: RailItem[] }) {
  return (
    <section className="d3-topic-rail d3-has-curve"><div className="d3-heading"><span>Observation index</span><h2>{title}</h2><Link href="/quiz">Take the profile <ArrowRight size={16} /></Link></div><div className="d3-topic-grid">{items.map((item, index) => <article key={item.title}><div><Image src={item.image} alt={item.alt} fill sizes="(max-width: 700px) 76vw, 24vw" /></div><span>0{index + 1} / {item.label}</span><h3>{item.title}</h3></article>)}</div><D3Curve tone="paper" variant="arch" /></section>
  );
}

export function D3FeatureGrid({ eyebrow, title, copy, items, children }: { eyebrow: string; title: string; copy: string; items?: RailItem[]; children?: ReactNode }) {
  return (
    <section className={`d3-features d3-has-curve ${children ? "d3-features-interactive" : ""}`}>
      <div className="d3-heading"><span>{eyebrow}</span><h2>{title}</h2><p>{copy}</p></div>
      {children ? <div className="d3-interactive">{children}</div> : <div className="d3-feature-grid">{items?.map((item, index) => <article key={item.title}><div><Image src={item.image} alt={item.alt} fill sizes="(max-width: 760px) 88vw, 40vw" /></div><span>0{index + 1} / {item.label}</span><h3>{item.title}</h3><p>{item.copy}</p><small>{item.meta}</small></article>)}</div>}
      <D3Curve tone="white" variant="wave" />
    </section>
  );
}

export function D3DoubleFeature({ items }: { items: [RailItem,RailItem] }) {
  return <section className="d3-double-feature d3-has-curve">{items.map((item, index) => <article key={item.title}><div><Image src={item.image} alt={item.alt} fill sizes="(max-width: 760px) 100vw, 50vw" /></div><section><span>Case note / 0{index + 1}</span><small>{item.label}</small><h2>{item.title}</h2><p>{item.copy}</p><Link href="/science">Explore the science <ArrowUpRight size={16} /></Link></section></article>)}<D3Curve tone="mineral" variant="swoop" /></section>;
}

export function D3Quote({ quote, detail, nextTone = "signal" }: { quote: string; detail: string; nextTone?: CurveTone }) {
  return <section className="d3-quote d3-has-curve"><span>Inruut principle / 04</span><blockquote>“{quote}”</blockquote><p>{detail}</p><D3Curve tone={nextTone} variant="wave" /></section>;
}

export function D3CareBoundary({ image, alt, eyebrow, title, copy, alert = false }: { image: string; alt: string; eyebrow: string; title: string; copy: string; alert?: boolean }) {
  return <section className={`d3-care d3-has-curve ${alert ? "d3-care-alert" : ""}`}><article>{alert ? <CircleAlert size={29} /> : <Check size={29} />}<span>{eyebrow}</span><h2>{title}</h2><p>{copy}</p><Link href={alert ? "/science#red-flags" : "/quiz"}>{alert ? "Review care guidance" : "Build my profile"} <ArrowRight size={16} /></Link></article><div><Image src={image} alt={alt} fill sizes="(max-width: 760px) 100vw, 50vw" /></div><D3Curve tone={alert ? "white" : "signal"} variant="arch" /></section>;
}

export function D3Final({ image, alt, eyebrow, title, copy }: { image: string; alt: string; eyebrow: string; title: string; copy: string }) {
  return <section className="d3-final d3-has-curve"><Image src={image} alt={alt} fill sizes="100vw" /><div /><article><span>{eyebrow}</span><h2>{title}</h2><p>{copy}</p><Link href="/quiz">Take the hair quiz <ArrowUpRight size={17} /></Link></article><D3Curve tone="ink" variant="wave" /></section>;
}
