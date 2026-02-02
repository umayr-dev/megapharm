import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Calendar } from "lucide-react";

const NEWS_BY_SLUG: Record<
  string,
  { titleKey: string; excerptKey: string; date: string }
> = {
  "expo-2025": {
    titleKey: "news.item1Title",
    excerptKey: "news.item1Excerpt",
    date: "2025-01-15",
  },
  "kids-formula": {
    titleKey: "news.item2Title",
    excerptKey: "news.item2Excerpt",
    date: "2025-01-08",
  },
  "fda-approval": {
    titleKey: "news.item3Title",
    excerptKey: "news.item3Excerpt",
    date: "2024-12-20",
  },
};

export function NewsDetail() {
  const { t } = useTranslation();
  const { slug } = useParams<{ slug: string }>();
  const item = slug ? NEWS_BY_SLUG[slug] : null;

  if (!item) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-12 text-center">
        <p className="text-muted-foreground">News not found.</p>
        <Link
          to="/news"
          className="mt-4 inline-block text-primary hover:underline"
        >
          {t("news.title")}
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
        <Link to="/news" className="hover:text-primary">
          {t("nav.news")}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground line-clamp-1">{t(item.titleKey)}</span>
      </nav>
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Calendar className="h-4 w-4" />
        <time dateTime={item.date}>
          {new Date(item.date).toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      </div>
      <h1 className="mt-4 text-2xl font-bold text-foreground md:text-3xl">
        {t(item.titleKey)}
      </h1>
      <p className="mt-6 text-muted-foreground">{t(item.excerptKey)}</p>
      <Link
        to="/news"
        className="mt-8 inline-block text-primary hover:underline"
      >
        ← {t("news.title")}
      </Link>
    </article>
  );
}
