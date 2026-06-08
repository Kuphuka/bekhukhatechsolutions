import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ExternalLink } from "lucide-react";
import portfolioWebsite from "@/assets/portfolio-website.jpg";
import portfolioRestaurant from "@/assets/portfolio-restaurant.jpg";
import portfolioEcommerce from "@/assets/portfolio-ecommerce.jpg";
import portfolioLogos from "@/assets/portfolio-logos.jpg";

const projects = [
  {
    title: "Business Consulting Website",
    category: "Website Development",
    image: portfolioWebsite,
    description: "A professional corporate website for a Johannesburg-based consulting firm with lead capture and service pages.",
  },
  {
    title: "Restaurant & Menu Platform",
    category: "Website Development",
    image: portfolioRestaurant,
    description: "An inviting website with online menu, booking form, and Google Maps integration for a local eatery.",
  },
  {
    title: "Fashion E-Commerce Store",
    category: "Website Development",
    image: portfolioEcommerce,
    description: "A modern online store with product catalogue, cart functionality, and mobile-first design.",
  },
  {
    title: "Brand Logo Collection",
    category: "Logo Design",
    image: portfolioLogos,
    description: "Custom logo designs created for various South African small businesses across different industries.",
  },
];

const PortfolioSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      id="portfolio"
      ref={ref}
      className={`py-20 px-4 bg-background transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-3">
          Our Work
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          A selection of recent projects we've delivered for businesses across South Africa.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden border border-border/60 bg-card shadow-sm hover:shadow-lg transition-all duration-300"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 md:h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary/80 bg-primary/10 px-3 py-1 rounded-full mb-3">
                  {project.category}
                </span>
                <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
