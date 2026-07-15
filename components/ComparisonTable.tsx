"use client";

import React, { useMemo } from "react";
import { Check, X, AlertCircle, HelpCircle } from "lucide-react";
import { getComparisonCategories, ComparisonFeature } from "../common/constants";
import { useLanguage } from "@/components/LanguageProvider";
import { TRANSLATIONS } from "@/common/translations";

export default function ComparisonTable() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  const comparisonCategories = useMemo(() => getComparisonCategories(language), [language]);

  const renderCellStatus = (status: boolean | "custom" | "partial", text?: string, isSaho = false) => {
    let icon = null;
    let textColorClass = "";
    
    if (status === true) {
      icon = <Check className={`w-5 h-5 ${isSaho ? "text-indigo-600 dark:text-indigo-400" : "text-emerald-500"}`} />;
      textColorClass = isSaho ? "text-zinc-900 dark:text-zinc-100 font-semibold" : "text-zinc-600 dark:text-zinc-450";
    } else if (status === false) {
      icon = <X className="w-5 h-5 text-red-500" />;
      textColorClass = "text-zinc-400 dark:text-zinc-550";
    } else if (status === "custom") {
      icon = <AlertCircle className="w-4 h-4 text-amber-500" />;
      textColorClass = "text-amber-600 dark:text-amber-400 font-medium";
    } else if (status === "partial") {
      icon = <HelpCircle className="w-4 h-4 text-blue-500" />;
      textColorClass = "text-blue-600 dark:text-blue-400 font-medium";
    }

    return (
      <div className="flex flex-col items-center justify-center text-center p-3">
        <div className="mb-1">{icon}</div>
        {text && <span className={`text-[10px] sm:text-xs leading-relaxed max-w-[150px] ${textColorClass}`}>{text}</span>}
      </div>
    );
  };

  return (
    <section id="comparison" className="py-20 bg-zinc-50/30 dark:bg-zinc-950/10 relative overflow-hidden">
      {/* Decorative Blur Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-amber-500/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-indigo-100 dark:border-indigo-900/30">
            {t.compBadge}
          </span>
          <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white sm:text-4xl mt-4">
            {t.compTitle}
          </h2>
          <p className="mt-4 text-lg text-zinc-650 dark:text-zinc-400">
            {t.compDesc}
          </p>
        </div>

        {/* Swipe indicator for mobile */}
        <div className="block lg:hidden text-center text-zinc-450 dark:text-zinc-500 text-[11px] mb-3 animate-pulse">
          {t.compMobileSwipe}
        </div>

        {/* Comparison Table Container */}
        <div className="glass-card rounded-3xl border border-zinc-200/60 dark:border-zinc-800/60 overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-[800px] text-left">
              
              {/* Table Header */}
              <thead>
                <tr className="border-b border-zinc-200/60 dark:border-zinc-800/60 bg-zinc-50/50 dark:bg-zinc-900/20">
                  <th className="p-6 text-sm font-bold text-zinc-800 dark:text-zinc-200 w-1/4">
                    {t.compColFeature}
                  </th>
                  <th className="p-6 text-center bg-indigo-50/30 dark:bg-indigo-950/20">
                    <div className="flex flex-col items-center justify-center">
                      <span className="bg-gradient-to-r from-indigo-600 to-amber-500 text-white text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md mb-1.5 inline-block">
                        {t.compColOptimal}
                      </span>
                      <span className="text-lg font-black tracking-tight text-zinc-900 dark:text-white">Saho ERP</span>
                    </div>
                  </th>
                  <th className="p-6 text-center text-sm font-semibold text-zinc-505 dark:text-zinc-450">
                    Odoo
                  </th>
                  <th className="p-6 text-center text-sm font-semibold text-zinc-505 dark:text-zinc-450">
                    NetSuite
                  </th>
                  <th className="p-6 text-center text-sm font-semibold text-zinc-505 dark:text-zinc-450">
                    SAP B1
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {comparisonCategories.map((category, catIdx) => (
                  <React.Fragment key={catIdx}>
                    
                    {/* Category Label Row */}
                    <tr className="border-b border-zinc-200/60 dark:border-zinc-800/60 bg-zinc-100/50 dark:bg-zinc-900/40">
                      <td colSpan={5} className="px-6 py-3.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                        {category.title}
                      </td>
                    </tr>

                    {/* Features Row */}
                    {category.features.map((feature, featIdx) => (
                      <tr 
                        key={featIdx} 
                        className="border-b border-zinc-150/40 dark:border-zinc-850/30 hover:bg-zinc-50/30 dark:hover:bg-zinc-900/10 transition-colors"
                      >
                        <td className="p-5 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                          {feature.name}
                        </td>
                        
                        {/* Saho ERP Cell (Highlighted) */}
                        <td className="p-4 bg-indigo-50/15 dark:bg-indigo-950/10 border-x border-indigo-100/30 dark:border-indigo-900/15">
                          {renderCellStatus(feature.saho.check, feature.saho.text, true)}
                        </td>
                        
                        {/* Competitors Cells */}
                        <td className="p-4 border-r border-zinc-150/40 dark:border-zinc-850/30">
                          {renderCellStatus(feature.odoo.check, feature.odoo.text)}
                        </td>
                        <td className="p-4 border-r border-zinc-150/40 dark:border-zinc-850/30">
                          {renderCellStatus(feature.netsuite.check, feature.netsuite.text)}
                        </td>
                        <td className="p-4">
                          {renderCellStatus(feature.sap.check, feature.sap.text)}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>

            </table>
          </div>
        </div>

        {/* Legend Notes */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs text-zinc-500 dark:text-zinc-400">
          <div className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-emerald-500" />
            <span>{t.compLegendAvailable}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <HelpCircle className="w-4 h-4 text-blue-500" />
            <span>{t.compLegendPartial}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <AlertCircle className="w-4 h-4 text-amber-500" />
            <span>{t.compLegendCustom}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <X className="w-4 h-4 text-red-500" />
            <span>{t.compLegendUnsupported}</span>
          </div>
        </div>

      </div>
    </section>
  );
}
