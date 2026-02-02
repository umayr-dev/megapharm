export type CategoryId =
  | "broad-spectrum"
  | "saccharomyces"
  | "kids"
  | "vitamins-minerals"
  | "synbiotics"
  | "functional"
  | "baby-powder"
  | "starter"
  | "womens-health";

export const CATEGORY_IDS: CategoryId[] = [
  "broad-spectrum",
  "saccharomyces",
  "kids",
  "vitamins-minerals",
  "synbiotics",
  "functional",
  "baby-powder",
  "starter",
  "womens-health",
];

// 6 main nav groups (buttons) that map to 9 categories for sidebar
export const CATEGORY_GROUPS: { id: string; categoryIds: CategoryId[] }[] = [
  {
    id: "probiotics",
    categoryIds: ["broad-spectrum", "saccharomyces", "kids"],
  },
  { id: "vitamins-minerals", categoryIds: ["vitamins-minerals"] },
  { id: "synbiotics", categoryIds: ["synbiotics"] },
  { id: "functional", categoryIds: ["functional"] },
  { id: "baby", categoryIds: ["baby-powder", "starter"] },
  { id: "womens", categoryIds: ["womens-health"] },
];

export const categoryIdToI18nKey: Record<CategoryId, string> = {
  "broad-spectrum": "categories.broadSpectrum",
  saccharomyces: "categories.saccharomyces",
  kids: "categories.kids",
  "vitamins-minerals": "categories.vitaminsMinerals",
  synbiotics: "categories.synbiotics",
  functional: "categories.functional",
  "baby-powder": "categories.babyPowder",
  starter: "categories.starter",
  "womens-health": "categories.womensHealth",
};
