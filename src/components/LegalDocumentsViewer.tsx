import { useCallback, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Download,
  ExternalLink,
  FileText,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import type { LegalPdfItem } from "@/data/legalDocuments";
import { cn } from "@/lib/utils";

/** Chrome/Edge (va ba’zi brauzerlar) ichki PDF ko‘rinishi: toolbar va yon thumbnail panelini olib tashlash / yashirish. */
function pdfEmbedUrl(encodedPdfPath: string): string {
  const openParams =
    "toolbar=0&navpanes=0&scrollbar=0&view=FitH";
  return `${encodedPdfPath}#${openParams}`;
}

type LegalDocumentsViewerProps = {
  documents: LegalPdfItem[];
};

export function LegalDocumentsViewer({ documents }: LegalDocumentsViewerProps) {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const firstId = documents[0]?.id ?? "";

  const [selectedId, setSelectedId] = useState(() => {
    if (typeof window === "undefined") return firstId;
    const h = window.location.hash.replace(/^#/, "");
    return documents.some((d) => d.id === h) ? h : firstId;
  });

  const syncFromHash = useCallback(() => {
    const id = location.hash.replace(/^#/, "");
    if (id && documents.some((d) => d.id === id)) {
      setSelectedId(id);
    }
  }, [location.hash, documents]);

  useEffect(() => {
    syncFromHash();
  }, [syncFromHash]);

  const selected = useMemo(
    () => documents.find((d) => d.id === selectedId) ?? documents[0],
    [documents, selectedId],
  );

  const pdfSrc = selected ? encodeURI(selected.path) : "";

  const selectDoc = (id: string) => {
    setSelectedId(id);
    navigate(
      { pathname: location.pathname, hash: `#${id}` },
      { replace: true },
    );
  };

  if (!selected || documents.length === 0) {
    return null;
  }

  return (
    <div className="mt-8 lg:mt-10">
      {/* Mobile: compact picker */}
      <div className="mb-4 lg:hidden">
        <label
          htmlFor="legal-doc-select"
          className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-muted-foreground"
        >
          {t("docs.selectDocument")}
        </label>
        <select
          id="legal-doc-select"
          value={selectedId}
          onChange={(e) => selectDoc(e.target.value)}
          className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium text-foreground shadow-sm outline-none ring-offset-background focus:ring-2 focus:ring-mega-navy/30"
        >
          {documents.map((doc) => (
            <option key={doc.id} value={doc.id}>
              {doc.title}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-5 lg:grid lg:grid-cols-[minmax(0,280px)_1fr] lg:items-start lg:gap-6">
        {/* Desktop sidebar */}
        <aside className="hidden lg:block">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {t("docs.allDocumentsShort")}
          </p>
          <nav
            className="flex flex-col gap-1 rounded-2xl border border-border bg-card/80 p-2 shadow-sm backdrop-blur-sm"
            aria-label={t("docs.selectDocument")}
          >
            {documents.map((doc) => {
              const active = doc.id === selectedId;
              return (
                <button
                  key={doc.id}
                  type="button"
                  onClick={() => selectDoc(doc.id)}
                  className={cn(
                    "flex w-full items-start gap-3 rounded-xl px-3 py-3 text-left text-sm transition-colors",
                    active
                      ? "bg-mega-navy text-white shadow-md"
                      : "text-foreground hover:bg-muted/80",
                  )}
                >
                  <FileText
                    className={cn(
                      "mt-0.5 h-4 w-4 shrink-0",
                      active ? "text-white/90" : "text-mega-navy",
                    )}
                  />
                  <span className="min-w-0 flex-1 leading-snug">{doc.title}</span>
                  <ChevronRight
                    className={cn(
                      "mt-0.5 h-4 w-4 shrink-0 opacity-60",
                      active && "text-white/80",
                    )}
                  />
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Preview panel — torroq, markazda; balandlik alohida */}
        <div className="flex min-w-0 flex-1 justify-center">
          <div className="w-full max-w-xl overflow-hidden rounded-2xl border border-border bg-gradient-to-b from-slate-50/90 to-card shadow-lg ring-1 ring-black/5 dark:from-slate-950/40 dark:to-card dark:ring-white/10 lg:max-w-2xl">
            <div className="border-b border-border bg-card/95 px-3 py-3 sm:px-4">
              <div className="min-w-0">
                <h2 className="text-sm font-semibold leading-tight text-foreground sm:text-base">
                  {selected.title}
                </h2>
                <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                  {t("docs.pdfPreviewTip")}
                </p>
              </div>
            </div>

            <div className="relative bg-muted/20 p-1.5 sm:p-3">
              <div className="relative overflow-hidden rounded-xl border border-border/80 bg-white shadow-inner dark:bg-slate-900">
                <iframe
                  key={selected.id}
                  title={selected.title}
                  src={pdfEmbedUrl(pdfSrc)}
                  className="h-[min(62vh,620px)] w-full sm:h-[min(65vh,680px)]"
                />
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 border-t border-border bg-card/95 px-3 py-3 sm:px-4">
              <Button variant="outline" size="sm" asChild>
                <a
                  href={pdfSrc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline"
                >
                  <ExternalLink className="h-4 w-4" />
                  {t("docs.openPdfNewTab")}
                </a>
              </Button>
              <Button
                size="sm"
                className="bg-mega-navy hover:bg-mega-navy/90"
                asChild
              >
                <a href={pdfSrc} download className="no-underline">
                  <Download className="h-4 w-4" />
                  {t("docs.downloadPdf")}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
