import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Egide Mbonigaba | UI/UX Designer & Full-Stack Developer",
  description: "Portfolio of Egide Mbonigaba, a UI/UX Designer and Full-Stack Developer specializing in creating beautiful, accessible, and user-centered digital experiences.",
  keywords: ["UI/UX Designer", "Full-Stack Developer", "Web Developer", "Portfolio", "Egide Mbonigaba", "Rwanda"],
  authors: [{ name: "Egide Mbonigaba" }],
  creator: "Egide Mbonigaba",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com",
    title: "Egide Mbonigaba | UI/UX Designer & Developer",
    description: "Portfolio showcasing my work in UI/UX design and full-stack development",
    siteName: "Egide Mbonigaba Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Egide Mbonigaba | Portfolio",
    description: "UI/UX Designer & Full-Stack Developer",
    creator: "@Stranger1144261",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
        style={{ fontFamily: "var(--font-sans, 'Space Grotesk', sans-serif)" }}
      >
        {children}
      </body>
    </html>
  );
}
