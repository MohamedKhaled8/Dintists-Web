import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { clinic, t } from "@/lib/site";
import { CtaBand, PageHero, meta } from "@/components/site";

export const Route = createFileRoute("/reviews")({
  head: () => meta("آراء المرضى | Patient Reviews — Utopia Dental Clinics", "اقرأ تقييمات المرضى الحقيقية على خرائط جوجل. Read genuine Google reviews of Utopia Dental Clinics."),
  component: () => {
    const { tr } = useI18n();
    return (
      <>
        <PageHero title={tr(t.reviewsTitle)} />
        <section className="container-x mt-16">
          <div className="card-lift mx-auto max-w-2xl p-10 text-center">
            <div className="flex justify-center gap-1 text-accent" aria-hidden>{[0, 1, 2, 3, 4].map((i) => <Star key={i} className="h-6 w-6" />)}</div>
            <p className="mt-6 text-lg text-muted-foreground">{tr(t.reviewsBody)}</p>
            <a href={clinic.maps} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8">{tr(t.reviewsCta)}</a>
          </div>
        </section>
        <CtaBand />
      </>
    );
  },
});
