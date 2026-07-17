import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  metadataBase: new URL(
    "https://realestate-git-main-vmflwhs25-9678s-projects.vercel.app"
  ),

  title: "부동산 상위 10% | 핵심 투자 정보",

  description:
    "개발호재, 입지분석, 시장흐름을 기반으로 한 부동산 투자 정보를 공유합니다.",

  keywords: [
    "부동산",
    "아파트",
    "투자정보",
    "입지분석",
    "개발호재",
    "시장분석",
  ],

  openGraph: {
    title: "부동산 상위 10%",
    description:
      "상위 투자자들이 확인하는 부동산 시장 분석과 핵심 정보",

    url:
      "https://realestate-git-main-vmflwhs25-9678s-projects.vercel.app",

    siteName: "부동산 상위 10%",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "부동산 상위 10% 대표 이미지",
      },
    ],

    locale: "ko_KR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "부동산 상위 10%",

    description:
      "핵심지역 분석과 투자 정보를 확인하세요.",

    images: [
      "/og-image.jpg",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}