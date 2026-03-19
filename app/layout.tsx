import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Celestial Insights – Personalized Birth Chart Readings",
  description:
    "Enter your birth details to unlock a personalized astrology birth chart reading, daily horoscope, and in-depth celestial insights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
