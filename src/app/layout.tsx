import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH?.trim();
const siteBasePath = configuredBasePath
  ? `/${configuredBasePath.replace(/^\/+|\/+$/g, "")}`
  : "";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WeGrowth | Enterprise Consulting, AI Enablement & Digital Growth",
  description:
    "WeGrowth partners with enterprises on strategic business consulting, AI enablement, and digital product design & development to achieve measurable, sustainable growth.",
  icons: {
    icon: `${siteBasePath}/wegrowth-logo-v2.png`,
    shortcut: `${siteBasePath}/wegrowth-logo-v2.png`,
    apple: `${siteBasePath}/wegrowth-logo-v2.png`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
