import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Báo Giá Giải Pháp & Dịch Vụ Triển Khai ERP Toàn Diện | SAHO ERP",
  description: "Bản đồ báo giá thực tế thị trường ERP 2025 - 2026. Công cụ tính toán TCO 3 năm, bản quyền License và chi phí triển khai hệ thống SAP, NetSuite, Dynamics 365, Odoo.",
  openGraph: {
    title: "Báo Giá Giải Pháp & Dịch Vụ Triển Khai ERP Toàn Diện | SAHO ERP",
    description: "Công cụ tính toán TCO 3 năm, bản quyền License và chi phí triển khai hệ thống SAP, NetSuite, Dynamics 365, Odoo.",
    type: "website",
    locale: "vi_VN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var savedTheme = localStorage.getItem('theme') || 'light';
                  if (savedTheme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
