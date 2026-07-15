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

export const PRICING_TIERS = PRICING_TIERS_VI;

export const getPricingTiers = (lang: "vi" | "en") => {
  return lang === "vi" ? PRICING_TIERS_VI : PRICING_TIERS_EN;
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

export const INDUSTRIES = INDUSTRIES_VI;

export const getIndustries = (lang: "vi" | "en") => {
  return lang === "vi" ? INDUSTRIES_VI : INDUSTRIES_EN;
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

export const FAQS = FAQS_VI;

export const getFaqs = (lang: "vi" | "en") => {
  return lang === "vi" ? FAQS_VI : FAQS_EN;
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

export const COMPARISON_CATEGORIES = COMPARISON_CATEGORIES_VI;

export const getComparisonCategories = (lang: "vi" | "en") => {
  return lang === "vi" ? COMPARISON_CATEGORIES_VI : COMPARISON_CATEGORIES_EN;
};
