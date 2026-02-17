import Image from "next/image";

const differentiators = [
  {
    title: "Collaborative Approach",
    description:
      "We make it a point to get to know and work with our clients so that we can tailor the necessary solutions to their needs. Together, we identify and analyze the challenges that must be dealt with and implement the best solutions, helping you adapt to the ever-evolving retail landscape.",
    image: "/images/collaborative.jpg",
    imageAlt:
      "Team collaborating around a table on retail technology solutions",
  },
  {
    title: "Native & Integrated Solutions",
    description:
      "We've built a global network of strategic partners who enable Retail IT NYC to provide clients with immediate and integrated solutions. We offer a diverse range of strategic, functional, and technical expertise focused exclusively on retail IT consulting and technology.",
    image: "/images/native-solutions.jpg",
    imageAlt:
      "Connected technology systems and integrated retail solutions dashboard",
  },
  {
    title: "On-Time, On Budget",
    description:
      "Using the most current, agile project management tools, our team ensures there are no surprises. Your project stays within budget and launches on schedule, if not sooner.",
    image: "/images/on-time-budget.jpg",
    imageAlt: "Project timeline dashboard showing on-schedule delivery metrics",
  },
];

export default function Differentiators() {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="animate-on-scroll max-w-3xl mx-auto text-center mb-12 md:mb-20">
          <p className="text-sm font-semibold tracking-wide uppercase text-accent mb-3">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4">
            Your Trusted Retail Technology Partner
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            We bring deep industry expertise, a collaborative mindset, and a
            proven track record of delivering results.
          </p>
        </div>

        {/* Alternating feature blocks */}
        <div className="space-y-16 md:space-y-24">
          {differentiators.map((item, index) => (
            <div
              key={item.title}
              className={`animate-on-scroll flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-8 md:gap-16`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent text-sm font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="h-px flex-1 bg-slate-200" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                  {item.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-lg">
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
