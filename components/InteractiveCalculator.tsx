"use client";

import React, { useState, useMemo } from "react";
import { 
  Users, 
  Briefcase, 
  ShoppingBag, 
  Factory, 
  Truck, 
  Heart, 
  GraduationCap, 
  DollarSign, 
  Building2, 
  Calculator, 
  Info, 
  ArrowRight,
  TrendingUp,
  Award
} from "lucide-react";
import { PRICING_TIERS, INDUSTRIES, Industry, PricingTier } from "../common/constants";
import { calculateCost, formatUSD, formatVND, getSuggestedTierId } from "../common/utils";

// Map industry icons to component
const iconMap: Record<string, React.ComponentType<any>> = {
  Briefcase,
  ShoppingBag,
  Factory,
  Truck,
  Heart,
  GraduationCap,
  DollarSign,
  Building2
};

export default function InteractiveCalculator() {
  const [users, setUsers] = useState<number>(100);
  const [selectedIndustry, setSelectedIndustry] = useState<string>("general");

  const snapValues = [25, 50, 100, 250, 500, 1000];

  // Find corresponding suggested tier based on user count
  const suggestedTierId = useMemo(() => getSuggestedTierId(users), [users]);
  const suggestedTier = useMemo(() => {
    return PRICING_TIERS.find((t) => t.id === suggestedTierId) || PRICING_TIERS[0];
  }, [suggestedTierId]);

  // Calculate costs
  const costs = useMemo(() => {
    return calculateCost(suggestedTier, users, selectedIndustry);
  }, [suggestedTier, users, selectedIndustry]);

  const handleSnap = (val: number) => {
    setUsers(val);
  };

  const handleContactFill = () => {
    const contactForm = document.getElementById("contact");
    if (contactForm) {
      // Auto fill inputs if possible
      const userInput = document.getElementById("contact-users") as HTMLInputElement;
      const industryInput = document.getElementById("contact-industry") as HTMLSelectElement;
      const tierInput = document.getElementById("contact-tier") as HTMLSelectElement;
      
      if (userInput) userInput.value = users.toString();
      if (industryInput) industryInput.value = selectedIndustry;
      if (tierInput) tierInput.value = suggestedTierId;

      contactForm.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="calculator" className="py-20 bg-zinc-50/50 dark:bg-zinc-950/20 border-y border-zinc-200/50 dark:border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white sm:text-4xl">
            Ước Tính Tổng Chi Phí Sở Hữu (TCO)
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Sử dụng công cụ tương tác để lập kế hoạch ngân sách dự toán trong 3 năm. Lượng user và ngành nghề sẽ quyết định trực tiếp quy mô đầu tư của bạn.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Controls Panel (Left side - 7 cols) */}
          <div className="lg:col-span-7 space-y-8 bg-white dark:bg-zinc-900 p-6 sm:p-8 rounded-3xl border border-zinc-200/60 dark:border-zinc-800/60 shadow-sm">
            
            {/* Slider section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-base font-bold text-zinc-900 dark:text-white">
                  <Users className="w-5 h-5 text-indigo-500" />
                  Số lượng người dùng hệ thống (Users)
                </label>
                <div className="flex items-baseline gap-1 bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-100 dark:border-indigo-900/50 px-3 py-1.5 rounded-xl">
                  <span className="text-2xl font-black text-indigo-600 dark:text-indigo-400 tabular-nums">
                    {users}
                  </span>
                  <span className="text-xs font-semibold text-indigo-500">users</span>
                </div>
              </div>

              {/* Range input */}
              <div className="py-4">
                <input
                  type="range"
                  min="10"
                  max="1500"
                  step="5"
                  value={users}
                  onChange={(e) => setUsers(parseInt(e.target.value))}
                  className="custom-slider"
                />
              </div>

              {/* Snap buttons */}
              <div className="flex flex-wrap gap-2 pt-1">
                {snapValues.map((val) => (
                  <button
                    key={val}
                    onClick={() => handleSnap(val)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      users === val
                        ? "bg-indigo-600 text-white shadow-sm shadow-indigo-600/10"
                        : "bg-zinc-100 hover:bg-zinc-200 text-zinc-600 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-zinc-400"
                    }`}
                  >
                    {val.toLocaleString()} Users
                  </button>
                ))}
              </div>
            </div>

            {/* Industry Selector */}
            <div className="space-y-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
              <label className="flex items-center gap-2 text-base font-bold text-zinc-900 dark:text-white">
                <Briefcase className="w-5 h-5 text-indigo-500" />
                Chọn ngành nghề hoạt động của Doanh nghiệp
              </label>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Mỗi ngành có quy trình đặc thù và độ phức tạp khác nhau. Ví dụ: Ngành Sản xuất (Manufacturing) đòi hỏi cấu trúc định mức nguyên vật liệu (BOM) phức tạp hơn ngành Dịch vụ thương mại.
              </p>

              {/* Grid of industries */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {INDUSTRIES.map((ind) => {
                  const Icon = iconMap[ind.icon] || Briefcase;
                  const isSelected = selectedIndustry === ind.id;
                  return (
                    <button
                      key={ind.id}
                      onClick={() => setSelectedIndustry(ind.id)}
                      className={`flex flex-col items-center justify-center p-4 rounded-2xl border text-center transition-all group ${
                        isSelected
                          ? "bg-indigo-50 border-indigo-500 text-indigo-700 dark:bg-indigo-950/30 dark:border-indigo-500 dark:text-indigo-400 shadow-sm"
                          : "bg-zinc-50/50 hover:bg-zinc-50 dark:bg-zinc-900/50 dark:hover:bg-zinc-800/50 border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-zinc-300 dark:hover:border-zinc-700"
                      }`}
                    >
                      <Icon className={`w-6 h-6 mb-2 transition-transform duration-300 group-hover:scale-110 ${
                        isSelected ? "text-indigo-600 dark:text-indigo-400" : "text-zinc-400 dark:text-zinc-500"
                      }`} />
                      <span className="text-xs font-bold leading-tight">{ind.name}</span>
                      <span className="text-[9px] text-zinc-400 mt-1 font-mono">
                        (x{ind.multiplier.toFixed(2)})
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Results Card (Right side - 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Suggested Tier Alert */}
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-indigo-50/70 border border-indigo-100/50 dark:bg-indigo-950/20 dark:border-indigo-950/30 text-indigo-700 dark:text-indigo-400">
              <Award className="w-5 h-5 shrink-0" />
              <div className="text-xs font-semibold">
                Đề xuất hệ thống phù hợp: <span className="font-extrabold underline">{suggestedTier.name}</span>
                <span className="block text-zinc-500 dark:text-zinc-400 font-normal mt-0.5">
                  Tương đương: {suggestedTier.referenceSystems}
                </span>
              </div>
            </div>

            {/* Main Estimator Card */}
            <div className="bg-gradient-to-br from-indigo-950 to-zinc-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-indigo-900/50 relative overflow-hidden">
              {/* Decorative light effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl" />
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-indigo-400">
                    Ước tính TCO 3 năm (Trọn gói)
                  </h3>
                  <div className="mt-1 flex flex-col">
                    <span className="text-4xl sm:text-5xl font-black tracking-tight text-white tabular-nums">
                      {formatUSD(costs.threeYearTco)}
                    </span>
                    <span className="text-sm font-bold text-amber-400 mt-1">
                      &asymp; {formatVND(costs.threeYearTco)}
                    </span>
                  </div>
                  <p className="text-[10px] text-indigo-300 mt-2">
                    * Đã bao gồm Bản quyền 3 năm, Triển khai, Đào tạo, và Bảo trì.
                  </p>
                </div>

                <div className="border-t border-indigo-900/60 my-4" />

                {/* Breakdown List */}
                <div className="space-y-3.5 text-sm">
                  {/* Monthly per User */}
                  <div className="flex justify-between items-center text-zinc-400">
                    <span className="flex items-center gap-1.5">
                      Đơn giá bản quyền / tháng
                      <span className="group relative cursor-pointer text-indigo-400 hover:text-indigo-300">
                        <Info className="w-3.5 h-3.5" />
                        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-zinc-900 text-[10px] text-zinc-300 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-20 shadow-md">
                          Chi phí thuê bao phần mềm định kỳ trên mỗi người dùng hàng tháng.
                        </span>
                      </span>
                    </span>
                    <span className="font-semibold text-white">
                      {formatUSD(costs.monthlyLicensePerUser)} / user
                    </span>
                  </div>

                  {/* Total License 3 Years */}
                  <div className="flex justify-between items-center text-zinc-400">
                    <span>Tổng bản quyền (36 tháng)</span>
                    <span className="font-semibold text-white">
                      {formatUSD(costs.threeYearLicenseTotal)}
                    </span>
                  </div>

                  {/* Implementation */}
                  <div className="flex justify-between items-center text-zinc-400">
                    <span className="flex items-center gap-1.5">
                      Dịch vụ Triển khai (1 lần)
                      <span className="group relative cursor-pointer text-indigo-400 hover:text-indigo-300">
                        <Info className="w-3.5 h-3.5" />
                        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-52 p-2 bg-zinc-900 text-[10px] text-zinc-300 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-20 shadow-md">
                          Khảo sát quy trình, thiết lập hệ thống, import data, lập trình báo cáo. Đã nhân hệ số ngành.
                        </span>
                      </span>
                    </span>
                    <span className="font-semibold text-white">
                      {formatUSD(costs.finalImplementation)}
                    </span>
                  </div>

                  {/* Training */}
                  <div className="flex justify-between items-center text-zinc-400">
                    <span>Đào tạo & Quản trị thay đổi</span>
                    <span className="font-semibold text-white">
                      {formatUSD(costs.trainingCost)}
                    </span>
                  </div>

                  {/* Support */}
                  <div className="flex justify-between items-center text-zinc-400">
                    <span>Vận hành & Hỗ trợ (3 năm)</span>
                    <span className="font-semibold text-white">
                      {formatUSD(costs.threeYearOngoingCost)}
                    </span>
                  </div>
                </div>

                {/* Cost ratio progress bar */}
                <div className="pt-2">
                  <div className="flex justify-between text-[11px] text-zinc-400 mb-1.5 font-bold">
                    <span>Bản quyền: {Math.round((costs.threeYearLicenseTotal / costs.threeYearTco) * 100)}%</span>
                    <span>Triển khai & khác: {Math.round(((costs.threeYearTco - costs.threeYearLicenseTotal) / costs.threeYearTco) * 100)}%</span>
                  </div>
                  <div className="h-2 bg-indigo-950 rounded-full overflow-hidden flex border border-indigo-900">
                    <div 
                      className="bg-indigo-500 h-full transition-all duration-500" 
                      style={{ width: `${(costs.threeYearLicenseTotal / costs.threeYearTco) * 100}%` }}
                    />
                    <div 
                      className="bg-amber-500 h-full transition-all duration-500" 
                      style={{ width: `${((costs.threeYearTco - costs.threeYearLicenseTotal) / costs.threeYearTco) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={handleContactFill}
                    className="w-full inline-flex items-center justify-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold px-6 py-3.5 rounded-2xl transition-all duration-300 shadow-md shadow-amber-500/10 group"
                  >
                    Gửi Cấu Hình Nhận Báo Giá Chi Tiết
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
