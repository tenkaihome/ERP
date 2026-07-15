"use client";

import React from "react";
import Link from "next/link";
import { Terminal, Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { TRANSLATIONS } from "@/common/translations";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 via-blue-500 to-amber-500 flex items-center justify-center text-white">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                SAHO <span className="text-xs font-semibold text-indigo-400">ERP</span>
              </span>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              {language === "vi" 
                ? "Chúng tôi cung cấp giải pháp chuyển đổi số ERP toàn diện, kết hợp chặt chẽ giữa bản quyền phần mềm tối ưu và quy trình triển khai chuẩn quốc tế."
                : "We provide comprehensive ERP digital transformation solutions, combining optimized software licensing with international-standard deployment processes."
              }
            </p>
            <div className="pt-2 text-xs text-zinc-500 flex flex-col gap-1">
              <span>{language === "vi" ? "Định vị thị trường: 2025 - 2026" : "Market positioning: 2025 - 2026"}</span>
              <span>{language === "vi" ? "Phiên bản: v1.2 (Kiến trúc App Router)" : "Version: v1.2 (App Router)"}</span>
            </div>
          </div>

          {/* Core Modules */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              {language === "vi" ? "Mô đun Hệ Thống" : "System Modules"}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <span className="hover:text-indigo-400 transition-colors">
                  {language === "vi" ? "Quản trị Nhân sự (HRM)" : "Human Resource Management (HRM)"}
                </span>
              </li>
              <li>
                <span className="hover:text-indigo-400 transition-colors">
                  {language === "vi" ? "Quản trị Tài chính - Kế toán (FICO)" : "Financial & Cost Accounting (FICO)"}
                </span>
              </li>
              <li>
                <span className="hover:text-indigo-400 transition-colors">
                  {language === "vi" ? "Quản trị Chuỗi cung ứng (SCM)" : "Supply Chain Management (SCM)"}
                </span>
              </li>
              <li>
                <span className="hover:text-indigo-400 transition-colors">
                  {language === "vi" ? "Quản trị Quan hệ Khách hàng (CRM)" : "Customer Relationship Management (CRM)"}
                </span>
              </li>
              <li>
                <span className="hover:text-indigo-400 transition-colors">
                  {language === "vi" ? "Trí tuệ Quản trị (BI & Analytics)" : "Business Intelligence (BI & Analytics)"}
                </span>
              </li>
            </ul>
          </div>

          {/* Reference Systems */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              {language === "vi" ? "Đối Tượng Tham Chiếu" : "Reference Standards"}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center justify-between">
                <span>SAP S/4HANA Cloud</span>
                <span className="text-[10px] bg-zinc-900 border border-zinc-800 text-zinc-500 px-1.5 py-0.5 rounded">Tier 3</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Oracle NetSuite</span>
                <span className="text-[10px] bg-zinc-900 border border-zinc-800 text-zinc-500 px-1.5 py-0.5 rounded">Tier 2</span>
              </li>
              <li className="flex items-center justify-between">
                <span>MS Dynamics 365 BC</span>
                <span className="text-[10px] bg-zinc-900 border border-zinc-800 text-zinc-500 px-1.5 py-0.5 rounded">Tier 1 & 2</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Odoo Enterprise</span>
                <span className="text-[10px] bg-zinc-900 border border-zinc-800 text-zinc-500 px-1.5 py-0.5 rounded">Tier 1</span>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              {language === "vi" ? "Thông Tin Liên Hệ" : "Contact Details"}
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <span>
                  {language === "vi" 
                    ? "Tòa nhà SAHO, 120 Đường 3 Tháng 2, Quận 10, TP. Hồ Chí Minh"
                    : "SAHO Tower, 120 3 Thang 2 St, District 10, Ho Chi Minh City, Vietnam"
                  }
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>+84 (0) 909 123 456</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>contact@saho-erp.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Bottom */}
        <div className="pt-8 border-t border-zinc-900 text-xs text-zinc-500 space-y-4">
          <p className="leading-relaxed text-justify">
            <strong className="text-zinc-400">{language === "vi" ? "Tuyên bố miễn trừ trách nhiệm về Ước tính Chi phí:" : "Cost Estimation Disclaimer:"}</strong>{" "}
            {language === "vi"
              ? "Các số liệu chi phí bản quyền, triển khai, vận hành và TCO (Tổng chi phí sở hữu) 3 năm được cung cấp bởi Bộ tính toán trên trang web này mang tính chất ước lượng tham chiếu dựa trên nghiên cứu mặt bằng giá thị trường ERP 2025 - 2026. Chi phí thực tế sẽ phụ thuộc vào mức độ phức tạp của quy trình nghiệp vụ đặc thù, số lượng báo cáo tùy chỉnh, hiện trạng dữ liệu và kết quả khảo sát chi tiết (Blueprinting Workshop) của đội ngũ chuyên gia tư vấn SAHO ERP."
              : "The software license, implementation, support, and 3-year TCO (Total Cost of Ownership) figures provided by the calculator on this website are reference estimations based on the research of market ERP rates for 2025 - 2026. Actual costs will vary depending on specific business process complexity, custom reports, legacy data condition, and results of a detailed Blueprinting Workshop conducted by SAHO ERP specialists."
            }
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 text-zinc-600">
            <span>&copy; {currentYear} SAHO ERP. {language === "vi" ? "Tất cả quyền được bảo lưu." : "All rights reserved."}</span>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-zinc-400 transition-colors">
                {t.footerLinkPrivacy}
              </Link>
              <span>&bull;</span>
              <Link href="/terms" className="hover:text-zinc-400 transition-colors">
                {t.footerLinkTerms}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
