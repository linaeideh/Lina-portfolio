
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "../src/index.css";
import { ThemeProvider } from "../src/context/ThemeContext";
import Navbar from "../src/components/common/Navbar";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Lina Eideh | Frontend Developer Portfolio",
  description: "Explore the portfolio of Lina Eideh, a passionate Frontend Developer specializing in creating responsive, high-performance web applications with Next.js, React, and modern UI/UX principles.",
  keywords: ["Lina Eideh", "Frontend Developer", "React Portfolio", "Next.js 14", "Web Development", "UI/UX Design"],
  authors: [{ name: "Lina Eideh" }],
  openGraph: {
    title: "Lina Eideh | Frontend Developer",
    description: "Architecture in the digital realm - Creating immersive user experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} antialiased`}>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
