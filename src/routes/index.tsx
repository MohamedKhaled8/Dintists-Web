import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Star, Check, ImageIcon } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { useI18n } from "@/lib/i18n";
import { clinic, doctors, t } from "@/lib/site";
import { CtaBand, DoctorCard, SectionHead, ServiceGrid, meta } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => meta("عيادات أسنان في الدقي | Utopia Dental Clinics — Dokki", "زراعة الأسنان في الدقي، تقويم الأسنان، وطب أسنان الأطفال. Dental implants and pediatric dentistry in Dokki, Giza."),
  component: Home,
});

function Home() {
  const { tr } = useI18n();
  return (
    <>
      <section className="hero-soft">
        <div className="container-x grid items-center gap-12 py-14 md:py-20 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <p className="eyebrow">{tr(clinic.name)}</p>
            <h1 className="mt-5 font-display text-4xl leading-tight text-primary md:text-6xl">{tr(t.heroTitle)}</h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">{tr(t.heroSub)}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">{tr(t.book)}</Link>
              <a href={clinic.tel} className="btn-outline"><Phone className="h-4 w-4" /> {tr(t.call)}</a>
            </div>
            <p className="mt-8 text-sm text-muted-foreground">{tr(clinic.hours)} · {tr(clinic.address)}</p>
          </div>
          <div className="relative">
            <img src={hero} width={1600} height={1104} alt={tr({ ar: "صورة توضيحية لغرفة علاج أسنان حديثة", en: "Illustrative image of a modern dental treatment room" })} className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-[var(--shadow-soft)]" />
            <Link to="/services" className="card-lift absolute -bottom-6 start-6 hidden px-5 py-4 sm:block">
              <p className="font-display text-2xl text-primary">10</p>
              <p className="text-xs text-muted-foreground">{tr(t.explore)}</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="container-x mt-24 grid gap-10 md:grid-cols-2">
        <div>
          <p className="eyebrow">{tr(t.introEyebrow)}</p>
          <h2 className="mt-2 font-display text-3xl text-primary md:text-4xl">{tr(t.introTitle)}</h2>
        </div>
        <div>
          <p className="text-lg text-muted-foreground">{tr(t.introBody)}</p>
          <Link to="/about" className="mt-5 inline-block font-medium text-primary underline-offset-4 hover:underline">{tr(t.learnMore)}</Link>
        </div>
      </section>

      <section className="container-x mt-24">
        <SectionHead eyebrow={tr(t.nav.services)} title={tr(t.servicesTitle)} action={<Link to="/services" className="btn-outline">{tr(t.viewAll)}</Link>} />
        <ServiceGrid />
      </section>

      <section className="container-x mt-24">
        <SectionHead eyebrow={tr(t.nav.doctors)} title={tr(t.doctorsTitle)} action={<Link to="/doctors" className="btn-outline">{tr(t.viewAll)}</Link>} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {doctors.map((d) => <DoctorCard key={d.id} d={d} />)}
        </div>
      </section>

      <section className="container-x mt-24 grid gap-6 lg:grid-cols-2">
        <Link to="/gallery" className="card-lift p-8">
          <ImageIcon className="h-6 w-6 text-primary" />
          <h2 className="mt-4 font-display text-2xl text-primary">{tr(t.galleryTitle)}</h2>
          <p className="mt-2 text-sm text-muted-foreground">{tr(t.galleryNote)}</p>
        </Link>
        <div className="card-lift p-8">
          <Star className="h-6 w-6 text-primary" />
          <h2 className="mt-4 font-display text-2xl text-primary">{tr(t.reviewsTitle)}</h2>
          <p className="mt-2 text-sm text-muted-foreground">{tr(t.reviewsBody)}</p>
          <a href={clinic.maps} target="_blank" rel="noopener noreferrer" className="btn-primary mt-5">{tr(t.reviewsCta)}</a>
        </div>
      </section>

      <section className="container-x mt-24">
        <SectionHead title={tr(t.whyTitle)} />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.why.map((w) => (
            <li key={w.en} className="flex gap-3 rounded-2xl bg-secondary p-5 text-sm text-secondary-foreground">
              <Check className="h-5 w-5 shrink-0" /> {tr(w)}
            </li>
          ))}
        </ul>
      </section>

      <CtaBand />
    </>
  );
}
