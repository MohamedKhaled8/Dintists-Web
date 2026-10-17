import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { doctors, t } from "@/lib/site";
import { CtaBand, DoctorCard, PageHero, meta } from "@/components/site";

export const Route = createFileRoute("/doctors")({
  head: () => meta("الأطباء | Doctors & Team — Utopia Dental Clinics", "تعرف على أطباء عيادات يوتوبيا: زراعة، تقويم، وطب أسنان الأطفال. Meet our dental team in Dokki."),
  component: () => {
    const { tr } = useI18n();
    return (
      <>
        <PageHero title={tr(t.doctorsTitle)} />
        <section className="container-x mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((d) => <DoctorCard key={d.id} d={d} full />)}
        </section>
        <CtaBand />
      </>
    );
  },
});
