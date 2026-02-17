export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-void">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="animate-on-scroll relative bg-elevated rounded-lg overflow-hidden px-6 py-16 md:px-16 md:py-24 border border-edge">
          {/* Geometric grid pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="grid"
                  width="60"
                  height="60"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 60 0 L 0 0 0 60"
                    fill="none"
                    stroke="#C9A84C"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Subtle radial glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gold/[0.03] rounded-full blur-3xl" />

          <div className="relative max-w-3xl mx-auto text-center">
            <p className="text-xs font-medium tracking-[0.25em] uppercase text-gold mb-4">
              Ready to Get Started?
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mb-6">
              Let&apos;s Build Your Retail Technology Strategy
            </h2>
            <p className="text-lg text-stone leading-relaxed mb-12 max-w-2xl mx-auto">
              Whether you need a full technology consultation, custom system
              integrations, or reliable 24/7 support, our team is ready to help
              your retail business thrive.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <a
                href="mailto:support@retailit.nyc"
                className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-[16px] font-semibold text-black bg-gold hover:bg-gold-light rounded transition-all duration-300 shadow-lg shadow-gold/20"
              >
                <svg
                  className="w-5 h-5 mr-2.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                Reach Out
              </a>
            </div>

            {/* Gold divider */}
            <div className="mx-auto w-24 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent mb-12" />

            {/* Trust signals */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-gold mb-1">
                  25+
                </p>
                <p className="text-sm text-dimmed">Years of Experience</p>
              </div>
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-gold mb-1">
                  24/7
                </p>
                <p className="text-sm text-dimmed">Support Available</p>
              </div>
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-gold mb-1">
                  NYC
                </p>
                <p className="text-sm text-dimmed">Based &amp; Operating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
