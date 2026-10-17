import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ImageIcon, X } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { services, t } from "@/lib/site";
import { CtaBand, PageHero, meta } from "@/components/site";

export const Route = createFileRoute("/gallery")({
  head: () => meta("قبل وبعد | Smile Transformation Gallery — Utopia", "معرض تحولات الابتسامة — صور حقيقية بعد موافقة المرضى فقط. Before-and-after gallery with consent."),
  component: Gallery,
});

const slots = ["dental-implants", "orthodontics", "dental-veneers", "fixed-prosthesis", "scaling-polishing", "pediatric-dentistry"];

function Gallery() {
  const { tr } = useI18n();
  const [open, setOpen] = useState<string | null>(null);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  const name = (slug: string) => tr(services.find((s) => s.slug === slug)!.name);
  return (
    <>
      <PageHero title={tr(t.galleryTitle)} sub={tr(t.galleryNote)} />
      <section className="container-x mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {slots.map((slug) => (
          <button key={slug} onClick={() => setOpen(slug)} className="card-lift overflow-hidden text-start">
            <div className="grid grid-cols-2 gap-px bg-border">
              {[t.before, t.after].map((l) => (
                <div key={l.en} className="portrait-placeholder grid aspect-square place-items-center text-xs text-muted-foreground">
                  <span><ImageIcon className="mx-auto mb-1 h-6 w-6 text-primary/30" />{tr(l)}</span>
                </div>
              ))}
            </div>
            <p className="p-4 font-medium text-primary">{name(slug)}</p>
          </button>
        ))}
      </section>
      {open && (
        <div role="dialog" aria-modal="true" aria-label={name(open)} className="fixed inset-0 z-50 grid place-items-center bg-foreground/60 p-4" onClick={() => setOpen(null)}>
          <div className="w-full max-w-2xl rounded-[2rem] bg-card p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between">
              <h2 className="font-display text-xl text-primary">{name(open)}</h2>
              <button autoFocus onClick={() => setOpen(null)} aria-label={tr(t.close)} className="rounded-full p-2 hover:bg-secondary"><X className="h-5 w-5" /></button>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {[t.before, t.after].map((l) => (
                <div key={l.en} className="portrait-placeholder grid aspect-square place-items-center rounded-2xl text-sm text-muted-foreground">{tr(l)}</div>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted-foreground">{tr(t.galleryNote)}</p>
          </div>
        </div>
      )}
      <CtaBand />
    </>
  );
}
