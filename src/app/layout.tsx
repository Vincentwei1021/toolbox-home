import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Toolbox Lite — Free AI-Powered Online Tools",
  description:
    "12+ free online tools powered by AI. QR codes, email validation, translation, PDF extraction, screenshots, and more. No sign-up required.",
  keywords: [
    "free online tools",
    "AI tools",
    "QR code generator",
    "email validator",
    "text summarizer",
    "screenshot tool",
    "PDF extractor",
    "translator",
    "JSON formatter",
    "IP lookup",
    "color converter",
    "timestamp converter",
  ],
  metadataBase: new URL("https://toolboxlite.com"),
  openGraph: {
    title: "Toolbox Lite — Free AI-Powered Online Tools",
    description:
      "12+ free online tools powered by AI. QR codes, email validation, translation, PDF extraction, screenshots, and more.",
    url: "https://toolboxlite.com",
    siteName: "Toolbox Lite",
    type: "website",
    locale: "en_US",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Toolbox Lite — Free AI-Powered Online Tools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Toolbox Lite — Free AI-Powered Online Tools",
    description:
      "12+ free online tools powered by AI. No sign-up required.",
  },
  alternates: {
    canonical: "https://toolboxlite.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5881105388002876"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
