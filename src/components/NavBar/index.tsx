"use client";

import Link from "next/link";
import Image from "next/image";
import Container from "@/src/components/Container";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#030b1a]/65 backdrop-blur">
      <Container className="mx-auto flex w-full items-center justify-between py-4">
        <Link href="/" className="group inline-flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="logo"
            height={50}
            width={50}
            className="grid place-items-center"
          /> 
          <span className="text-sm font-semibold tracking-wide text-[#e8dcc8] sm:text-base">
            Celestial Insights
          </span>
        </Link>

        <nav className="items-center gap-7 text-sm text-[#e8dcc8]/85 flex">
          <Link href="/" className="hidden md:inline-block transition hover:text-[#f5d06c]">
            Home
          </Link>
          <Link href="/readings" className="hidden md:inline-block transition hover:text-[#f5d06c]">
            Readings
          </Link>
          <Link
            href="/daily-horoscope"
            className="hidden md:inline-block transition hover:text-[#f5d06c]"
          >
            Daily Horoscope
          </Link>
          <Link href="/about" className="hidden md:inline-block transition hover:text-[#f5d06c]">
            About Us
          </Link>
          <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#e8dcc8] shadow-[0_0_0_1px_rgba(255,255,255,0.03)] transition hover:border-[#f2d178]/45 hover:bg-white/10 md:hidden"
          >
            <span className="relative block h-4 w-4">
              <span
                className={[
                  "absolute left-0 top-0 h-[2px] w-full rounded bg-current transition-transform",
                  open ? "translate-y-[7px] rotate-45" : "",
                ].join(" ")}
              />
              <span
                className={[
                  "absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 rounded bg-current transition-opacity",
                  open ? "opacity-0" : "opacity-100",
                ].join(" ")}
              />
              <span
                className={[
                  "absolute left-0 bottom-0 h-[2px] w-full rounded bg-current transition-transform",
                  open ? "-translate-y-[7px] -rotate-45" : "",
                ].join(" ")}
              />
            </span>
          </button>

          <Link
            href="/login"
            className="h-9 hidden md:inline-flex items-center justify-center rounded-md border border-[#f2d178]/35 bg-white/5 px-4 text-sm font-medium text-[#e8dcc8] shadow-[0_0_0_1px_rgba(255,255,255,0.03)] transition hover:border-[#f2d178]/60 hover:bg-white/10"
          >
            Login
          </Link>
        </div>
        </nav>

       
      </Container>

      <div className={["md:hidden", open ? "block" : "hidden"].join(" ")}>
        <div className="border-t border-white/10 bg-[#030b1a]/85 backdrop-blur">
          <Container className="py-3">
            <nav className="flex flex-col gap-1 text-sm text-[#e8dcc8]/90">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 transition hover:bg-white/5 hover:text-[#f5d06c]"
              >
                Home
              </Link>
              <Link
                href="/readings"
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 transition hover:bg-white/5 hover:text-[#f5d06c]"
              >
                Readings
              </Link>
              <Link
                href="/daily-horoscope"
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 transition hover:bg-white/5 hover:text-[#f5d06c]"
              >
                Daily Horoscope
              </Link>
              <Link
                href="/about"
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 transition hover:bg-white/5 hover:text-[#f5d06c]"
              >
                About Us
              </Link>
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="mt-1 rounded-xl border border-[#f2d178]/25 bg-white/5 px-3 py-2 font-medium text-[#e8dcc8] shadow-[0_0_0_1px_rgba(255,255,255,0.03)] transition hover:border-[#f2d178]/55 hover:bg-white/10"
              >
                Login
              </Link>
            </nav>
          </Container>
        </div>
      </div>
    </header>
  );
}
