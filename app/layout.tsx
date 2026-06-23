import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Anus Yousuf — I Build AI Agents That Run Real Businesses",
  description:
    "Portfolio of Anus Yousuf — AI engineer from Karachi building agentic systems that automate real business workflows.",
  openGraph: {
    title: "Anus Yousuf — I Build AI Agents That Run Real Businesses",
    description:
      "Portfolio of Anus Yousuf — AI engineer from Karachi building agentic systems that automate real business workflows.",
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
        {children}
      </body>
    </html>
  );
}
