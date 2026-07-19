"use client";

import React from "react";
import { Compass, Cpu, Sliders, Globe, Quote } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { TRANSLATIONS } from "@/common/translations";

export default function MissionSection() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-amber-500/5 dark:bg-amber-500/5 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Card with Glassmorphism */}
        <div className="relative bg-gradient-to-b from-white/80 to-white/40 dark:from-zinc-900/80 dark:to-zinc-900/40 backdrop-blur-xl border border-zinc-200/60 dark:border-zinc-800/60 rounded-3xl p-8 md:p-12 shadow-xl shadow-zinc-100/50 dark:shadow-none overflow-hidden">
          
          {/* Subtle top decoration */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-blue-500 to-amber-500" />
          
          <div className="relative flex flex-col items-center text-center space-y-6 md:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-650 dark:text-indigo-400 border border-indigo-200/45 dark:border-indigo-800/30 text-xs font-bold tracking-wider uppercase shadow-inner">
              <Compass className="w-4 h-4 text-indigo-550 dark:text-indigo-405" />
              {t.missionBadge}
            </div>

            {/* Vision & Mission Two-Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 w-full text-center md:text-left items-stretch my-2">
              
              {/* Vision Column */}
              <div className="relative flex flex-col justify-between space-y-4 pb-8 md:pb-0 md:pr-12 border-b md:border-b-0 md:border-r border-zinc-200/50 dark:border-zinc-800/50">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 text-indigo-650 dark:text-indigo-400 font-extrabold tracking-widest text-xs sm:text-sm uppercase justify-center md:justify-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-555 animate-pulse" />
                    {t.visionTitle}
                  </div>
                  <div className="relative">
                    <Quote className="absolute -top-3 -left-3 w-8 h-8 text-indigo-500/20 dark:text-indigo-400/30 transform -scale-x-100 pointer-events-none" />
                    <p className="text-base sm:text-lg md:text-xl font-medium tracking-tight text-zinc-850 dark:text-zinc-100 leading-relaxed italic pl-6 pr-2">
                      {t.visionStatement}
                    </p>
                  </div>
                </div>
              </div>

              {/* Mission Column */}
              <div className="relative flex flex-col justify-between space-y-4 pt-8 md:pt-0">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 text-amber-600 dark:text-amber-400 font-extrabold tracking-widest text-xs sm:text-sm uppercase justify-center md:justify-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                    {t.missionTitle}
                  </div>
                  <div className="relative">
                    <Quote className="absolute -top-3 -left-3 w-8 h-8 text-amber-500/20 dark:text-amber-400/30 transform -scale-x-100 pointer-events-none" />
                    <p className="text-base sm:text-lg md:text-xl font-medium tracking-tight text-zinc-850 dark:text-zinc-100 leading-relaxed italic pl-6 pr-2">
                      {t.missionStatement}
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Divider */}
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-200/60 dark:via-zinc-800/60 to-transparent my-4" />

            {/* 3 Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full pt-4 text-left">
              
              {/* Pillar 1 */}
              <div className="group p-5 bg-white/50 dark:bg-zinc-950/40 border border-zinc-200/40 dark:border-zinc-800/45 rounded-2xl hover:border-indigo-500/40 dark:hover:border-indigo-400/40 hover:bg-white dark:hover:bg-zinc-950/70 transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-650 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-indigo-650 dark:group-hover:text-indigo-400 transition-colors">
                    {t.missionPillar1Title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-zinc-550 dark:text-zinc-400 leading-relaxed">
                  {t.missionPillar1Desc}
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="group p-5 bg-white/50 dark:bg-zinc-950/40 border border-zinc-200/40 dark:border-zinc-800/45 rounded-2xl hover:border-amber-500/45 dark:hover:border-amber-400/40 hover:bg-white dark:hover:bg-zinc-950/70 transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform duration-300">
                    <Sliders className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-amber-650 dark:group-hover:text-amber-400 transition-colors">
                    {t.missionPillar2Title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-zinc-550 dark:text-zinc-400 leading-relaxed">
                  {t.missionPillar2Desc}
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="group p-5 bg-white/50 dark:bg-zinc-950/40 border border-zinc-200/40 dark:border-zinc-800/45 rounded-2xl hover:border-blue-500/40 dark:hover:border-blue-400/40 hover:bg-white dark:hover:bg-zinc-950/70 transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                    <Globe className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-650 dark:group-hover:text-blue-400 transition-colors">
                    {t.missionPillar3Title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-zinc-550 dark:text-zinc-400 leading-relaxed">
                  {t.missionPillar3Desc}
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
