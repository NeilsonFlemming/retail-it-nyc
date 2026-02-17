import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-void pt-32 pb-20 md:pt-44 md:pb-32">
      {/* Background image with warm dark overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/nyc.webp"
          alt="New York City skyline at dusk"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,10,11,0.65)] via-[rgba(10,10,11,0.78)] to-[#0A0A0B]" />
      </div>

      {/* Subtle radial gold glow behind content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gold/[0.04] rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Eyebrow */}
          <p className="hero-animate hero-animate-delay-1 text-xs font-medium tracking-[0.25em] uppercase text-gold mb-6 md:mb-8">
            Retail IT Consulting &middot; New York City
          </p>

          {/* Decorative gold line */}
          <div className="hero-line mx-auto w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent mb-8 md:mb-10" />

          {/* Headline */}
          <h1 className="hero-animate hero-animate-delay-3 font-display text-4xl md:text-5xl lg:text-7xl font-bold text-cream leading-[1.1] mb-6 tracking-tight">
            Helping Retailers Build{" "}
            <span className="text-gold">Smarter</span> IT Strategies
          </h1>

          {/* Subtitle */}
          <p className="hero-animate hero-animate-delay-4 text-lg md:text-xl text-stone leading-relaxed mb-10 md:mb-12 max-w-2xl mx-auto">
            With over 25 years of experience, we help retailers develop and
            implement technology strategies that address today&apos;s challenges
            and tomorrow&apos;s opportunities.
          </p>

          {/* CTAs */}
          <div className="hero-animate hero-animate-delay-5 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:support@retailit.nyc"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-[16px] font-semibold text-black bg-gold hover:bg-gold-light rounded transition-all duration-300 shadow-lg shadow-gold/20"
            >
              Schedule a Consultation
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-[16px] font-medium text-cream/80 border border-cream/20 hover:border-cream/40 hover:text-cream rounded transition-all duration-300"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
