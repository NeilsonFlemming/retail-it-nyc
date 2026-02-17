import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top section */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <Link href="/" className="inline-flex items-center gap-2 mb-4">
                <Image
                  src="/images/logo.svg"
                  alt="Retail IT NYC"
                  width={32}
                  height={32}
                  className="w-8 h-8 brightness-0 invert"
                />
                <span className="text-lg font-bold">
                  Retail IT <span className="text-accent">NYC</span>
                </span>
              </Link>
              <p className="text-slate-400 leading-relaxed max-w-sm">
                Helping retailers develop and implement IT strategies that
                address today&apos;s challenges and tomorrow&apos;s
                opportunities.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#services"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#why-us"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    Why Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">
                Contact
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:support@retailit.nyc"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    support@retailit.nyc
                  </a>
                </li>
                <li>
                  <span className="text-slate-300">New York City, NY</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-400">
              &copy; {new Date().getFullYear()} Retail IT NYC. All rights
              reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="#"
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
