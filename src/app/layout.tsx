import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Homestone Labs — The permanent data spine for every property in America.",
  description:
    "Homestone builds the data infrastructure for real estate investors, flippers, and contractors. Starting with FlipWalk — AI-powered property walkthroughs that generate professional scopes of work.",
  openGraph: {
    title: "Homestone Labs",
    description:
      "The permanent data spine for every property in America. AI-powered tools for real estate investors and contractors.",
    url: "https://homestone.io",
    siteName: "Homestone Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Homestone Labs",
    description:
      "The permanent data spine for every property in America. AI-powered tools for real estate investors and contractors.",
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🏠</text></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
