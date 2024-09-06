import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { cn } from "@/lib/utils";
import { Anek_Telugu } from "next/font/google";


const AnekTelugu = Anek_Telugu({
  subsets: ["latin"],
  variable: "--font-caption",
});

export const metadata: Metadata = {
  title: "Melvyn Malherbe . Sofware Engineer",
  description: "Online creator and editor about React, Tailwind, Next.js and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body 
      className={cn(
        GeistSans.variable, 
        GeistMono.variable, 
        AnekTelugu.variable, 
        "font-sans h-full bg-background text-foreground")}>{children}</body>
    </html>
  );
}
