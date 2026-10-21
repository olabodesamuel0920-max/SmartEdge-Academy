import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ChatWidget from "@/components/ChatWidget";
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
  title: "SmartEdge Academy & Consult | Building Minds, Shaping Futures",
  description:
    "Lagos' premier exam prep center offering WAEC, NECO, GCE & JAMB classes, digital exam services, educational books, and AI-powered study tools. Located in Abule Egba, Lagos.",
  keywords: [
    "WAEC",
    "NECO",
    "JAMB",
    "GCE",
    "exam prep",
    "Lagos",
    "Abule Egba",
    "scratch card",
    "AI tutor",
    "study",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <ChatWidget />
      </body>
    </html>
  );
}
