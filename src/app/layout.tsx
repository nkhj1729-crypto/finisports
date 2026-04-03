import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "@/i18n";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "휘니스포츠 | 건강과 즐거움의 파트너",
  description:
    "요가, 필라테스, 재활, 다이어트, PT 헬스용품 전문 온라인 쇼핑몰. 검증된 품질의 피트니스 용품을 합리적인 가격에 만나보세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <LangProvider>
          {children}
          <ScrollToTop />
        </LangProvider>
      </body>
    </html>
  );
}
