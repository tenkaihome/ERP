import { LanguagePack, PricingTier, Industry, FAQ, ComparisonCategory } from "./types";

export const TRANSLATIONS: Record<string, LanguagePack> = {
  vi: {
    meta: {
      code: "vi",
      label: "Tiếng Việt",
      flag: "🇻🇳",
      currency: "VND"
    },
    tcoCalculator: "Bộ Tính Chi Phí TCO",
    pricingPackages: "Gói Dịch Vụ ERP",
    comparison: "So Sánh ERP",
    breakdown: "Cơ Cấu Đầu Tư",
    faq: "Hỏi Đáp (FAQ)",
    contactBtn: "Đăng Ký Tư Vấn",

    heroBadge: "BẢN ĐỒ BÁO GIÁ THỰC TẾ 2025 - 2026",
    heroTitlePart1: "Đầu Tư ERP Thực Chất:",
    heroTitlePart2: " Không Chỉ Là Bản Quyền,",
    heroTitlePart3: " Đó Là Giải Pháp & Triển Khai",
    heroDesc: "Nhiều doanh nghiệp thất bại khi chỉ quan tâm tới giá mua phần mềm (License). Thực tế, bản quyền chỉ chiếm 20% - 40% tổng đầu tư. 30% - 50% ngân sách quyết định sự thành bại nằm ở khâu Triển Khai & Vận Hành.",
    heroBtnPrimary: "Tính Chi Phí TCO Ngay",
    heroBtnSecondary: "Xem Thẻ Gói Chi Tiết",
    heroBannerTitle: "CƠ CẤU NGÂN SÁCH ERP TIÊU CHUẨN",
    heroBannerSub: "* Tỷ lệ trung bình của các dự án SAP, NetSuite và Dynamics 365.",
    heroBannerHighlight: "Giải pháp của SAHO đã tối ưu hóa trọn gói",
    licenseLabel: "License 30%",
    implementationLabel: "Triển khai 40%",
    trainingLabel: "Đào tạo 15%",
    supportLabel: "Vận hành 15%",
    tco30Title: "Bản quyền phần mềm (License) chiếm ~30% ngân sách",
    tco40Title: "Dịch vụ triển khai (Implementation) chiếm ~40% ngân sách",
    tco15Title: "Đào tạo nhân sự và Chuyển đổi số (Training) chiếm ~15% ngân sách",
    tcoOngoingTitle: "Vận hành, nâng cấp & bảo trì (Ongoing Maintenance) chiếm ~15% ngân sách",

    calcTitle: "Công Cụ Hoạch Định & Ước Tính TCO",
    calcDesc: "Mô phỏng tổng chi phí sở hữu (Total Cost of Ownership) trong 3 năm vận hành. Hãy trượt thanh cuộn dưới để ước tính ngân sách phù hợp.",
    calcSliderUsers: "Số lượng người dùng (Users)",
    calcSelectIndustry: "Nhóm ngành hoạt động",
    calcSelectComplexity: "Độ phức tạp quy trình",
    calcComplexityStandard: "Quy trình chuẩn hóa (Standard)",
    calcComplexityCustomized: "Cần chỉnh sửa vừa phải (Customized)",
    calcComplexityTailormade: "Cấu hình may đo chuyên sâu (Tailor-made)",
    calcResultsTitle: "Phân Bổ Ngân Sách Ước Tính (3 Năm)",
    calcResultsNote: "* Dữ liệu mang tính chất tham khảo dựa trên thống kê thị trường. Liên hệ tư vấn để nhận báo giá chi tiết.",
    calcResultsTco: "Tổng TCO (3 Năm)",
    calcResultsLicense: "Phần mềm (License)",
    calcResultsImplementation: "Triển khai (Implementation)",
    calcResultsTraining: "Đào tạo & Vận hành",
    calcResultsSupport: "Hỗ trợ kỹ thuật",
    calcUsersSuffix: "người dùng",
    calcComplexityMultiplier: "Hệ số phức tạp quy trình",
    calcIndustryMultiplier: "Hệ số phức tạp ngành nghề",
    suggestedSystemLabel: "Đề xuất hệ thống phù hợp: ",
    equivalentToLabel: "Tương đương: ",
    licenseUnitPriceMonth: "Đơn giá bản quyền / tháng",
    totalLicenses36m: "Tổng bản quyền (36 tháng)",
    implementationOneTime: "Dịch vụ Triển khai (1 lần)",
    maintenanceSupport3y: "Vận hành & Hỗ trợ (3 năm)",
    licenseCostRatio: "Bản quyền",
    implementationCostRatio: "Triển khai & khác",
    sendConfigBtn: "Gửi Cấu Hình Nhận Báo Giá Chi Tiết",

    pricingTitle: "Cấu Trúc Gói Dịch Vụ ERP Chuẩn Hóa",
    pricingDesc: "Được phân loại theo quy mô và mức độ hoàn thiện quy trình của doanh nghiệp. Tham chiếu theo mặt bằng thị trường thực tế 2025 - 2026.",
    pricingTarget: "Đối tượng phù hợp",
    pricingFeatures: "Tính năng cốt lõi bao gồm",
    pricingRef: "Hệ thống đối chiếu:",
    pricingSelectBtn: "Lựa Chọn Gói Dịch Vụ",
    pricingRecommendBadge: "Khuyên dùng",
    currencyUnitUserMonth: "/ user / tháng",
    implementationCostLabel: "Chi phí triển khai: ",

    compBadge: "SO SÁNH BẢNG GIÁ & TÍNH NĂNG",
    compTitle: "Saho ERP vs Phần Mềm Khác",
    compDesc: "Sở hữu các tính năng nghiệp vụ quy chuẩn quốc tế sánh ngang Odoo, NetSuite, SAP nhưng được tối ưu hóa đặc biệt và bản địa hóa hoàn hảo cho thị trường Việt Nam.",
    compColFeature: "Tính Năng / Đặc Điểm",
    compColOptimal: "Lựa chọn tối ưu",
    compMobileSwipe: "👉 Vuốt ngang màn hình để xem đầy đủ bảng so sánh",
    compLegendAvailable: "Có sẵn / Đầy đủ",
    compLegendPartial: "Hỗ trợ một phần",
    compLegendCustom: "Lập trình tùy chỉnh thêm (Custom)",
    compLegendUnsupported: "Không hỗ trợ mặc định",

    breakdownTitle: "Cơ Cấu Chi Phí ERP: Tại Sao Triển Khai Lại Quan Trọng?",
    breakdownDesc: "Triển khai thành công chiếm hơn một nửa giá trị cốt lõi của dự án ERP. Dưới đây là cách dòng tiền đầu tư của bạn hoạt động hiệu quả.",
    breakdownProcessTitle: "Quy Trình Triển Khai Thực Chất",
    breakdownProcessSubtitle: "Chúng Tôi Bàn Giao Quy Trình Vận Hành, Không Phải Đĩa Phần Mềm",
    breakdownProcessParagraph: "Mua bản quyền ERP mới chỉ là mua chiếc xe, còn dịch vụ triển khai chính là động cơ và nhiên liệu để chiếc xe lăn bánh an toàn. SAHO cung cấp chuỗi dịch vụ khép kín nhằm cam kết đưa dự án tới ngày nghiệm thu thực tế, loại bỏ hoàn toàn nguy cơ “đắp chiếu” phần mềm.",
    breakdownLeaderNoteTitle: "Lưu ý quan trọng cho lãnh đạo doanh nghiệp",
    breakdownLeaderNoteText: "Hơn 68% dự án ERP thất bại toàn cầu không phải do lỗi phần mềm, mà do quy trình triển khai thiếu chuẩn hóa và nhân sự vận hành không được đào tạo bài bản. Đầu tư nghiêm túc cho khâu Triển khai là khoản đầu tư đảm bảo thành công cao nhất.",
    breakdownListTitle: "5 Hạng Mục Công Việc Nằm Trong Chi Phí Triển Khai",

    faqTitle: "Giải Đáp Thắc Mắc Thường Gặp",
    faqDesc: "Tổng hợp các câu hỏi phổ biến nhất từ doanh nghiệp khi tìm hiểu và xây dựng ngân sách dự án ERP.",
    faqClarifications: "Hỏi Đáp Giải Đáp Thắc Mắc",

    contactTitle: "Đăng Ký Tư Vấn & Nhận Báo Giá Chi Tiết",
    contactDesc: "Hãy để lại thông tin. Đội ngũ chuyên viên tư vấn ERP của SAHO sẽ liên hệ và khảo sát nhu cầu trực tiếp trong vòng 24 giờ làm việc.",
    contactFieldName: "Họ và tên",
    contactPlaceholderName: "Ví dụ: Nguyễn Văn A",
    contactFieldEmail: "Email công việc",
    contactPlaceholderEmail: "Ví dụ: a.nguyen@company.com",
    contactFieldPhone: "Số điện thoại",
    contactPlaceholderPhone: "Ví dụ: 0912345678",
    contactFieldCompanySize: "Quy mô nhân sự doanh nghiệp",
    contactFieldPlan: "Gói dịch vụ quan tâm",
    contactPlanDefault: "Chọn gói dịch vụ...",
    contactPlanStarter: "Gói Starter (Tier 1)",
    contactPlanGrowth: "Gói Growth (Tier 2)",
    contactPlanEnterprise: "Gói Enterprise (Tier 3)",
    contactFieldMessage: "Yêu cầu chi tiết hoặc câu hỏi bổ sung (nếu có)",
    contactPlaceholderMessage: "Ví dụ: Chúng tôi có 150 nhân sự ngành sản xuất bán lẻ, cần tư vấn phân hệ kho và kế toán...",
    contactBtnSubmit: "Gửi Yêu Cầu Tư Vấn",
    contactBtnSubmitting: "Đang gửi...",
    contactSuccessTitle: "Gửi Yêu Cầu Thành Công!",
    contactSuccessDesc: "Cấu nghiệp vụ của bạn đã được tiếp nhận. Đội ngũ giải pháp sẽ phản hồi sớm.",
    contactSuccessDescText: "Cảm ơn bạn đã gửi cấu hình yêu cầu tư vấn. Chuyên viên giải pháp ERP của SAHO sẽ liên hệ lại với bạn qua số điện thoại và email của bạn trong vòng 2 giờ làm việc để gửi báo giá chi tiết.",
    contactSuccessClose: "Đóng cửa sổ",
    contactCreateNewRequest: "Tạo yêu cầu mới",
    contactRegisterQuote: "Đăng Ký Khảo Sát & Nhận Báo Giá Chi Tiết",
    contactCompanyLabel: "Tên Doanh nghiệp / Tổ chức",
    contactCompanyPlaceholder: "Công ty Cổ phần SAHO",
    contactUsersLabel: "Số lượng Users dự kiến",
    contactIndustryLabel: "Ngành nghề hoạt động",
    errorGeneric: "Đã xảy ra lỗi. Vui lòng thử lại sau.",
    errorNetwork: "Không thể kết nối đến máy chủ. Vui lòng kiểm tra lại mạng.",

    footerDesc: "SAHO ERP là đơn vị tư vấn độc lập và cung cấp dịch vụ triển khai phần mềm quản trị doanh nghiệp hàng đầu tại Việt Nam.",
    footerLinksQuick: "Liên kết nhanh",
    footerLinksLegal: "Pháp lý & Quy định",
    footerLinkPrivacy: "Chính sách bảo mật",
    footerLinkTerms: "Điều khoản sử dụng",
    footerCopyright: "© 2026 SAHO ERP. Bảo lưu mọi quyền.",
    marketPositioningLabel: "Định vị thị trường: 2025 - 2026",
    versionLabel: "Phiên bản: v1.2 (Kiến trúc App Router)",
    systemModulesTitle: "Mô đun Hệ Thống",
    moduleHrm: "Quản trị Nhân sự (HRM)",
    moduleFico: "Quản trị Tài chính - Kế toán (FICO)",
    moduleScm: "Quản trị Chuỗi cung ứng (SCM)",
    moduleCrm: "Quản trị Quan hệ Khách hàng (CRM)",
    moduleBi: "Trí tuệ Quản trị (BI & Analytics)",
    referenceStandardsTitle: "Đối Tượng Tham Chiếu",
    contactInfoTitle: "Thông Tin Liên Hệ",
    sahoAddressText: "Tòa nhà SAHO, 120 Đường 3 Tháng 2, Quận 10, TP. Hồ Chí Minh",
    costDisclaimerTitle: "Tuyên bố miễn trừ trách nhiệm về Ước tính Chi phí:",
    costDisclaimerText: "Các số liệu chi phí bản quyền, triển khai, vận hành và TCO (Tổng chi phí sở hữu) 3 năm được cung cấp bởi Bộ tính toán trên trang web này mang tính chất ước lượng tham chiếu dựa trên nghiên cứu mặt bằng giá thị trường ERP 2025 - 2026. Chi phí thực tế sẽ phụ thuộc vào mức độ phức tạp của quy trình nghiệp vụ đặc thù, số lượng báo cáo tùy chỉnh, hiện trạng dữ liệu và kết quả khảo sát chi tiết (Blueprinting Workshop) của đội ngũ chuyên gia tư vấn SAHO ERP.",
    
    missionBadge: "TẦM NHÌN & SỨ MỆNH",
    visionTitle: "TẦM NHÌN",
    visionStatement: "Trở thành hệ sinh thái quản trị doanh nghiệp hàng đầu thế giới. Kiến tạo một thế giới nơi mọi doanh nghiệp đều có thể tiếp cận hệ thống quản trị đẳng cấp thế giới.",
    missionTitle: "SỨ MỆNH",
    missionStatement: "Đồng hành cùng doanh nghiệp xây dựng nền tảng quản trị hiện đại, chuẩn hóa vận hành và phát triển từ những bước khởi đầu đến quy mô toàn cầu.",
    missionPillar1Title: "Quản Trị Hiện Đại",
    missionPillar1Desc: "Xây dựng hệ thống quản trị tiên tiến, số hóa quy trình và tối ưu hóa tài nguyên doanh nghiệp.",
    missionPillar2Title: "Chuẩn Hóa Vận Hành",
    missionPillar2Desc: "Thiết lập quy trình chuẩn mực, loại bỏ lãng phí và tăng tốc độ xử lý công việc.",
    missionPillar3Title: "Vươn Tầm Toàn Cầu",
    missionPillar3Desc: "Hỗ trợ doanh nghiệp phát triển bền vững từ quy mô khởi nghiệp đến tầm quốc tế.",
    
    pricingTiers: [
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
    ],
    industries: [
      { id: "general", name: "Thương mại & Dịch vụ chung", multiplier: 1.0, icon: "Briefcase" },
      { id: "retail", name: "Chuỗi Bán lẻ & Thương mại điện tử", multiplier: 1.15, icon: "ShoppingBag" },
      { id: "manufacturing", name: "Sản xuất & Chế biến", multiplier: 1.35, icon: "Factory" },
      { id: "logistics", name: "Vận tải & Logistics", multiplier: 1.2, icon: "Truck" },
      { id: "healthcare", name: "Bệnh viện & Y tế", multiplier: 1.4, icon: "Heart" },
      { id: "education", name: "Trường học & Giáo dục", multiplier: 1.1, icon: "GraduationCap" },
      { id: "finance", name: "Tài chính & Ngân hàng", multiplier: 1.5, icon: "DollarSign" },
      { id: "conglomerate", name: "Tập đoàn Đa ngành", multiplier: 1.45, icon: "Building2" },
    ],
    faqs: [
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
    ],
    comparisonCategories: [
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
    ]
  },
  en: {
    meta: {
      code: "en",
      label: "English",
      flag: "🇺🇸",
      currency: "USD"
    },
    tcoCalculator: "TCO Calculator",
    pricingPackages: "ERP Packages",
    comparison: "ERP Comparison",
    breakdown: "Investment Structure",
    faq: "FAQ",
    contactBtn: "Request Consultation",

    heroBadge: "REAL ERP PRICING ROADMAP 2025 - 2026",
    heroTitlePart1: "Real ERP Investment:",
    heroTitlePart2: " Not Just Licenses,",
    heroTitlePart3: " It's Solution & Implementation",
    heroDesc: "Many businesses fail by only focusing on software license costs. In reality, license fees only account for 20% - 40% of the total investment. 30% - 50% of the budget that determines success or failure lies in Implementation & Operations.",
    heroBtnPrimary: "Calculate TCO Now",
    heroBtnSecondary: "View Package Details",
    heroBannerTitle: "STANDARD ERP BUDGET ALLOCATION",
    heroBannerSub: "* Average ratio of SAP, NetSuite, and Dynamics 365 projects.",
    heroBannerHighlight: "SAHO's solution is fully optimized & packaged",
    licenseLabel: "License 30%",
    implementationLabel: "Implementation 40%",
    trainingLabel: "Training 15%",
    supportLabel: "Support 15%",
    tco30Title: "Software license accounts for ~30% budget",
    tco40Title: "Implementation services account for ~40% budget",
    tco15Title: "Staff training and digital adoption accounts for ~15% budget",
    tcoOngoingTitle: "Operations, maintenance & upgrades account for ~15% budget",

    calcTitle: "TCO Planning & Estimation Tool",
    calcDesc: "Simulate the Total Cost of Ownership (TCO) over 3 years of operation. Drag the sliders below to estimate your suitable budget.",
    calcSliderUsers: "Number of Users (Users)",
    calcSelectIndustry: "Industry Sector",
    calcSelectComplexity: "Process Complexity",
    calcComplexityStandard: "Standardized Process (Standard)",
    calcComplexityCustomized: "Moderate Customization (Customized)",
    calcComplexityTailormade: "Specialized Tailor-made (Tailor-made)",
    calcResultsTitle: "Estimated Budget Allocation (3 Years)",
    calcResultsNote: "* Reference data based on market statistics. Contact us for a detailed quotation.",
    calcResultsTco: "Total TCO (3 Years)",
    calcResultsLicense: "Software License",
    calcResultsImplementation: "Implementation Services",
    calcResultsTraining: "Training & Go-live",
    calcResultsSupport: "Annual Support",
    calcUsersSuffix: "users",
    calcComplexityMultiplier: "Process complexity multiplier",
    calcIndustryMultiplier: "Industry complexity multiplier",
    suggestedSystemLabel: "Suggested system: ",
    equivalentToLabel: "Equivalent to: ",
    licenseUnitPriceMonth: "License unit price / month",
    totalLicenses36m: "Total Licenses (36 months)",
    implementationOneTime: "Implementation Services (one-time)",
    maintenanceSupport3y: "Maintenance & Support (3 years)",
    licenseCostRatio: "License",
    implementationCostRatio: "Implementation & others",
    sendConfigBtn: "Send Configuration for Detailed Quote",

    pricingTitle: "Standardized ERP Service Packages",
    pricingDesc: "Classified by business size and process maturity level. Referenced to the actual market rates of 2025 - 2026.",
    pricingTarget: "Target Audience",
    pricingFeatures: "Core features included",
    pricingRef: "Reference systems:",
    pricingSelectBtn: "Select Service Package",
    pricingRecommendBadge: "Recommended",
    currencyUnitUserMonth: "/ user / month",
    implementationCostLabel: "Implementation cost: ",

    compBadge: "PRICING & FEATURES MATRIX",
    compTitle: "Saho ERP vs The Rest",
    compDesc: "Possesses international standard business features matching Odoo, NetSuite, and SAP, but specifically optimized and perfectly localized for the Vietnamese market.",
    compColFeature: "Feature / Characteristic",
    compColOptimal: "Optimal choice",
    compMobileSwipe: "👉 Swipe horizontally to view full comparison table",
    compLegendAvailable: "Available / Full",
    compLegendPartial: "Partial support",
    compLegendCustom: "Custom development needed (Custom)",
    compLegendUnsupported: "Not supported by default",

    breakdownTitle: "ERP Cost Structure: Why Implementation Matters",
    breakdownDesc: "Successful implementation accounts for more than half of the core value of an ERP project. Here is how your investment cash flow works effectively.",
    breakdownProcessTitle: "Genuine Implementation Process",
    breakdownProcessSubtitle: "We Deliver Operational Processes, Not Software Disks",
    breakdownProcessParagraph: "Buying a new ERP license is like buying a car; implementation services are the engine and fuel that make the car run safely. SAHO provides an end-to-end chain of services committed to bringing the project to operational go-live, eliminating any software shelving risks.",
    breakdownLeaderNoteTitle: "Important note for business leaders",
    breakdownLeaderNoteText: "Over 68% of ERP project failures worldwide are not due to software errors, but due to unstandardized deployment processes and untrained operations staff. Seriously investing in Implementation is the highest guarantee of project success.",
    breakdownListTitle: "5 Key Deliverables Included in Implementation Costs",

    faqTitle: "Frequently Asked Questions",
    faqDesc: "Compilation of the most common questions from businesses when researching and budgeting for ERP projects.",
    faqClarifications: "FAQ & Clarifications",

    contactTitle: "Register for Consultation & Detailed Quote",
    contactDesc: "Leave your details. SAHO's team of ERP consultants will contact you and conduct an onsite survey within 24 working hours.",
    contactFieldName: "Full Name",
    contactPlaceholderName: "e.g. John Doe",
    contactFieldEmail: "Work Email",
    contactPlaceholderEmail: "e.g. john.doe@company.com",
    contactFieldPhone: "Phone Number",
    contactPlaceholderPhone: "e.g. +84 912345678",
    contactFieldCompanySize: "Company Size (Employees)",
    contactFieldPlan: "Service Package of Interest",
    contactPlanDefault: "Select a package...",
    contactPlanStarter: "Starter Plan (Tier 1)",
    contactPlanGrowth: "Growth Plan (Tier 2)",
    contactPlanEnterprise: "Enterprise Plan (Tier 3)",
    contactFieldMessage: "Detailed requirements or additional questions (optional)",
    contactPlaceholderMessage: "e.g. We have 150 employees in retail manufacturing, looking for inventory and accounting modules...",
    contactBtnSubmit: "Submit Consultation Request",
    contactBtnSubmitting: "Submitting...",
    contactSuccessTitle: "Request Submitted Successfully!",
    contactSuccessDesc: "Your request has been received. Our team will contact you shortly.",
    contactSuccessDescText: "Thank you for submitting your ERP configuration. A SAHO solutions expert will contact you via phone and email within 2 business hours to provide a detailed quote.",
    contactSuccessClose: "Close Window",
    contactCreateNewRequest: "Create new request",
    contactRegisterQuote: "Register for Consultation & Detailed Quote",
    contactCompanyLabel: "Company / Organization Name",
    contactCompanyPlaceholder: "SAHO Corporation",
    contactUsersLabel: "Estimated Number of Users",
    contactIndustryLabel: "Industry Segment",
    errorGeneric: "An error occurred. Please try again later.",
    errorNetwork: "Could not connect to the server. Please check your network.",

    footerDesc: "SAHO ERP is a leading independent consulting firm and provider of enterprise resource planning software implementation services in Vietnam.",
    footerLinksQuick: "Quick Links",
    footerLinksLegal: "Legal & Compliance",
    footerLinkPrivacy: "Privacy Policy",
    footerLinkTerms: "Terms of Service",
    footerCopyright: "© 2026 SAHO ERP. All rights reserved.",
    marketPositioningLabel: "Market positioning: 2025 - 2026",
    versionLabel: "Version: v1.2 (App Router)",
    systemModulesTitle: "System Modules",
    moduleHrm: "Human Resource Management (HRM)",
    moduleFico: "Financial & Cost Accounting (FICO)",
    moduleScm: "Supply Chain Management (SCM)",
    moduleCrm: "Customer Relationship Management (CRM)",
    moduleBi: "Business Intelligence (BI & Analytics)",
    referenceStandardsTitle: "Reference Standards",
    contactInfoTitle: "Contact Details",
    sahoAddressText: "SAHO Tower, 120 3 Thang 2 St, District 10, Ho Chi Minh City, Vietnam",
    costDisclaimerTitle: "Cost Estimation Disclaimer:",
    costDisclaimerText: "The software license, implementation, support, and 3-year TCO (Total Cost of Ownership) figures provided by the calculator on this website are reference estimations based on the research of market ERP rates for 2025 - 2026. Actual costs will vary depending on specific business process complexity, custom reports, legacy data condition, and results of a detailed Blueprinting Workshop conducted by SAHO ERP specialists.",
    
    missionBadge: "VISION & MISSION",
    visionTitle: "VISION",
    visionStatement: "To become the world's leading enterprise management ecosystem. Creating a world where every business has access to world-class management systems.",
    missionTitle: "MISSION",
    missionStatement: "Accompanying businesses in building a modern management foundation, standardizing operations, and growing from initial steps to global scale.",
    missionPillar1Title: "Modern Management",
    missionPillar1Desc: "Building advanced management systems, digitizing processes, and optimizing enterprise resources.",
    missionPillar2Title: "Standardized Operations",
    missionPillar2Desc: "Establishing standard processes, eliminating wastes, and accelerating workflow execution.",
    missionPillar3Title: "Global Scaling",
    missionPillar3Desc: "Supporting sustainable growth for businesses, from startup scale to international heights.",
    
    pricingTiers: [
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
    ],
    industries: [
      { id: "general", name: "General Commerce & Services", multiplier: 1.0, icon: "Briefcase" },
      { id: "retail", name: "Retail Chain & E-commerce", multiplier: 1.15, icon: "ShoppingBag" },
      { id: "manufacturing", name: "Manufacturing & Processing", multiplier: 1.35, icon: "Factory" },
      { id: "logistics", name: "Transportation & Logistics", multiplier: 1.2, icon: "Truck" },
      { id: "healthcare", name: "Hospital & Healthcare", multiplier: 1.4, icon: "Heart" },
      { id: "education", name: "School & Education", multiplier: 1.1, icon: "GraduationCap" },
      { id: "finance", name: "Finance & Banking", multiplier: 1.5, icon: "DollarSign" },
      { id: "conglomerate", name: "Multi-industry Conglomerate", multiplier: 1.45, icon: "Building2" },
    ],
    faqs: [
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
    ],
    comparisonCategories: [
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
    ]
  },
  es: {
    meta: {
      code: "es",
      label: "Español",
      flag: "🇪🇸",
      currency: "EUR"
    },
    tcoCalculator: "Calculadora de TCO",
    pricingPackages: "Paquetes ERP",
    comparison: "Comparación de ERP",
    breakdown: "Estructura de Inversión",
    faq: "Preguntas Frecuentes",
    contactBtn: "Solicitar Consulta",

    heroBadge: "MAPA DE PRECIOS REALES ERP 2025 - 2026",
    heroTitlePart1: "Inversión Real en ERP:",
    heroTitlePart2: " No Solo Licencias,",
    heroTitlePart3: " Es Solución e Implementación",
    heroDesc: "Muchas empresas fracasan al centrarse únicamente en los costos de licencia de software. En realidad, las tarifas de licencia solo representan del 20% al 40% de la inversión total. El 30% al 50% del presupuesto que determina el éxito o el fracaso reside en la Implementación y Operaciones.",
    heroBtnPrimary: "Calcular TCO Ahora",
    heroBtnSecondary: "Ver Detalles del Paquete",
    heroBannerTitle: "ASIGNACIÓN DE PRESUPUESTO ESTÁNDAR DE ERP",
    heroBannerSub: "* Relación promedio de proyectos SAP, NetSuite y Dynamics 365.",
    heroBannerHighlight: "La solución de SAHO está totalmente optimizada y empaquetada",
    licenseLabel: "Licencia 30%",
    implementationLabel: "Implementación 40%",
    trainingLabel: "Capacitación 15%",
    supportLabel: "Soporte 15%",
    tco30Title: "La licencia de software representa ~30% del presupuesto",
    tco40Title: "Los servicios de implementación representan ~40% del presupuesto",
    tco15Title: "La capacitación del personal y adopción digital representan ~15% del presupuesto",
    tcoOngoingTitle: "Operaciones, mantenimiento y actualizaciones representan ~15% del presupuesto",

    calcTitle: "Herramienta de Planificación y Estimación de TCO",
    calcDesc: "Simule el costo total de propiedad (TCO) durante 3 años de operación. Arrastre los controles deslizantes a continuación para estimar su presupuesto adecuado.",
    calcSliderUsers: "Número de Usuarios (Users)",
    calcSelectIndustry: "Sector Industrial",
    calcSelectComplexity: "Complejidad del Proceso",
    calcComplexityStandard: "Proceso Estandarizado (Standard)",
    calcComplexityCustomized: "Personalización Moderada (Customized)",
    calcComplexityTailormade: "A Medida Especializada (Tailor-made)",
    calcResultsTitle: "Asignación Estimada del Presupuesto (3 Años)",
    calcResultsNote: "* Datos de referencia basados en estadísticas de mercado. Contáctenos para una cotización detallada.",
    calcResultsTco: "TCO Total (3 Años)",
    calcResultsLicense: "Licencia de Software",
    calcResultsImplementation: "Servicios de Implementación",
    calcResultsTraining: "Capacitación y Puesta en Marcha",
    calcResultsSupport: "Soporte Técnico Anual",
    calcUsersSuffix: "usuarios",
    calcComplexityMultiplier: "Multiplicador de complejidad del proceso",
    calcIndustryMultiplier: "Multiplicador de complejidad del sector",
    suggestedSystemLabel: "Sistema sugerido: ",
    equivalentToLabel: "Equivalente a: ",
    licenseUnitPriceMonth: "Precio unitario de licencia / mes",
    totalLicenses36m: "Licencias totales (36 meses)",
    implementationOneTime: "Servicios de implementación (único)",
    maintenanceSupport3y: "Mantenimiento y soporte (3 años)",
    licenseCostRatio: "Licencia",
    implementationCostRatio: "Implementación y otros",
    sendConfigBtn: "Enviar configuración para cotización detallada",

    pricingTitle: "Paquetes de Servicios ERP Estandarizados",
    pricingDesc: "Clasificados por tamaño de empresa y nivel de madurez del proceso. Referenciados a las tarifas reales del mercado de 2025 - 2026.",
    pricingTarget: "Público Objetivo",
    pricingFeatures: "Características principales incluidas",
    pricingRef: "Sistemas de referencia:",
    pricingSelectBtn: "Seleccionar Paquete de Servicio",
    pricingRecommendBadge: "Recomendado",
    currencyUnitUserMonth: "/ user / mes",
    implementationCostLabel: "Costo de implementación: ",

    compBadge: "MATRIZ DE PRECIOS Y CARACTERÍSTICAS",
    compTitle: "Saho ERP vs El Resto",
    compDesc: "Posee características comerciales estándar internacionales que igualan a Odoo, NetSuite y SAP, pero optimizadas y perfectamente localizadas para el mercado de Vietnam.",
    compColFeature: "Característica / Particularidad",
    compColOptimal: "Opción óptima",
    compMobileSwipe: "👉 Deslice horizontalmente para ver la tabla de comparación completa",
    compLegendAvailable: "Disponible / Completo",
    compLegendPartial: "Soporte parcial",
    compLegendCustom: "Desarrollo personalizado necesario (Custom)",
    compLegendUnsupported: "No soportado por defecto",

    breakdownTitle: "Estructura de Costos de ERP: Por qué la Implementación Importa",
    breakdownDesc: "La implementación exitosa representa más de la mitad del valor central de un proyecto ERP. Así es como funciona su flujo de caja de inversión de manera efectiva.",
    breakdownProcessTitle: "Proceso de Implementación Real",
    breakdownProcessSubtitle: "Entregamos procesos operativos, no discos de software",
    breakdownProcessParagraph: "Comprar una nueva licencia de ERP es como comprar un automóvil; los servicios de implementación son el motor y el combustible que hacen que el vehículo ruede de manera segura. SAHO ofrece una cadena de servicios integral comprometida con lograr la puesta en marcha operativa del proyecto, eliminando cualquier riesgo de software archivado sin usar.",
    breakdownLeaderNoteTitle: "Nota importante para líderes empresariales",
    breakdownLeaderNoteText: "Más del 68% de los fracasos de proyectos de ERP en todo el mundo no se deben a errores de software, sino a procesos de implementación no estandarizados y personal operativo no capacitado. Invertir seriamente en la implementación es la mayor garantía de éxito del proyecto.",
    breakdownListTitle: "5 entregables clave incluidos en los costos de implementación",

    faqTitle: "Preguntas Frecuentes",
    faqDesc: "Recopilación de las preguntas más comunes de las empresas al investigar y presupuestar proyectos ERP.",
    faqClarifications: "Preguntas Frecuentes y Aclaraciones",

    contactTitle: "Regístrese para Consulta y Cotización Detallada",
    contactDesc: "Deje sus datos. El equipo de consultores ERP de SAHO se pondrá en contacto y realizará una encuesta en sitio dentro de las 24 horas hábiles.",
    contactFieldName: "Nombre Completo",
    contactPlaceholderName: "ej. Juan Pérez",
    contactFieldEmail: "Correo de Trabajo",
    contactPlaceholderEmail: "ej. juan.perez@company.com",
    contactFieldPhone: "Número de Teléfono",
    contactPlaceholderPhone: "ej. +84 912345678",
    contactFieldCompanySize: "Tamaño de la Empresa (Empleados)",
    contactFieldPlan: "Paquete de Servicio de Interés",
    contactPlanDefault: "Seleccione un paquete...",
    contactPlanStarter: "Plan Starter (Tier 1)",
    contactPlanGrowth: "Plan Growth (Tier 2)",
    contactPlanEnterprise: "Plan Enterprise (Tier 3)",
    contactFieldMessage: "Requisitos detallados o preguntas adicionales (opcional)",
    contactPlaceholderMessage: "ej. Tenemos 150 empleados en manufactura minorista, buscando módulos de inventario y contabilidad...",
    contactBtnSubmit: "Enviar Solicitud de Consulta",
    contactBtnSubmitting: "Enviando...",
    contactSuccessTitle: "¡Solicitud Enviada con Éxito!",
    contactSuccessDesc: "Su solicitud ha sido recibida. Nuestro equipo se contactará pronto.",
    contactSuccessDescText: "Gracias por enviar su configuración de ERP. Un experto en soluciones de SAHO se comunicará con usted por teléfono y por correo electrónico dentro de 2 horas hábiles para proporcionar una cotización detallada.",
    contactSuccessClose: "Cerrar Ventana",
    contactCreateNewRequest: "Crear nueva solicitud",
    contactRegisterQuote: "Registrarse para consulta y cotización detallada",
    contactCompanyLabel: "Nombre de la Empresa / Organización",
    contactCompanyPlaceholder: "Corporación SAHO",
    contactUsersLabel: "Número estimado de usuarios",
    contactIndustryLabel: "Sector de la industria",
    errorGeneric: "Ocurrió un error. Por favor, inténtelo de nuevo más tarde.",
    errorNetwork: "No se pudo conectar al servidor. Por favor, compruebe su red.",

    footerDesc: "SAHO ERP es una firma de consultoría independiente líder y proveedora de servicios de implementación de software de planificación de recursos empresariales en Vietnam.",
    footerLinksQuick: "Enlaces Rápidos",
    footerLinksLegal: "Legal y Cumplimiento",
    footerLinkPrivacy: "Política de Privacidad",
    footerLinkTerms: "Términos de Servicio",
    footerCopyright: "© 2026 SAHO ERP. Todos los derechos reservados.",
    marketPositioningLabel: "Posicionamiento de mercado: 2025 - 2026",
    versionLabel: "Versión: v1.2 (App Router)",
    systemModulesTitle: "Módulos del Sistema",
    moduleHrm: "Gestión de Recursos Humanos (HRM)",
    moduleFico: "Contabilidad Financiera y de Costos (FICO)",
    moduleScm: "Gestión de la Cadena de Suministro (SCM)",
    moduleCrm: "Gestión de Relaciones con Clientes (CRM)",
    moduleBi: "Inteligencia de Negocios (BI & Analytics)",
    referenceStandardsTitle: "Estándares de Referencia",
    contactInfoTitle: "Detalles de Contacto",
    sahoAddressText: "Torre SAHO, Calle 3 de Febrero 120, Distrito 10, Ciudad Ho Chi Minh, Vietnam",
    costDisclaimerTitle: "Descargo de Responsabilidad de Estimación de Costos:",
    costDisclaimerText: "Las cifras de licencias de software, implementación, soporte y TCO (Costo Total de Propiedad) a 3 años proporcionadas por la calculadora en este sitio web son estimaciones de referencia basadas en la investigación de tarifas de ERP del mercado para 2025 - 2026. Los costos reales variarán según la complejidad específica del proceso comercial, informes personalizados, estado de los datos heredados y resultados de un taller de diseño detallado realizado por los especialistas de SAHO ERP.",
    
    missionBadge: "VISIÓN Y MISIÓN",
    visionTitle: "VISIÓN",
    visionStatement: "Convertirse en el ecosistema de gestión empresarial líder en el mundo. Creando un mundo donde cada empresa tenga acceso a sistemas de gestión de clase mundial.",
    missionTitle: "MISIÓN",
    missionStatement: "Acompañar a las empresas en la construcción de una base de gestión moderna, la estandarización de operaciones y el crecimiento desde los primeros pasos hasta la escala global.",
    missionPillar1Title: "Gestión Moderna",
    missionPillar1Desc: "Creación de sistemas de gestión avanzados, digitalización de procesos y optimización de recursos empresariales.",
    missionPillar2Title: "Operaciones Estandarizadas",
    missionPillar2Desc: "Establecer procesos estándar, eliminar desperdicios y acelerar la ejecución del flujo de trabajo.",
    missionPillar3Title: "Escala Global",
    missionPillar3Desc: "Apoyar el crecimiento sostenible de las empresas, desde la escala de startup hasta alturas internacionales.",
    
    pricingTiers: [
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
    ],
    industries: [
      { id: "general", name: "Comercio General y Servicios", multiplier: 1.0, icon: "Briefcase" },
      { id: "retail", name: "Cadena de Tiendas y Comercio Electrónico", multiplier: 1.15, icon: "ShoppingBag" },
      { id: "manufacturing", name: "Fabricación y Procesamiento", multiplier: 1.35, icon: "Factory" },
      { id: "logistics", name: "Transporte y Logística", multiplier: 1.2, icon: "Truck" },
      { id: "healthcare", name: "Hospitales y Atención Médica", multiplier: 1.4, icon: "Heart" },
      { id: "education", name: "Escuelas y Educación", multiplier: 1.1, icon: "GraduationCap" },
      { id: "finance", name: "Finanzas y Banca", multiplier: 1.5, icon: "DollarSign" },
      { id: "conglomerate", name: "Conglomerado Multiactividad", multiplier: 1.45, icon: "Building2" },
    ],
    faqs: [
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
    ],
    comparisonCategories: [
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
    ]
  },
  ja: {
    meta: {
      code: "ja",
      label: "日本語",
      flag: "🇯🇵",
      currency: "JPY"
    },
    tcoCalculator: "TCOシミュレーター",
    pricingPackages: "ERPプラン",
    comparison: "ERP他社比較",
    breakdown: "投資内訳",
    faq: "よくある質問",
    contactBtn: "導入相談・問い合わせ",

    heroBadge: "現実的なERP価格マップ 2025 - 2026",
    heroTitlePart1: "本質的なERP投資：",
    heroTitlePart2: " ライセンスだけではなく、",
    heroTitlePart3: " ソリューションと導入が重要です",
    heroDesc: "多くの企業がソフトウェアのライセンス費用のみに注目して失敗しています。実際、ライセンス費用は総投資額の20%〜40%にすぎません。成否を左右する予算の30%〜50%は「導入と運用」にあります。",
    heroBtnPrimary: "TCOを今すぐ計算",
    heroBtnSecondary: "プランの詳細を見る",
    heroBannerTitle: "標準的なERP予算配分",
    heroBannerSub: "* SAP、NetSuite、Dynamics 365プロジェクトの平均割合。",
    heroBannerHighlight: "SAHOのソリューションは完全に最適化およびパッケージ化されています",
    licenseLabel: "ライセンス 30%",
    implementationLabel: "導入サービス 40%",
    trainingLabel: "トレーニング 15%",
    supportLabel: "運用サポート 15%",
    tco30Title: "ソフトウェアライセンスは予算の約30%を占めます",
    tco40Title: "導入サービスは予算の約40%を占めます",
    tco15Title: "人材トレーニングとデジタル移行は予算の約15%を占めます",
    tcoOngoingTitle: "運用、メンテナンス、アップグレードは予算の約15%を占めます",

    calcTitle: "TCO計画・見積もりツール",
    calcDesc: "3年間の運用における総所有コスト（TCO）をシミュレートします。下のスライダーをドラッグして、適切な予算を予測します。",
    calcSliderUsers: "ユーザー数（Users）",
    calcSelectIndustry: "業種",
    calcSelectComplexity: "プロセスの複雑さ",
    calcComplexityStandard: "標準化されたプロセス（Standard）",
    calcComplexityCustomized: "中程度のカスタマイズ（Customized）",
    calcComplexityTailormade: "高度なオーダーメイド構成（Tailor-made）",
    calcResultsTitle: "見積もり予算配分（3年間）",
    calcResultsNote: "* 市場統計に基づく参照データ。詳細な見積もりについてはお問い合わせください。",
    calcResultsTco: "総TCO（3年間）",
    calcResultsLicense: "ソフトウェアライセンス",
    calcResultsImplementation: "導入・構築サービス",
    calcResultsTraining: "トレーニング＆本番稼働",
    calcResultsSupport: "年間テクニカルサポート",
    calcUsersSuffix: "名",
    calcComplexityMultiplier: "プロセス複雑性係数",
    calcIndustryMultiplier: "業界複雑性係数",
    suggestedSystemLabel: "推奨システム：",
    equivalentToLabel: "対応システム：",
    licenseUnitPriceMonth: "ライセンス単価 / 月",
    totalLicenses36m: "ライセンス総額 (36ヶ月)",
    implementationOneTime: "導入サービス (一括)",
    maintenanceSupport3y: "保守＆サポート (3年間)",
    licenseCostRatio: "ライセンス",
    implementationCostRatio: "導入＆その他",
    sendConfigBtn: "この構成内容で詳細見積もりを依頼する",

    pricingTitle: "標準化されたERPサービスパッケージ",
    pricingDesc: "企業の規模とプロセスの成熟度に基づいて分類。2025年〜2026年の実際の市場価格を参照しています。",
    pricingTarget: "対象となるお客様",
    pricingFeatures: "含まれる主な機能",
    pricingRef: "比較対象システム：",
    pricingSelectBtn: "このプランを選択する",
    pricingRecommendBadge: "推奨",
    currencyUnitUserMonth: "/ ユーザー / 月",
    implementationCostLabel: "導入費用：",

    compBadge: "価格・機能比較マトリクス",
    compTitle: "Saho ERP と他社製品の比較",
    compDesc: "Odoo、NetSuite、SAPに匹敵する国際基準 of 業務機能を備え、ベトナム市場向けに特別に最適化・ローカライズされています。",
    compColFeature: "機能 / 特徴",
    compColOptimal: "最適な選択肢",
    compMobileSwipe: "👉 横にスワイプして比較表全体を表示",
    compLegendAvailable: "標準対応 / 充実",
    compLegendPartial: "一部対応",
    compLegendCustom: "個別カスタマイズ開発が必要 (Custom)",
    compLegendUnsupported: "デフォルト非対応",

    breakdownTitle: "ERPコスト構造：なぜ導入が重要なのか",
    breakdownDesc: "導入の成功は、ERPプロジェクトの中核価値の半分以上を占めます。投資キャッシュフローが効果的に機能する仕組みは以下の通りです。",
    breakdownProcessTitle: "本質的な導入プロセス",
    breakdownProcessSubtitle: "私たちは業務プロセスを納品します。単なるシステムではありません",
    breakdownProcessParagraph: "新しいERPライセンスを購入することは、車を購入することに似ています。導入サービスは、車を安全に走らせるためのエンジンと燃料です。SAHOは、プロジェクトの稼働開始まで責任を持つ一貫したサービスチェーンを提供し、システムの「お蔵入り」リスクを完全に排除します。",
    breakdownLeaderNoteTitle: "経営陣・リーダーへの重要な注意点",
    breakdownLeaderNoteText: "世界中におけるERPプロジェクトの失敗の68%以上は、システム自体ではなく、導入プロセスの標準化不足と教育訓練の不足が原因です。導入にしっかりと投資を行うことが、プロジェクト成功への最大の近道となります。",
    breakdownListTitle: "システム導入費用に含まれる5つの主な業務フェーズ",

    faqTitle: "よくあるご質問",
    faqDesc: "ERPプロジェクトの検討および予算策定時に企業から寄せられる、最も一般的な質問のまとめ。",
    faqClarifications: "よくある質問と解説",

    contactTitle: "導入相談・詳細見積もり依頼",
    contactDesc: "情報を入力してください。SAHOのERPコンサルタントが24営業時間以内にご連絡し、ヒアリングを行います。",
    contactFieldName: "お名前",
    contactPlaceholderName: "例：山田 太郎",
    contactFieldEmail: "勤務先メールアドレス",
    contactPlaceholderEmail: "例：t.yamada@company.com",
    contactFieldPhone: "電話番号",
    contactPlaceholderPhone: "例：090-1234-5678",
    contactFieldCompanySize: "企業規模 (従業員数)",
    contactFieldPlan: "ご興味のあるプラン",
    contactPlanDefault: "プランを選択してください...",
    contactPlanStarter: "スタータープラン (Tier 1)",
    contactPlanGrowth: "グロースプラン (Tier 2)",
    contactPlanEnterprise: "エンタープライズプラン (Tier 3)",
    contactFieldMessage: "詳細なご要望またはご質問 (任意)",
    contactPlaceholderMessage: "例：小売・製造業で従業員150名。在庫管理と会計モジュールの導入を検討中...",
    contactBtnSubmit: "相談・見積もりを依頼する",
    contactBtnSubmitting: "送信中...",
    contactSuccessTitle: "送信が完了しました！",
    contactSuccessDesc: "ご要望が送信されました。担当者より折り返しご連絡いたします。",
    contactSuccessDescText: "ERP構成内容の送信ありがとうございました。SAHOソリューションの専門家が、お電話またはメールにて、2営業時間内に詳細な見積もりをご連絡いたします。",
    contactSuccessClose: "閉じる",
    contactCreateNewRequest: "新しいリクエストを作成する",
    contactRegisterQuote: "導入相談・詳細見積もり依頼",
    contactCompanyLabel: "企業名・団体名",
    contactCompanyPlaceholder: "株式会社SAHO",
    contactUsersLabel: "想定ユーザー数",
    contactIndustryLabel: "業種",
    errorGeneric: "エラーが発生しました。後でもう一度お試しください。",
    errorNetwork: "サーバーに接続できませんでした。ネットワーク接続を確認してください。",

    footerDesc: "SAHO ERPは、ベトナムにおける主要な独立系コンサルティング会社であり、企業資源計画（ERP）ソフトウェア導入サービスのプロバイダーです。",
    footerLinksQuick: "クイックリンク",
    footerLinksLegal: "法的情報・コンプライアンス",
    footerLinkPrivacy: "プライバシーポリシー",
    footerLinkTerms: "利用規約",
    footerCopyright: "© 2026 SAHO ERP. All rights reserved.",
    marketPositioningLabel: "市場ポジショニング：2025 - 2026",
    versionLabel: "バージョン：v1.2 (App Router)",
    systemModulesTitle: "システムモジュール",
    moduleHrm: "人事管理 (HRM)",
    moduleFico: "財務・管理会計 (FICO)",
    moduleScm: "サプライチェーン管理 (SCM)",
    moduleCrm: "顧客関係管理 (CRM)",
    moduleBi: "ビジネスインテリジェンス (BI & 分析)",
    referenceStandardsTitle: "比較対象システム",
    contactInfoTitle: "連絡先情報",
    sahoAddressText: "SAHOタワー, 3月2日通り120号, 10区, ホーチミン市, ベトナム",
    costDisclaimerTitle: "コスト見積もり免責事項：",
    costDisclaimerText: "本ウェブサイト上のシミュレーターによって提供されるソフトウェアライセンス、導入、サポート、および3年間のTCO（総所有コスト）の数値は、2025〜2026年の市場ERPレートの調査に基づく参照予測です。実際のコストは、特定の業務プロセスの複雑さ、カスタムレポート、レガシーデータの状態、およびSAHO ERPスペシャリストが実施する詳細なブループレンティングワークショップの結果によって異なります。",
    
    missionBadge: "ビジョン ＆ ミッション",
    visionTitle: "ビジョン",
    visionStatement: "世界をリードする企業管理エコシステムになること。すべての企業が世界クラスの管理システムにアクセスできる世界を創造すること。",
    missionTitle: "ミッション",
    missionStatement: "企業の現代的な管理基盤の構築、業務の標準化、および初期のステップからグローバル規模への成長をサポートすること。",
    missionPillar1Title: "現代的な管理",
    missionPillar1Desc: "高度な管理システムの構築、プロセスのデジタル化、および企業リソースの最適化。",
    missionPillar2Title: "標準化された業務",
    missionPillar2Desc: "標準プロセスの確立、無駄の排除、およびワークフロー実行 của 高速化。",
    missionPillar3Title: "グローバル成長",
    missionPillar3Desc: "スタートアップ規模から国際的なレベルまで、企業の持続可能な成長をサポート。",
    
    pricingTiers: [
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
          "HR、FA, SC、CRの高度かつ包括的な機能",
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
          "24/7専任オンサイトサポートチーム"
        ],
        referenceSystems: "SAP S/4HANA / Oracle Cloud ERP / Infor",
      }
    ],
    industries: [
      { id: "general", name: "一般商取引・サービス業", multiplier: 1.0, icon: "Briefcase" },
      { id: "retail", name: "小売チェーン・EC業", multiplier: 1.15, icon: "ShoppingBag" },
      { id: "manufacturing", name: "製造・加工業", multiplier: 1.35, icon: "Factory" },
      { id: "logistics", name: "運輸・物流業", multiplier: 1.2, icon: "Truck" },
      { id: "healthcare", name: "病院・医療業", multiplier: 1.4, icon: "Heart" },
      { id: "education", name: "学校・教育業", multiplier: 1.1, icon: "GraduationCap" },
      { id: "finance", name: "金融・銀行業", multiplier: 1.5, icon: "DollarSign" },
      { id: "conglomerate", name: "多角化コングロマリット", multiplier: 1.45, icon: "Building2" },
    ],
    faqs: [
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
        answer: "スターター（Tier 1）の場合、標準プロセスをそのまま適用するため、導入は迅速で2〜4ヶ月かかります。グロース（Tier 2）は、モジュールや自動化の要件に応じて4〜8ヶ月必要です。大企業向けのエンタープライズ（Tier 3）は、多国籍プロセスと多数의システム連携のため、8〜18ヶ月かかります。"
      },
      {
        question: "コストを削減するために自社で導入することはできますか？",
        answer: "非常に困難であり、リスクが極めて高いです。ERPプロジェクトには、深い業務知識、プロジェクト管理の経験、および技術的なカスタマイズスキルが必要です。自社導入は、データベース構造のエラー、トレーニング不足による現場の反発、プロジェクトの遅延などを招きやすく、稼働に至らないケースが多くあります。専門のパートナーチームと協力することが、計画通りの稼働を保証します。"
      }
    ],
    comparisonCategories: [
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
    ]
  }
};

export const getPricingTiers = (lang: string): PricingTier[] => {
  return TRANSLATIONS[lang]?.pricingTiers || TRANSLATIONS["en"].pricingTiers;
};

export const getIndustries = (lang: string): Industry[] => {
  return TRANSLATIONS[lang]?.industries || TRANSLATIONS["en"].industries;
};

export const getFaqs = (lang: string): FAQ[] => {
  return TRANSLATIONS[lang]?.faqs || TRANSLATIONS["en"].faqs;
};

export const getComparisonCategories = (lang: string): ComparisonCategory[] => {
  return TRANSLATIONS[lang]?.comparisonCategories || TRANSLATIONS["en"].comparisonCategories;
};
