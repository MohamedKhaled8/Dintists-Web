import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { t } from "@/lib/site";
import { CtaBand, PageHero, ServiceGrid, meta } from "@/components/site";

export const Route = createFileRoute("/services/")({
  head: () => meta("خدمات الأسنان | Dental Services in Dokki — Utopia", "زراعة، تقويم، أطفال، تنظيف، قشور، جذور، حشوات، تركيبات وتخدير كلي. Ten dental services in Dokki."),
  component: () => {
    const { tr } = useI18n();
    return (
      <>
        <PageHero title={tr(t.servicesTitle)} sub={tr(t.serviceNote)} />
        <section className="container-x mt-16"><ServiceGrid /></section>
        <CtaBand />
      </>
    );
  },
});
