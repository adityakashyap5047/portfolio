import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// import icon from "@/assets/img/fghjfg.png"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Aditya Kumar - Portfolio',
  description: 'Aditya Kumar is a Software Developer with expertise in Web Developement and AI/ML. Visit the portfolio to explore projects, skills, experience, and more.',
  icons: {
    icon: "images/fghjfg.png",
    shortcut: "images/fghjfg.png",
    apple: "images/fghjfg.png",
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
