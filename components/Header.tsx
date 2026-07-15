"use client";

import React, { useState, useEffect, useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Terminal, Menu, X, ArrowRight, Sun, Moon, Globe, ChevronDown } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { TRANSLATIONS } from "@/common/translations";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [theme, setTheme] = useState("light");
  const { language, setLanguage } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();

  const supportedLanguages = useMemo(() => {
    return Object.keys(TRANSLATIONS).map((code) => ({
      code,
      label: TRANSLATIONS[code].meta.label,
      flag: TRANSLATIONS[code].meta.flag,
    }));
  }, []);

  // Close language dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".lang-selector-container")) {
        setIsLangDropdownOpen(false);
      }
    };
    if (isLangDropdownOpen) {
      window.addEventListener("click", handleOutsideClick);
    }
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [isLangDropdownOpen]);

  // Sync theme with local storage on mount (Default to Light Mode)
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const t = TRANSLATIONS[language];

  const navItems = [
    { id: "calculator", label: t.tcoCalculator },
    { id: "tiers", label: t.pricingPackages },
    { id: "comparison", label: t.comparison },
    { id: "breakdown", label: t.breakdown },
    { id: "faq", label: t.faq },
  ];

  // Scroll handler for background color change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver to spy on scroll positions
  useEffect(() => {
    if (pathname !== "/") return;

    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -50% 0px", // Trigger when section occupies the viewport center
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => {
      navItems.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) observer.unobserve(element);
      });
    };
  }, [pathname]);

  // Smooth scroll to hash element on routing changes
  useEffect(() => {
    if (pathname === "/" && window.location.hash) {
      const hash = window.location.hash.substring(1);
      const timer = setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
          setActiveSection(hash);
        }
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    if (pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        // Offset scroll to account for sticky header height
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
        setActiveSection(id);
      }
    } else {
      router.push(`/#${id}`);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-zinc-200/50 dark:border-zinc-800/50 shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => {
            if (pathname === "/") {
              window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
              router.push("/");
            }
          }}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-blue-500 to-amber-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/25">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-zinc-900 via-indigo-950 to-amber-600 dark:from-white dark:via-zinc-100 dark:to-amber-400 bg-clip-text text-transparent">
                SAHO
              </span>
              <span className="text-xs font-semibold ml-1.5 px-1.5 py-0.5 rounded-md bg-indigo-50 text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300 border border-indigo-200/30">
                ERP
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative text-sm font-semibold transition-all duration-300 py-2 cursor-pointer ${
                    isActive
                      ? "text-indigo-600 dark:text-indigo-400 scale-105"
                      : "text-zinc-600 hover:text-indigo-600 dark:text-zinc-300 dark:hover:text-indigo-400"
                  }`}
                >
                  {item.label}
                  {/* Underline indicator */}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-600 to-amber-500 rounded-full transition-all duration-300 origin-left ${
                      isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Switcher for Desktop */}
            <div className="relative lang-selector-container">
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="px-2.5 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 text-xs font-black text-zinc-700 dark:text-zinc-300 transition-colors flex items-center gap-1.5 cursor-pointer uppercase shadow-sm"
                aria-label="Change Language"
              >
                <Globe className="w-3.5 h-3.5 text-zinc-500" />
                <span>{language}</span>
                <ChevronDown className={`w-3.5 h-3.5 text-zinc-400 transition-transform duration-250 ${isLangDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Dropdown Options */}
              {isLangDropdownOpen && (
                <div className="absolute right-0 mt-2 w-36 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 p-1.5 shadow-xl flex flex-col gap-0.5 z-50 animate-fade-in">
                  {supportedLanguages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code as any);
                        setIsLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                        language === lang.code
                          ? "bg-indigo-50 text-indigo-650 dark:bg-indigo-950/40 dark:text-indigo-400"
                          : "text-zinc-650 hover:bg-zinc-100 dark:text-zinc-350 dark:hover:bg-zinc-900"
                      }`}
                    >
                      <span className="text-sm leading-none">{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Theme Toggle Button for Desktop */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-600 dark:text-zinc-400 transition-colors cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="relative inline-flex items-center gap-1.5 text-sm font-semibold bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-zinc-100 dark:hover:bg-white dark:text-zinc-950 px-5 py-2.5 rounded-xl transition-all duration-300 shadow-md shadow-zinc-950/10 dark:shadow-white/5 group overflow-hidden cursor-pointer"
            >
              {t.contactBtn}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Actions Container */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Language Switcher for Mobile */}
            <div className="relative lang-selector-container">
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 text-xs font-black text-zinc-700 dark:text-zinc-300 transition-colors flex items-center gap-1 cursor-pointer uppercase"
                aria-label="Change Language"
              >
                <Globe className="w-3.5 h-3.5 text-zinc-500" />
                <span>{language}</span>
              </button>

              {/* Dropdown Options */}
              {isLangDropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 p-1.5 shadow-xl flex flex-col gap-0.5 z-50 animate-fade-in">
                  {supportedLanguages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code as any);
                        setIsLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-xl text-[10px] font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                        language === lang.code
                          ? "bg-indigo-50 text-indigo-650 dark:bg-indigo-950/40 dark:text-indigo-400"
                          : "text-zinc-650 hover:bg-zinc-100 dark:text-zinc-350 dark:hover:bg-zinc-900"
                      }`}
                    >
                      <span className="text-xs leading-none">{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Theme Toggle Button for Mobile */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-600 dark:text-zinc-400 transition-colors cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 py-4 px-6 flex flex-col gap-4 shadow-lg animate-fade-in">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left text-base font-semibold py-2 px-3 rounded-xl transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border-l-4 border-indigo-600"
                    : "text-zinc-650 hover:text-indigo-600 dark:text-zinc-300 dark:hover:text-indigo-400"
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <hr className="border-zinc-200 dark:border-zinc-800" />
          <button
            onClick={() => scrollToSection("contact")}
            className="w-full flex items-center justify-center gap-1.5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold shadow-md shadow-indigo-600/10 transition-colors cursor-pointer"
          >
            {t.contactBtn}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
}
