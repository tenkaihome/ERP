"use client";

import React, { useState } from "react";
import { Check, ArrowRight, ShieldCheck, Zap, Globe, Sparkles } from "lucide-react";
import { PRICING_TIERS, PricingTier } from "../common/constants";
import { formatUSD, formatVND } from "../common/utils";

export default function PricingTiers() {
  const [currency, setCurrency] = useState<"USD" | "VND">("USD");

  const formatPrice = (value: number) => {
    return currency === "USD" ? formatUSD(value, true) : formatVND(value, true);
  };

  const handleSelectPlan = (tierId: string) => {
    const contactForm = document.getElementById("contact");
    if (contactForm) {
      const tierInput = document.getElementById("contact-tier") as HTMLSelectElement;
      const userInput = document.getElementById("contact-users") as HTMLInputElement;
      
      if (tierInput) tierInput.value = tierId;
      
      // Auto-set reasonable user defaults for the plan if empty
      if (userInput && !userInput.value) {
        if (tierId === "starter") userInput.value = "25";
        else if (tierId === "growth") userInput.value = "200";
        else if (tierId === "enterprise") userInput.value = "1000";
      }

      contactForm.scrollIntoView({ behavior: "smooth" });
    }
  };

  const icons: Record<string, React.ReactNode> = {
    starter: <Zap className="w-5 h-5 text-indigo-500" />,
    growth: <Sparkles className="w-5 h-5 text-amber-400" />,
    enterprise: <Globe className="w-5 h-5 text-emerald-500" />,
  };

  return (
    <section id="tiers" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white sm:text-4xl">
              Cấu Trúc Gói Dịch Vụ ERP Chuẩn Hóa
            </h2>
            <p className="mt-3 text-lg text-zinc-650 dark:text-zinc-400">
              Được phân loại theo quy mô và mức độ hoàn thiện quy trình của doanh nghiệp. Tham chiếu theo mặt bằng thị trường thực tế 2025 - 2026.
            </p>
          </div>
          
          {/* Currency Toggle */}
          <div className="flex items-center gap-2 p-1.5 bg-zinc-100 dark:bg-zinc-900 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 self-start md:self-auto">
            <button
              onClick={() => setCurrency("USD")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                currency === "USD"
                  ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-sm"
                  : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200"
              }`}
            >
              USD ($)
            </button>
            <button
              onClick={() => setCurrency("VND")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                currency === "VND"
                  ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-sm"
                  : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200"
              }`}
            >
              VNĐ (đ)
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_TIERS.map((tier) => {
            const isPopular = tier.popular;
            return (
              <div
                key={tier.id}
                className={`flex flex-col rounded-3xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1.5 ${
                  isPopular
                    ? "glow-card-popular bg-gradient-to-b from-indigo-950 via-zinc-900 to-zinc-950 text-white relative border border-indigo-900/50 shadow-xl"
                    : "glass-card text-zinc-900 dark:text-white"
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <span className="absolute top-0 right-8 -translate-y-1/2 bg-gradient-to-r from-indigo-600 to-amber-500 text-white text-[10px] font-black tracking-wider uppercase px-3 py-1 rounded-full shadow-md z-10">
                    Khuyên dùng
                  </span>
                )}

                {/* Card Top / Header */}
                <div className="p-6 sm:p-8 flex-1">
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <div className={`p-2 rounded-xl ${
                        isPopular ? "bg-indigo-950/60 border border-indigo-850" :
                        tier.id === "starter" ? "bg-indigo-50 dark:bg-indigo-950/40" :
                        "bg-emerald-50 dark:bg-emerald-950/40"
                      }`}>
                        {icons[tier.id]}
                      </div>
                      <h3 className={`text-lg font-extrabold ${isPopular ? "text-white" : "text-zinc-900 dark:text-white"}`}>
                        {tier.name}
                      </h3>
                    </div>
                    <span className={`text-[10px] font-extrabold uppercase px-2 py-1 rounded-md border ${
                      isPopular 
                        ? "bg-indigo-950 border-indigo-900 text-indigo-300"
                        : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border-zinc-200/20"
                    }`}>
                      {tier.badge}
                    </span>
                  </div>

                  <p className={`text-xs mb-6 font-medium leading-relaxed ${isPopular ? "text-indigo-300" : "text-zinc-500 dark:text-zinc-400"}`}>
                    {tier.subtitle}
                  </p>

                  {/* Pricing Range */}
                  <div className="space-y-1.5 mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className={`text-3xl sm:text-4xl font-black tracking-tight ${isPopular ? "text-white" : "text-zinc-900 dark:text-white"}`}>
                        {formatPrice(tier.basePriceMin)} - {formatPrice(tier.basePriceMax)}
                      </span>
                      <span className={`text-xs font-semibold ${isPopular ? "text-zinc-400" : "text-zinc-500"}`}>/ user / tháng</span>
                    </div>
                    <div className={`text-[11px] font-medium ${isPopular ? "text-zinc-400" : "text-zinc-500"}`}>
                      Chi phí triển khai: <span className={`font-bold ${isPopular ? "text-amber-400" : "text-zinc-700 dark:text-zinc-300"}`}>{formatPrice(tier.implementationMin)} - {formatPrice(tier.implementationMax)}</span>
                    </div>
                  </div>

                  <hr className={`my-6 ${isPopular ? "border-indigo-900/40" : "border-zinc-200/60 dark:border-zinc-800/60"}`} />

                  {/* Target Description */}
                  <div className="space-y-4 mb-8">
                    <div className={`text-xs font-bold uppercase tracking-wider ${isPopular ? "text-amber-400" : "text-zinc-400"}`}>
                      Đối tượng phù hợp
                    </div>
                    <p className={`text-sm leading-relaxed font-medium ${isPopular ? "text-zinc-200" : "text-zinc-700 dark:text-zinc-300"}`}>
                      {tier.targetDescription}
                    </p>
                    <ul className="space-y-2.5 text-xs">
                      {tier.targetDetails.map((detail, idx) => (
                        <li key={idx} className={`flex items-center gap-2 ${isPopular ? "text-zinc-300" : "text-zinc-600 dark:text-zinc-400"}`}>
                          <Check className={`w-4 h-4 shrink-0 ${isPopular ? "text-indigo-400" : "text-indigo-500"}`} />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <hr className={`my-6 ${isPopular ? "border-indigo-900/40" : "border-zinc-200/60 dark:border-zinc-800/60"}`} />

                  {/* Core Features */}
                  <div className="space-y-4">
                    <div className={`text-xs font-bold uppercase tracking-wider ${isPopular ? "text-amber-400" : "text-zinc-400"}`}>
                      Tính năng cốt lõi bao gồm
                    </div>
                    <ul className="space-y-3.5">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className={`flex items-start gap-2.5 text-sm leading-tight ${isPopular ? "text-zinc-200" : "text-zinc-700 dark:text-zinc-200"}`}>
                          <ShieldCheck className={`w-4 h-4 shrink-0 mt-0.5 ${
                            isPopular ? "text-amber-400" :
                            tier.id === "starter" ? "text-indigo-500" :
                            "text-emerald-500"
                          }`} />
                          <span className="font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Bottom / Call to Action */}
                <div className={`p-6 sm:p-8 rounded-b-3xl border-t flex flex-col gap-4 ${
                  isPopular 
                    ? "bg-zinc-900/60 border-indigo-950/60" 
                    : "bg-zinc-50/50 dark:bg-zinc-900/40 border-zinc-200/40 dark:border-zinc-800/40"
                }`}>
                  <div className="flex justify-between items-center text-xs">
                    <span className={isPopular ? "text-zinc-450" : "text-zinc-400"}>Hệ thống đối chiếu:</span>
                    <span className={`font-semibold ${isPopular ? "text-indigo-300" : "text-zinc-800 dark:text-zinc-200"}`}>{tier.referenceSystems}</span>
                  </div>
                  
                  <button
                    onClick={() => handleSelectPlan(tier.id)}
                    className={`w-full inline-flex items-center justify-center gap-1.5 font-bold px-5 py-3.5 rounded-2xl transition-all duration-300 group cursor-pointer ${
                      isPopular
                        ? "bg-amber-500 hover:bg-amber-400 text-zinc-950 shadow-lg shadow-amber-500/10 hover:shadow-amber-500/25"
                        : "bg-white hover:bg-zinc-50 text-zinc-800 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-white border border-zinc-200 dark:border-zinc-700"
                    }`}
                  >
                    Lựa Chọn Gói Dịch Vụ
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
