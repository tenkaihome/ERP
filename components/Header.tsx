"use client";

import React, { useState, useEffect } from "react";
import { Terminal, Menu, X, ArrowRight, Sun, Moon } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [theme, setTheme] = useState("light");

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

  const navItems = [
    { id: "calculator", label: "Bộ Tính Chi Phí TCO" },
    { id: "tiers", label: "Gói Dịch Vụ ERP" },
    { id: "comparison", label: "So Sánh ERP" },
    { id: "breakdown", label: "Cơ Cấu Đầu Tư" },
    { id: "faq", label: "Hỏi Đáp (FAQ)" },
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
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
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
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
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
          <div className="hidden md:flex items-center gap-4">
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
              Đăng Ký Tư Vấn
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Actions Container */}
          <div className="flex items-center gap-2 md:hidden">
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
            Đăng Ký Tư Vấn
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
}
