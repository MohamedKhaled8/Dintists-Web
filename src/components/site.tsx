import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import * as Icons from "lucide-react";
import { Menu, X, Phone, MessageCircle, Mail, MapPin, Clock, ArrowUpRight, UserRound } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { clinic, t, DEMO_MODE, services, type Service, type Doctor, type L } from "@/lib/site";

const navItems = [
  { to: "/", k: "home" },
  { to: "/about", k: "about" },
  { to: "/services", k: "services" },
  { to: "/doctors", k: "doctors" },
  { to: "/gallery", k: "gallery" },
  { to: "/reviews", k: "reviews" },
  { to: "/blog", k: "blog" },
  { to: "/contact", k: "contact" },
] as const;

export function LangSwitch() {
  const { lang, setLang } = useI18n();
  return (
    <button
      onClick={() => setLang(lang === "ar" ? "en" : "ar")}
      className="rounded-full border border-border px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
      aria-label={lang === "ar" ? "Switch to English" : "التبديل إلى العربية"}
    >
      {lang === "ar" ? "EN" : "عربي"}
    </button>
  );
}

export function Header() {
  const { tr } = useI18n();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      {DEMO_MODE && (
        <div className="bg-primary py-1 text-center text-xs text-primary-foreground/90">{tr(t.demo)}</div>
      )}
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2.5" aria-label={tr(clinic.name)}>
          <span className="grid h-9 w-9 place-items-center rounded-full bg-primary font-display text-lg text-primary-foreground">U</span>
          <span className="font-display text-xl leading-none text-primary">
            Utopia<span className="block text-[0.65rem] tracking-[0.25em] text-muted-foreground">DENTAL</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {navItems.map((n) => (
            <Link key={n.to} to={n.to} className="nav-link" activeProps={{ className: "nav-link-active" }} activeOptions={{ exact: n.to === "/" }}>
              {tr(t.nav[n.k])}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <LangSwitch />
          <Link to="/contact" className="btn-primary hidden sm:inline-flex">{tr(t.book)}</Link>
          <button className="rounded-full p-2 lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="container-x grid gap-1 pb-4 lg:hidden" aria-label="Mobile">
          {navItems.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="nav-link py-2.5">
              {tr(t.nav[n.k])}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary mt-2">{tr(t.book)}</Link>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  const { tr } = useI18n();
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="container-x grid gap-10 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl">{tr(clinic.name)}</p>
          <p className="mt-3 text-sm text-primary-foreground/75">{tr(t.heroSub)}</p>
        </div>
        <nav className="grid grid-cols-2 gap-2 text-sm" aria-label="Footer">
          {[...navItems, { to: "/privacy", k: "privacy" } as const].map((n) => (
            <Link key={n.to} to={n.to} className="text-primary-foreground/80 hover:text-primary-foreground">{tr(t.nav[n.k])}</Link>
          ))}
        </nav>
        <ContactList inverted />
      </div>
      <div className="border-t border-primary-foreground/15 py-5 text-center text-xs text-primary-foreground/60">{tr(t.rights)}</div>
    </footer>
  );
}

export function ContactList({ inverted = false }: { inverted?: boolean }) {
  const { tr } = useI18n();
  const items = [
    { icon: Phone, label: t.phone, value: <a href={clinic.tel} dir="ltr">{clinic.phoneIntl}</a> },
    { icon: MessageCircle, label: t.whatsapp, value: <a href={clinic.whatsapp} target="_blank" rel="noopener noreferrer" dir="ltr">{clinic.phoneIntl}</a> },
    { icon: Mail, label: t.email, value: <a href={`mailto:${clinic.email}`}>{clinic.email}</a> },
    { icon: MapPin, label: t.address, value: <a href={clinic.maps} target="_blank" rel="noopener noreferrer">{tr(clinic.address)}</a> },
    { icon: Clock, label: t.hours, value: <span>{tr(clinic.hours)}</span> },
  ];
  return (
    <ul className="grid gap-4 text-sm">
      {items.map(({ icon: I, label, value }) => (
        <li key={label.en} className="flex gap-3">
          <I className={`mt-0.5 h-4 w-4 shrink-0 ${inverted ? "text-accent" : "text-primary"}`} />
          <div>
            <p className={inverted ? "text-primary-foreground/60" : "text-muted-foreground"}>{tr(label)}</p>
            <div className="break-words font-medium hover:underline">{value}</div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export function PageHero({ title, sub, crumb }: { title: string; sub?: string; crumb?: string }) {
  const { tr } = useI18n();
  return (
    <section className="hero-soft border-b border-border">
      <div className="container-x py-16 md:py-20">
        <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">{tr(t.nav.home)}</Link>
          <span className="mx-2">/</span>
          <span aria-current="page">{crumb ?? title}</span>
        </nav>
        <h1 className="mt-4 max-w-3xl font-display text-4xl text-primary md:text-5xl">{title}</h1>
        {sub && <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{sub}</p>}
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, action }: { eyebrow?: string; title: string; action?: ReactNode }) {
  return (
    <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 className="mt-2 font-display text-3xl text-primary md:text-4xl">{title}</h2>
      </div>
      {action}
    </div>
  );
}

export function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const I = (Icons as unknown as Record<string, Icons.LucideIcon>)[name] ?? Icons.Smile;
  return <I className={className} />;
}

export function ServiceCard({ s, i }: { s: Service; i: number }) {
  const { tr } = useI18n();
  return (
    <Link to="/services/$slug" params={{ slug: s.slug }} className="card-lift group flex flex-col p-6">
      <div className="flex items-center justify-between">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-primary">
          <ServiceIcon name={s.icon} className="h-5 w-5" />
        </span>
        <span className="font-display text-sm text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
      </div>
      <h3 className="mt-6 font-display text-xl text-primary">{tr(s.name)}</h3>
      <p className="mt-2 flex-1 text-sm text-muted-foreground">{tr(s.intro)}</p>
      <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary">
        {tr(t.learnMore)} <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 rtl:-scale-x-100" />
      </span>
    </Link>
  );
}

export function ServiceGrid({ list = services }: { list?: Service[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {list.map((s) => <ServiceCard key={s.slug} s={s} i={services.indexOf(s)} />)}
    </div>
  );
}

export function DoctorCard({ d, full = false }: { d: Doctor; full?: boolean }) {
  const { tr } = useI18n();
  return (
    <article className="card-lift overflow-hidden">
      <div className="portrait-placeholder grid aspect-[4/5] place-items-center" role="img" aria-label={`${tr(d.name)} — ${tr(t.portraitPending)}`}>
        <div className="text-center">
          <UserRound className="mx-auto h-14 w-14 text-primary/40" />
          <p className="mt-2 text-xs text-muted-foreground">{tr(t.portraitPending)}</p>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg text-primary">{tr(d.name)}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{tr(d.role)}</p>
        {full && (
          <>
            <p className="mt-3 text-sm italic text-muted-foreground">{tr(t.bioPending)}</p>
            {d.services.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {d.services.map((slug) => {
                  const s = services.find((x) => x.slug === slug)!;
                  return <Link key={slug} to="/services/$slug" params={{ slug }} className="chip">{tr(s.name)}</Link>;
                })}
              </div>
            )}
            <Link to="/contact" className="btn-outline mt-4 w-full">{tr(t.contactDoctor)}</Link>
          </>
        )}
      </div>
    </article>
  );
}

export function CtaBand() {
  const { tr } = useI18n();
  return (
    <section className="container-x mt-24">
      <div className="cta-band grid gap-6 rounded-[2rem] p-10 md:grid-cols-[1fr_auto] md:items-center md:p-14">
        <div>
          <h2 className="font-display text-3xl text-primary-foreground md:text-4xl">{tr(t.contactTitle)}</h2>
          <p className="mt-3 text-primary-foreground/80">{tr(clinic.hours)} · {tr(clinic.address)}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link to="/contact" className="btn-light">{tr(t.book)}</Link>
          <a href={clinic.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-ghost-light">
            <MessageCircle className="h-4 w-4" /> {tr(t.whatsapp)}
          </a>
        </div>
      </div>
    </section>
  );
}

export function DraftBadge() {
  const { tr } = useI18n();
  return <span className="chip bg-accent/40">{tr(t.draft)}</span>;
}

export const meta = (title: string, description: string) => ({
  meta: [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ],
});

export type { L };
