"use client";

import React, { useState, useMemo } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { getFaqs } from "../common/constants";
import { useLanguage } from "@/components/LanguageProvider";
import { TRANSLATIONS } from "@/common/translations";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  const faqs = useMemo(() => getFaqs(language), [language]);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="inline-block mb-3 text-xs font-extrabold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 px-3 py-1.5 rounded-full border border-indigo-200/20">
            {t.faqClarifications}
          </span>
          <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white sm:text-4xl">
            {t.faqTitle}
          </h2>
          <p className="text-base text-zinc-650 dark:text-zinc-400">
            {t.faqDesc}
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:border-zinc-300 dark:hover:border-zinc-700"
              >
                {/* Header/Button */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 text-left font-semibold text-zinc-850 dark:text-zinc-100 hover:bg-zinc-50/50 dark:hover:bg-zinc-800/30 gap-4 transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3 text-sm sm:text-base">
                    <HelpCircle className="w-5 h-5 text-indigo-500 shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-zinc-400 transition-transform duration-350 shrink-0 ${
                      isOpen ? "transform rotate-180 text-indigo-500" : ""
                    }`}
                  />
                </button>

                {/* Content Panel */}
                <div
                  className={`transition-all duration-350 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-5 pt-0 border-t border-zinc-100 dark:border-zinc-800 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed text-justify">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
