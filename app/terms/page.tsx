"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/components/LanguageProvider";
import { Scale, FileCheck, DollarSign, AlertTriangle, ShieldAlert } from "lucide-react";

export default function TermsPage() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-zinc-950 font-sans transition-colors duration-300">
      <Header />

      <main className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-28 space-y-12">
        {/* Page Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border border-indigo-200/20 mb-2">
            <Scale className="w-8 h-8" />
          </div>
          <h1 className="text-3xl font-extrabold text-zinc-900 dark:text-white sm:text-4xl">
            {language === "vi" && "Điều Khoản Sử Dụng Dịch Vụ"}
            {language === "en" && "Terms of Service"}
            {language === "es" && "Términos de Servicio"}
            {language === "ja" && "サービス利用規約"}
          </h1>
          <p className="text-sm text-zinc-550 dark:text-zinc-400">
            {language === "vi" && "Cập nhật lần cuối: Tháng 7, 2026"}
            {language === "en" && "Last updated: July 2026"}
            {language === "es" && "Última actualización: Julio 2026"}
            {language === "ja" && "最終更新日：2026年7月"}
          </p>
        </div>

        {/* Terms Content */}
        <div className="glass-card rounded-3xl border border-zinc-200/60 dark:border-zinc-800/60 p-6 sm:p-10 shadow-lg space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed">
          
          {/* Welcome Intro */}
          <div className="space-y-4">
            <p className="text-justify text-sm sm:text-base">
              {language === "vi" && "Chào mừng bạn đến với hệ thống SAHO ERP. Việc truy cập, tra cứu thông tin hoặc sử dụng bộ công cụ ước tính TCO trên trang web này đồng nghĩa với việc bạn đồng ý và tuân thủ các điều khoản sử dụng dưới đây. Nếu bạn không đồng ý với bất kỳ điều khoản nào, vui lòng ngừng sử dụng trang web."}
              {language === "en" && "Welcome to SAHO ERP. Accessing, browsing, or utilizing the TCO estimation tools on this website indicates your acceptance and compliance with the following Terms of Service. If you do not agree with any terms, please discontinue using this website."}
              {language === "es" && "Bienvenido a SAHO ERP. El acceso, navegación o utilización de las herramientas de estimación del TCO en este sitio web indica su aceptación y cumplimiento de los siguientes Términos de Servicio. Si no está de acuerdo con alguno de los términos, deje de utilizar este sitio web."}
              {language === "ja" && "SAHO ERPへようこそ。本ウェブサイトにアクセス、閲覧、またはTCOシミュレーターを利用されることは、以下のサービス利用規約に同意し、これを遵守しているものとみなされます。規約に同意されない場合は、本ウェブサイトの利用を中止してください。"}
            </p>
          </div>

          <hr className="border-zinc-200/60 dark:border-zinc-800/60" />

          {/* Section 1 */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-indigo-500 shrink-0" />
              {language === "vi" && "1. Sử dụng công cụ TCO"}
              {language === "en" && "1. Use of TCO Tools"}
              {language === "es" && "1. Uso de las Herramientas de TCO"}
              {language === "ja" && "1. TCOツールの利用について"}
            </h2>
            <p className="text-xs sm:text-sm text-justify">
              {language === "vi" && "Bộ tính toán TCO (Total Cost of Ownership) 3 năm được cung cấp miễn phí để hỗ trợ các nhà quản lý doanh nghiệp định lượng ngân sách tham chiếu ban đầu. Bạn chịu trách nhiệm nhập dữ liệu trung thực về số lượng người dùng và chọn quy trình hoạt động phù hợp nhất để nhận về kết quả ước lượng chính xác nhất."}
              {language === "en" && "Our 3-year TCO (Total Cost of Ownership) planning calculator is provided free of charge to assist business managers in formulating reference budgets. You are responsible for entering truthful input metrics regarding users count and selecting the closest operational model to obtain accurate results."}
              {language === "es" && "Nuestra calculadora de TCO (Costo Total de Propiedad) a 3 años se proporciona de forma gratuita para ayudar a los gerentes comerciales a formular presupuestos de referencia. Usted es responsable de ingresar métricas verídicas sobre el número de usuarios y seleccionar el modelo operativo más adecuado para obtener resultados precisos."}
              {language === "ja" && "当社の3年間のTCO（総所有コスト）シミュレーターは、経営管理者の方々が初期の参照予算を策定するのを支援するために無料で提供されています。最も正確な予測結果を得るため、正確なユーザー数を入力し、実態に即した業務プロセスを選択する責任はお客様にあります。"}
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-indigo-500 shrink-0" />
              {language === "vi" && "2. Tuyên bố từ chối trách nhiệm chi phí"}
              {language === "en" && "2. Pricing Estimation Disclaimer"}
              {language === "es" && "2. Descargo de Responsabilidad de Estimación de Precios"}
              {language === "ja" && "2. コスト見積もりに関する免責事項"}
            </h2>
            <p className="text-xs sm:text-sm text-justify">
              {language === "vi" && "Mọi số liệu do bộ tính toán này đưa ra (về License phần mềm, dịch vụ triển khai hay bảo trì 3 năm) mang tính chất ước lượng tham chiếu thị trường 2025 - 2026. Số liệu này không cấu thành một báo giá ràng buộc pháp lý của SAHO ERP. Báo giá chính xác nhất chỉ được thiết lập sau buổi làm việc trực tiếp, khảo sát chi tiết (Blueprinting Workshop) và ký biên bản khảo sát nhu cầu nghiệp vụ của hai bên."}
              {language === "en" && "All figures generated by this calculator (including software licenses, deployment services, and 3-year maintenance fees) are market reference estimates for 2025 - 2026. These figures do not constitute a legally binding quote from SAHO ERP. A formal commercial quote will only be established after a direct technical consultation and a formal Blueprinting Workshop conducted by both parties."}
              {language === "es" && "Todas las cifras generadas por esta calculadora (incluidas las licencias de software, los servicios de implementación y las tarifas de mantenimiento de 3 años) son estimaciones de referencia del mercado para 2025 - 2026. Estas cifras no constituyen una cotización comercial formalmente vinculante de SAHO ERP. Solo se establecerá una cotización comercial formal después de una consulta técnica directa y un taller de diseño detallado realizado por ambas partes."}
              {language === "ja" && "本シミュレーターによって算出されるすべての数値（ソフトウェアライセンス、導入サービス、および3年間の保守費用）は、2025〜2026年の市場参考予測値です。これらの数値は、SAHO ERPによる法的拘束力のある見積もりを構成するものではありません。正確な商用見積もりは、直接の技術相談、詳細なヒアリング調査（ブループレンティングワークショップ）、および両者による業務要件合意の後にのみ作成されます。"}
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-indigo-500 shrink-0" />
              {language === "vi" && "3. Sở hữu trí tuệ"}
              {language === "en" && "3. Intellectual Property Rights"}
              {language === "es" && "3. Derechos de Propiedad Intelectual"}
              {language === "ja" && "3. 知的財産権について"}
            </h2>
            <p className="text-xs sm:text-sm text-justify">
              {language === "vi" && "Toàn bộ giao diện trang web, mã nguồn phần mềm ước lượng, cấu trúc bảng biểu, nhãn hiệu thương hiệu SAHO ERP và cách thức trình bày cơ cấu ngân sách đều thuộc quyền sở hữu trí tuệ của SAHO. Mọi hành vi sao chép thiết kế, cấu trúc bảng tính hoặc sử dụng dữ liệu thương mại trái phép đều bị nghiêm cấm."}
              {language === "en" && "The entire website interface, calculator source code, database structures, SAHO ERP branding elements, and the budget allocation logic are the exclusive intellectual property of SAHO. Any unauthorized duplication of our design layouts, spreadsheet mechanics, or commercial assets is strictly prohibited."}
              {language === "es" && "Toda la interfaz del sitio web, el código fuente de la calculadora, las estructuras de las bases de datos, los elementos de marca de SAHO ERP y la lógica de asignación de presupuesto son propiedad intelectual exclusiva de SAHO. Queda estrictamente prohibida cualquier duplicación no autorizada de nuestros diseños, mecánicas de hojas de cálculo o activos comerciales."}
              {language === "ja" && "本ウェブサイトのインターフェース、シミュレーターのソースコード、データベース構造、SAHO ERPのブランド要素、および予算配分のロジック一式は、すべてSAHOの独占的知的財産です。当社のデザインレイアウト、計算ロジック、または商業的資産を無断で複製・利用することは厳格に禁止されています。"}
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-indigo-500 shrink-0" />
              {language === "vi" && "4. Giới hạn trách nhiệm"}
              {language === "en" && "4. Limitation of Liability"}
              {language === "es" && "4. Limitación de Responsabilidad"}
              {language === "ja" && "4. 免責事項・責任の制限"}
            </h2>
            <p className="text-xs sm:text-sm text-justify">
              {language === "vi" && "SAHO ERP không chịu trách nhiệm đối với bất kỳ thiệt hại kinh tế trực tiếp hoặc gián tiếp nào phát sinh từ việc doanh nghiệp tự ý sử dụng số liệu ước lượng trên trang web này để ký kết các thỏa thuận đầu tư, đấu thầu, hoặc ra quyết định nội bộ mà chưa thông qua sự thẩm định trực tiếp và tư vấn ký tá bằng văn bản từ chúng tôi."}
              {language === "en" && "SAHO ERP shall not be held liable for any direct or indirect business losses or damages arising from decisions made by using the budget estimates of this calculator for tenders, investments, or procurement without obtaining a direct, signed commercial assessment from SAHO specialists."}
              {language === "es" && "SAHO ERP no será responsable de ninguna pérdida o daño comercial directo o indirecto que surja de las decisiones tomadas al utilizar las estimaciones de presupuesto de esta calculadora para licitaciones, inversiones o adquisiciones sin obtener una evaluación comercial firmada directamente por los especialistas de SAHO."}
              {language === "ja" && "SAHO ERPは、当社のスペシャリストによる書面での直接の評価・承認を得ることなく、本シミュレーターの予算見積もりを契約、投資、入札、または社内意思決定に利用したことによって生じた、いかなる直接的・間接的ビジネス損失または損害についても責任を負いません。"}
            </p>
          </div>

          <hr className="border-zinc-200/60 dark:border-zinc-800/60" />

          {/* Contact details inside policy */}
          <div className="text-xs text-zinc-550 dark:text-zinc-450 text-center space-y-1">
            <p>
              {language === "vi" && "Nếu bạn có câu hỏi liên quan đến Điều khoản sử dụng dịch vụ, vui lòng liên hệ:"}
              {language === "en" && "If you have any questions regarding these Terms of Service, please contact:"}
              {language === "es" && "Si tiene alguna pregunta sobre estos Términos de servicio, comuníquese con:"}
              {language === "ja" && "本利用規約に関するご質問がある場合は、以下までご連絡ください："}
            </p>
            <p className="font-bold text-indigo-600 dark:text-indigo-400">legal@saho-erp.com</p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
