export interface PricingTier {
  id: string;
  name: string;
  subtitle: string;
  badge: string;
  basePriceMin: number;
  basePriceMax: number;
  standardPrice: number; // Used for calculation
  implementationMin: number;
  implementationMax: number;
  minUsers: number;
  maxUsers: number;
  targetDescription: string;
  targetDetails: string[];
  features: string[];
  referenceSystems: string;
  popular?: boolean;
}

export const PRICING_TIERS_VI: PricingTier[] = [
  {
    id: "starter",
    name: "Tier 1 - Starter",
    subtitle: "Dành cho Doanh nghiệp vừa & nhỏ (SMB)",
    badge: "Bắt đầu nhanh",
    basePriceMin: 10,
    basePriceMax: 50,
    standardPrice: 20,
    implementationMin: 15000,
    implementationMax: 80000,
    minUsers: 10,
    maxUsers: 100,
    targetDescription: "Phù hợp với các startup, cửa hàng bán lẻ, nhà hàng, khách sạn và các doanh nghiệp nhỏ đang chuyển đổi số bước đầu.",
    targetDetails: [
      "Quy mô nhân sự: 10 - 100 nhân viên",
      "Ngân sách tối ưu, triển khai nhanh chóng",
      "Yêu cầu quy trình vận hành đơn giản"
    ],
    features: [
      "HR | Quản lý Profile & Tuyển dụng cơ bản",
      "FA | Quản lý Doanh thu, Chi phí, Lợi nhuận & Kế toán cơ bản",
      "SC | Quản lý Kho hàng & Mua bán đơn giản",
      "CR | Quản lý Khách hàng & Bán hàng (CRM) cơ bản",
      "Hỗ trợ qua Email & Group Chat giờ hành chính"
    ],
    referenceSystems: "Odoo / MS Business Central Basic",
  },
  {
    id: "growth",
    name: "Tier 2 - Growth",
    subtitle: "Giải pháp cho Doanh nghiệp tầm trung & lớn (Mid-market)",
    badge: "Phổ biến nhất",
    basePriceMin: 50,
    basePriceMax: 150,
    standardPrice: 80,
    implementationMin: 50000,
    implementationMax: 200000,
    minUsers: 100,
    maxUsers: 1000,
    targetDescription: "Thích hợp cho các chuỗi bán lẻ lớn, nhà máy sản xuất, doanh nghiệp logistics, bệnh viện, trường học cần tối ưu hóa toàn diện.",
    targetDetails: [
      "Quy mô nhân sự: 100 - 1000 nhân viên",
      "Đã có quy trình chuẩn, cần tự động hóa",
      "Mô hình hoạt động đa công ty (Multi-company)"
    ],
    features: [
      "HR, FA, SC, CR nâng cao & toàn diện",
      "Hỗ trợ quản lý Đa công ty (Multi-company) & Liên kết dữ liệu",
      "Tự động hóa quy trình làm việc (Workflow Automation)",
      "Báo cáo quản trị động & Phân tích chuyên sâu",
      "Tích hợp API với các hệ thống hiện hữu",
      "Hỗ trợ kỹ thuật 24/7 với SLA cam kết"
    ],
    referenceSystems: "NetSuite / MS Dynamics 365 BC Premium",
    popular: true,
  },
  {
    id: "enterprise",
    name: "Tier 3 - Enterprise",
    subtitle: "Dành cho Tập đoàn & Doanh nghiệp lớn",
    badge: "Không giới hạn",
    basePriceMin: 150,
    basePriceMax: 400,
    standardPrice: 200,
    implementationMin: 150000,
    implementationMax: 800000,
    minUsers: 1000,
    maxUsers: 5000,
    targetDescription: "Thiết kế riêng cho các tập đoàn đa ngành, ngân hàng, công ty dầu khí, viễn thông, tổng công ty nhà nước hoặc dự án đầu tư công.",
    targetDetails: [
      "Quy mô nhân sự: Trên 1000 nhân viên",
      "Cơ cấu tổ chức đa quốc gia (Multi-country) phức tạp",
      "Đòi hỏi tính tuân thủ cao, bảo mật tuyệt đối"
    ],
    features: [
      "HR, FA, SC, CR cấu hình may đo chuyên sâu",
      "Hệ thống Full ERP tích hợp mọi ngóc ngách vận hành",
      "AI & BI (Trí tuệ nhân tạo & Báo cáo thông minh dự báo xu hướng)",
      "Quản lý Đa quốc gia (Hỗ trợ đa ngôn ngữ, đa tiền tệ, đa chuẩn kế toán)",
      "Tuân thủ nghiêm ngặt chuẩn quốc tế (Compliance & Security)",
      "Đội ngũ kỹ sư hỗ trợ onsite chuyên biệt 24/7"
    ],
    referenceSystems: "SAP S/4HANA / Oracle Cloud ERP / Infor",
  }
];

export const PRICING_TIERS_EN: PricingTier[] = [
  {
    id: "starter",
    name: "Tier 1 - Starter",
    subtitle: "For Small & Medium Businesses (SMB)",
    badge: "Quick Start",
    basePriceMin: 10,
    basePriceMax: 50,
    standardPrice: 20,
    implementationMin: 15000,
    implementationMax: 80000,
    minUsers: 10,
    maxUsers: 100,
    targetDescription: "Suitable for startups, retail shops, restaurants, hotels, and small businesses in the initial stages of digital transformation.",
    targetDetails: [
      "Staff size: 10 - 100 employees",
      "Optimized budget, quick deployment",
      "Simple operational processes"
    ],
    features: [
      "HR | Basic profile & recruitment management",
      "FA | Basic revenue, expense, profit & accounting",
      "SC | Simple inventory, purchasing & sales",
      "CR | Basic CRM & customer relationship",
      "Support via Email & Chat group during business hours"
    ],
    referenceSystems: "Odoo / MS Business Central Basic",
  },
  {
    id: "growth",
    name: "Tier 2 - Growth",
    subtitle: "Solution for Mid-market & Large Enterprises",
    badge: "Most Popular",
    basePriceMin: 50,
    basePriceMax: 150,
    standardPrice: 80,
    implementationMin: 50000,
    implementationMax: 200000,
    minUsers: 100,
    maxUsers: 1000,
    targetDescription: "Suitable for large retail chains, manufacturing plants, logistics firms, hospitals, and schools needing comprehensive optimization.",
    targetDetails: [
      "Staff size: 100 - 1000 employees",
      "Standardized processes ready for automation",
      "Multi-company operational model"
    ],
    features: [
      "HR, FA, SC, CR advanced & comprehensive",
      "Multi-company management & data consolidation",
      "Workflow Automation",
      "Dynamic management reports & deep analytics",
      "API integration with existing systems",
      "24/7 technical support with committed SLA"
    ],
    referenceSystems: "NetSuite / MS Dynamics 365 BC Premium",
    popular: true,
  },
  {
    id: "enterprise",
    name: "Tier 3 - Enterprise",
    subtitle: "For Conglomerates & Large Corporates",
    badge: "Unlimited",
    basePriceMin: 150,
    basePriceMax: 400,
    standardPrice: 200,
    implementationMin: 150000,
    implementationMax: 800000,
    minUsers: 1000,
    maxUsers: 5000,
    targetDescription: "Tailored for multi-industry groups, banks, oil & gas, telecoms, state-owned enterprises, or public investment projects.",
    targetDetails: [
      "Staff size: Over 1000 employees",
      "Complex multi-country organizational structure",
      "High compliance and absolute security requirements"
    ],
    features: [
      "HR, FA, SC, CR tailor-made & highly customized",
      "Full ERP integrated into every operational corner",
      "AI & BI (Artificial Intelligence & Smart Predictive Reporting)",
      "Multi-country management (Multi-language, multi-currency, multi-GAAP)",
      "Strict compliance with international standards (Security & Compliance)",
      "Onsite dedicated support team 24/7"
    ],
    referenceSystems: "SAP S/4HANA / Oracle Cloud ERP / Infor",
  }
];

export const PRICING_TIERS_ES: PricingTier[] = [
  {
    id: "starter",
    name: "Tier 1 - Starter",
    subtitle: "Para Pequeñas y Medianas Empresas (Pymes)",
    badge: "Inicio Rápido",
    basePriceMin: 10,
    basePriceMax: 50,
    standardPrice: 20,
    implementationMin: 15000,
    implementationMax: 80000,
    minUsers: 10,
    maxUsers: 100,
    targetDescription: "Adecuado para startups, tiendas minoristas, restaurantes, hoteles y pequeñas empresas en fases iniciales de transformación digital.",
    targetDetails: [
      "Tamaño de personal: 10 - 100 empleados",
      "Presupuesto optimizado, implementación rápida",
      "Procesos operativos simples"
    ],
    features: [
      "HR | Gestión básica de perfiles y selección",
      "FA | Contabilidad básica, ingresos, gastos y beneficios",
      "SC | Inventario simple, compras y ventas",
      "CR | CRM básico y relación con clientes",
      "Soporte por Email y Chat grupal en horario comercial"
    ],
    referenceSystems: "Odoo / MS Business Central Basic",
  },
  {
    id: "growth",
    name: "Tier 2 - Growth",
    subtitle: "Solución para Medianas y Grandes Empresas",
    badge: "Más Popular",
    basePriceMin: 50,
    basePriceMax: 150,
    standardPrice: 80,
    implementationMin: 50000,
    implementationMax: 200000,
    minUsers: 100,
    maxUsers: 1000,
    targetDescription: "Adecuado para grandes cadenas minoristas, plantas de fabricación, empresas de logística, hospitales y escuelas que necesitan optimización integral.",
    targetDetails: [
      "Tamaño de personal: 100 - 1000 empleados",
      "Procesos estandarizados listos para automatización",
      "Modelo operativo multi-empresa"
    ],
    features: [
      "HR, FA, SC, CR avanzado e integral",
      "Gestión multi-empresa y consolidación de datos",
      "Automatización de flujos de trabajo (Workflow)",
      "Reportes de gestión dinámicos y analítica profunda",
      "Integración de API con sistemas existentes",
      "Soporte técnico 24/7 con SLA comprometido"
    ],
    referenceSystems: "NetSuite / MS Dynamics 365 BC Premium",
    popular: true,
  },
  {
    id: "enterprise",
    name: "Tier 3 - Enterprise",
    subtitle: "Para Conglomerados y Grandes Corporativos",
    badge: "Ilimitado",
    basePriceMin: 150,
    basePriceMax: 400,
    standardPrice: 200,
    implementationMin: 150000,
    implementationMax: 800000,
    minUsers: 1000,
    maxUsers: 5000,
    targetDescription: "Diseñado a medida para grupos industriales diversos, bancos, petróleo y gas, telecomunicaciones o proyectos de inversión pública.",
    targetDetails: [
      "Tamaño de personal: Más de 1000 empleados",
      "Estructura organizativa multi-país compleja",
      "Requisitos de alto cumplimiento y seguridad absoluta"
    ],
    features: [
      "HR, FA, SC, CR hecho a medida y altamente personalizado",
      "ERP completo integrado en cada rincón operativo",
      "AI & BI (Inteligencia Artificial y Reportes Inteligentes de Predicción)",
      "Gestión multi-país (Multilingüe, multi-moneda, multi-GAAP)",
      "Cumplimiento estricto de estándares internacionales (Security & Compliance)",
      "Equipo de soporte dedicado en sitio 24/7"
    ],
    referenceSystems: "SAP S/4HANA / Oracle Cloud ERP / Infor",
  }
];

export const PRICING_TIERS_JA: PricingTier[] = [
  {
    id: "starter",
    name: "Tier 1 - Starter",
    subtitle: "中小企業（SMB）向け",
    badge: "クイックスタート",
    basePriceMin: 10,
    basePriceMax: 50,
    standardPrice: 20,
    implementationMin: 15000,
    implementationMax: 80000,
    minUsers: 10,
    maxUsers: 100,
    targetDescription: "スタートアップ、小売店、飲食店、ホテル、およびデジタルトランスフォーメーションの初期段階にある小規模企業に適しています。",
    targetDetails: [
      "スタッフ規模：10〜100名",
      "予算の最適化、迅速な導入",
      "シンプルな業務プロセス"
    ],
    features: [
      "HR | 基本的なプロフィールおよび採用管理",
      "FA | 基本的な収支、利益管理、および会計機能",
      "SC | シンプルな在庫、購買、販売管理",
      "CR | 基本的なCRMおよび顧客関係管理",
      "営業時間内における電子メールおよびグループチャットによるサポート"
    ],
    referenceSystems: "Odoo / MS Business Central Basic",
  },
  {
    id: "growth",
    name: "Tier 2 - Growth",
    subtitle: "中堅・大手企業向けソリューション",
    badge: "最も人気",
    basePriceMin: 50,
    basePriceMax: 150,
    standardPrice: 80,
    implementationMin: 50000,
    implementationMax: 200000,
    minUsers: 100,
    maxUsers: 1000,
    targetDescription: "大規模な小売チェーン、製造工場、物流企業、病院、学校など、包括的な最適化を必要とする企業に適しています。",
    targetDetails: [
      "スタッフ規模：100〜1000名",
      "自動化に対応した標準化されたプロセス",
      "複数法人（マルチカンパニー）運用モデル"
    ],
    features: [
      "HR、FA、SC、CRの高度かつ包括的な機能",
      "複数法人管理およびデータ統合",
      "ワークフローの自動化",
      "動的な管理レポートと詳細な分析分析",
      "既存システムとのAPI統合",
      "SLAを約束した24時間365日のテクニカルサポート"
    ],
    referenceSystems: "NetSuite / MS Dynamics 365 BC Premium",
    popular: true,
  },
  {
    id: "enterprise",
    name: "Tier 3 - Enterprise",
    subtitle: "複合企業および大企業向け",
    badge: "無制限",
    basePriceMin: 150,
    basePriceMax: 400,
    standardPrice: 200,
    implementationMin: 150000,
    implementationMax: 800000,
    minUsers: 1000,
    maxUsers: 5000,
    targetDescription: "多角的な業界グループ、銀行、石油・ガス、電気通信、国営企業、または公共投資プロジェクト向けにカスタマイズされています。",
    targetDetails: [
      "スタッフ規模：1000名以上",
      "複雑な多国籍組織構造",
      "高いコンプライアンス要件と絶対的なセキュリティ"
    ],
    features: [
      "HR、FA、SC、CRのカスタムメイドおよび高度なカスタマイズ",
      "すべての運用部門に統合されたフルERP",
      "AI & BI（人工知能とスマート予測レポート）",
      "多国籍管理（多言語、多通貨、マルチGAAP対応）",
      "国際標準への厳格な準拠（セキュリティ＆コンプライアンス）",
      "24時間365日の専任オンサイトサポートチーム"
    ],
    referenceSystems: "SAP S/4HANA / Oracle Cloud ERP / Infor",
  }
];

export const PRICING_TIERS = PRICING_TIERS_VI;

export const getPricingTiers = (lang: "vi" | "en" | "es" | "ja") => {
  switch (lang) {
    case "en": return PRICING_TIERS_EN;
    case "es": return PRICING_TIERS_ES;
    case "ja": return PRICING_TIERS_JA;
    default: return PRICING_TIERS_VI;
  }
};

export interface Industry {
  id: string;
  name: string;
  multiplier: number; // Multiplier for implementation complexity
  icon: string;
}

export const INDUSTRIES_VI: Industry[] = [
  { id: "general", name: "Thương mại & Dịch vụ chung", multiplier: 1.0, icon: "Briefcase" },
  { id: "retail", name: "Chuỗi Bán lẻ & Thương mại điện tử", multiplier: 1.15, icon: "ShoppingBag" },
  { id: "manufacturing", name: "Sản xuất & Chế biến", multiplier: 1.35, icon: "Factory" },
  { id: "logistics", name: "Vận tải & Logistics", multiplier: 1.2, icon: "Truck" },
  { id: "healthcare", name: "Bệnh viện & Y tế", multiplier: 1.4, icon: "Heart" },
  { id: "education", name: "Trường học & Giáo dục", multiplier: 1.1, icon: "GraduationCap" },
  { id: "finance", name: "Tài chính & Ngân hàng", multiplier: 1.5, icon: "DollarSign" },
  { id: "conglomerate", name: "Tập đoàn Đa ngành", multiplier: 1.45, icon: "Building2" },
];

export const INDUSTRIES_EN: Industry[] = [
  { id: "general", name: "General Commerce & Services", multiplier: 1.0, icon: "Briefcase" },
  { id: "retail", name: "Retail Chain & E-commerce", multiplier: 1.15, icon: "ShoppingBag" },
  { id: "manufacturing", name: "Manufacturing & Processing", multiplier: 1.35, icon: "Factory" },
  { id: "logistics", name: "Transportation & Logistics", multiplier: 1.2, icon: "Truck" },
  { id: "healthcare", name: "Hospital & Healthcare", multiplier: 1.4, icon: "Heart" },
  { id: "education", name: "School & Education", multiplier: 1.1, icon: "GraduationCap" },
  { id: "finance", name: "Finance & Banking", multiplier: 1.5, icon: "DollarSign" },
  { id: "conglomerate", name: "Multi-industry Conglomerate", multiplier: 1.45, icon: "Building2" },
];

export const INDUSTRIES_ES: Industry[] = [
  { id: "general", name: "Comercio General y Servicios", multiplier: 1.0, icon: "Briefcase" },
  { id: "retail", name: "Cadena de Tiendas y Comercio Electrónico", multiplier: 1.15, icon: "ShoppingBag" },
  { id: "manufacturing", name: "Fabricación y Procesamiento", multiplier: 1.35, icon: "Factory" },
  { id: "logistics", name: "Transporte y Logística", multiplier: 1.2, icon: "Truck" },
  { id: "healthcare", name: "Hospitales y Atención Médica", multiplier: 1.4, icon: "Heart" },
  { id: "education", name: "Escuelas y Educación", multiplier: 1.1, icon: "GraduationCap" },
  { id: "finance", name: "Finanzas y Banca", multiplier: 1.5, icon: "DollarSign" },
  { id: "conglomerate", name: "Conglomerado Multiactividad", multiplier: 1.45, icon: "Building2" },
];

export const INDUSTRIES_JA: Industry[] = [
  { id: "general", name: "一般商取引・サービス業", multiplier: 1.0, icon: "Briefcase" },
  { id: "retail", name: "小売チェーン・EC業", multiplier: 1.15, icon: "ShoppingBag" },
  { id: "manufacturing", name: "製造・加工業", multiplier: 1.35, icon: "Factory" },
  { id: "logistics", name: "運輸・物流業", multiplier: 1.2, icon: "Truck" },
  { id: "healthcare", name: "病院・医療業", multiplier: 1.4, icon: "Heart" },
  { id: "education", name: "学校・教育業", multiplier: 1.1, icon: "GraduationCap" },
  { id: "finance", name: "金融・銀行業", multiplier: 1.5, icon: "DollarSign" },
  { id: "conglomerate", name: "多角化コングロマリット", multiplier: 1.45, icon: "Building2" },
];

export const INDUSTRIES = INDUSTRIES_VI;

export const getIndustries = (lang: "vi" | "en" | "es" | "ja") => {
  switch (lang) {
    case "en": return INDUSTRIES_EN;
    case "es": return INDUSTRIES_ES;
    case "ja": return INDUSTRIES_JA;
    default: return INDUSTRIES_VI;
  }
};

export interface FAQ {
  question: string;
  answer: string;
}

export const FAQS_VI: FAQ[] = [
  {
    question: "Tại sao chi phí triển khai lại chiếm từ 30% - 50% tổng chi phí dự án ERP?",
    answer: "Triển khai ERP không chỉ là cài đặt phần mềm. Chi phí này chi trả cho các hoạt động khảo sát quy trình, tư vấn tái cấu trúc quy trình chuẩn, thiết lập tham số hệ thống, lập trình các biểu mẫu báo cáo riêng, chuyển đổi và chuẩn hóa dữ liệu cũ, đào tạo đội ngũ nhân viên và hỗ trợ vận hành thực tế trong những tháng đầu tiên. Không có triển khai bài bản, tỷ lệ thất bại dự án ERP có thể lên tới hơn 70%."
  },
  {
    question: "Bản quyền phần mềm (License) chiếm bao nhiêu phần trăm trong thực tế?",
    answer: "Thực tế tại thị trường cho thấy License chỉ chiếm khoảng 20% - 40% tổng chi phí đầu tư ban đầu. Điều này có nghĩa là nếu doanh nghiệp của bạn đầu tư 1 tỷ đồng cho phần mềm, thì tổng chi phí thực tế cho đến khi hệ thống vận hành thành công có thể dao động từ 2.5 đến 5 tỷ đồng bao gồm cả hạ tầng, triển khai, và đào tạo. Chúng tôi hướng tới việc cung cấp gói giải pháp trọn gói bao gồm cả Bản quyền phần mềm lẫn Dịch vụ triển khai thành công."
  },
  {
    question: "Công cụ tính TCO (Total Cost of Ownership) 3 năm hoạt động như thế nào?",
    answer: "Công cụ tính toán của chúng tôi tổng hợp: (1) Chi phí mua bản quyền định kỳ hàng tháng cho số lượng người sử dụng trong 3 năm; (2) Ước tính chi phí triển khai ban đầu dựa trên quy mô số lượng người dùng và độ phức tạp của từng ngành nghề (ví dụ: ngành Sản xuất hay Ngành y tế có hệ số phức tạp cao hơn Thương mại); (3) Chi phí đào tạo, vận hành nâng cấp và hỗ trợ kỹ thuật định kỳ. Đây là bức tranh thực tế nhất để doanh nghiệp lên ngân sách."
  },
  {
    question: "Thời gian triển khai ERP trung bình cho từng gói là bao lâu?",
    answer: "Với gói Starter (Tier 1), thời gian triển khai thường rất nhanh từ 2 - 4 tháng vì quy trình chuẩn được áp dụng ngay. Gói Growth (Tier 2) cần từ 4 - 8 tháng tùy thuộc số lượng phân hệ và mức độ tự động hóa quy trình. Gói Enterprise (Tier 3) của các tập đoàn lớn đòi hỏi thời gian từ 8 - 18 tháng do quy trình đa quốc gia và yêu cầu tích hợp rất nhiều hệ thống vệ tinh."
  },
  {
    question: "Doanh nghiệp của chúng tôi có thể tự triển khai để tiết kiệm chi phí không?",
    answer: "Rất khó và rủi ro cực kỳ cao. Dự án ERP đòi hỏi kiến thức chuyên môn sâu về quy chuẩn hệ thống, kinh nghiệm quản trị dự án công nghệ và khả năng tùy biến kỹ thuật. Việc tự triển khai thường dẫn đến sai sót cấu trúc dữ liệu, nhân viên phản kháng do thiếu kỹ năng chuyển đổi số, và cuối cùng dự án kéo dài không thể nghiệm thu. Đồng hành cùng một đối tác triển khai chuyên nghiệp giúp đảm bảo dự án go-live đúng tiến độ."
  }
];

export const FAQS_EN: FAQ[] = [
  {
    question: "Why does the implementation cost account for 30% - 50% of the total ERP project cost?",
    answer: "Implementing an ERP is not just installing software. This fee covers business process mapping, standardized process re-engineering consulting, system parameter configuration, custom forms/reports programming, data migration/cleaning, staff training, and go-live support in the initial months. Without proper implementation, the failure rate can exceed 70%."
  },
  {
    question: "How much does the software license cost in reality?",
    answer: "Market statistics show that software license fees only account for 20% - 40% of the total initial investment. This means if you invest 1 billion VND in software, the actual cost to run the system successfully can range from 2.5 to 5 billion VND including infrastructure, implementation, and training. We offer package pricing that includes both licenses and successful implementation services."
  },
  {
    question: "How does the 3-year TCO (Total Cost of Ownership) estimator work?",
    answer: "Our estimator combines: (1) Periodic license fees for the number of users over 3 years; (2) Estimated implementation costs based on user scale and industry complexity (e.g. Manufacturing and Healthcare have higher complexity multipliers); (3) Ongoing training, maintenance, and technical support fees. This provides the most realistic budgeting picture."
  },
  {
    question: "What is the average implementation timeline for each tier?",
    answer: "For the Starter tier (Tier 1), deployment is fast, taking 2 - 4 months as standard processes are applied immediately. The Growth tier (Tier 2) requires 4 - 8 months depending on modules and automation needs. The Enterprise tier (Tier 3) for large conglomerates takes 8 - 18 months due to multi-country processes and numerous integrations."
  },
  {
    question: "Can our business self-implement to save costs?",
    answer: "Very difficult and highly risky. ERP projects require deep functional expertise, project management experience, and technical customization skills. Self-implementation often leads to database structure errors, resistance from staff due to lack of training, and project delays that prevent go-live. Partnering with a professional team ensures on-time delivery."
  }
];

export const FAQS_ES: FAQ[] = [
  {
    question: "¿Por qué el costo de implementación representa del 30% al 50% del costo total de un proyecto ERP?",
    answer: "Implementar un ERP no es solo instalar software. Esta tarifa cubre el mapeo de procesos de negocio, consultoría de reingeniería de procesos estandarizados, configuración de parámetros del sistema, programación de informes/formularios personalizados, migración/limpieza de datos, capacitación del personal y soporte en la puesta en marcha en los primeros meses. Sin una implementación adecuada, la tasa de fracaso puede superar el 70%."
  },
  {
    question: "¿Cuánto cuesta la licencia del software en la realidad?",
    answer: "Las estadísticas del mercado muestran que las tarifas de licencias de software solo representan entre el 20% y el 40% de la inversión inicial total. Esto significa que si invierte 1 millón de USD en software, el costo real para ejecutar el sistema con éxito puede oscilar entre 2.5 y 5 millones de USD, incluyendo infraestructura, implementación y capacitación. Ofrecemos precios de paquete que incluyen tanto las licencias como los servicios de implementación exitosa."
  },
  {
    question: "¿Cómo funciona la calculadora de estimación de TCO a 3 años?",
    answer: "Nuestra herramienta de estimación combina: (1) Tarifas de licencias periódicas por el número de usuarios durante 3 años; (2) Costos estimados de implementación basados en la escala de usuarios y la complejidad de la industria (por ejemplo, Manufactura y Salud tienen multiplicadores de complejidad más altos); (3) Tarifas de capacitación continua, mantenimiento y soporte técnico. Esto proporciona la imagen presupuestaria más realista."
  },
  {
    question: "¿Cuál es el tiempo promedio de implementación para cada nivel?",
    answer: "Para el nivel Starter (Tier 1), la implementación es rápida y toma de 2 a 4 meses, ya que los procesos estandarizados se aplican de inmediato. El nivel Growth (Tier 2) requiere de 4 a 8 meses, dependiendo de los módulos y las necesidades de automatización. El nivel Enterprise (Tier 3) para grandes conglomerados toma de 8 a 18 meses debido a los procesos multi-país y a las numerosas integraciones."
  },
  {
    question: "¿Puede nuestra empresa realizar la auto-implementación para ahorrar costos?",
    answer: "Muy difícil y altamente arriesgado. Los proyectos ERP requieren una profunda experiencia funcional, experiencia en gestión de proyectos y habilidades de personalización técnica. La auto-implementación a menudo conduce a errores en la estructura de la base de datos, resistencia del personal debido a la falta de capacitación y demoras en el proyecto que impiden la puesta en marcha. Asociarse con un equipo profesional garantiza una entrega a tiempo."
  }
];

export const FAQS_JA: FAQ[] = [
  {
    question: "なぜ導入費用がERPプロジェクトの総コストの30%〜50%を占めるのですか？",
    answer: "ERPの導入は単にソフトウェアをインストールするだけではありません。この費用には、ビジネスプロセスのマッピング、標準化されたプロセスの再設計コンサルティング、システムパラメータの設定、カスタムレポート/フォームの開発、データの移行/クレンジング、スタッフのトレーニング、および最初の数ヶ月間の本番稼働サポートが含まれます。適切な導入が行われない場合、失敗率は70%を超える可能性があります。"
  },
  {
    question: "実際のところ、ソフトウェアのライセンス費用はどれくらいかかりますか？",
    answer: "市場統計によると、ソフトウェアのライセンス費用は初期投資全体の20%〜40%にすぎません。つまり、ソフトウェアに1億円を投資した場合、インフラ、導入、トレーニングを含め、システムを正常に稼働させるための実際のコストは2.5億〜5億円になる可能性があります。当社はライセンスと導入サービスの両方を含んだパッケージ料金を提供しています。"
  },
  {
    question: "3年間のTCO（総所有コスト）予測ツールはどのように機能しますか？",
    answer: "当社の予測ツールは以下を組み合わせています：(1) 3年間のユーザー数に応じた定期的なライセンス費用；(2) ユーザーの規模と業界の複雑さ（製造業や医療業は複雑性乗数が高くなります）に基づく推定導入費用；(3) 継続的なトレーニング、メンテナンス、およびテクニカルサポート費用。これにより、最も現実的な予算計画が提供されます。"
  },
  {
    question: "各パッケージの平均的な導入期間はどのくらいですか？",
    answer: "スターター（Tier 1）の場合、標準プロセスをそのまま適用するため、導入は迅速で2〜4ヶ月かかります。グロース（Tier 2）は、モジュールや自動化の要件に応じて4〜8ヶ月必要です。大企業向けのエンタープライズ（Tier 3）は、多国籍プロセスと多数のシステム連携のため、8〜18ヶ月かかります。"
  },
  {
    question: "コストを削減するために自社で導入することはできますか？",
    answer: "非常に困難であり、リスクが極めて高いです。ERPプロジェクトには、深い業務知識、プロジェクト管理の経験、および技術的なカスタマイズスキルが必要です。自社導入は、データベース構造のエラー、トレーニング不足による現場の反発、プロジェクトの遅延などを招きやすく、稼働に至らないケースが多くあります。専門のパートナーチームと協力することが、計画通りの稼働を保証します。"
  }
];

export const FAQS = FAQS_VI;

export const getFaqs = (lang: "vi" | "en" | "es" | "ja") => {
  switch (lang) {
    case "en": return FAQS_EN;
    case "es": return FAQS_ES;
    case "ja": return FAQS_JA;
    default: return FAQS_VI;
  }
};

export interface ComparisonFeature {
  name: string;
  saho: { text?: string; check: boolean | "custom" | "partial" };
  odoo: { text?: string; check: boolean | "custom" | "partial" };
  netsuite: { text?: string; check: boolean | "custom" | "partial" };
  sap: { text?: string; check: boolean | "custom" | "partial" };
}

export interface ComparisonCategory {
  title: string;
  features: ComparisonFeature[];
}

export const COMPARISON_CATEGORIES_VI: ComparisonCategory[] = [
  {
    title: "Phân hệ Cốt lõi (Core Modules)",
    features: [
      {
        name: "Financial Accounting (Kế toán tài chính)",
        saho: { check: true, text: "Chuẩn VAS / Thông tư 200" },
        odoo: { check: "partial", text: "Cơ bản / Bản địa hóa qua đối tác" },
        netsuite: { check: "partial", text: "Cần cấu hình bổ sung" },
        sap: { check: true, text: "Cần cấu hình bổ sung" }
      },
      {
        name: "HR & Payroll (Quản trị Nhân sự & Tính lương)",
        saho: { check: true, text: "Tích hợp sẵn Luật Lao động VN, PIT & Bảo hiểm" },
        odoo: { check: false, text: "Không có sẵn cho VN" },
        netsuite: { check: false, text: "Không có sẵn cho VN" },
        sap: { check: false, text: "Cần mua thêm add-on đắt đỏ" }
      },
      {
        name: "Inventory & Warehouse (Quản lý Kho hàng)",
        saho: { check: true, text: "Đa kho, FIFO, LIFO, Số lô/HSD" },
        odoo: { check: true, text: "Tích hợp sẵn" },
        netsuite: { check: true, text: "Tích hợp sẵn" },
        sap: { check: true, text: "Tích hợp sẵn" }
      },
      {
        name: "Production Management (Quản lý Sản xuất & Định mức)",
        saho: { check: true, text: "BOM đa cấp, Lập lịch sản xuất" },
        odoo: { check: true, text: "Tích hợp sẵn" },
        netsuite: { check: true, text: "Bản quyền Module Sản xuất riêng" },
        sap: { check: true, text: "Tích hợp sẵn" }
      }
    ]
  },
  {
    title: "Tính địa phương & Hỗ trợ (Localization & Support)",
    features: [
      {
        name: "Hóa đơn điện tử (Vietnamese E-Invoice)",
        saho: { check: true, text: "Kết nối trực tiếp (MISA, Viettel, VNPT...)" },
        odoo: { check: "custom", text: "Lập trình tùy biến thêm" },
        netsuite: { check: "custom", text: "Lập trình tùy biến thêm" },
        sap: { check: "custom", text: "Phải mua add-on qua đối tác" }
      },
      {
        name: "Hỗ trợ Kỹ thuật & Tư vấn triển khai",
        saho: { check: true, text: "Trực tiếp từ hãng, hỗ trợ Onsite nhanh" },
        odoo: { check: "partial", text: "Qua đối tác / Ticket toàn cầu chậm" },
        netsuite: { check: "partial", text: "Qua đối tác độc quyền" },
        sap: { check: "partial", text: "Qua đối tác độc quyền" }
      },
      {
        name: "Khả năng Xuất báo cáo Thuế (HTKK)",
        saho: { check: true, text: "Tự động kết xuất XML nộp thuế trực tiếp" },
        odoo: { check: false, text: "Phải làm thủ công bên ngoài" },
        netsuite: { check: false, text: "Phải làm thủ công bên ngoài" },
        sap: { check: "custom", text: "Cần xây dựng báo cáo riêng" }
      }
    ]
  },
  {
    title: "Tối ưu hóa Chi phí (Total Cost of Ownership - TCO)",
    features: [
      {
        name: "Chi phí Bản quyền Phần mềm (License)",
        saho: { check: true, text: "Giá bản địa hóa tối ưu cho DN Việt" },
        odoo: { check: "partial", text: "Trung bình (Có phí ẩn theo App)" },
        netsuite: { check: false, text: "Rất cao (Định giá USD toàn cầu)" },
        sap: { check: false, text: "Rất cao (Định giá USD toàn cầu)" }
      },
      {
        name: "Chi phí Triển khai (Implementation Cost)",
        saho: { check: true, text: "Thấp - Trung bình (Quy trình chuẩn hóa sẵn)" },
        odoo: { check: "partial", text: "Trung bình (Tùy theo năng lực Partner)" },
        netsuite: { check: false, text: "Cực kỳ cao (Thường gấp 2-3 lần License)" },
        sap: { check: false, text: "Cực kỳ cao (Thường gấp 3-4 lần License)" }
      },
      {
        name: "Thời gian Go-live trung bình",
        saho: { check: true, text: "Nhanh (1 - 3 tháng nhờ bộ giải pháp mẫu)" },
        odoo: { check: "partial", text: "Trung bình (3 - 6 tháng)" },
        netsuite: { check: false, text: "Chậm (6 - 12 tháng)" },
        sap: { check: false, text: "Chậm (6 - 12 tháng)" }
      }
    ]
  }
];

export const COMPARISON_CATEGORIES_EN: ComparisonCategory[] = [
  {
    title: "Core Modules",
    features: [
      {
        name: "Financial Accounting",
        saho: { check: true, text: "Compliant with VAS / Circular 200" },
        odoo: { check: "partial", text: "Basic / Localized via partners" },
        netsuite: { check: "partial", text: "Requires additional configuration" },
        sap: { check: true, text: "Requires additional configuration" }
      },
      {
        name: "HR & Payroll",
        saho: { check: true, text: "Built-in VN Labor Law, PIT & Insurance" },
        odoo: { check: false, text: "Not natively available for VN" },
        netsuite: { check: false, text: "Not natively available for VN" },
        sap: { check: false, text: "Requires expensive add-ons" }
      },
      {
        name: "Inventory & Warehouse",
        saho: { check: true, text: "Multi-warehouse, FIFO, LIFO, Batch/Expiry" },
        odoo: { check: true, text: "Built-in" },
        netsuite: { check: true, text: "Built-in" },
        sap: { check: true, text: "Built-in" }
      },
      {
        name: "Production & Bill of Materials (BOM)",
        saho: { check: true, text: "Multi-level BOM, Production scheduling" },
        odoo: { check: true, text: "Built-in" },
        netsuite: { check: true, text: "Requires separate manufacturing module" },
        sap: { check: true, text: "Built-in" }
      }
    ]
  },
  {
    title: "Localization & Support",
    features: [
      {
        name: "Vietnamese E-Invoice Integration",
        saho: { check: true, text: "Directly connected (MISA, Viettel, VNPT...)" },
        odoo: { check: "custom", text: "Requires custom development" },
        netsuite: { check: "custom", text: "Requires custom development" },
        sap: { check: "custom", text: "Requires partner add-on" }
      },
      {
        name: "Technical Support & Consulting",
        saho: { check: true, text: "Direct from vendor, fast Onsite support" },
        odoo: { check: "partial", text: "Via partners / Slow global tickets" },
        netsuite: { check: "partial", text: "Via exclusive partners only" },
        sap: { check: "partial", text: "Via exclusive partners only" }
      },
      {
        name: "Tax Reporting Export (HTKK)",
        saho: { check: true, text: "Automatic XML export for direct tax filing" },
        odoo: { check: false, text: "Must be done manually externally" },
        netsuite: { check: false, text: "Must be done manually externally" },
        sap: { check: "custom", text: "Requires customized custom reporting" }
      }
    ]
  },
  {
    title: "Total Cost of Ownership (TCO) Optimization",
    features: [
      {
        name: "Software License Cost",
        saho: { check: true, text: "Localized pricing optimized for VN" },
        odoo: { check: "partial", text: "Medium (Hidden fees per App)" },
        netsuite: { check: false, text: "Very high (Global USD pricing)" },
        sap: { check: false, text: "Very high (Global USD pricing)" }
      },
      {
        name: "Implementation Cost",
        saho: { check: true, text: "Low - Medium (Pre-packaged template processes)" },
        odoo: { check: "partial", text: "Medium (Depends on partner capability)" },
        netsuite: { check: false, text: "Extremely high (2-3x license fee)" },
        sap: { check: false, text: "Extremely high (3-4x license fee)" }
      },
      {
        name: "Average Go-live Time",
        saho: { check: true, text: "Fast (1 - 3 months using industry templates)" },
        odoo: { check: "partial", text: "Medium (3 - 6 months)" },
        netsuite: { check: false, text: "Slow (6 - 12 months)" },
        sap: { check: false, text: "Slow (6 - 12 months)" }
      }
    ]
  }
];

export const COMPARISON_CATEGORIES_ES: ComparisonCategory[] = [
  {
    title: "Módulos Principales (Core Modules)",
    features: [
      {
        name: "Financial Accounting (Contabilidad financiera)",
        saho: { check: true, text: "Cumple con VAS / Circular 200" },
        odoo: { check: "partial", text: "Básico / Localizado por socios" },
        netsuite: { check: "partial", text: "Requiere configuración adicional" },
        sap: { check: true, text: "Requiere configuración adicional" }
      },
      {
        name: "HR & Payroll (Recursos Humanos y Nómina)",
        saho: { check: true, text: "Ley Laboral VN integrada, IRPF y Seguridad Social" },
        odoo: { check: false, text: "No disponible de forma nativa para VN" },
        netsuite: { check: false, text: "No disponible de forma nativa para VN" },
        sap: { check: false, text: "Requiere complementos costosos" }
      },
      {
        name: "Inventory & Warehouse (Inventario y Almacén)",
        saho: { check: true, text: "Multi-almacén, FIFO, LIFO, lote/caducidad" },
        odoo: { check: true, text: "Integrado por defecto" },
        netsuite: { check: true, text: "Integrado por defecto" },
        sap: { check: true, text: "Integrado por defecto" }
      },
      {
        name: "Production Management (Producción y Lista de Materiales)",
        saho: { check: true, text: "BOM multinivel, programación de producción" },
        odoo: { check: true, text: "Integrado por defecto" },
        netsuite: { check: true, text: "Módulo de producción de pago adicional" },
        sap: { check: true, text: "Integrado por defecto" }
      }
    ]
  },
  {
    title: "Localización y Soporte (Localization & Support)",
    features: [
      {
        name: "Vietnamese E-Invoice (Factura Electrónica VN)",
        saho: { check: true, text: "Conexión directa (MISA, Viettel, VNPT...)" },
        odoo: { check: "custom", text: "Requiere desarrollo personalizado" },
        netsuite: { check: "custom", text: "Requiere desarrollo personalizado" },
        sap: { check: "custom", text: "Requiere complementos del socio" }
      },
      {
        name: "Soporte Técnico y Consultoría",
        saho: { check: true, text: "Directo del fabricante, soporte in situ rápido" },
        odoo: { check: "partial", text: "Vía socios / Tickets globales lentos" },
        netsuite: { check: "partial", text: "Vía socios exclusivos únicamente" },
        sap: { check: "partial", text: "Vía socios exclusivos únicamente" }
      },
      {
        name: "Exportación de Informes Fiscales (HTKK)",
        saho: { check: true, text: "Exportación automática XML para declaración directa" },
        odoo: { check: false, text: "Debe hacerse manualmente de forma externa" },
        netsuite: { check: false, text: "Debe hacerse manualmente de forma externa" },
        sap: { check: "custom", text: "Requiere desarrollo de informes a medida" }
      }
    ]
  },
  {
    title: "Optimización de Costos (TCO Optimization)",
    features: [
      {
        name: "Costo de Licencia de Software",
        saho: { check: true, text: "Precios localizados optimizados para VN" },
        odoo: { check: "partial", text: "Medio (tarifas ocultas por aplicación)" },
        netsuite: { check: false, text: "Muy alto (precios globales en USD)" },
        sap: { check: false, text: "Muy alto (precios globales en USD)" }
      },
      {
        name: "Costo de Implementación",
        saho: { check: true, text: "Bajo - Medio (procesos de plantilla preconfigurados)" },
        odoo: { check: "partial", text: "Medio (depende de la capacidad del socio)" },
        netsuite: { check: false, text: "Extremadamente alto (2-3 veces la licencia)" },
        sap: { check: false, text: "Extremadamente alto (3-4 veces la licencia)" }
      },
      {
        name: "Tiempo Promedio de Puesta en Marcha",
        saho: { check: true, text: "Rápido (1 - 3 meses usando plantillas de industria)" },
        odoo: { check: "partial", text: "Medio (3 - 6 meses)" },
        netsuite: { check: false, text: "Lento (6 - 12 meses)" },
        sap: { check: false, text: "Lento (6 - 12 meses)" }
      }
    ]
  }
];

export const COMPARISON_CATEGORIES_JA: ComparisonCategory[] = [
  {
    title: "核心モジュール (Core Modules)",
    features: [
      {
        name: "Financial Accounting (財務会計)",
        saho: { check: true, text: "VAS（ベトナム会計基準）/ 通達200号に準拠" },
        odoo: { check: "partial", text: "基本機能 / パートナーによるローカライズ" },
        netsuite: { check: "partial", text: "追加のカスタマイズ設定が必要" },
        sap: { check: true, text: "追加のカスタマイズ設定が必要" }
      },
      {
        name: "HR & Payroll (人事・給与)",
        saho: { check: true, text: "ベトナム労働法、個人所得税、社会保険を標準実装" },
        odoo: { check: false, text: "ベトナム向け標準機能なし" },
        netsuite: { check: false, text: "ベトナム向け標準機能なし" },
        sap: { check: false, text: "高額な追加アドオンが必要" }
      },
      {
        name: "Inventory & Warehouse (在庫・倉庫管理)",
        saho: { check: true, text: "複数倉庫、FIFO、LIFO、ロット/有効期限管理" },
        odoo: { check: true, text: "標準実装" },
        netsuite: { check: true, text: "標準実装" },
        sap: { check: true, text: "標準実装" }
      },
      {
        name: "Production Management (生産・部品表管理)",
        saho: { check: true, text: "マルチレベルBOM、生産スケジューリング" },
        odoo: { check: true, text: "標準実装" },
        netsuite: { check: true, text: "生産管理は有料の追加モジュール" },
        sap: { check: true, text: "標準実装" }
      }
    ]
  },
  {
    title: "ローカライズ & サポート (Localization & Support)",
    features: [
      {
        name: "Vietnamese E-Invoice (ベトナム電子請求書連携)",
        saho: { check: true, text: "直接連携 (MISA, Viettel, VNPTなど)" },
        odoo: { check: "custom", text: "個別カスタマイズ開発が必要" },
        netsuite: { check: "custom", text: "個別カスタマイズ開発が必要" },
        sap: { check: "custom", text: "パートナー経由のアドオン購入が必要" }
      },
      {
        name: "テクニカルサポート＆導入コンサル",
        saho: { check: true, text: "メーカーからの直接対応、迅速なオンサイトサポート" },
        odoo: { check: "partial", text: "パートナー経由 / グローバルチケット対応のため遅い" },
        netsuite: { check: "partial", text: "専任パートナー経由のみ" },
        sap: { check: "partial", text: "専任パートナー経由のみ" }
      },
      {
        name: "税務申告データ出力 (HTKK)",
        saho: { check: true, text: "直接申告可能なXMLデータの自動出力対応" },
        odoo: { check: false, text: "外部での手動処理が必要" },
        netsuite: { check: false, text: "外部での手動処理が必要" },
        sap: { check: "custom", text: "個別レポート開発が必要" }
      }
    ]
  },
  {
    title: "コスト最適化 (TCO Optimization)",
    features: [
      {
        name: "ソフトウェアライセンス費用",
        saho: { check: true, text: "ベトナム企業向けに最適化されたローカル価格" },
        odoo: { check: "partial", text: "普通 (アプリ数ごとの隠れた追加費用あり)" },
        netsuite: { check: false, text: "非常に高い (グローバル共通USD価格)" },
        sap: { check: false, text: "非常に高い (グローバル共通USD価格)" }
      },
      {
        name: "システム導入費用",
        saho: { check: true, text: "低〜中（事前パッケージ化された業務テンプレート）" },
        odoo: { check: "partial", text: "中（パートナー企業のスキルに依存）" },
        netsuite: { check: false, text: "極めて高い (ライセンス費用の2〜3倍)" },
        sap: { check: false, text: "極めて高い (ライセンス費用の3〜4倍)" }
      },
      {
        name: "平均稼働期間",
        saho: { check: true, text: "迅速（業務テンプレート活用により1〜3ヶ月）" },
        odoo: { check: "partial", text: "中程度 (3〜6ヶ月)" },
        netsuite: { check: false, text: "遅い (6〜12ヶ月)" },
        sap: { check: false, text: "遅い (6〜12ヶ月)" }
      }
    ]
  }
];

export const COMPARISON_CATEGORIES = COMPARISON_CATEGORIES_VI;

export const getComparisonCategories = (lang: "vi" | "en" | "es" | "ja") => {
  switch (lang) {
    case "en": return COMPARISON_CATEGORIES_EN;
    case "es": return COMPARISON_CATEGORIES_ES;
    case "ja": return COMPARISON_CATEGORIES_JA;
    default: return COMPARISON_CATEGORIES_VI;
  }
};
