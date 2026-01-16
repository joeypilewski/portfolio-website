import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header, Footer } from "@/components";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Joey Pilewski · Technical Solutions Architect",
    template: "%s | Joey Pilewski",
  },
  description:
    "Technical Solutions Architect designing systems that bridge business operations and technical solutions. Specializing in NetSuite ERP, AI-augmented development, and enterprise strategy.",
  keywords: [
    "Technical Solutions Architect",
    "NetSuite",
    "ERP",
    "Business Systems",
    "AI Development",
    "OpenAI API",
    "Operations Architecture",
    "Enterprise Strategy",
    "Joey Pilewski",
    "Long Island",
  ],
  authors: [{ name: "Joey Pilewski" }],
  creator: "Joey Pilewski",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://joeypilewski.com",
    siteName: "Joey Pilewski",
    title: "Joey Pilewski · Technical Solutions Architect",
    description:
      "Technical Solutions Architect designing systems that bridge business operations and technical solutions. Specializing in NetSuite ERP, AI-augmented development, and enterprise strategy.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joey Pilewski · Technical Solutions Architect",
    description:
      "Technical Solutions Architect designing systems that bridge business operations and technical solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "theme-color": "#0a0a0a",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <Header />
        <main className="max-w-content mx-auto px-6 py-8">{children}</main>
        <div className="max-w-content mx-auto px-6">
          <Footer />
        </div>
      </body>
    </html>
  );
}
