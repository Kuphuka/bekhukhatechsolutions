import { Star, Quote } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  { name: "Thabo Mokoena", role: "Small Business Owner", location: "Johannesburg, GP", text: "Bekhukha Tech Solutions built our company website from scratch and it looks amazing. Our online enquiries have doubled since launching. Highly recommend their services!", rating: 5 },
  { name: "Naledi Dlamini", role: "Freelance Photographer", location: "Cape Town, WC", text: "I needed a logo that captured my brand perfectly and they delivered beyond my expectations. Professional, affordable, and fast turnaround. Will definitely use them again.", rating: 5 },
  { name: "Sipho Nkosi", role: "Restaurant Manager", location: "Durban, KZN", text: "Their monthly maintenance plan keeps our site running smoothly. Whenever we have an issue, the team responds quickly and fixes it. Great value for money.", rating: 5 },
  { name: "Lerato Mahlangu", role: "Startup Founder", location: "Pretoria, GP", text: "From software support to website development, Bekhukha Tech has been our go-to partner. They truly understand the needs of South African businesses.", rating: 5 },
];

const TestimonialsSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="testimonials" className="py-24 bg-secondary">
      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-14 opacity-0 ${visible ? "animate-fade-up" : ""}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">What Our Clients Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it — hear from businesses across South Africa who trust Bekhukha Tech Solutions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`bg-background rounded-xl p-6 shadow-md flex flex-col opacity-0 ${visible ? "animate-scale-in" : ""}`}
              style={{ animationDelay: visible ? `${i * 120}ms` : "0ms" }}
            >
              <Quote className="w-8 h-8 text-primary/30 mb-3" />
              <p className="text-muted-foreground text-sm flex-1 mb-4 leading-relaxed">"{t.text}"</p>
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-semibold text-foreground text-sm">{t.name}</p>
              <p className="text-muted-foreground text-xs">{t.role} · {t.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
