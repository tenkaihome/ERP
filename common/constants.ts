import { TRANSLATIONS } from "./translations";
export * from "./types";

export const PRICING_TIERS = TRANSLATIONS["en"].pricingTiers;
export const INDUSTRIES = TRANSLATIONS["en"].industries;

export const getPricingTiers = (lang: string) => {
  return TRANSLATIONS[lang]?.pricingTiers || TRANSLATIONS["en"].pricingTiers;
};

export const getIndustries = (lang: string) => {
  return TRANSLATIONS[lang]?.industries || TRANSLATIONS["en"].industries;
};

export const getFaqs = (lang: string) => {
  return TRANSLATIONS[lang]?.faqs || TRANSLATIONS["en"].faqs;
};

export const getComparisonCategories = (lang: string) => {
  return TRANSLATIONS[lang]?.comparisonCategories || TRANSLATIONS["en"].comparisonCategories;
};
