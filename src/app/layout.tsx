import type { Metadata } from "next";
import { Inter, Space_Mono, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
});

const spaceMono = Space_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["800"],
});

export const metadata: Metadata = {
  title: "THE BEAR CEVICHERIA ",
  description: "Técnica y alma en cada bocado. El ceviche como nunca lo has experimentado.",
  icons: {
    icon: "/logobear.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${spaceMono.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="font-sans min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-neon-blue selection:text-black">
        {/* GLOBAL SVG FILTERS */}
        <svg className="hidden">
          <defs>
            <filter id="true-neon-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feColorMatrix in="SourceGraphic" type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0.2126 0.7152 0.0722 0 0"
                result="luminanceAlpha" />
              <feComponentTransfer in="luminanceAlpha" result="cleanAlpha">
                <feFuncA type="linear" slope="5" intercept="-0.5" />
              </feComponentTransfer>
              <feDropShadow in="cleanAlpha" dx="0" dy="0" stdDeviation="4" floodColor="#00f3ff" floodOpacity="1" result="glow1" />
              <feDropShadow in="glow1" dx="0" dy="0" stdDeviation="15" floodColor="#00f3ff" floodOpacity="1" result="glow2" />
              <feDropShadow in="glow2" dx="0" dy="0" stdDeviation="30" floodColor="#00f3ff" floodOpacity="0.8" result="glow3" />
            </filter>
          </defs>
        </svg>

        {children}
      </body>
    </html>
  );
}
