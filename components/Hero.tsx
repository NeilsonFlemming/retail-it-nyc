import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/nyc.jpeg"
          alt="New York City skyline at dusk"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/70 to-navy" />
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="inline-block text-sm font-semibold tracking-wide uppercase text-accent mb-4 md:mb-6">
            Retail IT Consulting &middot; New York City
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Helping Retailers Build{" "}
            <span className="text-accent">Smarter</span> IT Strategies
          </h1>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto">
            With over 25 years of experience, we help retailers develop and
            implement technology strategies that address today&apos;s challenges
            and tomorrow&apos;s opportunities.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:support@retailit.nyc"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-accent hover:bg-accent-hover rounded-lg transition-colors shadow-lg shadow-accent/25"
            >
              Schedule a Consultation
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-base font-semibold text-white border-2 border-white/20 hover:border-white/40 rounded-lg transition-colors"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute -bottom-px left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 80V40C240 0 480 0 720 40C960 80 1200 80 1440 40V80H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
