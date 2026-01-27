import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tstourtravels.com"),
  title: {
    default: "TS TOUR & TRAVEL",
    template: "%s | TS TOUR & TRAVEL",
  },
  description:
    "Experience the best travel agency services. We offer affordable tour packages, hotel bookings, and flight tickets worldwide.",
  keywords: [
    "tour and travel",
    "travel agency",
    "tour packages",
    "TS Tour",
    "flight booking",
    "travel deals",
  ],
  authors: [{ name: "TS TOUR & TRAVEL" }],
  icons: {
    icon: "/assets/logo/logo.png",
    apple: "/assets/logo/logo.png",
  },
  openGraph: {
    title: "TS TOUR & TRAVEL",
    description: "Your trusted partner for global exploration.",
    url: "https://tstourtravels.com",
    siteName: "TS TOUR & TRAVEL",
    images: [
      {
        url: "/assets/office/image6.jpeg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
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
