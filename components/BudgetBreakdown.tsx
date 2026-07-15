"use client";

import React, { useMemo } from "react";
import { Layers, Settings, FileSpreadsheet, GraduationCap, LifeBuoy, AlertCircle } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { TRANSLATIONS } from "@/common/translations";

export default function BudgetBreakdown() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

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
    } else if (language === "es") {
      return [
        {
          icon: <Layers className="w-5 h-5 text-indigo-500" />,
          title: "1. Mapeo de Procesos y Consultoría (Blueprint)",
          desc: "Los expertos de SAHO trabajan directamente con los jefes de departamento de la empresa para estandarizar los procesos comerciales de compras, logística, finanzas y producción antes de configurarlos en el software.",
        },
        {
          icon: <Settings className="w-5 h-5 text-indigo-500" />,
          title: "2. Configuración y Personalización del Sistema (Configuration)",
          desc: "Configuración del catálogo de cuentas contables, permisos de seguridad, personalización de informes financieros, plantillas de facturas y estructuración del sistema según su modelo operativo real.",
        },
        {
          icon: <FileSpreadsheet className="w-5 h-5 text-indigo-500" />,
          title: "3. Limpieza y Migración de Datos (Migration)",
          desc: "Asistencia en la extracción de datos heredados de Excel o software contable anterior, depuración de registros duplicados e importación automática en la nueva base de datos del ERP.",
        },
        {
          icon: <GraduationCap className="w-5 h-5 text-indigo-500" />,
          title: "4. Capacitación del Personal y Pruebas UAT",
          desc: "Organización de sesiones de capacitación práctica y visual para cada departamento. Creación de manuales de usuario y ejecución de simulacros del sistema (UAT) para la aprobación final.",
        },
        {
          icon: <LifeBuoy className="w-5 h-5 text-indigo-500" />,
          title: "5. Soporte Post-implementación (Hypercare)",
          desc: "Despliegue de ingenieros de soporte en las oficinas corporativas durante las primeras 2 a 4 semanas después de la puesta en marcha para resolver de inmediato cualquier duda de los usuarios.",
        },
      ];
    } else if (language === "ja") {
      return [
        {
          icon: <Layers className="w-5 h-5 text-indigo-500" />,
          title: "1. 業務プロセス分析・設計 (Blueprint)",
          desc: "SAHOの専門コンサルタントが貴社の各部門長と直接連携し、購買、物流、財務、製造の業務プロセスを整理・標準化した上でシステム設計を行います。",
        },
        {
          icon: <Settings className="w-5 h-5 text-indigo-500" />,
          title: "2. システム設定＆カスタマイズ (Configuration)",
          desc: "勘定科目マスタの設定、セキュリティ権限設計、財務レポート・請求書テンプレートのカスタマイズを行い、実際の業務モデルに合わせてシステムを構築します。",
        },
        {
          icon: <FileSpreadsheet className="w-5 h-5 text-indigo-500" />,
          title: "3. データクレンジング＆移行 (Migration)",
          desc: "Excelや旧会計システムからのデータ抽出、クレンジング（重複排除・名寄せ）、および新ERPデータベースへの自動インポート作業を支援します。",
        },
        {
          icon: <GraduationCap className="w-5 h-5 text-indigo-500" />,
          title: "4. 操作トレーニング＆受入テスト (UAT)",
          desc: "部門ごとに分かりやすい操作研修を実施します。ユーザーマニュアルの作成や、最終検証のための本稼働想定UAT（テスト運用）を主導します。",
        },
        {
          icon: <LifeBuoy className="w-5 h-5 text-indigo-500" />,
          title: "5. 本稼働直後サポート (Hypercare)",
          desc: "稼働開始から2〜4週間、エンジニアが貴社のオフィスに常駐し、現場で発生するユーザーからの質問や課題をその場で即座に解決します。",
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
              {t.breakdownProcessTitle}
            </span>
            <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white sm:text-4xl leading-tight">
              {t.breakdownProcessSubtitle}
            </h2>
            <p className="text-base text-zinc-650 dark:text-zinc-400 leading-relaxed">
              {t.breakdownProcessParagraph}
            </p>

            <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-zinc-900 dark:text-zinc-300 space-y-3">
              <div className="flex items-center gap-2 font-bold text-amber-600 dark:text-amber-400 text-sm">
                <AlertCircle className="w-5 h-5 shrink-0" />
                {t.breakdownLeaderNoteTitle}
              </div>
              <p className="text-xs leading-relaxed">
                {t.breakdownLeaderNoteText}
              </p>
            </div>
          </div>

          {/* Right Column (7 cols): List of implementation tasks */}
          <div className="lg:col-span-7 space-y-5">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-4">
              {t.breakdownListTitle}
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
