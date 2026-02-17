"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-void border-b border-edge"
          : "bg-gradient-to-b from-void/80 to-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 shrink-0"
            aria-label="Retail IT NYC Home"
          >
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

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Main navigation"
          >
            <Link
              href="#services"
              className="text-sm font-medium text-cream/60 hover:text-cream transition-colors duration-300"
            >
              Services
            </Link>
            <Link
              href="#why-us"
              className="text-sm font-medium text-cream/60 hover:text-cream transition-colors duration-300"
            >
              Why Us
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-cream/60 hover:text-cream transition-colors duration-300"
            >
              Contact
            </Link>
            <a
              href="mailto:support@retailit.nyc"
              className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-gold border border-gold/40 hover:border-gold hover:bg-gold/5 rounded transition-all duration-300"
            >
              Get in Touch
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            <span className="sr-only">Menu</span>
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-px bg-cream transition-all duration-300 ${
                  mobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block h-px bg-cream transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-px bg-cream transition-all duration-300 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className="bg-elevated border-t border-edge px-4 py-6 space-y-4"
          aria-label="Mobile navigation"
        >
          <Link
            href="#services"
            className="block text-[16px] font-medium text-cream/70 hover:text-gold transition-colors duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="#why-us"
            className="block text-[16px] font-medium text-cream/70 hover:text-gold transition-colors duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            Why Us
          </Link>
          <Link
            href="#contact"
            className="block text-[16px] font-medium text-cream/70 hover:text-gold transition-colors duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <a
            href="mailto:support@retailit.nyc"
            className="block w-full text-center px-5 py-3 text-sm font-medium text-gold border border-gold/40 hover:border-gold rounded transition-all duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get in Touch
          </a>
        </nav>
      </div>
    </header>
  );
}
