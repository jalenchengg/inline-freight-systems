import type { Metadata } from "next";
import { Inter, Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display",
});
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Inline Freight Systems | Ocean, Air & Ground Freight",
  description:
    "Inline Freight Systems connects your cargo to a vetted carrier network worldwide. Ocean, air, FTL/LTL, and customs — one contact, one invoice.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${plexMono.variable}`}
    >
      <body style={{ fontFamily: "var(--font-body), system-ui, sans-serif" }}>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
