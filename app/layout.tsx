import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Anus Butt — AI Engineer & Full-stack Engineer",
  description:
    "AI engineer and full-stack engineer building auditable agent systems, developer tools, and production web applications with TypeScript, Python, FastAPI, and PostgreSQL.",
  icons: {
    icon: [{ url: "/logo.png.png", type: "image/png" }],
    shortcut: "/logo.png.png",
    apple: "/logo.png.png",
  },
  openGraph: {
    title: "Anus Butt — AI Engineer & Full-stack Engineer",
    description:
      "Auditable AI systems, developer tools, and full-stack applications—built and shipped end to end.",
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
