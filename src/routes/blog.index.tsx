import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { posts, t } from "@/lib/site";
import { DraftBadge, PageHero, meta } from "@/components/site";

export const Route = createFileRoute("/blog/")({
  head: () => meta("مدونة الأسنان | Dental Blog — Utopia", "مقالات توعوية عن صحة الفم والأسنان. Dental education articles (drafts)."),
  component: () => {
    const { tr } = useI18n();
    return (
      <>
        <PageHero title={tr(t.nav.blog)} />
        <section className="container-x mt-16 grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="card-lift p-6">
              <DraftBadge />
              <h2 className="mt-4 font-display text-xl text-primary">{tr(p.title)}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{tr(p.excerpt)}</p>
            </Link>
          ))}
        </section>
      </>
    );
  },
});
