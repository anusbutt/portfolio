import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Anus Butt — Full-stack Developer, AI Engineer & Founder",
  description:
    "Full-stack developer, AI engineer, and founder of Omniveer building production-ready websites, dashboards, APIs, databases, AI products, and business automation.",
  icons: {
    icon: [{ url: "/logo.png.png", type: "image/png" }],
    shortcut: "/logo.png.png",
    apple: "/logo.png.png",
  },
  openGraph: {
    title: "Anus Butt — Full-stack Developer, AI Engineer & Founder",
    description:
      "Full-stack web systems and practical AI products for real businesses, built end to end.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-dark text-white antialiased">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
