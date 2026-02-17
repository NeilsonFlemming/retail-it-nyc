import Image from "next/image";

const differentiators = [
  {
    title: "Collaborative Approach",
    description:
      "We make it a point to get to know and work with our clients so that we can tailor the necessary solutions to their needs. Together, we identify and analyze the challenges that must be dealt with and implement the best solutions, helping you adapt to the ever-evolving retail landscape.",
    image: "/images/collaborative.webp",
    imageAlt:
      "Team collaborating around a table on retail technology solutions",
  },
  {
    title: "Native & Integrated Solutions",
    description:
      "We've built a global network of strategic partners who enable Retail IT NYC to provide clients with immediate and integrated solutions. We offer a diverse range of strategic, functional, and technical expertise focused exclusively on retail IT consulting and technology.",
    image: "/images/native-solutions.webp",
    imageAlt:
      "Connected technology systems and integrated retail solutions dashboard",
  },
  {
    title: "On-Time, On Budget",
    description:
      "Using the most current, agile project management tools, our team ensures there are no surprises. Your project stays within budget and launches on schedule, if not sooner.",
    image: "/images/on-time-budget.webp",
    imageAlt: "Project timeline dashboard showing on-schedule delivery metrics",
  },
];

export default function Differentiators() {
  return (
    <section id="why-us" className="py-20 md:py-32 bg-elevated">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="animate-on-scroll max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <p className="text-xs font-medium tracking-[0.25em] uppercase text-gold mb-4">
            Why Choose Us
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mb-5">
            Your Trusted Retail Technology Partner
          </h2>
          <p className="text-lg text-stone leading-relaxed">
            We bring deep industry expertise, a collaborative mindset, and a
            proven track record of delivering results.
          </p>
        </div>

        {/* Alternating feature blocks */}
        <div className="space-y-20 md:space-y-32">
          {differentiators.map((item, index) => (
            <div
              key={item.title}
              className={`animate-on-scroll flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-10 md:gap-16`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-elevated">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full border border-gold/30 text-gold font-display text-sm font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-r from-gold/20 to-transparent" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-cream mb-4">
                  {item.title}
                </h3>
                <p className="text-stone leading-relaxed text-lg">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
