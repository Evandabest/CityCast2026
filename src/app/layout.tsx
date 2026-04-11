import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { KineticNavigation } from "@/components/ui/sterling-gate-kinetic-navigation";
import { Footer } from "@/components/layout/Footer";
import { ParallaxBackground } from "@/components/effects/ParallaxBackground";
import { CustomCursor } from "@/components/effects/CustomCursor";
import { MobileDisclaimer } from "@/components/ui/MobileDisclaimer";
import { HardwareAccelDisclaimer } from "@/components/ui/HardwareAccelDisclaimer";
import { SimpleModeToggle } from "@/components/ui/SimpleModeToggle";
import { PageTransitionProvider } from "@/components/effects/PageTransition";
import { SimpleModeProvider } from "@/hooks/useSimpleMode";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://citycast.org"),
  title: {
    default: "CityCast - CCNY Undergraduate Student Government Media Platform",
    template: "%s | CityCast",
  },
  description:
    "CityCast is a student-run campaign media platform for CCNY's Undergraduate Student Government.",
  keywords: ["CityCast", "CCNY", "City College", "student government", "USG", "student media", "videos"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://citycast.org",
    siteName: "CityCast",
    title: "CityCast - CCNY Undergraduate Student Government Media Platform",
    description: "CCNY's student-run campaign media platform",
  },
  twitter: {
    card: "summary_large_image",
    title: "CityCast",
    description: "CCNY's student-run campaign media platform",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased`}>
        <SimpleModeProvider>
          <PageTransitionProvider>
            <CustomCursor />
            <SimpleModeToggle />
            <MobileDisclaimer />
            <HardwareAccelDisclaimer />
            <ParallaxBackground />
            <div className="relative z-10 flex flex-col min-h-screen">
              <KineticNavigation />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </PageTransitionProvider>
        </SimpleModeProvider>
      </body>
    </html>
  );
}
