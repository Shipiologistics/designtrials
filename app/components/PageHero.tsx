import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ThemeLink as Link } from "./ThemeLink";

type Props = {
  eyebrow: string;
  title: string;
  copy: string;
  image: string;
  alt: string;
  cta?: string;
  ctaHref?: string;
  note?: string;
  theme?: "dark" | "light";
  stats?: Array<[string, string]>;
};

export function PageHero({ eyebrow, title, copy, image, alt, cta = "Take the hair quiz", ctaHref = "/quiz", note, theme = "dark", stats = [["3 min", "Hair profile"], ["5 inputs", "Shape your plan"], ["100%", "Visible reasoning"]] }: Props) {
  return (
    <section className="hero-shell">
      <div className={`page-hero page-hero-${theme}`}>
        <div className="page-hero-copy">
          <p className="kicker">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="hero-copy">{copy}</p>
          <div className="hero-action-row">
            <Link className="primary-button" href={ctaHref}>{cta}<ArrowRight size={18} /></Link>
            {note && <span className="hero-note">{note}</span>}
          </div>
        </div>
        <div className="page-hero-media"><Image src={image} alt={alt} fill priority sizes="(max-width: 800px) 100vw, 55vw" /></div>
      </div>
      <div className="hero-stats">{stats.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
    </section>
  );
}
