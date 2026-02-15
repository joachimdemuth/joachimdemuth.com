import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { ViewTransition } from "react";
import { GradientText } from "./components/gradient-text";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joachim Demuth",
  description:
    "Designer turned tech lead based in Copenhagen. Building products at P-Secure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="mx-auto max-w-[640px] px-6 py-16 md:py-10">
          <nav className="mb-16 flex items-center gap-6 text-sm text-muted">
            <Link href="/">
              <GradientText>home</GradientText>
            </Link>
            <span className="nav-tooltip cursor-default">
              <GradientText>projects</GradientText>
            </span>
            <Link href="/music">
              <GradientText>music</GradientText>
            </Link>
            <Link href="/photos">
              <GradientText>photos</GradientText>
            </Link>
            <Link href="/notes">
              <GradientText>notes</GradientText>
            </Link>
          </nav>
          <ViewTransition>{children}</ViewTransition>
          <Analytics />
          <SpeedInsights />
        </div>
      </body>
    </html>
  );
}
