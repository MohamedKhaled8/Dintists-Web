import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { posts, t } from "@/lib/site";
import { CtaBand, DraftBadge, PageHero, meta } from "@/components/site";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const p = posts.find((x) => x.slug === params.slug);
    if (!p) throw notFound();
    return { slug: p.slug };
  },
  head: ({ loaderData }) => {
    const p = posts.find((x) => x.slug === loaderData?.slug);
    if (!p) return { meta: [{ title: "Article not found | Utopia" }] };
    return meta(`${p.title.ar} | ${p.title.en}`, `${p.excerpt.ar} ${p.excerpt.en}`);
  },
  component: Article,
});

function Article() {
  const { slug } = Route.useLoaderData();
  const { tr } = useI18n();
  const p = posts.find((x) => x.slug === slug)!;
  return (
    <>
      <PageHero title={tr(p.title)} sub={tr(p.excerpt)} />
      <article className="container-x mt-12 max-w-3xl">
        <DraftBadge />
        <p className="mt-6 text-lg leading-relaxed">{tr(p.body)}</p>
        <p className="mt-6 text-sm text-muted-foreground">{tr(t.serviceNote)}</p>
        <Link to="/blog" className="btn-outline mt-8">{tr(t.nav.blog)}</Link>
      </article>
      <CtaBand />
    </>
  );
}
