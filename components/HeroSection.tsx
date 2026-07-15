"use client";

import React from "react";
import { ArrowRight, Settings2, Sparkles, TrendingUp } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-amber-500/5 rounded-full blur-[80px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border border-indigo-200/50 dark:border-indigo-800/30 text-xs font-semibold tracking-wide uppercase shadow-sm">
          <Sparkles className="w-3.5 h-3.5" />
          Bản Đồ Báo Giá Thực Tế 2025 - 2026
        </div>

        {/* Title */}
        <h1 className="max-w-4xl mx-auto text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight md:leading-[1.1] text-zinc-900 dark:text-white">
          Đầu Tư ERP Thực Chất:
          <span className="block mt-2 bg-gradient-to-r from-indigo-600 via-blue-500 to-amber-500 bg-clip-text text-transparent">
            Không Chỉ Là Bản Quyền, Đó Là Giải Pháp & Triển Khai
          </span>
        </h1>

        {/* Description */}
        <p className="max-w-3xl mx-auto text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
          Nhiều doanh nghiệp thất bại khi chỉ quan tâm tới giá mua phần mềm (License). Thực tế, bản quyền chỉ chiếm <strong className="text-indigo-600 dark:text-indigo-400 font-semibold">20% - 40%</strong> tổng đầu tư. <strong className="text-amber-500 font-semibold">30% - 50%</strong> ngân sách quyết định sự thành bại nằm ở khâu <strong className="underline decoration-amber-500/50 underline-offset-4">Triển Khai & Vận Hành</strong>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={() => scrollToSection("calculator")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/35 hover:-translate-y-0.5 group"
          >
            Tính Chi Phí TCO Ngay
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollToSection("tiers")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-zinc-50 text-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800/80 dark:text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 border border-zinc-200 dark:border-zinc-800 hover:shadow-md"
          >
            Xem Thẻ Gói Chi Tiết
          </button>
        </div>

        {/* Interactive Mindset Box */}
        <div className="max-w-2xl mx-auto p-6 mt-12 bg-white/60 dark:bg-zinc-900/60 rounded-3xl border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm text-left">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-indigo-500" />
            <h3 className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider">
              Cơ Cấu Ngân Sách ERP Tiêu Chuẩn
            </h3>
          </div>
          
          <div className="flex h-10 rounded-2xl overflow-hidden mb-3 text-white font-bold text-xs select-none shadow-inner">
            <div 
              className="bg-indigo-600 flex items-center justify-center transition-all duration-500 hover:opacity-90"
              style={{ width: "30%" }}
              title="Bản quyền phần mềm (License) chiếm ~30% ngân sách"
            >
              <span>License 30%</span>
            </div>
            <div 
              className="bg-amber-500 flex items-center justify-center text-zinc-950 transition-all duration-500 hover:opacity-90"
              style={{ width: "40%" }}
              title="Dịch vụ triển khai (Implementation) chiếm ~40% ngân sách"
            >
              <span>Triển khai 40%</span>
            </div>
            <div 
              className="bg-emerald-600 flex items-center justify-center transition-all duration-500 hover:opacity-90"
              style={{ width: "15%" }}
              title="Đào tạo nhân sự và Chuyển đổi số (Training) chiếm ~15% ngân sách"
            >
              <span>Đào tạo 15%</span>
            </div>
            <div 
              className="bg-zinc-500 flex items-center justify-center transition-all duration-500 hover:opacity-90"
              style={{ width: "15%" }}
              title="Vận hành, nâng cấp & bảo trì (Ongoing Maintenance) chiếm ~15% ngân sách"
            >
              <span>Vận hành 15%</span>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-zinc-500 dark:text-zinc-400">
            <span>* Tỷ lệ trung bình của các dự án SAP, NetSuite và Dynamics 365.</span>
            <span className="font-semibold text-indigo-500 dark:text-indigo-400">
              Giải pháp của SAHO đã tối ưu hóa trọn gói
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
