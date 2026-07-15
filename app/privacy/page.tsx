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
            {language === "vi" && "Chính Sách Bảo Mật Thông Tin"}
            {language === "en" && "Privacy Policy & Data Security"}
            {language === "es" && "Política de Privacidad y Seguridad de Datos"}
            {language === "ja" && "個人情報保護方針とデータセキュリティ"}
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {language === "vi" && "Cập nhật lần cuối: Tháng 7, 2026"}
            {language === "en" && "Last updated: July 2026"}
            {language === "es" && "Última actualización: Julio 2026"}
            {language === "ja" && "最終更新日：2026年7月"}
          </p>
        </div>

        {/* Policy Content */}
        <div className="glass-card rounded-3xl border border-zinc-200/60 dark:border-zinc-800/60 p-6 sm:p-10 shadow-lg space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed">
          
          {/* Welcome Intro */}
          <div className="space-y-4">
            <p className="text-justify text-sm sm:text-base">
              {language === "vi" && "Chào mừng bạn đến với SAHO ERP. Chúng tôi cam kết bảo mật tuyệt đối các thông tin cá nhân và dữ liệu vận hành doanh nghiệp của bạn khi bạn sử dụng dịch vụ tư vấn, khảo sát hoặc công cụ tính toán TCO trên nền tảng của chúng tôi. Vui lòng đọc kỹ các điều khoản chính sách dưới đây để hiểu rõ quyền lợi của mình."}
              {language === "en" && "Welcome to SAHO ERP. We are fully committed to protecting your personal information and corporate operational data when you utilize our consulting services, onsite surveys, or the TCO calculator. Please read this Privacy Policy carefully to understand your rights."}
              {language === "es" && "Bienvenido a SAHO ERP. Estamos totalmente comprometidos con la protección de su información personal y los datos operativos corporativos cuando utiliza nuestros servicios de consultoría, encuestas en el sitio o la calculadora de TCO. Lea esta Política de Privacidad detenidamente para comprender sus derechos."}
              {language === "ja" && "SAHO ERPへようこそ。当社は、お客様が当社のコンサルティングサービス、オンサイト調査、またはTCOシミュレーターをご利用になる際、お客様の個人情報および企業業務データを保護することに全面的に取り組んでいます。権利関係を理解するために、このプライバシーポリシーをよくお読みください。"}
            </p>
          </div>

          <hr className="border-zinc-200/60 dark:border-zinc-800/60" />

          {/* Section 1 */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <Eye className="w-5 h-5 text-indigo-500 shrink-0" />
              {language === "vi" && "1. Thu thập thông tin"}
              {language === "en" && "1. Information Collection"}
              {language === "es" && "1. Recopilación de Información"}
              {language === "ja" && "1. 情報の収集について"}
            </h2>
            <p className="text-xs sm:text-sm text-justify">
              {language === "vi" && "Chúng tôi chỉ thu thập thông tin khi bạn tự nguyện gửi biểu mẫu yêu cầu tư vấn trên hệ thống. Các thông tin thu thập bao gồm: Họ tên người đại diện, tên doanh nghiệp, email công việc, số điện thoại liên hệ, quy mô nhân sự, nhóm ngành hoạt động và cấu hình ước tính gói dịch vụ ERP mà bạn quan tâm."}
              {language === "en" && "We only collect information when you voluntarily submit consultation requests on our platform. The collected information includes: representative name, company name, work email, contact phone number, employee headcount, industry segment, and the specific ERP package configurations you selected."}
              {language === "es" && "Solo recopilamos información cuando envía voluntariamente solicitudes de consulta en nuestra plataforma. La información recopilada incluye: nombre del representante, nombre de la empresa, correo electrónico de trabajo, número de teléfono de contacto, número de empleados, sector de la industria y las configuraciones específicas del paquete ERP que seleccionó."}
              {language === "ja" && "当社は、お客様が当社のプラットフォーム上で自発的に導入相談リクエストを送信された場合にのみ情報を収集します。収集される情報には、代表者名、企業名、勤務先メールアドレス、連絡先電話番号、従業員数、業種、および選択された特定のERPパッケージ構成が含まれます。"}
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-indigo-500 shrink-0" />
              {language === "vi" && "2. Sử dụng thông tin"}
              {language === "en" && "2. Use of Information"}
              {language === "es" && "2. Uso de la Información"}
              {language === "ja" && "2. 情報の利用目的について"}
            </h2>
            <div className="text-xs sm:text-sm text-justify space-y-2">
              <p>
                {language === "vi" && "Thông tin thu thập được sử dụng duy nhất cho các mục đích:"}
                {language === "en" && "The information collected is used solely for the following purposes:"}
                {language === "es" && "La información recopilada se utiliza únicamente para los siguientes fines:"}
                {language === "ja" && "収集された情報は、以下の目的のためにのみ使用されます："}
              </p>
              <ul className="list-disc pl-5 space-y-1.5 font-medium">
                <li>
                  {language === "vi" && "Liên hệ tư vấn và khảo sát trực tiếp nhu cầu quản trị doanh nghiệp."}
                  {language === "en" && "Contacting you to consult and analyze your enterprise management requirements."}
                  {language === "es" && "Contactarlo para asesorar y analizar los requisitos de gestión de su empresa."}
                  {language === "ja" && "企業経営の要件についてコンサルティングおよび分析を行うためのご連絡。"}
                </li>
                <li>
                  {language === "vi" && "Xây dựng phương án bản đồ giải pháp ERP và gửi báo giá chi tiết theo cấu hình đã chọn."}
                  {language === "en" && "Designing custom ERP roadmap solutions and sending detailed quotes."}
                  {language === "es" && "Diseñar soluciones de hojas de ruta de ERP personalizadas y enviar cotizaciones detalladas."}
                  {language === "ja" && "カスタムERPロードマップの設計、および選択された構成に基づく詳細な見積もりの送信。"}
                </li>
                <li>
                  {language === "vi" && "Gửi thông tin cập nhật công nghệ và tài liệu nghiệp vụ kế toán, quản trị định kỳ (nếu đăng ký)."}
                  {language === "en" && "Sending periodic technology updates, accounting templates, or management whitepapers (if requested)."}
                  {language === "es" && "Envío de actualizaciones periódicas de tecnología, plantillas de contabilidad o informes de gestión (si lo solicita)."}
                  {language === "ja" && "最新の技術情報、会計テンプレート、または経営ホワイトペーパー의定期的な送信（希望された場合）。"}
                </li>
              </ul>
            </div>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <Lock className="w-5 h-5 text-indigo-500 shrink-0" />
              {language === "vi" && "3. Bảo mật dữ liệu doanh nghiệp"}
              {language === "en" && "3. Corporate Data Security"}
              {language === "es" && "3. Seguridad de Datos Corporativos"}
              {language === "ja" && "3. 企業データのセキュリティ保護"}
            </h2>
            <p className="text-xs sm:text-sm text-justify">
              {language === "vi" && "Dữ liệu cấu hình doanh nghiệp và thông tin TCO là tài sản nhạy cảm. Chúng tôi triển khai các quy trình bảo mật nghiêm ngặt gồm mã hóa đường truyền SSL/TLS, tường lửa và giới hạn quyền truy cập thông tin chỉ dành cho kỹ sư giải pháp được phân nhiệm trực tiếp để bảo vệ thông tin khỏi sự truy cập trái phép."}
              {language === "en" && "Corporate configuration details and TCO planning data are highly sensitive. We enforce strict security protocols including SSL/TLS transit encryption, multi-layer firewalls, and restricted employee access limited only to assigned solutions engineers to safeguard your information from unauthorized access."}
              {language === "es" && "Los detalles de la configuración corporativa y los datos de planificación del TCO son altamente sensibles. Aplicamos estrictos protocolos de seguridad que incluyen cifrado de tránsito SSL/TLS, firewalls multicapa y acceso restringido de empleados limitado únicamente a ingenieros de soluciones asignados para proteger su información contra accesos no autorizados."}
              {language === "ja" && "企業構成の詳細およびTCO計画データは、非常に機密性の高い情報です。当社は、不正アクセスからお客様の情報を守るため、SSL/TLS暗号化通信、マルチレイヤーファイアウォール、および担当ソリューションエンジニアのみに制限されたアクセス権限を含む、厳格なセキュリティプロトコルを適用しています。"}
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-indigo-500 shrink-0" />
              {language === "vi" && "4. Chia sẻ thông tin bên thứ ba"}
              {language === "en" && "4. Third-Party Sharing Policy"}
              {language === "es" && "4. Política de Intercambio con Terceros"}
              {language === "ja" && "4. 第三者への情報提供について"}
            </h2>
            <p className="text-xs sm:text-sm text-justify">
              {language === "vi" && "SAHO ERP tuyệt đối không bán, trao đổi hoặc chuyển giao thông tin cá nhân và dữ liệu doanh nghiệp của bạn cho bất kỳ bên thứ ba nào. Cam kết này được áp dụng nghiêm ngặt ngoại trừ các trường hợp luật pháp yêu cầu tuân thủ tố tụng tư pháp."}
              {language === "en" && "SAHO ERP strictly does not sell, trade, or transfer your personal or corporate database records to any third party. This commitment is strictly maintained unless required to comply with judicial processes by law."}
              {language === "es" && "SAHO ERP estrictamente no vende, comercializa ni transfiere los registros de bases de datos personales o corporativas a ningún tercero. Este compromiso se mantiene estrictamente a menos que la ley exija el cumplimiento de procesos judiciales."}
              {language === "ja" && "SAHO ERPは、お客様の個人情報または企業データベースレコードを第三者に販売、取引、または譲渡することは一切ありません。このコミットメントは、法律に基づく司法手続きを遵守するために必要な場合を除き、厳格に維持されます。"}
            </p>
          </div>

          <hr className="border-zinc-200/60 dark:border-zinc-800/60" />

          {/* Contact details inside policy */}
          <div className="text-xs text-zinc-550 dark:text-zinc-455 text-center space-y-1">
            <p>
              {language === "vi" && "Mọi thắc mắc về chính sách bảo mật, vui lòng liên hệ phòng An toàn Thông tin SAHO qua email:"}
              {language === "en" && "For any inquiries regarding this privacy policy, please contact SAHO Data Protection Office via email:"}
              {language === "es" && "Para cualquier consulta sobre esta política de privacidad, comuníquese con la Oficina de Protección de Datos de SAHO por correo electrónico:"}
              {language === "ja" && "本プライバシーポリシーに関するお問い合わせは、以下のメールアドレスを通じてSAHOデータ保護担当窓口までご連絡ください："}
            </p>
            <p className="font-bold text-indigo-600 dark:text-indigo-400">security@saho-erp.com</p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
