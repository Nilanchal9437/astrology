"use client";

import Image from "next/image";
import { useState } from "react";
import Container from "@/src/components/Container";
import { ChevronDown, Lock, Sparkles, Zap } from "lucide-react";

export default function Home() {
  const currentYear = new Date().getFullYear();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const getPast100Years = (): number[] => {
    const currentYear = new Date().getFullYear();

    return Array.from({ length: 100 }, (_, i) => currentYear - i);
  };

  const years: number[] = getPast100Years();

  for (let y = currentYear - 120; y >= currentYear - 18; y--) years.push(y);

  const [month, setMonth] = useState<string>("");
  const [day, setDay] = useState<string>("");
  const [year, setYear] = useState<string>("");

  return (
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
      <div className="lg:h-[85vh] bg-[rgba(2,11,26,0.15)] shadow-[0_30px_80px_rgba(0,0,0,0.65),0_0_60px_rgba(245,208,108,0.2)]">
        <Container className="relative pt-12 bg-[rgba(2,11,26,0.15)] shadow-[0_30px_80px_rgba(0,0,0,0.65),0_0_60px_rgba(245,208,108,0.2)] md:bg-transparent md:shadow-none">
          <section className="relative overflow-hidden lg:h-[85vh]">
            <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center text-center">
              <h1 className="animate-fade-up text-balance text-4xl font-semibold tracking-tight text-[#FFFFFF] sm:text-5xl lg:text-[56px]">
                <span className="text-4xl md:text-6xl font-semibold text-center bg-gradient-to-r from-[#fdf1d0] via-[#fdf1d0] to-[#fdf1d0] bg-clip-text text-transparent tracking-wide font-serif">
                  Your Birth Chart,&nbsp;Decoded
                </span>
              </h1>
              <div className="animate-fade-up-delay-2 mt-8 w-full max-w-[520px]">
                <div className="rounded-2xl border border-white/60  p-4 bg-[#071226]/60 md:shadow-[0_30px_80px_rgba(0,0,0,0.55)] backdrop-blur sm:p-6">
                  <form
                    className="space-y-3"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="space-y-2">
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-[#e8dcc8] outline-none placeholder:text-white/40 focus:border-[#f5d06c]/45 focus:ring-2 focus:ring-[#f5d06c]/20"
                        aria-label="Full Name"
                      />
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-[#e8dcc8] outline-none placeholder:text-white/40 focus:border-[#f5d06c]/45 focus:ring-2 focus:ring-[#f5d06c]/20"
                        aria-label="Email Address"
                      />
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <div className="relative">
                        <select
                          value={month}
                          onChange={(e) => setMonth(e.target.value)}
                          className="w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 pr-8 text-sm text-[#e8dcc8] outline-none focus:border-[#f5d06c]/45 focus:ring-2 focus:ring-[#f5d06c]/20"
                          aria-label="Month"
                        >
                          <option value="" disabled>
                            Month
                          </option>
                          {months.map((m, idx) => (
                            <option key={m} value={String(idx + 1)}>
                              {m.slice(0, 3)}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#e8dcc8]/40" />
                      </div>

                      <div className="relative">
                        <select
                          value={day}
                          onChange={(e) => setDay(e.target.value)}
                          className="w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 pr-8 text-sm text-[#e8dcc8] outline-none focus:border-[#f5d06c]/45 focus:ring-2 focus:ring-[#f5d06c]/20"
                          aria-label="Day"
                        >
                          <option value="" disabled>
                            Day
                          </option>
                          {Array.from({ length: 31 }).map((_, i) => (
                            <option key={i} value={String(i + 1)}>
                              {String(i + 1).padStart(2, "0")}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#e8dcc8]/40" />
                      </div>

                      <div className="relative">
                        <select
                          value={year}
                          onChange={(e) => setYear(e.target.value)}
                          className="w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 pr-8 text-sm text-[#e8dcc8] outline-none focus:border-[#f5d06c]/45 focus:ring-2 focus:ring-[#f5d06c]/20"
                          aria-label="Year"
                        >
                          <option value="" disabled>
                            Year
                          </option>
                          {years.map((y) => (
                            <option key={y} value={String(y)}>
                              {y}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#e8dcc8]/40" />
                      </div>
                    </div>

                    <div className="flex items-center justify-center text-[11px] text-[#e8dcc8]/70">
                      <span className="text-[#f5d06c]">
                        Must be 18+ years old
                      </span>
                    </div>

                    <button
                      type="submit"
                      className="btn-gold-shimmer inline-flex h-12 w-full items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold text-[#101018] shadow-[0_10px_30px_rgba(0,0,0,0.35),inset_0_0_0_1px_rgba(255,255,255,0.35)] transition hover:brightness-[1.05] focus:outline-none focus:ring-2 focus:ring-[#f5d06c]/60 focus:ring-offset-0"
                    >
                      Get My Free Report <span aria-hidden="true">✧</span>
                    </button>

                    <p className="text-center text-[15px] font-semibold text-[#FFFFFF]">
                      12,482 readings unlocked this week
                    </p>
                  </form>
                </div>
              </div>
            </div>

            <div className="relative my-10 grid grid-cols-1 gap-2 md:grid-cols-3 lg:max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-2 rounded-xl border border-white/70 bg-white/5 px-3 py-4 shadow-[0_30px_80px_rgba(0,0,0,0.55)] backdrop-blur">
                <Lock className="h-4 w-4 text-[#f5d06c]" />
                <span className="text-[20px] font-semibold text-[#FFFFFF]">
                  Private &amp; Secure
                </span>
              </div>
              <div className="flex items-center justify-center gap-2 rounded-xl border border-white/70 bg-white/5 px-3 py-4 shadow-[0_30px_80px_rgba(0,0,0,0.55)] backdrop-blur">
                <Zap className="h-4 w-4 text-[#f5d06c]" />
                <span className="text-[20px] font-semibold text-[#FFFFFF]">
                  Instant Reading
                </span>
              </div>
              <div className="flex items-center justify-center gap-2 rounded-xl border border-white/70 bg-white/5 px-3 py-4 shadow-[0_30px_80px_rgba(0,0,0,0.55)] backdrop-blur">
                <Sparkles className="h-4 w-4 text-[#f5d06c]" />
                <span className="text-[20px] font-semibold text-[#FFFFFF]">
                  Personalized Result
                </span>
              </div>
            </div>
          </section>
        </Container>
      </div>
      {/* Zodiac separator */}
      <div className="border-t-3 border-b-3 border-white/70 shadow-[0_30px_80px_rgba(0,0,0,0.55)] backdrop-blur">
        <Container className="relative">
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 items-center justify-center gap-2 md:gap-1 lg:max-w-4xl mx-auto">
            <Image
              src="/Aries.png"
              alt="Aries"
              height={80}
              width={80}
              className="mx-auto"
            />
            <Image
              src="/Gemini.png"
              alt="Aries"
              height={80}
              width={80}
              className="mx-auto"
            />
            <Image
              src="/Cancer.png"
              alt="Aries"
              height={80}
              width={80}
              className="mx-auto"
            />
            <Image
              src="/Leo.png"
              alt="Aries"
              height={80}
              width={80}
              className="mx-auto"
            />
            <Image
              src="/Taurus.png"
              alt="Aries"
              height={80}
              width={80}
              className="mx-auto"
            />
            <Image
              src="/Aries.png"
              alt="Aries"
              height={80}
              width={80}
              className="mx-auto"
            />
            <Image
              src="/Gemini.png"
              alt="Aries"
              height={80}
              width={80}
              className="mx-auto"
            />
            <Image
              src="/Cancer.png"
              alt="Aries"
              height={80}
              width={80}
              className="mx-auto"
            />
            <Image
              src="/Leo.png"
              alt="Aries"
              height={80}
              width={80}
              className="mx-auto"
            />
            <Image
              src="/Taurus.png"
              alt="Aries"
              height={80}
              width={80}
              className="mx-auto"
            />
            <Image
              src="/Aries.png"
              alt="Aries"
              height={80}
              width={80}
              className="mx-auto"
            />
            <Image
              src="/Gemini.png"
              alt="Aries"
              height={80}
              width={80}
              className="mx-auto"
            />
          </div>
        </Container>
      </div>

      {/* Lower feature cards */}
      <div className="relative">
        <div className="hidden md:block absolute -left-2 top-[-18px] w-[310px] select-none rounded-xl border border-white/10 bg-[#060f22]/80 p-3 text-xs text-[#e8dcc8]/80 shadow-[0_18px_55px_rgba(0,0,0,0.45)] backdrop-blur mt-10">
          <div className="flex items-start gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-[#f5d06c]">
              E
            </div>
            <div className="min-w-0">
              <div className="truncate">
                <span className="font-semibold text-[#e8dcc8]">Emma</span> from
                Sydney purchased{" "}
                <span className="font-semibold text-[#f5d06c]">Leo</span> Full
                Report
              </div>
              <div className="mt-1 text-[11px] text-[#e8dcc8]/55">
                2 minutes ago
              </div>
            </div>
          </div>
        </div>

        <div className="relative bg-[#071226]/55 w-full h-full">
          <Container className="py-5">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4 lg:max-w-4xl mx-auto">
              <div className="p-5">
                <h3 className="flex items-center gap-3 text-sm font-semibold text-[#e8dcc8]">
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-[#f5d06c]">
                    ✦
                  </span>
                  Personalized Report
                </h3>
                <p className="mt-3 text-xs leading-5 text-[#e8dcc8]/65">
                  Detailed analysis of your birth chart, uncovering your unique
                  traits and life path.
                </p>
              </div>

              <div className="p-5">
                <h3 className="flex items-center gap-3 text-sm font-semibold text-[#e8dcc8]">
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-[#f5d06c]">
                    ⊙
                  </span>
                  Sun Sign Match
                </h3>
                <p className="mt-3 text-xs leading-5 text-[#e8dcc8]/65">
                  Discover your compatibility with others and find your ideal
                  connections.
                </p>
              </div>

              <div className="p-5">
                <h3 className="flex items-center gap-3 text-sm font-semibold text-[#e8dcc8]">
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-[#f5d06c]">
                    ✶
                  </span>
                  Premium Insights
                </h3>
                <p className="mt-3 text-xs leading-5 text-[#e8dcc8]/65">
                  Unlock deep understanding of career, love, and challenges with
                  advanced astrological data.
                </p>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </main>
  );
}
