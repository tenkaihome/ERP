import { PricingTier, PRICING_TIERS, INDUSTRIES } from "./constants";

export interface CostCalculationResult {
  tierId: string;
  userCount: number;
  monthlyLicensePerUser: number;
  annualLicenseTotal: number;
  threeYearLicenseTotal: number;
  baseImplementation: number;
  finalImplementation: number;
  trainingCost: number;
  threeYearOngoingCost: number;
  threeYearTco: number;
}

export function formatUSD(value: number, compact = false): string {
  if (compact && value >= 1000) {
    if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(1).replace(/\.0$/, "")}M`;
    }
    return `$${(value / 1000).toFixed(0)}K`;
  }
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatVND(usdValue: number, compact = false): string {
  const exchangeRate = 25400; // 1 USD = 25,400 VND
  const vndValue = usdValue * exchangeRate;
  
  if (compact) {
    if (vndValue >= 1000000000) {
      return `${(vndValue / 1000000000).toFixed(1).replace(/\.0$/, "")} Tỷ đ`;
    }
    if (vndValue >= 1000000) {
      return `${(vndValue / 1000000).toFixed(0)} Tr đ`;
    }
  }

  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0,
  }).format(vndValue);
}

export function formatEUR(usdValue: number, compact = false): string {
  const exchangeRate = 0.92; // 1 USD = 0.92 EUR
  const eurValue = usdValue * exchangeRate;

  if (compact && eurValue >= 1000) {
    if (eurValue >= 1000000) {
      return `€${(eurValue / 1000000).toFixed(1).replace(/\.0$/, "")}M`;
    }
    return `€${(eurValue / 1000).toFixed(0)}K`;
  }

  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(eurValue);
}

export function formatJPY(usdValue: number, compact = false): string {
  const exchangeRate = 158; // 1 USD = 158 JPY
  const jpyValue = usdValue * exchangeRate;

  if (compact && jpyValue >= 10000) {
    if (jpyValue >= 100000000) {
      return `${(jpyValue / 100000000).toFixed(1).replace(/\.0$/, "")} 億円`;
    }
    return `${(jpyValue / 10000).toFixed(0)} 万円`;
  }

  return new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "JPY",
    maximumFractionDigits: 0,
  }).format(jpyValue);
}

export function formatPriceByLang(usdValue: number, lang: "vi" | "en" | "es" | "ja", compact = false): string {
  switch (lang) {
    case "vi":
      return formatVND(usdValue, compact);
    case "es":
      return formatEUR(usdValue, compact);
    case "ja":
      return formatJPY(usdValue, compact);
    default:
      return formatUSD(usdValue, compact);
  }
}

export function calculateCost(
  tier: PricingTier,
  userCount: number,
  industryId: string
): CostCalculationResult {
  const industry = INDUSTRIES.find((ind) => ind.id === industryId) || INDUSTRIES[0];
  const multiplier = industry.multiplier;

  // 1. Calculate License Cost
  // Standard license price per user per month
  const monthlyLicensePerUser = tier.standardPrice;
  const annualLicenseTotal = userCount * monthlyLicensePerUser * 12;
  const threeYearLicenseTotal = annualLicenseTotal * 3;

  // 2. Calculate Implementation Cost
  // We scale the base implementation cost linearly based on the number of users relative to the tier's range
  const userRange = Math.max(1, tier.maxUsers - tier.minUsers);
  // Clamp userCount within the tier's bounds for scaling interpolation
  const clampedUserCount = Math.max(tier.minUsers, Math.min(tier.maxUsers, userCount));
  const scaleRatio = (clampedUserCount - tier.minUsers) / userRange;
  
  const baseImplementation = tier.implementationMin + scaleRatio * (tier.implementationMax - tier.implementationMin);
  const finalImplementation = baseImplementation * multiplier;

  // 3. Training and Change Management (15% of Implementation)
  const trainingCost = finalImplementation * 0.15;

  // 4. Ongoing maintenance & operations for 3 years (approx 15% of Licenses + Implementation)
  const threeYearOngoingCost = (threeYearLicenseTotal + finalImplementation) * 0.15;

  // 5. Total Cost of Ownership over 3 years
  const threeYearTco = threeYearLicenseTotal + finalImplementation + trainingCost + threeYearOngoingCost;

  return {
    tierId: tier.id,
    userCount,
    monthlyLicensePerUser,
    annualLicenseTotal,
    threeYearLicenseTotal,
    baseImplementation,
    finalImplementation,
    trainingCost,
    threeYearOngoingCost,
    threeYearTco,
  };
}

export function getAllCalculations(userCount: number, industryId: string): CostCalculationResult[] {
  return PRICING_TIERS.map((tier) => calculateCost(tier, userCount, industryId));
}

// Helper to determine the suggested tier based on user size
export function getSuggestedTierId(userCount: number): string {
  if (userCount <= 100) return "starter";
  if (userCount <= 1000) return "growth";
  return "enterprise";
}
