import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import InteractiveCalculator from "@/components/InteractiveCalculator";
import PricingTiers from "@/components/PricingTiers";
import ComparisonTable from "@/components/ComparisonTable";
import BudgetBreakdown from "@/components/BudgetBreakdown";
import FaqSection from "@/components/FaqSection";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-zinc-950 font-sans transition-colors duration-300">
      {/* Navigation */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {/* Hero Banner Section */}
        <HeroSection />

        {/* Vision & Mission Statement Section */}
        <MissionSection />

        {/* Pricing Slider & Dynamic TCO Estimator */}
        <InteractiveCalculator />

        {/* 3 Pricing Packages Cards Grid */}
        <PricingTiers />

        {/* Competitor Comparison Matrix Section */}
        <ComparisonTable />

        {/* Implementation Budget Breakdown Explanations */}
        <BudgetBreakdown />

        {/* accordions for FAQS */}
        <FaqSection />

        {/* Contact/Lead Capture Form */}
        <ContactForm />
      </main>

      {/* Corporate Footer */}
      <Footer />
    </div>
  );
}
