import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, email, phone, users, industry, tier, notes } = body;

    // Server-side validation
    if (!name || !company || !email || !phone || !users || !industry || !tier) {
      return NextResponse.json(
        { success: false, message: "Vui lòng nhập đầy đủ các trường thông tin bắt buộc." },
        { status: 400 }
      );
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Địa chỉ email không hợp lệ." },
        { status: 400 }
      );
    }

    // Phone validation (simple Vietnamese format check)
    const phoneRegex = /^(0|84)[0-9]{9,10}$/;
    if (!phoneRegex.test(phone.replace(/[\s.-]/g, ""))) {
      return NextResponse.json(
        { success: false, message: "Số điện thoại không đúng định dạng." },
        { status: 400 }
      );
    }

    // Log the lead data (in a real app, this would write to a database or trigger an email via Resend)
    console.log("=== NEW ERP PRICING LEAD ===");
    console.log(`Họ tên: ${name}`);
    console.log(`Công ty: ${company}`);
    console.log(`Email: ${email}`);
    console.log(`SĐT: ${phone}`);
    console.log(`Số users: ${users}`);
    console.log(`Ngành nghề: ${industry}`);
    console.log(`Gói mong muốn: ${tier}`);
    console.log(`Ghi chú: ${notes || "Không có"}`);
    console.log("============================");

    // Simulate saving delay (500ms)
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json(
      { success: true, message: "Yêu cầu đã được tiếp nhận thành công. Kỹ sư giải pháp của SAHO sẽ phản hồi sớm." },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Đã xảy ra lỗi máy chủ trong quá trình xử lý." },
      { status: 500 }
    );
  }
}
