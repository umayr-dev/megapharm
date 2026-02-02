import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const BLOG_BY_SLUG: Record<string, { titleKey: string; excerptKey: string }> = {
  "choose-probiotic": {
    titleKey: "blog.item1Title",
    excerptKey: "blog.item1Excerpt",
  },
  "gut-health-immunity": {
    titleKey: "blog.item2Title",
    excerptKey: "blog.item2Excerpt",
  },
  "probiotics-family": {
    titleKey: "blog.item3Title",
    excerptKey: "blog.item3Excerpt",
  },
};

export function BlogDetail() {
  const { t } = useTranslation();
  const { slug } = useParams<{ slug: string }>();
  const item = slug ? BLOG_BY_SLUG[slug] : null;

  if (!item) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-12 text-center">
        <p className="text-muted-foreground">Post not found.</p>
        <Link
          to="/blog"
          className="mt-4 inline-block text-primary hover:underline"
        >
          {t("blog.title")}
        </Link>
      </div>
    );
  }

  return (
    <article className="mx-auto max-w-2xl px-4 py-12">
      <nav className="mb-6 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-primary">
          {t("nav.home")}
        </Link>
        <span className="mx-2">/</span>
        <Link to="/blog" className="hover:text-primary">
          {t("nav.blog")}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground line-clamp-1">{t(item.titleKey)}</span>
      </nav>
      <h1 className="text-2xl font-bold text-foreground md:text-3xl">
        {t(item.titleKey)}
      </h1>
      <p className="mt-6 text-muted-foreground">{t(item.excerptKey)}</p>
      <Link
        to="/blog"
        className="mt-8 inline-block text-primary hover:underline"
      >
        ← {t("blog.title")}
      </Link>
    </article>
  );
}
