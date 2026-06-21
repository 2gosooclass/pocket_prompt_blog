import type { Metadata } from "next";
import { Inter, Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-sans-kr",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pocketpromptlab.com"),
  title: {
    default: "2GOSOO AI Prompt Lab",
    template: "%s | 2GOSOO AI Prompt Lab",
  },
  description:
    "실무에 바로 적용하는 고효율 AI 프롬프트 라이브러리. 마케팅, 개발, 기획 등 다양한 분야의 검증된 프롬프트를 제공합니다.",
  keywords: [
    "ChatGPT 프롬프트", "AI 활용법", "ChatGPT 한국어", "프롬프트 엔지니어링",
    "해외 한인", "AI 튜토리얼", "Claude 프롬프트", "AI 영어 이메일",
  ],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://pocketpromptlab.com",
    siteName: "2GOSOO AI Prompt Lab",
    title: "2GOSOO AI Prompt Lab",
    description: "실무에 바로 적용하는 고효율 AI 프롬프트 라이브러리.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "2GOSOO AI Prompt Lab" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "2GOSOO AI Prompt Lab",
    description: "실무에 바로 적용하는 고효율 AI 프롬프트 라이브러리",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className={`${inter.variable} ${notoSansKr.variable}`}>
      <head>
        {/* [TODO: AdSense] Add Google AdSense Auto Ads Script here after domain connection */}
        {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXX" crossOrigin="anonymous"></script> */}

        {/* [TODO: CMP] Add TCF v2.3 Consent Management Platform (CMP) script here (e.g. CookieYes, Osano) */}
        {/* <script id="cookieyes" type="text/javascript" src="https://cdn-cookieyes.com/client_data/XXXXXXXX/script.js"></script> */}
      </head>
      <body>
        <Navbar />
        <main style={{ paddingTop: "64px", minHeight: "100vh" }}>
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}

