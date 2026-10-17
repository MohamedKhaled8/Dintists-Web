import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { doctors, t } from "@/lib/site";
import { CtaBand, DoctorCard, PageHero, SectionHead, meta } from "@/components/site";

export const Route = createFileRoute("/about")({
  head: () => meta("من نحن | About Utopia Dental Clinics, Dokki", "تعرف على عيادات يوتوبيا لطب وتجميل وزراعة الأسنان في الدقي. About our approach to dental care in Dokki."),
  component: About,
});

function About() {
  const { tr } = useI18n();
  return (
    <>
      <PageHero title={tr(t.aboutTitle)} sub={tr(t.introBody)} />
      <section className="container-x mt-16 grid gap-10 md:grid-cols-2">
        <h2 className="font-display text-3xl text-primary">{tr(t.philosophyTitle)}</h2>
        <p className="text-lg text-muted-foreground">{tr(t.philosophy)}</p>
      </section>
      <section className="container-x mt-20">
        <SectionHead title={tr(t.journeyTitle)} />
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.journey.map((j, i) => (
            <li key={j.en} className="card-lift p-6">
              <span className="font-display text-3xl text-accent">{i + 1}</span>
              <p className="mt-3 font-medium text-primary">{tr(j)}</p>
            </li>
          ))}
        </ol>
      </section>
      <section className="container-x mt-20">
        <SectionHead title={tr(t.doctorsTitle)} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">{doctors.map((d) => <DoctorCard key={d.id} d={d} />)}</div>
      </section>
      <CtaBand />
    </>
  );
}
