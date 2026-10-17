import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { t } from "@/lib/site";
import { PageHero, meta } from "@/components/site";

export const Route = createFileRoute("/privacy")({
  head: () => meta("إشعار الخصوصية | Privacy Notice — Utopia", "إشعار خصوصية مبدئي لنموذج الموقع. Placeholder privacy notice for the concept site."),
  component: () => {
    const { tr } = useI18n();
    return (
      <>
        <PageHero title={tr(t.privacyTitle)} />
        <section className="container-x mt-12 max-w-3xl text-lg text-muted-foreground">{tr(t.privacyBody)}</section>
      </>
    );
  },
});
