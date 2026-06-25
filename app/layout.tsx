// Root layout — wraps every page in the app.
// Defines the <html>/<body> shell, loads fonts and global styles, and places
// the shared Navbar and Footer around the page content.
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// next/font self-hosts Google fonts and exposes them as CSS variables
// (referenced from globals.css as --font-geist-sans / --font-geist-mono).
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Default <title> and <meta description> for the site (used for SEO and
// browser tabs). The favicon comes from app/icon.png automatically.
export const metadata: Metadata = {
  title: "Vantgrove",
  description:
    "Vantgrove is a platform for strategic advisory, venture creation, and practical innovation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      {/* Flex column so the footer can sit at the bottom (min-h-full) and the
          page content (<main>) grows to fill the space between nav and footer. */}
      <body className="min-h-full flex flex-col bg-white text-zinc-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
