const services = [
  {
    title: "Consultation",
    description:
      "With over 25 years of retail IT experience, we consult our clients across all functions in their ever-expanding ecosystems — commerce strategy, supply chain, wholesale, ecommerce, and brick & mortar.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
        />
      </svg>
    ),
  },
  {
    title: "Custom Development",
    description:
      "We help organizations maximize value from their technology investments by providing custom development services, tailoring integrations between systems to your specific business cases.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
        />
      </svg>
    ),
  },
  {
    title: "Support",
    description:
      "We understand how critical it is to keep revenue-driving systems running 24/7. We provide support for POS, e-commerce, order management, and CRM systems, to name a few.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="animate-on-scroll max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <p className="text-sm font-semibold tracking-wide uppercase text-accent mb-3">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4">
            Experts in Commerce
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            We simplify selling across all channels — brick &amp; mortar,
            online, and wholesale — so you can focus on what you do best.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`animate-on-scroll delay-${(index + 1) * 100} group relative bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 border border-transparent hover:border-slate-200`}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-6 mx-auto group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-navy mb-3 text-center">
                {service.title}
              </h3>
              <p className="text-slate-500 leading-relaxed text-center">
                {service.description}
              </p>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
