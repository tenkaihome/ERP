export interface PricingTier {
  id: string;
  name: string;
  subtitle: string;
  badge: string;
  basePriceMin: number;
  basePriceMax: number;
  standardPrice: number; // Used for calculation
  implementationMin: number;
  implementationMax: number;
  minUsers: number;
  maxUsers: number;
  targetDescription: string;
  targetDetails: string[];
  features: string[];
  referenceSystems: string;
  popular?: boolean;
}

export interface Industry {
  id: string;
  name: string;
  multiplier: number; // Multiplier for implementation complexity
  icon: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ComparisonFeature {
  name: string;
  saho: { text?: string; check: boolean | "custom" | "partial" };
  odoo: { text?: string; check: boolean | "custom" | "partial" };
  netsuite: { text?: string; check: boolean | "custom" | "partial" };
  sap: { text?: string; check: boolean | "custom" | "partial" };
}

export interface ComparisonCategory {
  title: string;
  features: ComparisonFeature[];
}

export interface LanguagePack {
  meta: {
    code: string;
    label: string;
    flag: string;
    currency: string; // e.g. "VND", "USD", "EUR", "JPY"
  };
  tcoCalculator: string;
  pricingPackages: string;
  comparison: string;
  breakdown: string;
  faq: string;
  contactBtn: string;

  heroBadge: string;
  heroTitlePart1: string;
  heroTitlePart2: string;
  heroTitlePart3: string;
  heroDesc: string;
  heroBtnPrimary: string;
  heroBtnSecondary: string;
  heroBannerTitle: string;
  heroBannerSub: string;
  heroBannerHighlight: string;
  licenseLabel: string;
  implementationLabel: string;
  trainingLabel: string;
  supportLabel: string;
  tco30Title: string;
  tco40Title: string;
  tco15Title: string;
  tcoOngoingTitle: string;

  calcTitle: string;
  calcDesc: string;
  calcSliderUsers: string;
  calcSelectIndustry: string;
  calcSelectComplexity: string;
  calcComplexityStandard: string;
  calcComplexityCustomized: string;
  calcComplexityTailormade: string;
  calcResultsTitle: string;
  calcResultsNote: string;
  calcResultsTco: string;
  calcResultsLicense: string;
  calcResultsImplementation: string;
  calcResultsTraining: string;
  calcResultsSupport: string;
  calcUsersSuffix: string;
  calcComplexityMultiplier: string;
  calcIndustryMultiplier: string;
  suggestedSystemLabel: string;
  equivalentToLabel: string;
  licenseUnitPriceMonth: string;
  totalLicenses36m: string;
  implementationOneTime: string;
  maintenanceSupport3y: string;
  licenseCostRatio: string;
  implementationCostRatio: string;
  sendConfigBtn: string;

  pricingTitle: string;
  pricingDesc: string;
  pricingTarget: string;
  pricingFeatures: string;
  pricingRef: string;
  pricingSelectBtn: string;
  pricingRecommendBadge: string;
  currencyUnitUserMonth: string;
  implementationCostLabel: string;

  compBadge: string;
  compTitle: string;
  compDesc: string;
  compColFeature: string;
  compColOptimal: string;
  compMobileSwipe: string;
  compLegendAvailable: string;
  compLegendPartial: string;
  compLegendCustom: string;
  compLegendUnsupported: string;

  breakdownTitle: string;
  breakdownDesc: string;
  breakdownProcessTitle: string;
  breakdownProcessSubtitle: string;
  breakdownProcessParagraph: string;
  breakdownLeaderNoteTitle: string;
  breakdownLeaderNoteText: string;
  breakdownListTitle: string;

  faqTitle: string;
  faqDesc: string;
  faqClarifications: string;

  contactTitle: string;
  contactDesc: string;
  contactFieldName: string;
  contactPlaceholderName: string;
  contactFieldEmail: string;
  contactPlaceholderEmail: string;
  contactFieldPhone: string;
  contactPlaceholderPhone: string;
  contactFieldCompanySize: string;
  contactFieldPlan: string;
  contactPlanDefault: string;
  contactPlanStarter: string;
  contactPlanGrowth: string;
  contactPlanEnterprise: string;
  contactFieldMessage: string;
  contactPlaceholderMessage: string;
  contactBtnSubmit: string;
  contactBtnSubmitting: string;
  contactSuccessTitle: string;
  contactSuccessDesc: string;
  contactSuccessDescText: string;
  contactSuccessClose: string;
  contactCreateNewRequest: string;
  contactRegisterQuote: string;
  contactCompanyLabel: string;
  contactCompanyPlaceholder: string;
  contactUsersLabel: string;
  contactIndustryLabel: string;
  errorGeneric: string;
  errorNetwork: string;

  footerDesc: string;
  footerLinksQuick: string;
  footerLinksLegal: string;
  footerLinkPrivacy: string;
  footerLinkTerms: string;
  footerCopyright: string;
  marketPositioningLabel: string;
  versionLabel: string;
  systemModulesTitle: string;
  moduleHrm: string;
  moduleFico: string;
  moduleScm: string;
  moduleCrm: string;
  moduleBi: string;
  referenceStandardsTitle: string;
  contactInfoTitle: string;
  sahoAddressText: string;
  costDisclaimerTitle: string;
  costDisclaimerText: string;

  pricingTiers: PricingTier[];
  industries: Industry[];
  faqs: FAQ[];
  comparisonCategories: ComparisonCategory[];
}
