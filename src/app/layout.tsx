import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Noto_Kufi_Arabic, Tajawal } from "next/font/google";
import { siteConfig } from "@/config/site";
import { SiteFooter, SiteHeader } from "@/components/features/layout";
import { cn } from "@/lib/cn";
import "@/styles/globals.css";

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-tajawal",
  display: "swap",
});

const notoKufiArabic = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  weight: ["400", "700", "800"],
  variable: "--font-kufi",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    locale: "ar_SA",
    type: "website",
    siteName: siteConfig.name,
  },
};

export const viewport: Viewport = {
  themeColor: "#087a55",
  width: "device-width",
  initialScale: 1,
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang={siteConfig.locale}
      dir={siteConfig.direction}
      className={cn(tajawal.variable, notoKufiArabic.variable)}
    >
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main-content"
          className="sr-only right-0 top-0 z-[60] rounded-sm bg-brand px-4 py-2 text-white focus:not-sr-only focus:fixed focus:right-4 focus:top-4"
        >
          تخطَّ إلى المحتوى
        </a>
        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
