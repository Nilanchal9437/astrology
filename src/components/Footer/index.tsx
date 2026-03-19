import Link from "next/link";
import Container from "@/src/components/Container";

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-white/10 bg-[#020b1a]">
      <Container className="mx-auto w-full flex-col items-center justify-center gap-3 py-10 text-xs text-[#e8dcc8]/70 sm:flex-row sm:px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          <Link href="/privacy" className="transition hover:text-[#f5d06c]">
            Privacy Policy
          </Link>
          <Link href="/terms" className="transition hover:text-[#f5d06c]">
            Terms of Service
          </Link>
          <Link href="/contact" className="transition hover:text-[#f5d06c]">
            Contact
          </Link>
        </div>
        <div className="text-center mt-4">
          © {new Date().getFullYear()} Celestial Insights. All rights reserved.
          Prive no spam. Result in seconds.
        </div>
      </Container>
    </footer>
  );
}
