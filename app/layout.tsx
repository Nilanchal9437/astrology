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
      <body>
        <main className="bg-cover bg-no-repeat bg-center bg-[url('/mobile-space-bg.png')] md:bg-[url('/space-bg.png')] h-[100%]">
          {/* Rotating "fire ring" + wheel behind the form */}
          <div className="pointer-events-none rounded-full absolute left-1/2 top-[10px] z-0 -translate-x-1/2">
            <div className="relative h-[265px] w-[265px] md:h-[550px] md:w-[550px] xl:h-[600px] xl:w-[600px]">
              {/* Inner glow */}
              <div className="absolute top-[25vh] md:top-[14vh]  inset-10 z-5 rounded-full bg-[radial-gradient(circle_at_center,rgba(245,208,108,0.62),transparent_65%)] blur-[8px] opacity-90" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/zodiac-wheel.png"
                alt="Zodiac wheel"
                draggable={false}
                className="absolute top-[25vh] md:top-[14vh] inset-0 z-10 h-full w-full select-none rounded-full object-cover animate-spin-slow drop-shadow-[0_0_18px_rgba(245,208,108,0.35)] drop-shadow-[0_0_48px_rgba(245,208,108,0.18)]"
              />
            </div>
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
