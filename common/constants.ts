import { TRANSLATIONS } from "./translations";
import { TierFeatureCategory, PricingTier } from "./types";
export * from "./types";

// ==================== VIETNAMESE (VI) ====================
export const TIER_1_DETAILED_CATEGORIES_VI: TierFeatureCategory[] = [
  {
    categoryName: "Quản lý Nhân sự (HR)",
    items: [
      { name: "Hồ sơ nhân viên (Employee Profile)", desc: "Quản lý hợp đồng, sơ yếu lý lịch & quá trình công tác" },
      { name: "Sơ đồ tổ chức (Org Chart)", desc: "Cấu trúc phòng ban & phân cấp nhân sự trực quan" },
      { name: "Quản lý Tuyển dụng (Recruitment)", desc: "Đăng tuyển, tiếp nhận hồ sơ & theo dõi ứng viên" },
      { name: "Hội nhập nhân sự (Onboarding)", desc: "Quy trình đón nhận nhân viên mới & bàn giao công việc" },
      { name: "Quản lý Nghỉ phép (Leave)", desc: "Theo dõi quỹ phép, nộp & phê duyệt đơn nghỉ phép" },
      { name: "Lịch làm việc (Schedule)", desc: "Xếp ca & quản lý lịch làm việc tiêu chuẩn" },
    ],
  },
  {
    categoryName: "Tài chính & Kế toán (FA)",
    items: [
      { name: "Dashboard Doanh thu / Chi phí", desc: "Biểu đồ trực quan hóa dòng tiền & lợi nhuận real-time" },
      { name: "Kế toán tổng hợp (General Ledger)", desc: "Quản lý sổ cái tài khoản & định khoản kế toán" },
      { name: "Phải thu khách hàng (AR)", desc: "Theo dõi công nợ bán hàng & lịch thanh toán" },
      { name: "Phải trả nhà cung cấp (AP)", desc: "Quản lý hóa đơn mua hàng & lịch trình thanh toán" },
      { name: "Kế toán cơ bản (Basic Accounting)", desc: "Hạch toán các nghiệp vụ kinh tế phát sinh gốc" },
      { name: "Quản lý Tiền mặt / Ngân hàng", desc: "Quản lý thu chi quỹ tiền mặt & tiền gửi ngân hàng" },
      { name: "Sổ nhật ký chung (Journal)", desc: "Ghi nhận chứng từ kế toán chi tiết theo ngày" },
      { name: "Báo cáo tài chính cơ bản", desc: "Lập bảng cân đối kế toán & báo cáo KQKD" },
    ],
  },
  {
    categoryName: "Chuỗi cung ứng & Kho (SC)",
    items: [
      { name: "Quản lý Sản phẩm (Product)", desc: "Danh mục hàng hóa, vật tư & mã SKU chuẩn" },
      { name: "Nhóm danh mục (Category)", desc: "Phân loại hàng hóa & quy chuẩn dữ liệu sản phẩm" },
      { name: "Quản lý Nhà cung cấp (Supplier)", desc: "Lưu trữ thông tin & lịch sử giao dịch với NCC" },
      { name: "Hồ sơ Khách hàng (Customer)", desc: "Quản lý danh sách khách hàng & thông tin liên hệ" },
      { name: "Quản lý Mua hàng (Purchase)", desc: "Tạo đơn mua hàng & theo dõi tình trạng đơn" },
      { name: "Quản lý Bán hàng (Sales)", desc: "Tạo đơn bán, chứng từ giao hàng & hóa đơn" },
      { name: "Quản lý Tồn kho (Inventory)", desc: "Theo dõi nhập - xuất - tồn kho tức thì" },
      { name: "Nhập / Xuất kho (Stock In/Out)", desc: "Lập phiếu nhập kho, phiếu xuất kho & kiểm kê" },
      { name: "Quản lý Kho tiêu chuẩn", desc: "Sắp xếp kho & vị trí lưu trữ cơ bản" },
    ],
  },
  {
    categoryName: "Quản lý Khách hàng (CRM)",
    items: [
      { name: "Hồ sơ Khách hàng (CRM)", desc: "Tổng hợp lịch sử giao dịch & tương tác với khách" },
      { name: "Danh bạ liên hệ (Contact)", desc: "Lưu trữ thông tin đại diện & mối quan hệ" },
      { name: "Khách hàng tiềm năng (Lead)", desc: "Thu thập & phân loại thông tin tiềm năng" },
      { name: "Cơ hội kinh doanh (Opportunity)", desc: "Theo dõi tiến trình bán hàng & khả năng chốt" },
      { name: "Báo giá tự động (Quotation)", desc: "Tạo & gửi báo giá mẫu chuẩn chuyên nghiệp" },
      { name: "Quy trình bán hàng (Pipeline)", desc: "Trực quan hóa phễu bán hàng theo giai đoạn" },
    ],
  },
  {
    categoryName: "Hệ thống & Phân quyền (System)",
    items: [
      { name: "Quản lý Người dùng (User)", desc: "Tạo tài khoản & quản lý quyền truy cập" },
      { name: "Phân quyền vai trò (Role Permission)", desc: "Phân quyền chi tiết theo vị trí & chức năng" },
      { name: "Thông báo hệ thống (Notification)", desc: "Cảnh báo phê duyệt & nhắc nhở công việc" },
      { name: "Dashboard điều hành", desc: "Giao diện tổng quan chỉ số hoạt động chính" },
      { name: "Nhật ký hệ thống (Audit Log)", desc: "Lưu vết các thao tác thay đổi dữ liệu cơ bản" },
      { name: "Quản lý Tệp đính kèm (File)", desc: "Lưu trữ chứng từ, hợp đồng & tệp tài liệu" },
      { name: "Email hệ thống (Email)", desc: "Gửi thông báo & xác nhận tự động qua email" },
    ],
  },
];

export const TIER_2_DETAILED_CATEGORIES_VI: TierFeatureCategory[] = [
  {
    categoryName: "Quản trị Nhân sự Nâng cao (HR Advanced)",
    items: [
      { name: "Chấm công tự động (Attendance)", desc: "Tích hợp máy chấm công khuôn mặt, vân tay & GPS" },
      { name: "Bảng theo dõi giờ làm (Timesheet)", desc: "Ghi nhận giờ làm việc chi tiết theo dự án & phòng ban" },
      { name: "Tính lương tự động (Payroll)", desc: "Tự động tính lương, bảo hiểm & khấu trừ thuế TNCN" },
      { name: "Quản lý Ca làm việc (Shift)", desc: "Xếp ca linh hoạt, quản lý xoay ca & đổi ca làm" },
      { name: "Tính tiền tăng ca (Overtime)", desc: "Tự động tính lương tăng ca theo hệ số quy định" },
      { name: "Quản lý KPI / OKR", desc: "Thiết lập, giao chỉ tiêu & theo dõi mục tiêu phòng ban" },
      { name: "Đánh giá hiệu suất (Performance)", desc: "Đánh giá định kỳ 360 độ cho cán bộ nhân viên" },
      { name: "Đào tạo nhân sự (Training)", desc: "Lập kế hoạch khóa học & theo dõi lộ trình phát triển" },
      { name: "Quản lý Cấp phát tài sản", desc: "Theo dõi thiết bị, máy tính & thu hồi tài sản" },
      { name: "Quản lý Hợp đồng lao động", desc: "Tự động cảnh báo gia hạn & lưu phụ lục hợp đồng" },
      { name: "Thanh toán chi phí (Expense Claim)", desc: "Nộp & duyệt chi phí công tác, công tác phí online" },
    ],
  },
  {
    categoryName: "Tài chính & Quản trị Nâng cao (Finance Advanced)",
    items: [
      { name: "Quản lý Ngân sách (Budget)", desc: "Lập, phân bổ & lập cảnh báo vượt ngân sách" },
      { name: "Trung tâm chi phí (Cost Center)", desc: "Ghi nhận & phân bổ chi phí theo bộ phận/dự án" },
      { name: "Tài sản cố định (Fixed Asset)", desc: "Quản lý chi tiết danh mục tài sản & biến động" },
      { name: "Tính khấu hao tự động (Depreciation)", desc: "Khấu hao tài sản theo chuẩn mực kế toán Việt Nam" },
      { name: "Quản lý Thuế (Tax Engine)", desc: "Tự động lập tờ khai thuế GTGT, TNDN & TNCN" },
      { name: "Đa sổ kế toán (Multi Ledger)", desc: "Quản lý song song sổ sách tài chính & sổ quản trị" },
      { name: "Đối soát Ngân hàng (Bank Recon)", desc: "Khớp tự động sổ quỹ với sao kê ngân hàng" },
      { name: "Kế hoạch tài chính (Planning)", desc: "Dự báo dòng tiền & vốn lưu động doanh nghiệp" },
      { name: "Phân tích Dòng tiền (Cash Flow)", desc: "Báo cáo chi tiết dòng tiền vào - ra hàng ngày" },
      { name: "Trung tâm lợi nhuận (Profit Center)", desc: "Đánh giá hiệu quả kinh doanh theo đơn vị" },
    ],
  },
  {
    categoryName: "Chuỗi cung ứng Nâng cao (Supply Chain Advanced)",
    items: [
      { name: "Mua hàng nâng cao (Procurement)", desc: "Quy trình đàm phán, so sánh giá & duyệt mua sắm" },
      { name: "Đánh giá Nhà cung cấp (Vendor)", desc: "Chấm điểm uy tín, giá cả & tiến độ giao hàng" },
      { name: "Quản lý Kho đa chi nhánh", desc: "Quản lý chuỗi kho hàng & điều chuyển nội bộ" },
      { name: "Quét mã Barcode / QR Code", desc: "Nhập xuất kho siêu tốc bằng súng quét mã vạch" },
      { name: "Quản lý Lô hàng (Lot & Batch)", desc: "Theo dõi hạn sử dụng & quản lý nguồn gốc lô" },
      { name: "Quản lý Số Serial (Serial)", desc: "Theo dõi đích danh sản phẩm & lịch sử bảo hành" },
      { name: "Điều chuyển kho (Transfer)", desc: "Phiếu điều chuyển hàng hóa giữa các chi nhánh" },
      { name: "Đổi trả hàng mua (Return)", desc: "Xử lý thủ tục trả hàng nhà cung cấp & hoàn tiền" },
      { name: "Lập kế hoạch vật tư (Basic MRP)", desc: "Tính toán nhu cầu nguyên vật liệu cho sản xuất" },
      { name: "Định mức sản phẩm (BOM)", desc: "Cấu hình linh kiện & công đoạn sản xuất sản phẩm" },
      { name: "Yêu cầu mua hàng (Purchase Request)", desc: "Duyệt đề xuất mua sắm thiết bị nội bộ" },
    ],
  },
  {
    categoryName: "Quản trị Khách hàng Nâng cao (CRM Advanced)",
    items: [
      { name: "Chiến dịch Marketing (Campaign)", desc: "Quản lý ngân sách, kênh tiếp thị & đo lường ROI" },
      { name: "Chăm sóc khách hàng (Service)", desc: "Tiếp nhận & xử lý yêu cầu phản hồi của khách hàng" },
      { name: "Hệ thống Vé hỗ trợ (Ticket)", desc: "Phân công xử lý sự cố & theo dõi tiến độ" },
      { name: "Cam kết chất lượng (SLA)", desc: "Đo lường thời gian phản hồi & giải quyết công việc" },
      { name: "Tự động hóa Email Marketing", desc: "Tự động gửi email chăm sóc & khuyến mãi theo kịch bản" },
      { name: "Dự báo doanh số (Sales Forecast)", desc: "Dự báo doanh thu chính xác theo tiến độ hợp đồng" },
      { name: "Phân khúc khách hàng", desc: "Phân nhóm khách hàng theo giá trị & thói quen mua" },
      { name: "Chương trình Thân thiết (Loyalty)", desc: "Tích điểm, phân hạng thành viên & đổi quà" },
    ],
  },
  {
    categoryName: "Quy trình & Tự động hóa (Workflow)",
    items: [
      { name: "Thiết kế Quy trình (Workflow Builder)", desc: "Tạo sơ đồ phê duyệt online kéo thả dễ dàng" },
      { name: "Quy trình Phê duyệt (Approval)", desc: "Phê duyệt tờ trình, chi phí & hợp đồng tự động" },
      { name: "Duyệt nhiều cấp (Multi-level)", desc: "Tự động chuyển cấp duyệt theo hạn mức ngân sách" },
      { name: "Quy tắc thông báo (Rules)", desc: "Gửi cảnh báo tức thì qua Zalo, Email hoặc App" },
      { name: "Tác vụ định kỳ (Scheduled Job)", desc: "Tự động gửi báo cáo & chốt số liệu hàng đêm" },
    ],
  },
  {
    categoryName: "Quản lý Đa công ty (Multi-Company)",
    items: [
      { name: "Mô hình Đa công ty (Multi Company)", desc: "Quản lý nhiều pháp nhân độc lập trên 1 hệ thống" },
      { name: "Quản lý Đa chi nhánh (Multi Branch)", desc: "Phân quyền vận hành & báo cáo tổng hợp chi nhánh" },
      { name: "Hệ thống Đa kho hàng", desc: "Đồng bộ dữ liệu hàng hóa giữa các kho tập trung" },
    ],
  },
  {
    categoryName: "Tích hợp hệ thống (Integration)",
    items: [
      { name: "Cổng kết nối REST API", desc: "Tích hợp linh hoạt với Website, App & POS ngoài" },
      { name: "Webhook sự kiện real-time", desc: "Đồng bộ dữ liệu tức thì khi có biến động" },
      { name: "Xác thực bảo mật OAuth 2.0", desc: "Bảo mật kết nối dữ liệu giữa các phần mềm" },
      { name: "Nhập / Xuất dữ liệu Excel", desc: "Import/Export hàng loạt danh mục siêu tốc" },
      { name: "Tài liệu chuẩn OpenAPI", desc: "Tài liệu kỹ thuật mở giúp lập trình viên kết nối dễ dàng" },
    ],
  },
];

export const TIER_3_DETAILED_CATEGORIES_VI: TierFeatureCategory[] = [
  {
    categoryName: "HR Doanh nghiệp lớn (Enterprise HR)",
    items: [
      { name: "Quản trị Nhân tài (Talent Management)", desc: "Phát triển nhân sự chủ chốt & chuyên gia hàng đầu" },
      { name: "Quy hoạch Kế thừa (Succession)", desc: "Xây dựng lộ trình thăng tiến cán bộ quản lý" },
      { name: "Khung năng lực (Competency)", desc: "Đánh giá định lượng năng lực theo vị trí công việc" },
      { name: "Hoạch định định biên (Workforce)", desc: "Dự báo nhu cầu nhân sự & chi phí nhân công dài hạn" },
      { name: "Tuyển dụng bằng AI (Recruitment AI)", desc: "AI bóc tách CV, tự động xếp hạng & đọc phỏng vấn" },
      { name: "Global Payroll Engine", desc: "Xử lý bảng lương quy mô hàng vạn nhân viên siêu tốc" },
      { name: "HR Toàn cầu (Global HR)", desc: "Quản lý nhân sự làm việc tại nhiều quốc gia khác nhau" },
    ],
  },
  {
    categoryName: "Tài chính Tập đoàn (Enterprise Finance)",
    items: [
      { name: "Hợp nhất Báo cáo Tài chính", desc: "Tự động hợp nhất báo cáo tài chính toàn tập đoàn" },
      { name: "Quản lý Vốn & Quỹ (Treasury)", desc: "Tối ưu hóa dòng tiền, vay nợ & đầu tư tài chính" },
      { name: "Dự báo ngân sách (Budget Forecast)", desc: "Mô phỏng kịch bản biến động tài chính tương lai" },
      { name: "Ghi nhận Doanh thu (Revenue)", desc: "Tuân thủ chuẩn mực ghi nhận doanh thu phức tạp" },
      { name: "Đa tiền tệ (Multi Currency)", desc: "Quy đổi tỷ giá tự động & xử lý chênh lệch tỷ giá" },
      { name: "Đa quốc gia (Multi Country)", desc: "Tuân thủ luật thuế & chuẩn mực kế toán từng nước" },
      { name: "Giá chuyển nhượng (Transfer Pricing)", desc: "Quản lý giá giao dịch liên kết giữa các công ty con" },
      { name: "Chuẩn IFRS & GAAP", desc: "Xuất báo cáo tài chính đạt chuẩn kiểm toán quốc tế" },
      { name: "Công cụ tính Thuế (Tax Engine)", desc: "Tự động tính nghĩa vụ thuế cho mô hình tập đoàn" },
      { name: "Quản trị Rủi ro (Risk Management)", desc: "Cảnh báo rủi ro tài chính, thanh khoản & vận hành" },
      { name: "Kiểm toán nội bộ (Internal Audit)", desc: "Kiểm tra vết dữ liệu & giám sát tuân thủ quy trình" },
    ],
  },
  {
    categoryName: "Chuỗi cung ứng Tập đoàn (Enterprise SC)",
    items: [
      { name: "Hoạch định MRP cao cấp (Advanced MRP)", desc: "Tối ưu hóa vật tư & tiến độ sản xuất đa nhà máy" },
      { name: "Xếp lịch sản xuất cao cấp (APS)", desc: "Tự động xếp lịch máy móc & nhân công tối ưu" },
      { name: "Tích hợp Nhà máy (MES Integration)", desc: "Kết nối hệ thống điều hành sản xuất MES nhà máy" },
      { name: "Quản lý Chất lượng (Quality Control)", desc: "Kiểm soát chất lượng nguyên liệu & thành phẩm (QA/QC)" },
      { name: "Bảo trì Thiết bị (EAM/Maintenance)", desc: "Quản lý vòng đời máy móc & lập lịch bảo trì định kỳ" },
      { name: "Quản lý Vận tải (TMS)", desc: "Tối ưu tuyến đường giao hàng & quản lý chi phí xe" },
      { name: "Quản lý Kho thông minh (WMS)", desc: "Tự động gợi ý vị trí lưu kho & lộ trình lấy hàng" },
      { name: "Dự báo Nhu cầu (Demand Planning)", desc: "AI phân tích & dự báo nhu cầu thị trường" },
      { name: "Kế hoạch Cung ứng (Supply Planning)", desc: "Cân đối nguồn cung nguyên liệu & tồn kho an toàn" },
    ],
  },
  {
    categoryName: "CRM Doanh nghiệp lớn (Enterprise CRM)",
    items: [
      { name: "Báo giá phức tạp (CPQ)", desc: "Tính toán cấu hình giá may đo cho hợp đồng quy mô lớn" },
      { name: "Kênh bán Hợp nhất (Omnichannel)", desc: "Đồng bộ điểm bán, Ecommerce, App & Social" },
      { name: "Chân dung Khách hàng 360", desc: "Tổng hợp toàn bộ lịch sử tương tác & hành vi khách" },
      { name: "Gợi ý Bán hàng AI (Recommendation)", desc: "Gợi ý sản phẩm bán thêm & bán chéo tự động" },
      { name: "Hành trình Khách hàng (Journey)", desc: "Thiết kế & theo dõi từng điểm chạm trải nghiệm" },
      { name: "Tổng đài Hợp nhất (Contact Center)", desc: "Tích hợp tổng đài VoIP, Call Center & Livechat" },
    ],
  },
  {
    categoryName: "Trí tuệ nhân tạo (AI Engine)",
    items: [
      { name: "Trợ lý Ảo AI (AI Assistant)", desc: "Hỗ trợ tra cứu dữ liệu & thực hiện lệnh bằng giọng nói/text" },
      { name: "Trò chuyện AI (AI Chatbot)", desc: "Hỏi đáp dữ liệu doanh nghiệp thông minh 24/7" },
      { name: "Phân tích Báo cáo AI (AI Report)", desc: "AI tự động phân tích & viết tóm tắt báo cáo kinh doanh" },
      { name: "Dự báo AI (AI Forecast)", desc: "Dự báo xu hướng thị trường, doanh số & chi phí" },
      { name: "Số hóa chứng từ (AI OCR)", desc: "Tự động đọc & bóc tách dữ liệu từ hóa đơn, chứng từ" },
      { name: "Xử lý Hóa đơn AI (AI Invoice)", desc: "Khớp dữ liệu hóa đơn mua hàng với đơn đặt hàng tự động" },
      { name: "AI Tuyển dụng (AI Recruitment)", desc: "Sàng lọc CV & xếp hạng ứng viên tiềm năng" },
      { name: "AI Dự báo Bán hàng (Sales Prediction)", desc: "Dự đoán tỷ lệ thành công của từng cơ hội bán hàng" },
      { name: "AI Dự báo Tồn kho (Inventory AI)", desc: "Cảnh báo nguy cơ hết hàng & tối ưu lượng tồn kho" },
      { name: "Engine Gợi ý Cá nhân hóa", desc: "Tự động cá nhân hóa trải nghiệm theo thói quen người dùng" },
    ],
  },
  {
    categoryName: "Báo cáo Thông minh (BI)",
    items: [
      { name: "Kho Dữ liệu Tập trung (Data Warehouse)", desc: "Lưu trữ & chuẩn hóa Big Data cho toàn tập đoàn" },
      { name: "Phân tích đa chiều (OLAP)", desc: "Truy vấn dữ liệu lớn tức thì theo nhiều chiều" },
      { name: "Báo cáo Lãnh đạo (Executive Dashboard)", desc: "Giao diện chỉ số điều hành trực quan cho Ban Giám đốc" },
      { name: "Phân tích Dự báo (Predictive Analytics)", desc: "Mô hình học máy dự báo kết quả kinh doanh" },
      { name: "Trực quan hóa Dữ liệu (Visualization)", desc: "Hệ thống biểu đồ tương tác & heatmap thông minh" },
      { name: "Báo cáo Tùy chỉnh (Custom BI)", desc: "Tự thiết kế báo cáo theo yêu cầu riêng dễ dàng" },
    ],
  },
  {
    categoryName: "Tuân thủ & Bảo mật (Compliance)",
    items: [
      { name: "Chuẩn ISO (ISO Compliance)", desc: "Quản lý quy trình tuân thủ tiêu chuẩn ISO 9001/27001" },
      { name: "Tuân thủ SOX (Sarbanes-Oxley)", desc: "Kiểm soát nội bộ chặt chẽ cho công ty niêm yết" },
      { name: "Bảo vệ Dữ liệu GDPR & PDPA", desc: "Cam kết bảo mật dữ liệu thông tin cá nhân quốc tế" },
      { name: "Nhật ký Truy vết (Audit Trail)", desc: "Ghi vết mọi lịch sử chỉnh sửa & thao tác dữ liệu" },
      { name: "Chữ ký Điện tử (E-Signature)", desc: "Ký hợp đồng & duyệt văn bản pháp lý online" },
      { name: "Chính sách Lưu trữ (Retention)", desc: "Tự động lưu trữ & hủy dữ liệu theo quy định pháp luật" },
    ],
  },
  {
    categoryName: "Nền tảng Doanh nghiệp (Enterprise Platform)",
    items: [
      { name: "Quy trình Low-code (Low-code Workflow)", desc: "Xây dựng ứng dụng nội bộ nhanh không cần code" },
      { name: "Động cơ Quy tắc (Business Rule Engine)", desc: "Tự cấu hình quy tắc tính giá & chính sách chiết khấu" },
      { name: "Thiết kế Biểu mẫu (Form Builder)", desc: "Tạo mẫu nhập liệu tùy biến linh hoạt" },
      { name: "Thiết kế Báo cáo (Report Designer)", desc: "Tùy chỉnh mẫu in & mẫu xuất PDF chuyên nghiệp" },
      { name: "Bộ công cụ SDK", desc: "Cung cấp thư viện mở rộng cho lập trình viên nội bộ" },
      { name: "Chợ Ứng dụng (Marketplace)", desc: "Cài đặt & tích hợp thêm các tiện ích mở rộng" },
      { name: "Hệ thống Plugin & Extension", desc: "Mở rộng tính năng riêng theo nhu cầu doanh nghiệp" },
      { name: "Đa ngôn ngữ / Đa tiền tệ / Đa quốc gia", desc: "Hỗ trợ vận hành toàn cầu chuẩn hóa" },
      { name: "Đăng nhập tập trung (SSO / LDAP / AD)", desc: "Đồng bộ tài khoản doanh nghiệp an toàn" },
      { name: "Sẵn sàng cao & Dự phòng (HA & DR)", desc: "Đảm bảo hệ thống uptime 99.99% & khôi phục thảm họa" },
      { name: "Triển khai Cụm Máy chủ (Cluster)", desc: "Mở rộng hạ tầng chịu tải lớn không giới hạn" },
    ],
  },
];


// ==================== ENGLISH (EN) ====================
export const TIER_1_DETAILED_CATEGORIES_EN: TierFeatureCategory[] = [
  {
    categoryName: "Human Resources (HR)",
    items: [
      { name: "Employee Profile", desc: "Manage contracts, personal records & employment history" },
      { name: "Organization Chart", desc: "Visual department structure & position hierarchy" },
      { name: "Recruitment Management", desc: "Job posting, candidate tracking & resume filtering" },
      { name: "Onboarding Workflow", desc: "New hire orientation & task handover workflows" },
      { name: "Leave Management", desc: "Leave balance tracking & automated approvals" },
      { name: "Working Schedule", desc: "Shift scheduling & standard work hours management" },
    ],
  },
  {
    categoryName: "Finance & Accounting (FA)",
    items: [
      { name: "Revenue & Cost Dashboard", desc: "Real-time cash flow & profit margin visualization" },
      { name: "General Ledger (GL)", desc: "Chart of accounts & journal entry posting" },
      { name: "Accounts Receivable (AR)", desc: "Customer invoices & payment schedule tracking" },
      { name: "Accounts Payable (AP)", desc: "Vendor bills & disbursement schedule management" },
      { name: "Basic Accounting", desc: "Standard bookkeeping & financial transaction logs" },
      { name: "Cash & Bank Management", desc: "Petty cash fund & bank account reconciliation" },
      { name: "General Journal", desc: "Daily financial transaction posting" },
      { name: "Financial Statements", desc: "Balance sheet & income statement generation" },
    ],
  },
  {
    categoryName: "Supply Chain & Warehouse (SC)",
    items: [
      { name: "Product Management", desc: "Item catalog, materials & SKU standards" },
      { name: "Category Classification", desc: "Product grouping & data standardization" },
      { name: "Supplier Management", desc: "Vendor records & transaction history" },
      { name: "Customer Directory", desc: "Client accounts & contact information" },
      { name: "Purchase Orders", desc: "PO creation & delivery tracking" },
      { name: "Sales Orders", desc: "SO management, delivery notes & invoices" },
      { name: "Inventory Management", desc: "Real-time stock level monitoring" },
      { name: "Stock In / Out", desc: "Goods receipt, dispatch notes & stocktaking" },
      { name: "Basic Warehouse", desc: "Bin location & storage rack organization" },
    ],
  },
  {
    categoryName: "Customer Relationship (CRM)",
    items: [
      { name: "Customer 360", desc: "Centralized customer interaction history" },
      { name: "Contact Management", desc: "Key stakeholder records & communication logs" },
      { name: "Lead Management", desc: "Prospect capture & qualification funnel" },
      { name: "Opportunity Tracking", desc: "Sales stage progression & deal probability" },
      { name: "Quotation Builder", desc: "Standardized price quotes generation" },
      { name: "Sales Pipeline", desc: "Visual sales funnel management" },
    ],
  },
  {
    categoryName: "System & Security",
    items: [
      { name: "User Management", desc: "Account provisioning & access control" },
      { name: "Role Permissions", desc: "Granular role-based security permissions" },
      { name: "System Notifications", desc: "Approval alerts & task reminders" },
      { name: "Executive Dashboard", desc: "Central operational KPIs view" },
      { name: "Audit Log", desc: "Basic data modification history tracking" },
      { name: "File Attachments", desc: "Digital document & contract storage" },
      { name: "Email System", desc: "Automated email notifications & receipts" },
    ],
  },
];

export const TIER_2_DETAILED_CATEGORIES_EN: TierFeatureCategory[] = [
  {
    categoryName: "HR Advanced",
    items: [
      { name: "Automated Attendance", desc: "Biometric, facial recognition & GPS attendance integration" },
      { name: "Timesheet Tracking", desc: "Project-based work hour logging & department allocations" },
      { name: "Automated Payroll", desc: "Salary calculation, insurance deductions & tax processing" },
      { name: "Shift Management", desc: "Flexible shift rosters & rotation scheduling" },
      { name: "Overtime Calculation", desc: "Automated OT rate multipliers & approvals" },
      { name: "KPI & OKR Tracker", desc: "Department goals alignment & progress tracking" },
      { name: "Performance Review", desc: "360-degree periodic employee evaluations" },
      { name: "Training & Development", desc: "Course planning & career development paths" },
      { name: "Asset Assignment", desc: "IT equipment tracking & asset handovers" },
      { name: "Employment Contracts", desc: "Contract renewal alerts & addendum management" },
      { name: "Expense Claims", desc: "Travel expense submission & online approvals" },
    ],
  },
  {
    categoryName: "Finance Advanced",
    items: [
      { name: "Budget Management", desc: "Departmental budget allocation & threshold alerts" },
      { name: "Cost Centers", desc: "Cost allocation & project expense tracking" },
      { name: "Fixed Assets", desc: "Asset cataloging & lifecycle management" },
      { name: "Automated Depreciation", desc: "Asset depreciation schedules & journal entries" },
      { name: "Tax Engine", desc: "Automated VAT, corporate & income tax filings" },
      { name: "Multi-Ledger", desc: "Parallel financial & management accounting ledgers" },
      { name: "Bank Reconciliation", desc: "Automated bank statement matching & reconciliation" },
      { name: "Financial Planning", desc: "Cash flow forecasting & working capital planning" },
      { name: "Cash Flow Analytics", desc: "Inflow & outflow cash breakdown reports" },
      { name: "Profit Centers", desc: "Business unit profitability evaluation" },
    ],
  },
  {
    categoryName: "Supply Chain Advanced",
    items: [
      { name: "Advanced Procurement", desc: "Vendor bidding, price comparison & approval workflows" },
      { name: "Vendor Management", desc: "Supplier performance rating & delivery SLA tracking" },
      { name: "Multi-Warehouse", desc: "Multi-location inventory tracking & inter-warehouse transfers" },
      { name: "Barcode & QR Scanning", desc: "High-speed mobile barcode scanning for inventory operations" },
      { name: "Lot & Batch Tracking", desc: "Expiry date monitoring & batch traceability" },
      { name: "Serial Number Tracking", desc: "Item-level warranty & serial number history" },
      { name: "Inter-Warehouse Transfer", desc: "Branch transfer notes & stock transit tracking" },
      { name: "Purchase Returns", desc: "Vendor return processing & credit notes" },
      { name: "Basic MRP", desc: "Bill of materials calculation for production needs" },
      { name: "Bill of Materials (BOM)", desc: "Multi-level BOM engineering & component breakdown" },
      { name: "Purchase Request", desc: "Internal requisition submission & approvals" },
    ],
  },
  {
    categoryName: "CRM Advanced",
    items: [
      { name: "Marketing Campaigns", desc: "Campaign budget management & ROI analytics" },
      { name: "Customer Service", desc: "Inquiry handling & customer feedback processing" },
      { name: "Ticket System", desc: "Support ticket routing, assignment & resolution" },
      { name: "Service Level Agreement (SLA)", desc: "Response & resolution SLA compliance tracking" },
      { name: "Email Automation", desc: "Drip campaigns & automated customer notifications" },
      { name: "Sales Forecasting", desc: "Pipeline-based revenue projection & trend analysis" },
      { name: "Customer Segmentation", desc: "RFM customer grouping & behavioral profiling" },
      { name: "Loyalty Program", desc: "Points, rewards & membership tier management" },
    ],
  },
  {
    categoryName: "Workflow Automation",
    items: [
      { name: "Workflow Builder", desc: "Drag-and-drop approval flow designer" },
      { name: "Approval Workflows", desc: "Automated multi-level document & budget approvals" },
      { name: "Multi-level Approvals", desc: "Threshold-based approval delegation" },
      { name: "Notification Rules", desc: "Custom instant alerts via Email, App & SMS" },
      { name: "Scheduled Jobs", desc: "Automated nightly data consolidation & report runs" },
    ],
  },
  {
    categoryName: "Multi-Company & Branch",
    items: [
      { name: "Multi-Company Architecture", desc: "Manage multiple legal entities in one unified system" },
      { name: "Multi-Branch Operations", desc: "Branch-level permissions & consolidated reporting" },
      { name: "Multi-Warehouse Network", desc: "Centralized multi-location inventory synchronization" },
    ],
  },
  {
    categoryName: "Open Integration",
    items: [
      { name: "REST API Gateway", desc: "Seamless API integration with external Web & Mobile apps" },
      { name: "Real-time Webhooks", desc: "Instant event notifications to third-party services" },
      { name: "OAuth 2.0 Authentication", desc: "Secure enterprise API authentication protocol" },
      { name: "Excel Import / Export", desc: "High-speed bulk data import & export tools" },
      { name: "OpenAPI Documentation", desc: "Standardized API specs for developer integration" },
    ],
  },
];

export const TIER_3_DETAILED_CATEGORIES_EN: TierFeatureCategory[] = [
  {
    categoryName: "Enterprise HR",
    items: [
      { name: "Talent Management", desc: "Key talent identification & executive succession paths" },
      { name: "Succession Planning", desc: "Leadership continuity & career advancement roadmaps" },
      { name: "Competency Framework", desc: "Quantitative competency scoring per job position" },
      { name: "Workforce Planning", desc: "Long-term labor demand & headcount budgeting" },
      { name: "Recruitment AI", desc: "AI-driven CV parsing, candidate scoring & automated interviewing" },
      { name: "Global Payroll Engine", desc: "High-volume payroll processing for tens of thousands of employees" },
      { name: "Global HR", desc: "Multi-country employee management & local labor law compliance" },
    ],
  },
  {
    categoryName: "Enterprise Finance",
    items: [
      { name: "Financial Consolidation", desc: "Automated multi-entity group financial consolidation" },
      { name: "Treasury Management", desc: "Liquidity management, debt & short-term investments" },
      { name: "Budget Forecasting", desc: "Financial scenario simulation & rolling forecasts" },
      { name: "Revenue Recognition", desc: "Compliance with IFRS 15 / ASC 606 revenue standards" },
      { name: "Multi-Currency Engine", desc: "Real-time exchange rate gains/losses calculation" },
      { name: "Multi-Country Tax", desc: "Country-specific tax rules & localized compliance" },
      { name: "Transfer Pricing", desc: "Intercompany transaction pricing & audit compliance" },
      { name: "IFRS & GAAP Compliance", desc: "International audit-ready financial statement generation" },
      { name: "Tax Engine", desc: "Automated multinational tax liability calculations" },
      { name: "Enterprise Risk Management", desc: "Financial, liquidity & operational risk alerts" },
      { name: "Internal Audit Trail", desc: "Complete data forensics & compliance monitoring" },
    ],
  },
  {
    categoryName: "Enterprise Supply Chain",
    items: [
      { name: "Advanced MRP", desc: "Multi-plant material requirement planning & optimization" },
      { name: "Advanced Planning & Scheduling (APS)", desc: "Constraint-based machine & labor scheduling" },
      { name: "MES Integration", desc: "Direct integration with shop floor Manufacturing Execution Systems" },
      { name: "Quality Management (QA/QC)", desc: "Raw material & finished goods quality control inspections" },
      { name: "Plant Maintenance (EAM)", desc: "Equipment lifecycle management & preventive maintenance" },
      { name: "Transportation Management (TMS)", desc: "Route optimization, fleet management & freight audit" },
      { name: "Warehouse Management (WMS)", desc: "Automated bin putaway & pick path optimization" },
      { name: "Demand Planning", desc: "AI-driven demand forecasting & trend analysis" },
      { name: "Supply Planning", desc: "Safety stock optimization & vendor supply balancing" },
    ],
  },
  {
    categoryName: "Enterprise CRM",
    items: [
      { name: "Configure Price Quote (CPQ)", desc: "Complex enterprise contract pricing & proposal configuration" },
      { name: "Omnichannel Commerce", desc: "Unified B2B/B2C e-commerce, POS, App & Social integration" },
      { name: "Customer 360 View", desc: "Comprehensive 360-degree customer interaction profile" },
      { name: "AI Sales Recommendations", desc: "Automated cross-sell & up-sell product recommendations" },
      { name: "Customer Journey Mapping", desc: "Touchpoint tracking & customer experience lifecycle" },
      { name: "Contact Center Integration", desc: "Omnichannel VoIP call center & live chat integration" },
    ],
  },
  {
    categoryName: "AI Engine",
    items: [
      { name: "AI Executive Assistant", desc: "Voice & natural language command query assistant" },
      { name: "Enterprise AI Chatbot", desc: "24/7 intelligent internal data Q&A assistant" },
      { name: "AI Report Analyst", desc: "Automated narrative commentary for financial & sales reports" },
      { name: "AI Business Forecasting", desc: "Predictive revenue, cost & market trend modeling" },
      { name: "Document AI OCR", desc: "Automated data extraction from invoices, receipts & POs" },
      { name: "AI Invoice Matching", desc: "Automated 3-way invoice, PO & receipt matching" },
      { name: "AI Recruitment Scorer", desc: "Candidate suitability prediction & CV ranking" },
      { name: "AI Sales Prediction", desc: "Opportunity win-rate probability forecasting" },
      { name: "AI Inventory Optimizer", desc: "Stockout prevention & optimal reorder point prediction" },
      { name: "Personalization Engine", desc: "User behavior-driven personalized UX recommendations" },
    ],
  },
  {
    categoryName: "Business Intelligence (BI)",
    items: [
      { name: "Enterprise Data Warehouse", desc: "Centralized Big Data repository & ETL pipeline" },
      { name: "OLAP Multi-dimensional Analytics", desc: "Sub-second multi-dimensional data slicing & dicing" },
      { name: "Executive Dashboard", desc: "C-level executive KPI cockpit & real-time analytics" },
      { name: "Predictive Analytics", desc: "Machine learning models for business outcome prediction" },
      { name: "Data Visualization", desc: "Interactive charts, heatmaps & geospatial mapping" },
      { name: "Custom BI Builder", desc: "Self-service ad-hoc report & dashboard designer" },
    ],
  },
  {
    categoryName: "Compliance & Security",
    items: [
      { name: "ISO Standards Compliance", desc: "ISO 9001 / 27001 quality & security process management" },
      { name: "Sarbanes-Oxley (SOX) Compliance", desc: "Internal controls framework for public companies" },
      { name: "GDPR & PDPA Data Privacy", desc: "International data privacy & consent management" },
      { name: "Comprehensive Audit Trail", desc: "Immutable audit logging of every system transaction" },
      { name: "Electronic Signature (E-Sign)", desc: "Legally binding digital document signing" },
      { name: "Data Retention Policy", desc: "Automated legal data archiving & destruction policies" },
    ],
  },
  {
    categoryName: "Enterprise Platform",
    items: [
      { name: "Low-code Workflow Builder", desc: "Rapid internal application development without code" },
      { name: "Business Rule Engine", desc: "Configurable pricing, discount & operational rules engine" },
      { name: "Form Builder", desc: "Custom data entry form designer" },
      { name: "Report Designer", desc: "Pixel-perfect print & PDF document report designer" },
      { name: "Developer SDK", desc: "Extensible software development kit for internal engineers" },
      { name: "Enterprise Marketplace", desc: "Add-on app store & module installation" },
      { name: "Plugin & Extension Framework", desc: "Deep custom module extension architecture" },
      { name: "Multi-Language & Currency", desc: "Global deployment localized for multiple regions" },
      { name: "SSO / LDAP / Active Directory", desc: "Centralized enterprise single sign-on authentication" },
      { name: "High Availability & Disaster Recovery", desc: "99.99% uptime guarantee with automated failover" },
      { name: "Cluster Deployment", desc: "Kubernetes microservices cluster deployment" },
    ],
  },
];


// ==================== SPANISH (ES) ====================
export const TIER_1_DETAILED_CATEGORIES_ES: TierFeatureCategory[] = [
  {
    categoryName: "Recursos Humanos (HR)",
    items: [
      { name: "Perfil de Empleado", desc: "Gestión de contratos, expediente personal e historial laboral" },
      { name: "Organigrama", desc: "Estructura jerárquica de departamentos en formato visual" },
      { name: "Gestión de Reclutamiento", desc: "Publicación de empleo y seguimiento de candidatos" },
      { name: "Proceso de Incorporación", desc: "Bienvenida y asignación de tareas a nuevos empleados" },
      { name: "Gestión de Vacaciones", desc: "Seguimiento de días libres y aprobaciones automáticas" },
      { name: "Horarios de Trabajo", desc: "Planificación de turnos y jornadas laborales estándar" },
    ],
  },
  {
    categoryName: "Finanzas y Contabilidad (FA)",
    items: [
      { name: "Panel de Ingresos y Gastos", desc: "Visualización en tiempo real del flujo de caja y ganancias" },
      { name: "Libro Mayor (GL)", desc: "Catálogo de cuentas y registro de asientos contables" },
      { name: "Cuentas por Cobrar (AR)", desc: "Seguimiento de facturas de clientes y cobros" },
      { name: "Cuentas por Pagar (AP)", desc: "Gestión de facturas de proveedores y pagos" },
      { name: "Contabilidad Básica", desc: "Registro estándar de transacciones financieras" },
      { name: "Caja y Bancos", desc: "Conciliación de caja chica y cuentas bancarias" },
      { name: "Diario General", desc: "Registro diario de transacciones económicas" },
      { name: "Estados Financieros", desc: "Balance general y estado de resultados" },
    ],
  },
  {
    categoryName: "Cadena de Suministro (SC)",
    items: [
      { name: "Gestión de Productos", desc: "Catálogo de artículos, materiales y códigos SKU" },
      { name: "Categorización", desc: "Clasificación de productos y estandarización de datos" },
      { name: "Proveedores", desc: "Historial de transacciones y ficha de proveedores" },
      { name: "Directorio de Clientes", desc: "Ficha de clientes e información de contacto" },
      { name: "Órdenes de Compra", desc: "Creación de órdenes de compra y seguimiento" },
      { name: "Órdenes de Venta", desc: "Gestión de pedidos, albaranes y facturación" },
      { name: "Gestión de Inventario", desc: "Monitoreo en tiempo real del stock existente" },
      { name: "Entradas y Salidas", desc: "Albaranes de recepción, despacho e inventariado" },
      { name: "Almacén Básico", desc: "Organización de ubicaciones y estanterías" },
    ],
  },
  {
    categoryName: "Gestión de Clientes (CRM)",
    items: [
      { name: "Vista Cliente 360", desc: "Historial centralizado de interacciones comerciales" },
      { name: "Contactos", desc: "Registro de contactos clave y comunicaciones" },
      { name: "Clientes Potenciales (Leads)", desc: "Captura y cualificación de prospectos" },
      { name: "Oportunidades de Venta", desc: "Seguimiento del embudo y probabilidad de cierre" },
      { name: "Cotizaciones", desc: "Generación rápida de presupuestos profesionales" },
      { name: "Flujo de Ventas (Pipeline)", desc: "Visualización gráfica del embudo comercial" },
    ],
  },
  {
    categoryName: "Sistema y Seguridad",
    items: [
      { name: "Gestión de Usuarios", desc: "Creación de cuentas y control de accesos" },
      { name: "Permisos por Roles", desc: "Seguridad granular basada en roles de usuario" },
      { name: "Notificaciones", desc: "Alertas de aprobación y recordatorios de tareas" },
      { name: "Panel Ejecutivo", desc: "Indicadores clave de operación empresarial" },
      { name: "Auditoría de Registro", desc: "Seguimiento de cambios en los datos del sistema" },
      { name: "Archivos Adjuntos", desc: "Almacenamiento de documentos y contratos digitales" },
      { name: "Correo Integrado", desc: "Notificaciones y recibos automáticos por email" },
    ],
  },
];

export const TIER_2_DETAILED_CATEGORIES_ES: TierFeatureCategory[] = [
  {
    categoryName: "HR Avanzado",
    items: [
      { name: "Control de Asistencia", desc: "Integración biométrica, reconocimiento facial y GPS" },
      { name: "Registro de Horas (Timesheet)", desc: "Seguimiento de horas dedicadas a proyectos" },
      { name: "Nómina Automatizada", desc: "Cálculo automático de salarios, impuestos y deducciones" },
      { name: "Gestión de Turnos", desc: "Horarios rotativos y cambios de turno flexibles" },
      { name: "Horas Extra", desc: "Cálculo automático de recargos por horas extra" },
      { name: "Seguimiento de KPI / OKR", desc: "Evaluación de objetivos departamentales" },
      { name: "Evaluación del Desempeño", desc: "Evaluaciones periódicas de 360 grados" },
      { name: "Formación de Personal", desc: "Planes de capacitación y rutas de desarrollo" },
      { name: "Asignación de Activos", desc: "Control de equipos informáticos entregados" },
      { name: "Contratos Laborales", desc: "Alertas de renovación y control de anexos" },
      { name: "Gastos de Viaje", desc: "Aprobación en línea de viáticos y reembolsos" },
    ],
  },
  {
    categoryName: "Finanzas Avanzadas",
    items: [
      { name: "Gestión Presupuestaria", desc: "Control y alertas de desviación presupuestaria" },
      { name: "Centros de Costo", desc: "Asignación de gastos por departamento o proyecto" },
      { name: "Activos Fijos", desc: "Control de inventario de activos y variaciones" },
      { name: "Amortización Automática", desc: "Cálculo automático de amortizaciones contables" },
      { name: "Motor Fiscal y Tributario", desc: "Cálculo de impuestos indirectos y corporativos" },
      { name: "Contabilidad Multilibro", desc: "Gestión contable financiera y de gestión en paralelo" },
      { name: "Conciliación Bancaria", desc: "Emparejamiento automático de extractos bancarios" },
      { name: "Planificación Financiera", desc: "Proyección de flujo de caja y capital de trabajo" },
      { name: "Análisis de Flujo de Caja", desc: "Informes detallados de entradas y salidas" },
      { name: "Centros de Beneficio", desc: "Evaluación de rentabilidad por unidad de negocio" },
    ],
  },
  {
    categoryName: "Cadena de Suministro Avanzada",
    items: [
      { name: "Compras Avanzadas", desc: "Flujos de licitación, negociación y homologación" },
      { name: "Evaluación de Proveedores", desc: "Calificación de proveedores y cumplimiento de SLA" },
      { name: "Multialmacén", desc: "Gestión de inventario entre múltiples sedes" },
      { name: "Escaneo de Código de Barras", desc: "Operaciones de almacén mediante lectores móviles" },
      { name: "Control de Lotes", desc: "Trazabilidad de caducidad y lotes de producción" },
      { name: "Seguimiento de Series", desc: "Historial de números de serie y garantías" },
      { name: "Transferencia entre Almacenes", desc: "Traspasos internos y control de tránsito" },
      { name: "Devoluciones a Proveedor", desc: "Gestión de productos defectuosos y notas de crédito" },
      { name: "Planificación de Materiales (MRP)", desc: "Cálculo de necesidades de materias primas" },
      { name: "Lista de Materiales (BOM)", desc: "Estructura de componentes para producción" },
      { name: "Solicitudes de Compra", desc: "Aprobación de requisiciones internas" },
    ],
  },
  {
    categoryName: "CRM Avanzado",
    items: [
      { name: "Campañas de Marketing", desc: "Control de presupuesto y cálculo del ROI" },
      { name: "Atención al Cliente", desc: "Gestión de solicitudes y sugerencias" },
      { name: "Sistema de Tickets", desc: "Asignación y resolución de incidencias" },
      { name: "Acuerdos de Nivel de Servicio (SLA)", desc: "Métricas de tiempo de respuesta y solución" },
      { name: "Automatización de Email", desc: "Envíos masivos y secuencias automatizadas" },
      { name: "Pronóstico de Ventas", desc: "Proyección de ingresos basada en la canalización" },
      { name: "Segmentación de Clientes", desc: "Clasificación RFM y patrones de compra" },
      { name: "Programa de Fidelización", desc: "Gestión de puntos, niveles y recompensas" },
    ],
  },
  {
    categoryName: "Automatización de Flujos",
    items: [
      { name: "Creador de Flujos", desc: "Diseñador visual de procesos mediante arrastrar y soltar" },
      { name: "Aprobación de Documentos", desc: "Flujos de aprobación multinivel para compras y gastos" },
      { name: "Aprobaciones Multinivel", desc: "Delegación según umbrales de importe" },
      { name: "Reglas de Notificación", desc: "Alertas automáticas por correo, App o SMS" },
      { name: "Tareas Programadas", desc: "Cierre de datos y reportes automáticos nocturnos" },
    ],
  },
  {
    categoryName: "Multiempresa",
    items: [
      { name: "Arquitectura Multiempresa", desc: "Gestión de varias sociedades en un único entorno" },
      { name: "Operaciones Multisucursal", desc: "Permisos por sede y consolidación de datos" },
      { name: "Red Multialmacén", desc: "Sincronización de stock entre múltiples depósitos" },
    ],
  },
  {
    categoryName: "Integración Abierta",
    items: [
      { name: "Pasarela REST API", desc: "Conexión directa con aplicaciones Web y Móviles" },
      { name: "Webhooks en Tiempo Real", desc: "Notificaciones instantáneas de eventos a terceros" },
      { name: "Autenticación OAuth 2.0", desc: "Protocolo de seguridad para conexiones API" },
      { name: "Importación / Exportación Excel", desc: "Carga y descarga masiva de datos en segundos" },
      { name: "Documentación OpenAPI", desc: "Especificación técnica estándar para desarrolladores" },
    ],
  },
];

export const TIER_3_DETAILED_CATEGORIES_ES: TierFeatureCategory[] = [
  {
    categoryName: "HR Corporativo",
    items: [
      { name: "Gestión del Talento", desc: "Identificación de empleados clave y planes de carrera" },
      { name: "Plan de Sucesión", desc: "Continuidad del liderazgo y mapa de promociones" },
      { name: "Marco de Competencias", desc: "Evaluación cuantitativa por puesto de trabajo" },
      { name: "Planificación de Plantilla", desc: "Previsión de costes salariales y personal a largo plazo" },
      { name: "Reclutamiento con IA", desc: "Lectura de CVs y entrevistas iniciales automatizadas" },
      { name: "Motor de Nómina Global", desc: "Procesamiento de nóminas masivas para miles de empleados" },
      { name: "HR Global", desc: "Gestión de personal internacional y legislación local" },
    ],
  },
  {
    categoryName: "Finanzas Corporativas",
    items: [
      { name: "Consolidación Financiera", desc: "Consolidación automática de estados financieros del grupo" },
      { name: "Gestión de Tesorería", desc: "Optimización de liquidez, inversión y endeudamiento" },
      { name: "Previsión Presupuestaria", desc: "Simulación de escenarios financieros futuros" },
      { name: "Reconocimiento de Ingresos", desc: "Cumplimiento de normas internacionales IFRS 15" },
      { name: "Multidivisa", desc: "Conversión de divisas y cálculo de diferencias de cambio" },
      { name: "Multipaís", desc: "Cumplimiento normativo y tributario en varios países" },
      { name: "Precios de Transferencia", desc: "Control de operaciones vinculadas entre filiales" },
      { name: "Normas IFRS y GAAP", desc: "Informes auditables según estándares internacionales" },
      { name: "Motor Fiscal Corporativo", desc: "Cálculo de obligaciones tributarias del grupo" },
      { name: "Gestión de Riesgos", desc: "Alertas de riesgo financiero y operativo" },
      { name: "Auditoría Interna", desc: "Trazabilidad de datos y control de cumplimiento" },
    ],
  },
  {
    categoryName: "Cadena de Suministro Corporativa",
    items: [
      { name: "MRP Avanzado", desc: "Planificación de materiales para múltiples plantas de producción" },
      { name: "Planificación y Programación (APS)", desc: "Optimización de secuencias de maquinaria y personal" },
      { name: "Integración MES", desc: "Conexión directa con sistemas de ejecución de planta" },
      { name: "Control de Calidad (QA/QC)", desc: "Inspecciones de calidad en materias primas y acabados" },
      { name: "Mantenimiento de Planta (EAM)", desc: "Gestión del ciclo de vida de maquinaria y mantenimiento" },
      { name: "Gestión de Transporte (TMS)", desc: "Optimización de rutas y costes de flota" },
      { name: "Gestión de Almacenes (WMS)", desc: "Ubicación y rutas de preparación de pedidos optimizadas" },
      { name: "Planificación de la Demanda", desc: "Predicción de tendencias de consumo con IA" },
      { name: "Planificación del Suministro", desc: "Equilibrio de stock de seguridad y compras a proveedores" },
    ],
  },
  {
    categoryName: "CRM Corporativo",
    items: [
      { name: "Configurador de Precios (CPQ)", desc: "Cálculo de presupuestos complejos para grandes contratos" },
      { name: "Omnicanalidad", desc: "Integración de tiendas físicas, e-commerce, App y redes sociales" },
      { name: "Visión Cliente 360", desc: "Historial completo de puntos de contacto del cliente" },
      { name: "Recomendaciones con IA", desc: "Sugerencias automáticas de Venta Cruzada y Venta Superior" },
      { name: "Mapa de Experiencia del Cliente", desc: "Seguimiento del ciclo de vida del cliente" },
      { name: "Centro de Contacto Unificado", desc: "Telefonía IP, centro de llamadas y chat integrados" },
    ],
  },
  {
    categoryName: "Motor de IA",
    items: [
      { name: "Asistente Virtual IA", desc: "Búsqueda de datos y comandos mediante lenguaje natural" },
      { name: "Chatbot de Empresa", desc: "Atención de consultas internas sobre datos empresariales 24/7" },
      { name: "Informes Narrativos con IA", desc: "Generación de resúmenes explicativos de ventas y finanzas" },
      { name: "Predicción de Tendencias", desc: "Modelado predictivo de ingresos y costes futuros" },
      { name: "Digitalización OCR", desc: "Extracción automática de datos de facturas y recibos" },
      { name: "Conciliación de Facturas", desc: "Emparejamiento automático de facturas con pedidos" },
      { name: "IA en Reclutamiento", desc: "Evaluación y clasificación de adecuación de candidatos" },
      { name: "IA en Ventas", desc: "Predicción de probabilidad de cierre de operaciones" },
      { name: "IA en Inventario", desc: "Prevención de roturas de stock y sugerencia de reabastecimiento" },
      { name: "Motor de Personalización", desc: "Adaptación de la interfaz según el comportamiento del usuario" },
    ],
  },
  {
    categoryName: "Inteligencia de Negocios (BI)",
    items: [
      { name: "Almacén de Datos (Data Warehouse)", desc: "Repositorio centralizado de Big Data empresarial" },
      { name: "Análisis Multidimensional (OLAP)", desc: "Consultas analíticas rápidas desde múltiples ángulos" },
      { name: "Cuadro de Mando Ejecutivo", desc: "Cockpit visual de KPIs para la dirección general" },
      { name: "Análisis Predictivo", desc: "Modelos de aprendizaje automático para proyección de negocio" },
      { name: "Visualización de Datos", desc: "Gráficos interactivos y mapas de calor inteligentes" },
      { name: "Informes Personalizados", desc: "Diseño sencillo de informes analíticos a medida" },
    ],
  },
  {
    categoryName: "Cumplimiento y Seguridad",
    items: [
      { name: "Cumplimiento ISO", desc: "Gestión de procesos según normas ISO 9001 e ISO 27001" },
      { name: "Cumplimiento SOX", desc: "Marcos de control interno para empresas cotizadas" },
      { name: "Privacidad GDPR y PDPA", desc: "Garantía de protección de datos personales internacionales" },
      { name: "Registro de Auditoría", desc: "Historial inmutable de modificaciones en el sistema" },
      { name: "Firma Electrónica", desc: "Firma digital de documentos con validez legal" },
      { name: "Política de Conservación", desc: "Archivado y eliminación automática de datos según ley" },
    ],
  },
  {
    categoryName: "Plataforma Corporativa",
    items: [
      { name: "Desarrollo Low-code", desc: "Creación rápida de herramientas internas sin código" },
      { name: "Motor de Reglas de Negocio", desc: "Configuración de reglas de precios y descuentos" },
      { name: "Diseñador de Formularios", desc: "Diseño flexible de plantillas de captura de datos" },
      { name: "Diseñador de Reportes", desc: "Creación de plantillas de impresión y exportación en PDF" },
      { name: "SDK para Desarrolladores", desc: "Kits de desarrollo para ingenieros de software" },
      { name: "Marketplace Empresarial", desc: "Tienda de complementos y extensiones del sistema" },
      { name: "Framework de Plugins", desc: "Arquitectura de módulos a medida" },
      { name: "Multidioma y Multidivisa Global", desc: "Despliegue adaptado a múltiples regiones geográficas" },
      { name: "Autenticación Única (SSO/LDAP)", desc: "Sincronización de usuarios con Active Directory" },
      { name: "Alta Disponibilidad (HA/DR)", desc: "Garantía de 99.99% de operatividad y recuperación" },
      { name: "Despliegue en Cluster", desc: "Arquitectura de microservicios escalable sin límites" },
    ],
  },
];


// ==================== JAPANESE (JA) ====================
export const TIER_1_DETAILED_CATEGORIES_JA: TierFeatureCategory[] = [
  {
    categoryName: "人事管理 (HR)",
    items: [
      { name: "従業員プロフィール", desc: "契約書、個人経歴、職務履歴の一元管理" },
      { name: "組織図 (Org Chart)", desc: "部門構造と役職階層のビジュアル表示" },
      { name: "採用管理 (Recruitment)", desc: "求人掲載、応募者管理、履歴書のスクリーニング" },
      { name: "オンボーディング", desc: "新入社員の受入プロセスと業務引き継ぎ管理" },
      { name: "休暇管理 (Leave)", desc: "有給休暇の残数管理と自動承認フロー" },
      { name: "勤務スケジュール", desc: "シフト配置と標準労働時間の管理" },
    ],
  },
  {
    categoryName: "財務・会計 (FA)",
    items: [
      { name: "売上・コストダッシュボード", desc: "リアルタイムなキャッシュフローと利益率の可視化" },
      { name: "総勘定元帳 (GL)", desc: "勘定科目コード管理と仕訳帳への自動記帳" },
      { name: "売掛金管理 (AR)", desc: "顧客請求書と回収スケジュールの追跡" },
      { name: "買掛金管理 (AP)", desc: "仕入先請求書と支払スケジュールの管理" },
      { name: "基本会計処理", desc: "日常の標準的な取引・仕訳データの記録" },
      { name: "現金・小口・銀行管理", desc: "小口現金出納と銀行口座データの照合" },
      { name: "仕訳帳 (Journal)", desc: "日付別の詳細な取引仕訳データの記録" },
      { name: "財務諸表作成", desc: "貸借対照表 (B/S) と損益計算書 (P/L) の作成" },
    ],
  },
  {
    categoryName: "サプライチェーン・在庫 (SC)",
    items: [
      { name: "商品マスター管理", desc: "品目カタログ、原材料コード、SKUの標準化" },
      { name: "カテゴリ分類", desc: "商品グループ化とマスターデータの標準化" },
      { name: "仕入先管理 (Supplier)", desc: "取引先情報と発注・納品履歴の記録" },
      { name: "顧客台帳 (Customer)", desc: "顧客情報と連絡先データの一元管理" },
      { name: "購買発注管理 (Purchase)", desc: "発注書の作成と納品状況のトラッキング" },
      { name: "販売受注管理 (Sales)", desc: "受注処理、出荷案内書、納品書の発行" },
      { name: "在庫数量管理 (Inventory)", desc: "リアルタイムな在庫変動と理論在庫の確認" },
      { name: "入出庫・棚卸処理", desc: "入庫処理、出庫伝票の作成、実地棚卸" },
      { name: "標準倉庫管理", desc: "ロケーション（棚番）と保管場所の管理" },
    ],
  },
  {
    categoryName: "顧客管理 (CRM)",
    items: [
      { name: "顧客360度ビュー", desc: "取引履歴とコンタクト履歴の一元表示" },
      { name: "連絡先管理 (Contact)", desc: "担当者情報と過去の商談履歴の記録" },
      { name: "リード管理 (Lead)", desc: "見込顧客の獲得と評価フェーズ管理" },
      { name: "商談機会追跡 (Opportunity)", desc: "商談フェーズ進捗と受注確率の管理" },
      { name: "見積書自動作成", desc: "標準フォーマットでの迅速な見積発行" },
      { name: "パイプライン管理", desc: "営業パイプラインのビジュアル管理" },
    ],
  },
  {
    categoryName: "システム・権限管理",
    items: [
      { name: "ユーザーアカウント管理", desc: "アカウントの発行とアクセス権限の設定" },
      { name: "ロール別アクセス権限", desc: "役職や部署に応じた詳細なセキュリティ設定" },
      { name: "システム通知機能", desc: "承認リクエストやタスクリマインダーの通知" },
      { name: "経営ダッシュボード", desc: "主要な業務KPI指標の一括可視化" },
      { name: "監査ログ (Audit Log)", desc: "データ操作履歴の記録とトラッキング" },
      { name: "ファイル添付管理", desc: "契約書や伝票などのデジタル文書保存" },
      { name: "メール連携通知", desc: "自動メール送信と承認完了通知" },
    ],
  },
];

export const TIER_2_DETAILED_CATEGORIES_JA: TierFeatureCategory[] = [
  {
    categoryName: "高度な人事管理 (HR Advanced)",
    items: [
      { name: "勤怠自動管理 (Attendance)", desc: "顔認証、指紋、GPS打刻システムとの連携" },
      { name: "タイムシート実績追跡", desc: "プロジェクト・部署ごとの勤務時間詳細記録" },
      { name: "給与自動計算 (Payroll)", desc: "給与、社会保険料、源泉所得税の自動計算" },
      { name: "シフト交代管理", desc: "柔軟なシフト組と交替勤務スケジューリング" },
      { name: "残業手当自動計算 (Overtime)", desc: "割増賃金率に基づく残業代の自動算定" },
      { name: "KPI / OKR目標管理", desc: "部署目標の設定と進捗率の可視化" },
      { name: "人事評価システム (Performance)", desc: "多面評価（360度評価）と定期的評価運用" },
      { name: "研修・育成管理 (Training)", desc: "受講計画とスキル開発ロードマップの管理" },
      { name: "備品・資産貸与管理", desc: "PCやモバイル端末の貸与履歴と返却管理" },
      { name: "雇用契約書管理", desc: "更新時期の自動アラートと覚書の保管" },
      { name: "経費精算 (Expense Claim)", desc: "交通費・出張旅費のオンライン申請・承認" },
    ],
  },
  {
    categoryName: "高度な財務管理 (Finance Advanced)",
    items: [
      { name: "予算統制管理 (Budget)", desc: "部署別予算編成と予算超過のアラート通知" },
      { name: "コストセンター管理", desc: "プロジェクトや部門ごとの費用配分処理" },
      { name: "固定資産台帳 (Fixed Asset)", desc: "資産の取得・移動・売却・廃棄の一元管理" },
      { name: "減価償却自動計算", desc: "税制改正に対応した自動減価償却処理" },
      { name: "税務申告サポート (Tax Engine)", desc: "消費税、法人税等の申告書作成支援" },
      { name: "複数帳簿管理 (Multi Ledger)", desc: "財務会計帳簿と管理会計帳簿の並行運用" },
      { name: "自動照合 (Bank Recon)", desc: "入出金明細と預金出納帳の自動マッチング" },
      { name: "財務シミュレーション", desc: "予想キャッシュフローと運転資金の計画" },
      { name: "キャッシュフロー分析", desc: "日次の資金流入・流出構造の詳細分析" },
      { name: "プロフィットセンター", desc: "事業ユニット別の採算性評価と分析" },
    ],
  },
  {
    categoryName: "高度なサプライチェーン (SC Advanced)",
    items: [
      { name: "高度な購買管理 (Procurement)", desc: "見積合わせ、価格交渉、相見積もり承認" },
      { name: "仕入先評価 (Vendor Management)", desc: "サプライヤーの納期遵守率と品質評価" },
      { name: "多拠点倉庫管理", desc: "複数拠点倉庫の在庫把握と拠点間移動伝票" },
      { name: "バーコード / QRコード運用", desc: "ハンディターミナルによる超高速検品・棚卸" },
      { name: "ロット・バッチ管理", desc: "賞味期限管理と製造ロットのトレーサビリティ" },
      { name: "シリアルナンバー追跡", desc: "個体別の製造番号追跡と保証期間管理" },
      { name: "拠点間在庫移動", desc: "支店・店舗間での移動伝票作成と移動中在庫" },
      { name: "仕入返品処理 (Return)", desc: "不良品返品伝票の発行と買掛金相消処理" },
      { name: "資材要件計画 (Basic MRP)", desc: "生産計画に基づく必要原材料の自動計算" },
      { name: "部品構成表 (BOM)", desc: "多階層BOMマスターと標準原価計算" },
      { name: "購買依頼承認 (Purchase Request)", desc: "社内備品購入申請のワークフロー承認" },
    ],
  },
  {
    categoryName: "高度な顧客管理 (CRM Advanced)",
    items: [
      { name: "マーケティング施策管理", desc: "施策予算の管理と獲得ROIの測定" },
      { name: "カスタマーサポート", desc: "問い合わせ履歴の一元管理と迅速な回答" },
      { name: "チケット管理システム", desc: "サポート問い合わせの割り当てと解決管理" },
      { name: "サービス品質保証 (SLA)", desc: "応答時間と課題解決時間の遵守率計測" },
      { name: "メール配信自動化", desc: "シナリオに基づくステップメールの自動配信" },
      { name: "売上予測分析 (Sales Forecast)", desc: "パイプラインデータに基づく見込判定" },
      { name: "顧客セグメンテーション", desc: "購買頻度・金額に基づく顧客ランク分類" },
      { name: "ロイヤルティプログラム", desc: "ポイント付与、ランク制度、特典管理" },
    ],
  },
  {
    categoryName: "ワークフロー自動化",
    items: [
      { name: "フローデザイナー", desc: "ドラッグ＆ドロップで承認経路を自由に設計" },
      { name: "申請・承認ワークフロー", desc: "各種稟議書・経費・契約の電子承認" },
      { name: "多段階ルート設定", desc: "金額閾値に応じた決裁権限の自動分岐" },
      { name: "通知ルール設定", desc: "チャットツールやメールへの即時アラート" },
      { name: "バッチ処理自動化", desc: "夜間の日次集計と定期レポート自動生成" },
    ],
  },
  {
    categoryName: "マルチカンパニー・多拠点",
    items: [
      { name: "複数法人管理 (Multi-Company)", desc: "1つのシステムで複数の子会社・法人を管理" },
      { name: "多拠点・支店管理", desc: "支店ごとの権限設定と連結データの把握" },
      { name: "全社統合在庫データベース", desc: "全拠点の在庫状況をリアルタイムで同期" },
    ],
  },
  {
    categoryName: "オープン統合 (Integration)",
    items: [
      { name: "REST APIゲートウェイ", desc: "外部ECサイトやスマホアプリとの柔軟な連携" },
      { name: "リアルタイムWebhooks", desc: "データ更新イベントを即座に外部通知" },
      { name: "OAuth 2.0認証基盤", desc: "安全な外部API連携セキュリティ仕様" },
      { name: "Excel大量データ入出力", desc: "大量マスターデータの一括インポート・エクスポート" },
      { name: "OpenAPI仕様書公開", desc: "開発者が容易に連携構築できる標準仕様" },
    ],
  },
];

export const TIER_3_DETAILED_CATEGORIES_JA: TierFeatureCategory[] = [
  {
    categoryName: "エンタープライズ人事",
    items: [
      { name: "タレントマネジメント", desc: "キーパーソンの発掘とハイキャリア育成" },
      { name: "サクセッションプランニング", desc: "経営幹部候補の後継者育成ロードマップ" },
      { name: "コンピテンシーフレームワーク", desc: "職種別行動特性のスコア化と定量評価" },
      { name: "要員計画 (Workforce Planning)", desc: "中長期の必要人員数と人件費シミュレーション" },
      { name: "AI採用スクリーニング", desc: "履歴書のAI自動解析と適性スコアリング" },
      { name: "グローバル給与計算エンジン", desc: "数万人規模の従業員給与の超高速計算" },
      { name: "グローバルHR管理", desc: "海外現地法人スタッフの労務制度・法令管理" },
    ],
  },
  {
    categoryName: "エンタープライズ財務",
    items: [
      { name: "連結決算システム", desc: "グループ全体の財務諸表の自動連結処理" },
      { name: "資金・資金繰り管理 (Treasury)", desc: "余剰資金運用とグループ内融資の最適化" },
      { name: "予算シミュレーション", desc: "シナリオ別の着地予測とローリング予算" },
      { name: "収益認識会計基準対応", desc: "複雑な契約における新収益認識基準への準拠" },
      { name: "多通貨為替処理 (Multi-Currency)", desc: "為替レートのリアルタイム換算と評価損益計算" },
      { name: "多国間税制対応", desc: "進出国の税制・会計基準に合わせた現地対応" },
      { name: "移転価格税制管理", desc: "グループ企業間取引価格の妥当性評価" },
      { name: "IFRS / US-GAAP対応", desc: "国際会計基準に準拠した財務レポート出力" },
      { name: "自動税務計算エンジン", desc: "多国籍企業における法人税額の自動算定" },
      { name: "全社リスクマネジメント", desc: "財務・流動性・オペレーションリスクの監視" },
      { name: "内部監査トレーサビリティ", desc: "データ操作ログの完全追跡と内部統制強化" },
    ],
  },
  {
    categoryName: "エンタープライズSCM",
    items: [
      { name: "高度なMRP計画 (Advanced MRP)", desc: "複数工場を跨ぐ原材料および生産日程の最適化" },
      { name: "高度生産スケジューリング (APS)", desc: "設備と作業員の制約条件を考慮した自動割り当て" },
      { name: "MES工場ライン連携", desc: "製造実行システム (MES) との実時間データ連携" },
      { name: "品質管理システム (QA/QC)", desc: "受入検査から出荷検査までの品質ログ管理" },
      { name: "設備保全管理 (EAM)", desc: "工場設備のライフサイクル管理と予防保全計画" },
      { name: "配送・輸送管理 (TMS)", desc: "配送ルートの最適化と運賃計算・トラック配車" },
      { name: "高度倉庫管理 (WMS)", desc: "入庫格納ロケーション自動提案とピックパス最適化" },
      { name: "需要予測エンジン (Demand)", desc: "過去データとAI分析による需要トレンド予測" },
      { name: "供給計画 (Supply Planning)", desc: "安全在庫の最適化とサプライヤー調達の最適化" },
    ],
  },
  {
    categoryName: "エンタープライズCRM",
    items: [
      { name: "複雑見積構成 (CPQ)", desc: "大口エンタープライズ契約向けの見積自動構成" },
      { name: "オムニチャネル対応", desc: "店舗、EC、アプリ、カスタマーサポートの統合" },
      { name: "顧客360度プロファイル", desc: "全タッチポイントでの顧客行動履歴の集約" },
      { name: "AIレコメンデーション", desc: "クロスセル・アップセルの自動提案エンジン" },
      { name: "カスタマージャーニーマップ", desc: "顧客体験の各フェーズにおけるトラッキング" },
      { name: "コンタクトセンター統合", desc: "VoIP電話、チャットボット、オペレーター連携" },
    ],
  },
  {
    categoryName: "AIエンジン",
    items: [
      { name: "AIエグゼクティブアシスタント", desc: "自然言語や音声コマンドによるデータ検索" },
      { name: "社内ナレッジAIチャットボット", desc: "社内データベースを学習したAIが24時間回答" },
      { name: "AIレポート自動生成", desc: "財務・営業データのAI分析サマリー自動作成" },
      { name: "AIビジネストレンド予測", desc: "売上・コスト・市場動向の機械学習予測" },
      { name: "AI OCR文書読み取り", desc: "請求書・領収書からのテキストデータ自動抽出" },
      { name: "AI請求書三方照合", desc: "注文書・納品書・請求書の3点自動照合" },
      { name: "AI採用適合度判定", desc: "応募者の適性スコア予測と面接スクリーニング" },
      { name: "AI営業受注確率予測", desc: "商談ごとの成約確率とリスク要因の算出" },
      { name: "AI在庫最適化エンジン", desc: "欠品リスクの回避と適正発注時期のAI提案" },
      { name: "パーソナライズエンジン", desc: "ユーザーの行動傾向に応じた画面操作の最適化" },
    ],
  },
  {
    categoryName: "ビジネスインテリジェンス (BI)",
    items: [
      { name: "全社データウェアハウス", desc: "ビッグデータの一元蓄積と高速ETL処理" },
      { name: "多次元分析 (OLAP)", desc: "多角的な視点からの高速データスライシング" },
      { name: "経営陣向けダッシュボード", desc: "役員・経営層向けのリアルタイムKPIコックピット" },
      { name: "予測アナリティクス", desc: "機械学習モデルを活用した業績結果の予測" },
      { name: "データビジュアライゼーション", desc: "インタラクティブなグラフとヒートマップ表示" },
      { name: "カスタムレポート作成", desc: "直感的な操作で自由なレポート画面をデザイン" },
    ],
  },
  {
    categoryName: "コンプライアンス・セキュリティ",
    items: [
      { name: "ISO認証規格対応", desc: "ISO 9001 / 27001 のプロセス運用と内部統制" },
      { name: "SOX法対応内部統制", desc: "上場企業向けの財務報告に係る内部統制構築" },
      { name: "GDPR / PDPA個人情報保護", desc: "国際的な個人情報保護法規への完全準拠" },
      { name: "改ざん不可監査ログ", desc: "全取引・データ変更の完全な履歴の保持" },
      { name: "電子署名 (E-Signature)", desc: "法的効力を持つ電子契約および文書承認" },
      { name: "データ保存・破棄ポリシー", desc: "法令に基づくデータの自動保存および安全な破棄" },
    ],
  },
  {
    categoryName: "エンタープライズ基盤",
    items: [
      { name: "ノーコードワークフロー構築", desc: "プログラミング不要で社内アプリを迅速作成" },
      { name: "ビジネスルールエンジン", desc: "価格設定ルールや割引ルールの自在な設定" },
      { name: "フォームデザイナー", desc: "入力画面フォーマットを自由自在にカスタマイズ" },
      { name: "レポートデザイナー", desc: "高精細な帳票・PDF出力テンプレートのデザイン" },
      { name: "開発者向けSDK", desc: "社内エンジニア向けの機能拡張用ライブラリ" },
      { name: "エンタープライズマーケットプレイス", desc: "追加機能プラグインの購入と即時導入" },
      { name: "プラグイン・拡張フレームワーク", desc: "独自カスタマイズを安全に追加できる構造" },
      { name: "グローバル多言語・多通貨基盤", desc: "世界各国の拠点へのスムーズなシステム展開" },
      { name: "SSO / Active Directory連携", desc: "社内シングルサインオンアカウントの自動同期" },
      { name: "高利用率・災害復旧 (HA/DR)", desc: "稼働率99.99%保証と自動フェイルオーバー" },
      { name: "クラスタ構成デプロイ", desc: "Kubernetesによる無制限の拡張性と負荷分散" },
    ],
  },
];


export const getPricingTiers = (lang: string): PricingTier[] => {
  const baseTiers = TRANSLATIONS[lang]?.pricingTiers || TRANSLATIONS["en"].pricingTiers;

  const t1 =
    lang === "vi" ? TIER_1_DETAILED_CATEGORIES_VI :
    lang === "es" ? TIER_1_DETAILED_CATEGORIES_ES :
    lang === "ja" ? TIER_1_DETAILED_CATEGORIES_JA :
    TIER_1_DETAILED_CATEGORIES_EN;

  const t2 =
    lang === "vi" ? TIER_2_DETAILED_CATEGORIES_VI :
    lang === "es" ? TIER_2_DETAILED_CATEGORIES_ES :
    lang === "ja" ? TIER_2_DETAILED_CATEGORIES_JA :
    TIER_2_DETAILED_CATEGORIES_EN;

  const t3 =
    lang === "vi" ? TIER_3_DETAILED_CATEGORIES_VI :
    lang === "es" ? TIER_3_DETAILED_CATEGORIES_ES :
    lang === "ja" ? TIER_3_DETAILED_CATEGORIES_JA :
    TIER_3_DETAILED_CATEGORIES_EN;

  return baseTiers.map((tier) => {
    if (tier.id === "starter") {
      return {
        ...tier,
        inheritsText: "",
        detailedCategories: t1,
      };
    }
    if (tier.id === "growth") {
      return {
        ...tier,
        inheritsText:
          lang === "vi" ? "Bao gồm toàn bộ Tier 1 +" :
          lang === "es" ? "Incluye todo Tier 1 +" :
          lang === "ja" ? "Tier 1の全機能を含む +" :
          "Includes all Tier 1 +",
        detailedCategories: t2,
      };
    }
    if (tier.id === "enterprise") {
      return {
        ...tier,
        inheritsText:
          lang === "vi" ? "Bao gồm toàn bộ Tier 2 +" :
          lang === "es" ? "Incluye todo Tier 2 +" :
          lang === "ja" ? "Tier 2の全機能を含む +" :
          "Includes all Tier 2 +",
        detailedCategories: t3,
      };
    }
    return tier;
  });
};

export const PRICING_TIERS = getPricingTiers("en");
export const INDUSTRIES = TRANSLATIONS["en"].industries;

export const getIndustries = (lang: string) => {
  return TRANSLATIONS[lang]?.industries || TRANSLATIONS["en"].industries;
};

export const getFaqs = (lang: string) => {
  return TRANSLATIONS[lang]?.faqs || TRANSLATIONS["en"].faqs;
};

export const getComparisonCategories = (lang: string) => {
  return TRANSLATIONS[lang]?.comparisonCategories || TRANSLATIONS["en"].comparisonCategories;
};
