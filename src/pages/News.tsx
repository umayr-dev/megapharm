import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Calendar } from "lucide-react";

const NEWS_ITEMS = [
  {
    titleKey: "news.item1Title",
    excerptKey: "news.item1Excerpt",
    date: "2025-01-15",
    slug: "expo-2025",
  },
  {
    titleKey: "news.item2Title",
    excerptKey: "news.item2Excerpt",
    date: "2025-01-08",
    slug: "kids-formula",
  },
  {
    titleKey: "news.item3Title",
    excerptKey: "news.item3Excerpt",
    date: "2024-12-20",
    slug: "fda-approval",
  },
] as const;

export function News() {
  const { t } = useTranslation();

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <nav className="mb-6 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-primary">
          {t("nav.home")}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{t("nav.news")}</span>
      </nav>

      <h1 className="text-3xl font-bold text-foreground md:text-4xl">
        {t("news.title")}
      </h1>
      <p className="mt-2 text-muted-foreground">{t("news.subtitle")}</p>

      <ul className="mt-10 space-y-6">
        {NEWS_ITEMS.map((item) => (
          <li key={item.slug}>
            <Link
              to={`/news/${item.slug}`}
              className="block rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
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
              <h2 className="mt-2 text-lg font-semibold text-foreground">
                {t(item.titleKey)}
              </h2>
              <p className="mt-2 text-muted-foreground">{t(item.excerptKey)}</p>
              <span className="mt-3 inline-block text-sm font-medium text-primary hover:underline">
                {t("news.readMore")} →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
