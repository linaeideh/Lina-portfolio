
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "../src/index.css";
import { ThemeProvider } from "../src/context/ThemeContext";
import Navbar from "../src/components/common/Navbar";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

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
          <Analytics />
        </ThemeProvider>
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "vbmkj9cjza");
          `}
        </Script>
      </body>
    </html>
  );
}
