import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check, Info } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { services, t } from "@/lib/site";
import { CtaBand, PageHero, ServiceCard, ServiceIcon, meta } from "@/components/site";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const s = services.find((x) => x.slug === params.slug);
    if (!s) throw notFound();
    return { slug: s.slug };
  },
  head: ({ loaderData }) => {
    const s = services.find((x) => x.slug === loaderData?.slug);
    if (!s) return { meta: [{ title: "Service not found | Utopia" }] };
    return meta(`${s.name.ar} في الدقي | ${s.name.en} in Dokki — Utopia`, `${s.intro.ar} ${s.intro.en}`);
  },
  component: ServicePage,
});

function ServicePage() {
  const { slug } = Route.useLoaderData();
  const { tr, lang } = useI18n();
  const s = services.find((x) => x.slug === slug)!;
  const i = services.indexOf(s);
  const related = [1, 2, 3].map((k) => services[(i + k) % services.length]!);
  return (
    <>
      <PageHero title={tr(s.name)} sub={tr(s.intro)} />
      <section className="container-x mt-16 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="text-lg leading-relaxed text-foreground">{tr(s.body)}</p>
          <ul className="mt-8 grid gap-3">
            {s.points[lang].map((p) => (
              <li key={p} className="flex gap-3"><Check className="h-5 w-5 shrink-0 text-primary" /> {p}</li>
            ))}
          </ul>
          {s.note && <p className="mt-6 flex gap-2 rounded-2xl bg-accent/25 p-4 text-sm"><Info className="h-4 w-4 shrink-0" /> {tr(s.note)}</p>}
          <p className="mt-6 text-sm text-muted-foreground">{tr(t.serviceNote)}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="btn-primary">{tr(t.book)}</Link>
            <Link to="/services" className="btn-outline">{tr(t.nav.services)}</Link>
          </div>
        </div>
        <div className="portrait-placeholder grid aspect-square place-items-center rounded-[2rem]" role="img" aria-label={tr(s.name)}>
          <ServiceIcon name={s.icon} className="h-24 w-24 text-primary/30" />
        </div>
      </section>
      <section className="container-x mt-20">
        <h2 className="mb-6 font-display text-2xl text-primary">{tr(t.related)}</h2>
        <div className="grid gap-5 sm:grid-cols-3">{related.map((r) => <ServiceCard key={r.slug} s={r} i={services.indexOf(r)} />)}</div>
      </section>
      <CtaBand />
    </>
  );
}
