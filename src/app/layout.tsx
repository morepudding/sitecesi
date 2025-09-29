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
  title: "CESI La Rochelle - Newcomers Guide | If I Had Known...",
  description: "A comprehensive guide for new CESI La Rochelle students featuring advice using the third conditional. Learn from former students' experiences about campus life, studies, technology, and living in La Rochelle.",
  keywords: [
    "CESI La Rochelle",
    "student guide", 
    "third conditional",
    "English learning",
    "campus life",
    "study tips",
    "France education",
    "newcomers guide"
  ],
  authors: [{ name: "CESI Students" }],
  openGraph: {
    title: "CESI La Rochelle - If I Had Known... Student Guide",
    description: "Learn from former students' experiences using the third conditional. Essential advice for new CESI La Rochelle students.",
    type: "website",
    locale: "en_US"
  }
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
