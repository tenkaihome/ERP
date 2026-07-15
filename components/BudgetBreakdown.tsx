"use client";

import React, { useMemo } from "react";
import { Layers, Settings, FileSpreadsheet, GraduationCap, LifeBuoy, AlertCircle } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

export default function BudgetBreakdown() {
  const { language } = useLanguage();

  const steps = useMemo(() => {
    if (language === "vi") {
      return [
        {
          icon: <Layers className="w-5 h-5 text-indigo-500" />,
          title: "1. Khảo sát & Tư vấn Quy trình (Blueprint)",
          desc: "Chuyên gia của SAHO trực tiếp làm việc cùng các trưởng bộ phận doanh nghiệp để chuẩn hóa quy trình nghiệp vụ mua hàng, kho vận, tài chính, sản xuất trước khi đưa lên phần mềm.",
        },
        {
          icon: <Settings className="w-5 h-5 text-indigo-500" />,
          title: "2. Cấu hình & Tùy biến Hệ thống (Configuration)",
          desc: "Lập trình thiết lập sơ đồ tài khoản kế toán, phân quyền bảo mật, tùy chỉnh các báo cáo tài chính, hóa đơn và cấu trúc hóa hệ thống theo mô hình vận hành thực tế.",
        },
        {
          icon: <FileSpreadsheet className="w-5 h-5 text-indigo-500" />,
          title: "3. Chuẩn hóa & Chuyển đổi Dữ liệu (Migration)",
          desc: "Hỗ trợ doanh nghiệp trích xuất dữ liệu cũ từ Excel hoặc phần mềm kế toán cũ, làm sạch dữ liệu, xử lý trùng lặp và nhập liệu tự động vào cơ sở dữ liệu ERP mới.",
        },
        {
          icon: <GraduationCap className="w-5 h-5 text-indigo-500" />,
          title: "4. Đào tạo Nhân sự & Đánh giá (UAT)",
          desc: "Tổ chức các lớp đào tạo thực hành trực quan cho từng phòng ban. Xây dựng tài liệu hướng dẫn và tổ chức buổi chạy thử hệ thống (User Acceptance Testing) để nghiệm thu.",
        },
        {
          icon: <LifeBuoy className="w-5 h-5 text-indigo-500" />,
          title: "5. Hỗ trợ Vận hành Thực tế (Hypercare)",
          desc: "Cử kỹ sư giám sát trực tiếp tại văn phòng doanh nghiệp trong 2-4 tuần đầu tiên khi hệ thống go-live để giải quyết tức thời các vướng mắc của nhân viên.",
        },
      ];
    } else {
      return [
        {
          icon: <Layers className="w-5 h-5 text-indigo-500" />,
          title: "1. Business Process Mapping (Blueprint)",
          desc: "SAHO experts work directly with your department heads to analyze and standardize purchasing, logistics, finance, and manufacturing workflows before configuring the system.",
        },
        {
          icon: <Settings className="w-5 h-5 text-indigo-500" />,
          title: "2. System Configuration & Customization",
          desc: "Setting up charts of accounts, security permissions, customizing financial reports, invoice templates, and tailoring the system to match your actual operating model.",
        },
        {
          icon: <FileSpreadsheet className="w-5 h-5 text-indigo-500" />,
          title: "3. Data Cleaning & Migration",
          desc: "Assisting in extracting legacy data from Excel sheets or older accounting software, cleaning and de-duplicating entries, and importing them automatically into the new ERP database.",
        },
        {
          icon: <GraduationCap className="w-5 h-5 text-indigo-500" />,
          title: "4. Staff Training & User Acceptance Testing (UAT)",
          desc: "Organizing visual hands-on training sessions for each department. Developing user manuals and executing system trials (UAT) for final sign-off.",
        },
        {
          icon: <LifeBuoy className="w-5 h-5 text-indigo-500" />,
          title: "5. Go-live Support & Hypercare",
          desc: "Deploying engineers onsite at your corporate offices for the first 2-4 weeks after go-live to instantly resolve any user issues and guarantee smooth adoption.",
        },
      ];
    }
  }, [language]);

  return (
    <section id="breakdown" className="py-20 bg-zinc-50/50 dark:bg-zinc-950/20 border-y border-zinc-200/50 dark:border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column (5 cols): Explanation & Mindset */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 px-3 py-1.5 rounded-full border border-indigo-200/20">
              {language === "vi" ? "Quy Trình Triển Khai Thực Chất" : "Genuine Implementation Process"}
            </span>
            <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white sm:text-4xl leading-tight">
              {language === "vi" 
                ? "Chúng Tôi Bàn Giao Quy Trình Vận Hành, Không Phải Đĩa Phần Mềm" 
                : "We Deliver Operational Processes, Not Software Disks"
              }
            </h2>
            <p className="text-base text-zinc-650 dark:text-zinc-400 leading-relaxed">
              {language === "vi"
                ? "Mua bản quyền ERP mới chỉ là mua chiếc xe, còn dịch vụ triển khai chính là động cơ và nhiên liệu để chiếc xe lăn bánh an toàn. SAHO cung cấp chuỗi dịch vụ khép kín nhằm cam kết đưa dự án tới ngày nghiệm thu thực tế, loại bỏ hoàn toàn nguy cơ “đắp chiếu” phần mềm."
                : "Buying a new ERP license is like buying a car; implementation services are the engine and fuel that make the car run safely. SAHO provides an end-to-end chain of services committed to bringing the project to operational go-live, eliminating any software shelving risks."
              }
            </p>

            <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-zinc-900 dark:text-zinc-300 space-y-3">
              <div className="flex items-center gap-2 font-bold text-amber-600 dark:text-amber-400 text-sm">
                <AlertCircle className="w-5 h-5 shrink-0" />
                {language === "vi" ? "Lưu ý quan trọng cho lãnh đạo doanh nghiệp" : "Important note for business leaders"}
              </div>
              <p className="text-xs leading-relaxed">
                {language === "vi"
                  ? "Hơn 68% dự án ERP thất bại toàn cầu không phải do lỗi phần mềm, mà do quy trình triển khai thiếu chuẩn hóa và nhân sự vận hành không được đào tạo bài bản. Đầu tư nghiêm túc cho khâu Triển khai là khoản đầu tư đảm bảo thành công cao nhất."
                  : "Over 68% of ERP project failures worldwide are not due to software errors, but due to unstandardized deployment processes and untrained operations staff. Seriously investing in Implementation is the highest guarantee of project success."
                }
              </p>
            </div>
          </div>

          {/* Right Column (7 cols): List of implementation tasks */}
          <div className="lg:col-span-7 space-y-5">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-4">
              {language === "vi" ? "5 Hạng Mục Công Việc Nằm Trong Chi Phí Triển Khai" : "5 Key Deliverables Included in Implementation Costs"}
            </h3>
            
            <div className="space-y-4">
              {steps.map((step, idx) => (
                <div 
                  key={idx}
                  className="flex gap-4 p-5 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm transition-all duration-300 hover:shadow-md hover:border-indigo-500/30"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 flex items-center justify-center shrink-0 border border-indigo-100/30">
                    {step.icon}
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="text-sm font-bold text-zinc-900 dark:text-white leading-none">
                      {step.title}
                    </h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed text-justify">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
