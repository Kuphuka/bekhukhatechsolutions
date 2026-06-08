import { Globe, Wrench, Palette, Monitor, ArrowRight, Check } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  { icon: Globe, title: "Website Development", desc: "Professional business websites designed to help you grow online.", price: "R2,000", color: "from-primary to-accent", features: ["50GB Storage", "Free Business Emails"] },
  { icon: Wrench, title: "Website Maintenance", desc: "Monthly updates, security, and support.", price: "R290 / month", color: "from-accent to-primary" },
  { icon: Palette, title: "Logo Design", desc: "Professional brand logos for businesses.", price: "R450", color: "from-primary to-accent" },
  { icon: Monitor, title: "Software Support", desc: "Help installing and fixing software issues.", price: null, color: "from-accent to-primary" },
];

const ServicesSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="services" className="py-20 bg-section-alt">
      <div ref={ref} className="container mx-auto px-4">
        <div className={`text-center mb-14 opacity-0 ${visible ? "animate-fade-up" : ""}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Our Services</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">Affordable tech solutions tailored to your needs.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`group bg-card rounded-xl p-6 shadow-sm card-hover border border-border/60 flex flex-col opacity-0 ${visible ? "animate-fade-up" : ""}`}
              style={{ animationDelay: visible ? `${i * 120}ms` : "0ms" }}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${s.color} flex items-center justify-center mb-4`}>
                <s.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 flex-1">{s.desc}</p>
              {s.features && (
                <div className="mb-4">
                  <p className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">We offer</p>
                  <ul className="space-y-1.5">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {s.price && <p className="text-2xl font-bold text-gradient mb-4">{s.price}</p>}
              <a href="https://wa.me/27799844222" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity group-hover:gap-3">
                {s.price ? "Learn More" : "Contact Us"} <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
