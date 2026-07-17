import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Anus Butt — AI Engineer & Founder of Omniveer",
  description:
    "I build AI workers for real businesses. AI engineer and founder of Omniveer, building practical AI systems that qualify leads, automate outbound workflows, and keep humans in control.",
  openGraph: {
    title: "Anus Butt — AI Engineer & Founder of Omniveer",
    description:
      "I build AI workers for real businesses. Practical AI systems that qualify leads, automate outbound workflows, and keep humans in control.",
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
