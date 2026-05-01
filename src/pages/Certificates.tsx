import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LegalDocumentsViewer } from "@/components/LegalDocumentsViewer";
import { CERTIFICATE_DOCUMENTS } from "@/data/legalDocuments";

export function Certificates() {
  const { t } = useTranslation();

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 md:py-12">
      <nav className="mb-6 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-primary">
          {t("nav.home")}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{t("nav.certificates")}</span>
      </nav>

      <h1 className="text-2xl font-bold text-foreground md:text-3xl">
        {t("docs.certificatesPageTitle")}
      </h1>
      <p className="mt-2 max-w-3xl text-muted-foreground">
        {t("docs.certificatesIntro")}
      </p>

      <LegalDocumentsViewer documents={CERTIFICATE_DOCUMENTS} />
    </div>
  );
}
