"use client";

import React, { useState, useMemo } from "react";
import { Send, CheckCircle2, Loader2, Sparkles, Building, Phone, Mail, User } from "lucide-react";
import { getIndustries, getPricingTiers } from "../common/constants";
import { useLanguage } from "@/components/LanguageProvider";
import { TRANSLATIONS } from "@/common/translations";
import CustomSelect from "./ui/CustomSelect";

export default function ContactForm() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  const pricingTiers = useMemo(() => getPricingTiers(language), [language]);
  const industries = useMemo(() => getIndustries(language), [language]);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    users: "100",
    industry: "general",
    tier: "growth",
    notes: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id.replace("contact-", "")]: e.target.value,
    });
  };

  const handleCustomChange = (id: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitted(true);
      } else {
        setError(result.message || (language === "vi" ? "Đã xảy ra lỗi. Vui lòng thử lại sau." : "An error occurred. Please try again later."));
      }
    } catch (err) {
      setError(language === "vi" ? "Không thể kết nối đến máy chủ. Vui lòng kiểm tra lại mạng." : "Could not connect to the server. Please check your network.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Card wrapper */}
        <div className="relative bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/60 rounded-3xl p-6 sm:p-10 shadow-lg overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none" />
          
          {submitted ? (
            /* Success State */
            <div className="text-center py-10 space-y-6 flex flex-col items-center animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200/30 flex items-center justify-center text-emerald-500 shadow-lg shadow-emerald-500/10">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-2.5">
                <h3 className="text-2xl font-extrabold text-zinc-900 dark:text-white">
                  {t.contactSuccessTitle}
                </h3>
                <p className="text-sm text-zinc-650 dark:text-zinc-400 max-w-md mx-auto leading-relaxed">
                  {language === "vi" ? (
                    <>
                      Cảm ơn bạn đã gửi cấu hình yêu cầu tư vấn. Chuyên viên giải pháp ERP của SAHO sẽ liên hệ lại với bạn qua số điện thoại <span className="font-bold text-indigo-650 dark:text-indigo-400">{formData.phone}</span> và email trong vòng <span className="font-bold text-indigo-650 dark:text-indigo-400">2 giờ làm việc</span> để gửi báo giá chi tiết.
                    </>
                  ) : (
                    <>
                      Thank you for submitting your ERP configuration. A SAHO solutions expert will contact you via phone at <span className="font-bold text-indigo-650 dark:text-indigo-400">{formData.phone}</span> and email within <span className="font-bold text-indigo-650 dark:text-indigo-400">2 business hours</span> to provide a detailed quote.
                    </>
                  )}
                </p>
              </div>
              <div className="pt-4">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      company: "",
                      email: "",
                      phone: "",
                      users: "100",
                      industry: "general",
                      tier: "growth",
                      notes: "",
                    });
                  }}
                  className="px-6 py-2.5 rounded-xl text-xs font-bold bg-zinc-100 hover:bg-zinc-200 text-zinc-600 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-zinc-300 transition-colors cursor-pointer"
                >
                  {language === "vi" ? "Tạo yêu cầu mới" : "Create new request"}
                </button>
              </div>
            </div>
          ) : (
            /* Form State */
            <div className="space-y-8">
              
              {/* Form Header */}
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold uppercase tracking-wider">
                  <Sparkles className="w-3 h-3" />
                  {language === "vi" ? "Đăng Ký Khảo Sát & Nhận Báo Giá Chi Tiết" : "Register for Consultation & Detailed Quote"}
                </div>
                <h3 className="text-2xl font-extrabold text-zinc-900 dark:text-white">
                  {t.contactTitle}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                  {t.contactDesc}
                </p>
              </div>

              {error && (
                <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 text-xs font-semibold border border-red-200/20">
                  {error}
                </div>
              )}

              {/* Form elements */}
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* 2 columns grid for main fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Name */}
                  <div className="space-y-2">
                    <label htmlFor="contact-name" className="text-xs font-bold text-zinc-750 dark:text-zinc-300 uppercase tracking-wider">
                      {t.contactFieldName}
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                      <input
                        type="text"
                        id="contact-name"
                        required
                        placeholder={t.contactPlaceholderName}
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-zinc-800 dark:text-white"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div className="space-y-2">
                    <label htmlFor="contact-company" className="text-xs font-bold text-zinc-750 dark:text-zinc-300 uppercase tracking-wider">
                      {language === "vi" ? "Tên Doanh nghiệp / Tổ chức" : "Company / Organization Name"}
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                      <input
                        type="text"
                        id="contact-company"
                        required
                        placeholder={language === "vi" ? "Công ty Cổ phần SAHO" : "SAHO Corporation"}
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-zinc-800 dark:text-white"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="contact-email" className="text-xs font-bold text-zinc-750 dark:text-zinc-300 uppercase tracking-wider">
                      {t.contactFieldEmail}
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                      <input
                        type="email"
                        id="contact-email"
                        required
                        placeholder={t.contactPlaceholderEmail}
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-zinc-800 dark:text-white"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label htmlFor="contact-phone" className="text-xs font-bold text-zinc-750 dark:text-zinc-300 uppercase tracking-wider">
                      {t.contactFieldPhone}
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                      <input
                        type="tel"
                        id="contact-phone"
                        required
                        placeholder={t.contactPlaceholderPhone}
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-zinc-800 dark:text-white"
                      />
                    </div>
                  </div>

                </div>

                {/* 3 columns grid for setup configurations */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2 border-t border-zinc-100 dark:border-zinc-800">
                  
                  {/* Users */}
                  <div className="space-y-2">
                    <label htmlFor="contact-users" className="text-xs font-bold text-zinc-750 dark:text-zinc-300 uppercase tracking-wider">
                      {language === "vi" ? "Số lượng Users dự kiến" : "Estimated Number of Users"}
                    </label>
                    <input
                      type="number"
                      id="contact-users"
                      required
                      min="5"
                      value={formData.users}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-zinc-800 dark:text-white"
                    />
                  </div>

                  {/* Industry */}
                  <div className="space-y-2">
                    <label htmlFor="contact-industry" className="text-xs font-bold text-zinc-750 dark:text-zinc-300 uppercase tracking-wider">
                      {language === "vi" ? "Ngành nghề hoạt động" : "Industry Segment"}
                    </label>
                    <CustomSelect
                      id="contact-industry"
                      value={formData.industry}
                      onChange={(val) => handleCustomChange("industry", val)}
                      options={industries.map((ind) => ({ value: ind.id, label: ind.name }))}
                    />
                  </div>

                  {/* Tier */}
                  <div className="space-y-2">
                    <label htmlFor="contact-tier" className="text-xs font-bold text-zinc-750 dark:text-zinc-300 uppercase tracking-wider">
                      {t.contactFieldPlan}
                    </label>
                    <CustomSelect
                      id="contact-tier"
                      value={formData.tier}
                      onChange={(val) => handleCustomChange("tier", val)}
                      options={pricingTiers.map((tier) => ({ value: tier.id, label: tier.name }))}
                    />
                  </div>

                </div>

                {/* Notes */}
                <div className="space-y-2 pt-2 border-t border-zinc-100 dark:border-zinc-800">
                  <label htmlFor="contact-notes" className="text-xs font-bold text-zinc-750 dark:text-zinc-300 uppercase tracking-wider">
                    {t.contactFieldMessage}
                  </label>
                  <textarea
                    id="contact-notes"
                    rows={4}
                    placeholder={t.contactPlaceholderMessage}
                    value={formData.notes}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-zinc-800 dark:text-white resize-y"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-600/60 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 shadow-md shadow-indigo-600/10 cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        {t.contactBtnSubmitting}
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        {t.contactBtnSubmit}
                      </>
                    )}
                  </button>
                </div>

              </form>

            </div>
          )}

        </div>
      </div>
    </section>
  );
}
