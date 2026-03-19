"use client";

import { useRef } from "react";
import Container from "@/src/components/Container";
import { CalendarDays, Info, User } from "lucide-react";

export default function Home() {
  const dateRef: any = useRef(null);

  const openPicker = () => {
    if (dateRef?.current) {
      dateRef?.current?.showPicker?.(); // modern browsers
      dateRef?.current?.focus(); // fallback
    }
  };

  return (
    <main>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute h-[100vh] lg:h-[120vh] inset-0 bg-cover bg-no-repeat object-cover bg-center bg-[url('/mobile-space-bg.png')] md:bg-[url('/space-bg.png')]" />
      </div>
      <Container className="relative h-[78vh] lg:h-[100vh]">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center mt-[20vh]">
          <div className="hidden md:block">
            <div className="h-[350px] w-[350px] lg:h-[440px] lg:w-[440px] xl:h-[480px] xl:w-[480px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/zodiac-wheel.png"
                alt="Zodiac wheel"
                className="h-full w-full select-none object-cover animate-spin-slow"
                draggable={false}
              />
            </div>
          </div>

          <section className="relative">
            {/* Mobile / tablet zodiac background */}
            <div className="pointer-events-none absolute inset-0 md:hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/zodiac-wheel.png"
                alt="zodiac-wheel."
                className="absolute top-[0vh] left-[14vw] sm:top-[6vh] sm:left-[23vw] object-contain w-[65vw] sm:w-[50vw] opacity-[0.5] blur-[0.4px] animate-spin-slow"
              />
            </div>

            <div className="relative">
              <span className="animate-fade-up text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[50px] lg:leading-[1.05] bg-gradient-to-r from-[#C9A44E] via-[#F5D77A] to-[#ffebad] bg-clip-text text-transparent">
                Your Birth Chart,&nbsp;
              </span>
              <span className="animate-fade-up text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[50px] lg:leading-[1.05] text-[#FFFFFF]">
                Decoded
              </span>
              <p className="animate-fade-up-delay-1 md:max-w-[500px] mt-4 text-pretty text-sm leading-6 font-semibold text-[#FFFFFF]/80 sm:text-xl sm:leading-7">
                Enter your birth details to receive a personalized reading based
                on celestial alignment.
              </p>

              <div className="animate-fade-up-delay-2 mt-7">
                <div className="w-full md:max-w-[500px] mt-2 flex items-center gap-3 rounded-xl border border-white/10 bg-[#0a1428]/70 px-4 py-3.5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)]">
                  {/* Date Input */}
                  <input
                    ref={dateRef}
                    type="date"
                    className="w-full bg-transparent text-sm text-[#e8dcc8] outline-none 
                   [&::-webkit-calendar-picker-indicator]:opacity-0 
                   [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                  />

                  {/* Calendar Icon */}
                  <button
                    type="button"
                    onClick={openPicker}
                    className="grid h-9 w-9 place-items-center text-[#f5d06c] hover:scale-105 transition"
                  >
                    <CalendarDays />
                  </button>
                </div>

                <div className="flex items-center gap-4 text-[11px] text-[#e8dcc8]/70">
                  <span className="grid h-4 w-4 place-items-center text-[#f5d06c]">
                    <Info />
                  </span>
                  <span className="text-[#f5d06c] text-sm mt-2">
                    Must be 18+ years old
                  </span>
                </div>

                <button
                  type="button"
                  className="w-full md:max-w-[500px] btn-gold-shimmer mt-4 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold text-[#101018] shadow-[0_10px_30px_rgba(0,0,0,0.35),inset_0_0_0_1px_rgba(255,255,255,0.35)] transition hover:brightness-[1.05] focus:outline-none focus:ring-2 focus:ring-[#f5d06c]/60 focus:ring-offset-0"
                >
                  Reveal My Reading <span aria-hidden="true">✧</span>
                </button>

                <div className="flex items-center gap-2 mt-2">
                  <div className="flex items-center gap-2 text-xs bg-[#a79104b5] rounded-full w-fit py-1 px-2">
                    <span className="grid h-6 w-6 place-items-center text-[#f5d06c]">
                      <User />
                    </span>
                    <span className="font-semibold bg-gradient-to-r from-[#C9A44E] via-[#F5D77A] to-[#ffebad] bg-clip-text text-transparent">
                      1,200+
                    </span>
                  </div>
                  <span className="text-[#FFFFFF]">
                    people currently online
                  </span>
                </div>
              </div>

              {/* Toast-style social proof */}
              {/* <div className="animate-slide-in pointer-events-none absolute -bottom-10 right-0 hidden w-[290px] select-none rounded-xl border border-white/10 bg-[#060f22]/80 p-3 text-xs text-[#e8dcc8]/80 shadow-[0_18px_55px_rgba(0,0,0,0.45)] backdrop-blur sm:block">
                  <div className="flex items-start gap-3">
                    <div className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 text-[#f5d06c]">
                      ★
                    </div>
                    <div className="min-w-0">
                      <div className="truncate text-[#e8dcc8]">
                        <span className="font-semibold">Sarah</span> from London
                        just bought her <span className="font-semibold">Leo</span>{" "}
                        Full Report
                      </div>
                      <div className="mt-0.5 text-[11px] text-[#e8dcc8]/55">
                        3 minutes ago
                      </div>
                    </div>
                  </div>
                </div> */}
            </div>
          </section>
        </div>
      </Container>
    </main>
  );
}
