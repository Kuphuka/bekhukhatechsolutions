import { Target, Eye, Users, Lightbulb, Shield, Award, Clock, Smartphone } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "40+", label: "Happy Clients" },
  { value: "3+", label: "Years Experience" },
  { value: "24hr", label: "Response Time" },
];

const AboutSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="about" className="py-20">
      <div ref={ref} className="container mx-auto px-4">
        <div className={`text-center mb-14 opacity-0 ${visible ? "animate-fade-up" : ""}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">About Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Bekhukha Tech Solutions is a technology service company based in South Africa. We specialize in helping businesses and individuals grow through modern digital solutions.
          </p>
        </div>

        {/* Stats bar */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-14 opacity-0 ${visible ? "animate-fade-up" : ""}`} style={{ animationDelay: "100ms" }}>
          {stats.map((s) => (
            <div key={s.label} className="bg-primary rounded-xl p-5 text-center">
              <p className="text-2xl md:text-3xl font-bold text-primary-foreground">{s.value}</p>
              <p className="text-primary-foreground/70 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <div className={`max-w-3xl mx-auto space-y-6 mb-14 opacity-0 ${visible ? "animate-fade-up" : ""}`} style={{ animationDelay: "200ms" }}>
          <p className="text-muted-foreground text-center leading-relaxed">
            Founded with a passion for making technology accessible, Bekhukha Tech Solutions serves entrepreneurs, small businesses, and organizations across South Africa. We understand the unique challenges faced by local businesses in the digital landscape, and we're committed to bridging the gap between great ideas and the technology needed to bring them to life.
          </p>
          <p className="text-muted-foreground text-center leading-relaxed">
            Our team combines creativity with technical expertise to deliver websites, logos, and software solutions that are not only professional but also affordable. We believe that every business — no matter the size — deserves a strong online presence and reliable tech support.
          </p>
          <p className="text-muted-foreground text-center leading-relaxed">
            From building your first business website to providing ongoing maintenance and software troubleshooting, we walk the journey with you. Our client-first approach means we listen, we adapt, and we deliver solutions that truly fit your needs and budget.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-14">
          {[
            { Icon: Users, title: "Client-Focused", desc: "Your success is our success. We tailor every solution to your specific goals." },
            { Icon: Lightbulb, title: "Innovation", desc: "We stay ahead of trends to bring you modern, effective digital solutions." },
            { Icon: Shield, title: "Reliability", desc: "Consistent quality, on-time delivery, and support you can count on." },
            { Icon: Award, title: "Quality Work", desc: "Every project is crafted to the highest standards with attention to detail." },
            { Icon: Clock, title: "Fast Turnaround", desc: "We respect your time — most projects are delivered within 5-10 working days." },
            { Icon: Smartphone, title: "Mobile-First", desc: "All our solutions are optimised for mobile devices where your customers are." },
          ].map((v, i) => (
            <div
              key={v.title}
              className={`bg-secondary rounded-xl p-6 text-center opacity-0 ${visible ? "animate-scale-in" : ""}`}
              style={{ animationDelay: visible ? `${300 + i * 100}ms` : "0ms" }}
            >
              <v.Icon className="w-9 h-9 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-foreground mb-1">{v.title}</h3>
              <p className="text-muted-foreground text-sm">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {[
            { Icon: Target, title: "Mission", desc: "To help businesses innovate and grow using technology — making professional digital solutions affordable and accessible to all South Africans." },
            { Icon: Eye, title: "Vision", desc: "To become the most trusted and recommended tech solutions provider across South Africa, empowering businesses of every size to thrive digitally." },
          ].map((m, i) => (
            <div
              key={m.title}
              className={`bg-gradient-to-br from-primary to-accent rounded-xl p-8 text-center opacity-0 ${visible ? "animate-fade-up" : ""}`}
              style={{ animationDelay: visible ? `${800 + i * 120}ms` : "0ms" }}
            >
              <m.Icon className="w-10 h-10 text-primary-foreground mx-auto mb-4" />
              <h3 className="text-xl font-bold text-primary-foreground mb-2">{m.title}</h3>
              <p className="text-primary-foreground/80 text-sm">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
