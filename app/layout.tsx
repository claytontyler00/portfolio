import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-serif",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-sans",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://claytontyler.com");

export const metadata: Metadata = {
  title: "Clayton Tyler · Design leader who runs AI",
  description:
    "Head of AI, Specialty at Artera. Product design leader running AI squads in healthcare. Portfolio, case studies, writing.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Clayton Tyler · Design leader who runs AI",
    description:
      "Product design leader who runs AI squads in healthcare. Selected work, case studies, and writing.",
    url: "/",
    siteName: "Clayton Tyler",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clayton Tyler · Design leader who runs AI",
    description: "Product design leader who runs AI squads in healthcare.",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#f5efe6",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
