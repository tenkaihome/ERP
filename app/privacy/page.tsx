"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/components/LanguageProvider";
import { Shield, Lock, Eye, FileText, CheckCircle } from "lucide-react";

export default function PrivacyPage() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-zinc-950 font-sans transition-colors duration-300">
      <Header />

      <main className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-28 space-y-12">
        {/* Page Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border border-indigo-200/20 mb-2">
            <Shield className="w-8 h-8" />
          </div>
          <h1 className="text-3xl font-extrabold text-zinc-900 dark:text-white sm:text-4xl">
            {language === "vi" ? "Chính Sách Bảo Mật Thông Tin" : "Privacy Policy & Data Security"}
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {language === "vi" ? "Cập nhật lần cuối: Tháng 7, 2026" : "Last updated: July 2026"}
          </p>
        </div>

        {/* Policy Content */}
        <div className="glass-card rounded-3xl border border-zinc-200/60 dark:border-zinc-800/60 p-6 sm:p-10 shadow-lg space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed">
          
          {/* Welcome Intro */}
          <div className="space-y-4">
            <p className="text-justify text-sm sm:text-base">
              {language === "vi"
                ? "Chào mừng bạn đến với SAHO ERP. Chúng tôi cam kết bảo mật tuyệt đối các thông tin cá nhân và dữ liệu vận hành doanh nghiệp của bạn khi bạn sử dụng dịch vụ tư vấn, khảo sát hoặc công cụ tính toán TCO trên nền tảng của chúng tôi. Vui lòng đọc kỹ các điều khoản chính sách dưới đây để hiểu rõ quyền lợi của mình."
                : "Welcome to SAHO ERP. We are fully committed to protecting your personal information and corporate operational data when you utilize our consulting services, onsite surveys, or the TCO calculator. Please read this Privacy Policy carefully to understand your rights."
              }
            </p>
          </div>

          <hr className="border-zinc-200/60 dark:border-zinc-800/60" />

          {/* Section 1 */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <Eye className="w-5 h-5 text-indigo-500 shrink-0" />
              {language === "vi" ? "1. Thu thập thông tin" : "1. Information Collection"}
            </h2>
            <p className="text-xs sm:text-sm text-justify">
              {language === "vi"
                ? "Chúng tôi chỉ thu thập thông tin khi bạn tự nguyện gửi biểu mẫu yêu cầu tư vấn trên hệ thống. Các thông tin thu thập bao gồm: Họ tên người đại diện, tên doanh nghiệp, email công việc, số điện thoại liên hệ, quy mô nhân sự, nhóm ngành hoạt động và cấu hình ước tính gói dịch vụ ERP mà bạn quan tâm."
                : "We only collect information when you voluntarily submit consultation requests on our platform. The collected information includes: representative name, company name, work email, contact phone number, employee headcount, industry segment, and the specific ERP package configurations you selected."
              }
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-indigo-500 shrink-0" />
              {language === "vi" ? "2. Sử dụng thông tin" : "2. Use of Information"}
            </h2>
            <div className="text-xs sm:text-sm text-justify space-y-2">
              <p>
                {language === "vi"
                  ? "Thông tin thu thập được sử dụng duy nhất cho các mục đích:"
                  : "The information collected is used solely for the following purposes:"
                }
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>
                  {language === "vi"
                    ? "Liên hệ tư vấn và khảo sát trực tiếp nhu cầu quản trị doanh nghiệp."
                    : "Contacting you to consult and analyze your enterprise management requirements."
                  }
                </li>
                <li>
                  {language === "vi"
                    ? "Xây dựng phương án bản đồ giải pháp ERP và gửi báo giá chi tiết theo cấu hình đã chọn."
                    : "Designing custom ERP roadmap solutions and sending detailed quotes."
                  }
                </li>
                <li>
                  {language === "vi"
                    ? "Gửi thông tin cập nhật công nghệ và tài liệu nghiệp vụ kế toán, quản trị định kỳ (nếu đăng ký)."
                    : "Sending periodic technology updates, accounting templates, or management whitepapers (if requested)."
                  }
                </li>
              </ul>
            </div>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <Lock className="w-5 h-5 text-indigo-500 shrink-0" />
              {language === "vi" ? "3. Bảo mật dữ liệu doanh nghiệp" : "3. Corporate Data Security"}
            </h2>
            <p className="text-xs sm:text-sm text-justify">
              {language === "vi"
                ? "Dữ liệu cấu hình doanh nghiệp và thông tin TCO là tài sản nhạy cảm. Chúng tôi triển khai các quy trình bảo mật nghiêm ngặt gồm mã hóa đường truyền SSL/TLS, tường lửa và giới hạn quyền truy cập thông tin chỉ dành cho kỹ sư giải pháp được phân nhiệm trực tiếp để bảo vệ thông tin khỏi sự truy cập trái phép."
                : "Corporate configuration details and TCO planning data are highly sensitive. We enforce strict security protocols including SSL/TLS transit encryption, multi-layer firewalls, and restricted employee access limited only to assigned solutions engineers to safeguard your information from unauthorized access."
              }
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-indigo-500 shrink-0" />
              {language === "vi" ? "4. Chia sẻ thông tin bên thứ ba" : "4. Third-Party Sharing Policy"}
            </h2>
            <p className="text-xs sm:text-sm text-justify">
              {language === "vi"
                ? "SAHO ERP tuyệt đối không bán, trao đổi hoặc chuyển giao thông tin cá nhân và dữ liệu doanh nghiệp của bạn cho bất kỳ bên thứ ba nào. Cam kết này được áp dụng nghiêm ngặt ngoại trừ các trường hợp luật pháp yêu cầu tuân thủ tố tụng tư pháp."
                : "SAHO ERP strictly does not sell, trade, or transfer your personal or corporate database records to any third party. This commitment is strictly maintained unless required to comply with judicial processes by law."
              }
            </p>
          </div>

          <hr className="border-zinc-200/60 dark:border-zinc-800/60" />

          {/* Contact details inside policy */}
          <div className="text-xs text-zinc-550 dark:text-zinc-450 text-center space-y-1">
            <p>
              {language === "vi"
                ? "Mọi thắc mắc về chính sách bảo mật, vui lòng liên hệ phòng An toàn Thông tin SAHO qua email:"
                : "For any inquiries regarding this privacy policy, please contact SAHO Data Protection Office via email:"
              }
            </p>
            <p className="font-bold text-indigo-600 dark:text-indigo-400">security@saho-erp.com</p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
