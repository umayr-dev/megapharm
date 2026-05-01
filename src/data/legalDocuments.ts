/** public/certificate va public/patent PDFlari — navbar va sahifalar uchun */

export interface LegalPdfItem {
  id: string;
  path: string;
  /** Ko‘rsatish uchun qisqa sarlavha (barcha tillarda bir xil yoki keyin i18n) */
  title: string;
}

export const CERTIFICATE_DOCUMENTS: LegalPdfItem[] = [
  {
    id: "mega-23-e-1461",
    path: "/certificate/23-E-1461_Rev.0_Mega.pdf",
    title: "23-E-1461 Rev.0 — Mega Pharm",
  },
  {
    id: "state-registration-permit",
    path: "/certificate/Свидетельство_о_государственной_регистрации_продукции_Выдача_разрешительного.pdf",
    title: "Свидетельство о государственной регистрации продукции",
  },
];

export const PATENT_DOCUMENTS: LegalPdfItem[] = [
  {
    id: "megavit-mgu-43106",
    path: "/patent/Свидетельство_MGU 43106_МЕВАВИТ.pdf",
    title: "Мегавит — свидетельство MGU 43106",
  },
  {
    id: "enteronorm-patent",
    path: "/patent/Энтеронорм патент.pdf",
    title: "Энтеронорм — патент",
  },
  {
    id: "megalife-mgu-37714",
    path: "/patent/Свидетельство_о_рег_МЕГАЛАЙФ_MGU_37714.pdf",
    title: "Мегалайф — регистрация MGU 37714",
  },
  {
    id: "probilife-patent",
    path: "/patent/Пробилайф патент.pdf",
    title: "Пробилайф — патент",
  },
  {
    id: "simbilife-mgu-37712",
    path: "/patent/Свидетельство_о_рег_СИМБИЛАЙФ_MGU_37712.pdf",
    title: "Симбилайф — MGU 37712",
  },
  {
    id: "normosper-mgu-37713",
    path: "/patent/Свидетельство_о_рег_НОРМОСПЕР_MGU_37713.pdf",
    title: "Нормоспер — MGU 37713",
  },
  {
    id: "immulabs-mgu-37715",
    path: "/patent/Свидетельство_о_рег_ИММУЛАБС_MGU_37715.pdf",
    title: "Иммулабс — MGU 37715",
  },
  {
    id: "megavita-mgu-47373",
    path: "/patent/Свидетельство_MGU 47373_МЕГАВИТА.pdf",
    title: "Мегавита — MGU 47373",
  },
];
