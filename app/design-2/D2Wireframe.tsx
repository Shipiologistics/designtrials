import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { ArrowRight, BookOpen, Check, CircleAlert, CircleDot, Droplets, Eye, Globe2, RefreshCw, ShieldCheck, Sprout, Star } from "lucide-react";
import { ThemeLink as Link } from "../components/ThemeLink";

type HeroProps = {
  eyebrow: string;
  title: string;
  copy: string;
  image: string;
  alt: string;
  note: string;
  cta?: string;
};

type RailItem = {
  image: string;
  alt: string;
  label: string;
  title: string;
  copy: string;
  meta?: string;
  slides?: Array<{ image: string; mobileImage?: string; alt: string }>;
};
type ProofItem = { title: string; copy: string };

const proofIcons = [ShieldCheck, Star, Globe2, Eye];

const rootSystemItems = [
  { icon: CircleDot, number: "01", title: "Foundation support", copy: "Internal nourishment is considered in context, with exact formulas, amounts and cautions visible before purchase." },
  { icon: Droplets, number: "02", title: "Scalp environment", copy: "Cleansing and topical care are selected around comfort, buildup, wash frequency and routine fit." },
  { icon: RefreshCw, number: "03", title: "Growth-cycle alignment", copy: "The plan sets a realistic review rhythm around the hair cycle instead of promising an instant deadline." },
  { icon: Sprout, number: "04", title: "Root-focused ritual", copy: "A direct scalp or tool-based step belongs only when the profile, instructions and safety boundaries support it." },
  { icon: BookOpen, number: "05", title: "Guided ritual", copy: "A concise routine card turns the selected elements into daily, weekly and review steps that can be maintained." },
];

export function D2Hero({ eyebrow, title, copy, image, alt, note, cta = "Take the hair quiz" }: HeroProps) {
  return (
    <section className="d2w-hero">
      <Image src={image} alt={alt} fill priority sizes="100vw" />
      <div className="d2w-hero-shade" />
      <div className="d2w-hero-copy">
        <p className="d2w-eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{copy}</p>
        <div><Link href="/quiz">{cta} <ArrowRight size={17} /></Link><span>{note}</span></div>
      </div>
    </section>
  );
}

export function D2MethodStrip({ items = ["Pattern", "Timing", "Scalp", "Routine", "Safety"] }: { items?: string[] }) {
  return (
    <section className="d2w-method-strip">
      <h2>The Inruut method</h2>
      <div>{[...items, ...items].map((item, index) => <span key={`${item}-${index}`}>{item}</span>)}</div>
    </section>
  );
}

export function D2Definition({ word = "inruut", line }: { word?: string; line: string }) {
  return <section className="d2w-definition"><strong style={{ "--d2-definition-letters": word.length } as CSSProperties}>{word.split("").join(" · ")}</strong><p>{line}</p></section>;
}

export function D2Manifesto({ eyebrow, title, copy, items }: { eyebrow: string; title: string; copy: string; items: ProofItem[] }) {
  return (
    <section className="d2w-manifesto">
      <div className="d2w-section-intro"><p>{eyebrow}</p><h2>{title}</h2><span>{copy}</span></div>
      <div className="d2w-proof-grid">
        {items.map((item, index) => {
          const Icon = proofIcons[index % proofIcons.length];
          return <article key={item.title}><Icon size={34} strokeWidth={1.3} /><h3>{item.title}</h3><p>{item.copy}</p></article>;
        })}
      </div>
    </section>
  );
}

export function D2RootSystem({ eyebrow = "What is inside", title = "A complete Root Wellness System", copy = "Five coordinated layers support the internal foundation, scalp environment, hair-growth cycle, root-focused routine and the consistency that connects them." }: { eyebrow?: string; title?: string; copy?: string }) {
  return (
    <section className="d2-root-system">
      <header>
        <div><span>{eyebrow}</span><h2>{title}</h2></div>
        <p>{copy}</p>
      </header>
      <div className="d2-root-system-grid">
        {rootSystemItems.map(({ icon: Icon, number, title: itemTitle, copy: itemCopy }) => (
          <article key={itemTitle}>
            <div><span>{number}</span><Icon size={30} strokeWidth={1.25} /></div>
            <h3>{itemTitle}</h3>
            <p className="d2-desktop-supporting-copy">{itemCopy}</p>
            <details className="d2-mobile-inline-disclosure">
              <summary>View this layer</summary>
              <p>{itemCopy}</p>
            </details>
          </article>
        ))}
      </div>
      <footer>
        <p><b>Nothing is filler.</b> Every selected component must have a stated role, full pre-purchase details and a clear reason for inclusion.</p>
        <Link href="/plan">Explore the box framework <ArrowRight size={15} /></Link>
      </footer>
    </section>
  );
}

export function D2ProductRail({ eyebrow, title, items }: { eyebrow: string; title: string; items: RailItem[] }) {
  return (
    <section className="d2w-product-section">
      <div className="d2w-rail-heading"><div><p>{eyebrow}</p><h2>{title}</h2></div><Link href="/quiz">View my route <ArrowRight size={15} /></Link></div>
      <div className="d2w-product-rail">
        {items.map((item) => <article key={item.title}><div><Image src={item.image} alt={item.alt} fill sizes="(max-width: 600px) 75vw, 20vw" /></div><span>{item.label}</span><h3>{item.title}</h3><p>{item.copy}</p>{item.meta && <small>{item.meta}</small>}</article>)}
      </div>
    </section>
  );
}

export function D2ProblemSplit({ image, mobileImage, imageFit = "cover", alt, eyebrow, title, intro, rows, closing, slides }: { image: string; mobileImage?: string; imageFit?: "cover" | "contain"; alt: string; eyebrow: string; title: string; intro: string; rows: Array<[string,string]>; closing: string; slides?: Array<{ image: string; mobileImage?: string; alt: string }> }) {
  return (
    <section className="d2w-problem">
      <div className={`d2w-problem-image${slides ? " d2w-problem-image--slideshow" : ""}${mobileImage ? " d2w-problem-image--mobile-source" : ""}${imageFit === "contain" ? " d2w-problem-image--contain" : ""}`} role={slides ? "img" : undefined} aria-label={slides ? alt : undefined}>
        <Image className="d2w-problem-poster" src={image} alt={alt} fill sizes="(max-width: 760px) 100vw, 50vw" />
        {mobileImage && <Image className="d2w-problem-mobile-poster" src={mobileImage} alt={alt} fill sizes="(max-width: 900px) 100vw, 50vw" />}
        {slides && <div className="d2w-problem-slides" aria-hidden="true">
          {slides.map((slide) => <div key={slide.image}>
            <Image className="d2w-problem-slide-desktop" src={slide.image} alt="" fill sizes="50vw" />
            {slide.mobileImage && <Image className="d2w-problem-slide-mobile" src={slide.mobileImage} alt="" fill sizes="100vw" />}
          </div>)}
        </div>}
      </div>
      <div className="d2w-problem-copy">
        <span>{eyebrow}</span><h2>{title}</h2><p>{intro}</p>
        <div className="d2w-problem-details d2w-problem-details--desktop">{rows.map(([left,right]) => <p key={left}><b>{left}</b><em>{right}</em></p>)}<strong>{closing}</strong></div>
        <details className="d2w-problem-disclosure">
          <summary>View full breakdown</summary>
          <div className="d2w-problem-details">{rows.map(([left,right]) => <p key={left}><b>{left}</b><em>{right}</em></p>)}<strong>{closing}</strong></div>
        </details>
      </div>
    </section>
  );
}

export function D2ConcernRail({ title, items }: { title: ReactNode; items: RailItem[] }) {
  return (
    <section className="d2w-concern-rail">
      <div><h2>{title}</h2><Link href="/quiz">Take the profile</Link></div>
      <div>{items.map((item) => (
        <article key={item.title} className={item.slides ? "d2w-concern-card--slideshow" : undefined}>
          <Image className="d2w-concern-poster" src={item.image} alt={item.alt} fill sizes="260px" />
          {item.slides && (
            <div className="d2w-concern-slides" aria-hidden="true">
              {item.slides.map((slide) => <div key={slide.image}><Image src={slide.image} alt="" fill sizes="72vw" /></div>)}
            </div>
          )}
          <span className="d2w-concern-title">{item.title}</span>
        </article>
      ))}</div>
    </section>
  );
}

export function D2ResultsGallery({ eyebrow, title, copy, items, children }: { eyebrow: string; title: string; copy: string; items?: RailItem[]; children?: ReactNode }) {
  return (
    <section className="d2w-results">
      <div className="d2w-section-intro"><p>{eyebrow}</p><h2>{title}</h2><span>{copy}</span></div>
      {children || <div className="d2w-results-grid">{items?.map((item,index) => <article key={item.title} className={index === 0 ? "d2w-results-lead" : ""}><div><Image src={item.image} alt={item.alt} fill sizes="(max-width: 760px) 85vw, 28vw" /></div><h3>{item.title}</h3><p>{item.copy}</p><small>{item.meta}</small></article>)}</div>}
    </section>
  );
}

export function D2PromoPair({ items }: { items: [RailItem,RailItem] }) {
  return (
    <section className="d2w-promo-pair">
      {items.map((item) => <article key={item.title}><Image src={item.image} alt={item.alt} fill sizes="(max-width: 760px) 100vw, 50vw" /><div><span>{item.label}</span><h2>{item.title}</h2><p>{item.copy}</p><Link href="/science">Explore the science <ArrowRight size={15} /></Link></div></article>)}
    </section>
  );
}

export function D2Statement({ quote, detail }: { quote: string; detail: string }) {
  return <section className="d2w-statement"><div><Star size={26} fill="currentColor" /><Star size={26} fill="currentColor" /><Star size={26} fill="currentColor" /><Star size={26} fill="currentColor" /><Star size={26} fill="currentColor" /></div><blockquote>{quote}</blockquote><p>{detail}</p></section>;
}

export function D2EditorialSplit({ image, alt, eyebrow, title, copy, alert = false }: { image: string; alt: string; eyebrow: string; title: string; copy: string; alert?: boolean }) {
  return (
    <section className="d2w-editorial-split"><div><Image src={image} alt={alt} fill sizes="(max-width: 760px) 100vw, 50vw" /></div><article>{alert ? <CircleAlert size={30} /> : <Check size={30} />}<span>{eyebrow}</span><h2>{title}</h2><p>{copy}</p><Link href={alert ? "/science#red-flags" : "/quiz"}>{alert ? "Review care guidance" : "Build my profile"} <ArrowRight size={15} /></Link></article></section>
  );
}

export function D2FinalCampaign({ image, alt, eyebrow, title, copy }: { image: string; alt: string; eyebrow: string; title: string; copy: string }) {
  return (
    <section className="d2w-final"><Image src={image} alt={alt} fill sizes="100vw" /><div /><article><span>{eyebrow}</span><h2>{title}</h2><p>{copy}</p><Link href="/quiz">Take the hair quiz <ArrowRight size={16} /></Link></article></section>
  );
}
