"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "vi" | "en" | "es" | "ja";

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  isTransitioning: boolean;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("vi");
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language;
    if (savedLang === "vi" || savedLang === "en" || savedLang === "es" || savedLang === "ja") {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    if (lang === language) return;
    
    setIsTransitioning(true);
    // Wait for the fade-out transition (150ms) before updating the translation text
    setTimeout(() => {
      setLanguageState(lang);
      localStorage.setItem("language", lang);
      
      // Let the rendering complete, then fade back in
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 180);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isTransitioning }}>
      <div 
        className={`transition-all duration-300 ease-in-out ${
          isTransitioning 
            ? "opacity-20 blur-[2px] scale-[0.998]" 
            : "opacity-100 blur-0 scale-100"
        }`}
      >
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
