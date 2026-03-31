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
  description: "Fuerza salvaje, frescura pura. El ceviche como nunca lo has experimentado.",
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
        {children}
      </body>
    </html>
  );
}
