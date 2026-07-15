import React from "react";
import { Terminal, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
              Chúng tôi cung cấp giải pháp chuyển đổi số ERP toàn diện, kết hợp chặt chẽ giữa bản quyền phần mềm tối ưu và quy trình triển khai chuẩn quốc tế.
            </p>
            <div className="pt-2 text-xs text-zinc-500 flex flex-col gap-1">
              <span>Định vị thị trường: 2025 - 2026</span>
              <span>Phiên bản: v1.2 (Kiến trúc App Router)</span>
            </div>
          </div>

          {/* Core Modules */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Mô đun Hệ Thống</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <span className="hover:text-indigo-400 transition-colors">Quản trị Nhân sự (HRM)</span>
              </li>
              <li>
                <span className="hover:text-indigo-400 transition-colors">Quản trị Tài chính - Kế toán (FICO)</span>
              </li>
              <li>
                <span className="hover:text-indigo-400 transition-colors">Quản trị Chuỗi cung ứng (SCM)</span>
              </li>
              <li>
                <span className="hover:text-indigo-400 transition-colors">Quản trị Quan hệ Khách hàng (CRM)</span>
              </li>
              <li>
                <span className="hover:text-indigo-400 transition-colors">Trí tuệ Quản trị (BI & Analytics)</span>
              </li>
            </ul>
          </div>

          {/* Reference Systems */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Đối Tượng Tham Chiếu</h4>
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
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Thông Tin Liên Hệ</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <span>Tòa nhà SAHO, 120 Đường 3 Tháng 2, Quận 10, TP. Hồ Chí Minh</span>
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
            <strong className="text-zinc-400">Tuyên bố miễn trừ trách nhiệm về Ước tính Chi phí:</strong> Các số liệu chi phí bản quyền, triển khai, vận hành và TCO (Tổng chi phí sở hữu) 3 năm được cung cấp bởi Bộ tính toán trên trang web này mang tính chất ước lượng tham chiếu dựa trên nghiên cứu mặt bằng giá thị trường ERP 2025 - 2026. Chi phí thực tế sẽ phụ thuộc vào mức độ phức tạp của quy trình nghiệp vụ đặc thù, số lượng báo cáo tùy chỉnh, hiện trạng dữ liệu và kết quả khảo sát chi tiết (Blueprinting Workshop) của đội ngũ chuyên gia tư vấn SAHO ERP.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 text-zinc-600">
            <span>&copy; {currentYear} SAHO ERP. Tất cả quyền được bảo lưu.</span>
            <div className="flex gap-4">
              <span className="hover:text-zinc-400 cursor-pointer">Chính sách bảo mật</span>
              <span>&bull;</span>
              <span className="hover:text-zinc-400 cursor-pointer">Điều khoản sử dụng</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
