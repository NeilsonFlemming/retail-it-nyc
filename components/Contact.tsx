export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="animate-on-scroll relative bg-navy rounded-3xl overflow-hidden px-6 py-12 md:px-16 md:py-20">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg
              className="w-full h-full"
              viewBox="0 0 800 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="400" cy="200" r="300" stroke="white" strokeWidth="1" />
              <circle cx="400" cy="200" r="200" stroke="white" strokeWidth="1" />
              <circle cx="400" cy="200" r="100" stroke="white" strokeWidth="1" />
            </svg>
          </div>

          <div className="relative max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold tracking-wide uppercase text-accent mb-4">
              Ready to Get Started?
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
              Let&apos;s Build Your Retail Technology Strategy
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto">
              Whether you need a full technology consultation, custom system
              integrations, or reliable 24/7 support, our team is ready to help
              your retail business thrive.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href="mailto:support@retailit.nyc"
                className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-accent hover:bg-accent-hover rounded-lg transition-colors shadow-lg shadow-accent/25"
              >
                <svg
                  className="w-5 h-5 mr-2"
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
                support@retailit.nyc
              </a>
            </div>

            {/* Trust signals */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div className="text-center">
                <p className="text-3xl font-extrabold text-white mb-1">25+</p>
                <p className="text-sm text-slate-400">Years of Experience</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-extrabold text-white mb-1">24/7</p>
                <p className="text-sm text-slate-400">Support Available</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-extrabold text-white mb-1">NYC</p>
                <p className="text-sm text-slate-400">Based &amp; Operating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
