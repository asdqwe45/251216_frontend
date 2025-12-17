import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google"; // Noto_Sans_KR
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

// Noto_Sans_KR 폰트 설정
const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "700"], // 사용할 폰트 두께
});

export const metadata: Metadata = {
  title: "Insight-Digest",
  description: "AI 기반 뉴스 요약 및 심층 분석 서비스",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${notoSansKr.className} bg-gray-50`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
