import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { BookOpen } from "lucide-react";

const BLOG_ITEMS = [
  {
    titleKey: "blog.item1Title",
    excerptKey: "blog.item1Excerpt",
    slug: "choose-probiotic",
  },
  {
    titleKey: "blog.item2Title",
    excerptKey: "blog.item2Excerpt",
    slug: "gut-health-immunity",
  },
  {
    titleKey: "blog.item3Title",
    excerptKey: "blog.item3Excerpt",
    slug: "probiotics-family",
  },
] as const;

export function Blog() {
  const { t } = useTranslation();

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <nav className="mb-6 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-primary">
          {t("nav.home")}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{t("nav.blog")}</span>
      </nav>

      <h1 className="text-3xl font-bold text-foreground md:text-4xl">
        {t("blog.title")}
      </h1>
      <p className="mt-2 text-muted-foreground">{t("blog.subtitle")}</p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {BLOG_ITEMS.map((item) => (
          <Link
            key={item.slug}
            to={`/blog/${item.slug}`}
            className="group flex flex-col rounded-xl border border-border bg-card overflow-hidden shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex h-40 items-center justify-center bg-muted/50 text-muted-foreground">
              <BookOpen className="h-12 w-12" />
            </div>
            <div className="flex flex-1 flex-col p-4">
              <h2 className="font-semibold text-foreground group-hover:text-primary">
                {t(item.titleKey)}
              </h2>
              <p className="mt-2 flex-1 text-sm text-muted-foreground line-clamp-2">
                {t(item.excerptKey)}
              </p>
              <span className="mt-3 text-sm font-medium text-primary group-hover:underline">
                {t("blog.readMore")} →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
