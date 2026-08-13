import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { profile } from "@/content/profile";
import { siteUrl } from "@/content/site";
import CustomCursor from "@/components/client/CustomCursor";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: profile.title + " — " + profile.name,
    template: "%s — " + profile.name,
  },
  description: profile.description,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: profile.title + " — " + profile.name,
    description: profile.description,
    url: siteUrl,
    siteName: profile.name + " Portfolio",
    type: "website",
    images: [{ url: "/logo.png", alt: profile.name + " portfolio" }],
  },
  twitter: {
    card: "summary",
    title: profile.title + " — " + profile.name,
    description: profile.description,
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable} data-scroll-behavior="smooth">
      <body className="min-h-screen bg-dark text-white antialiased">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}