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
    default: "Joey Pilewski · Ops & Systems Analyst",
    template: "%s | Joey Pilewski",
  },
  description:
    "Ops & Systems Analyst specializing in NetSuite ERP, operations, and AI-powered tooling. I turn messy workflows into reliable systems.",
  keywords: [
    "NetSuite",
    "ERP",
    "Operations",
    "Systems Analyst",
    "AI",
    "Automation",
    "Consulting",
  ],
  authors: [{ name: "Joey Pilewski" }],
  creator: "Joey Pilewski",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://joeypilewski.com",
    siteName: "Joey Pilewski",
    title: "Joey Pilewski · Ops & Systems Analyst",
    description:
      "Ops & Systems Analyst specializing in NetSuite ERP, operations, and AI-powered tooling.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joey Pilewski · Ops & Systems Analyst",
    description:
      "Ops & Systems Analyst specializing in NetSuite ERP, operations, and AI-powered tooling.",
  },
  robots: {
    index: true,
    follow: true,
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
