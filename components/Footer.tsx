import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-void border-t border-edge">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top section */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <Link href="/" className="inline-flex items-center gap-2.5 mb-4">
                <Image
                  src="/images/logo.svg"
                  alt="Retail IT NYC"
                  width={32}
                  height={32}
                  className="w-8 h-8 brightness-0 invert opacity-80"
                />
                <span className="text-lg font-medium tracking-tight text-cream">
                  Retail IT{" "}
                  <span className="text-gold font-bold">NYC</span>
                </span>
              </Link>
              <p className="text-stone leading-relaxed max-w-sm text-[15px]">
                Helping retailers develop and implement IT strategies that
                address today&apos;s challenges and tomorrow&apos;s
                opportunities.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-dimmed mb-5">
                Quick Links
              </p>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#services"
                    className="text-stone hover:text-cream transition-colors duration-300 text-[15px]"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#why-us"
                    className="text-stone hover:text-cream transition-colors duration-300 text-[15px]"
                  >
                    Why Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-stone hover:text-cream transition-colors duration-300 text-[15px]"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-dimmed mb-5">
                Contact
              </p>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:support@retailit.nyc"
                    className="text-stone hover:text-gold transition-colors duration-300 text-[15px]"
                  >
                    support@retailit.nyc
                  </a>
                </li>
                <li>
                  <span className="text-stone text-[15px]">
                    New York City, NY
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="py-6 border-t border-edge">
          <p className="text-sm text-dimmed text-center">
            &copy; {new Date().getFullYear()} Retail IT NYC. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
