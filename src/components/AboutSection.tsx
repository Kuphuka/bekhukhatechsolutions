import { useState, type FormEvent, type ChangeEvent } from "react";
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
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Website Development",
    message: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="about" className="py-24 section-splash">
      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] items-center mb-14">
          <div className={`opacity-0 ${visible ? "animate-fade-up" : ""}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Us</h2>
            <p className="text-muted-foreground max-w-2xl leading-relaxed text-lg">
              Bekhukha Tech Solutions is a South African technology service company dedicated to helping businesses grow through modern digital solutions. We build websites, brand experiences, and support systems that feel premium, trustworthy, and easy to use.
            </p>
            <div className="mt-10 rounded-[2rem] overflow-hidden shadow-2xl border border-border/80 bg-white glass-panel p-6">
              <div className="mb-6">
                <p className="text-xs uppercase tracking-[0.32em] text-primary/80 mb-2">Enquire Now</p>
                <h3 className="text-2xl font-semibold text-foreground">Start your project with a simple enquiry.</h3>
                <p className="text-muted-foreground mt-2">Send us the details and we will respond within 24 hours with a tailored solution.</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="flex flex-col text-sm text-foreground">
                    Name
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="mt-2 rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                      required
                    />
                  </label>
                  <label className="flex flex-col text-sm text-foreground">
                    Email
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="mt-2 rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                      required
                    />
                  </label>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="flex flex-col text-sm text-foreground">
                    Phone
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="079 984 4222"
                      className="mt-2 rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </label>
                  <label className="flex flex-col text-sm text-foreground">
                    Service Interested In
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="mt-2 rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    >
                      <option>Website Development</option>
                      <option>Website Maintenance</option>
                      <option>Logo Design</option>
                      <option>Software Support</option>
                    </select>
                  </label>
                </div>

                <label className="flex flex-col text-sm text-foreground">
                  Message
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project"
                    className="mt-2 min-h-[140px] rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    required
                  />
                </label>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                  >
                    Send Enquiry
                  </button>
                  {submitted && (
                    <p className="text-sm text-green-700">Thanks! Your enquiry has been recorded.</p>
                  )}
                </div>
              </form>
            </div>
          </div>
          <div className={`opacity-0 ${visible ? "animate-fade-up" : ""}`} style={{ animationDelay: "150ms" }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="rounded-[2rem] bg-gradient-to-br from-primary to-accent p-6 text-white shadow-2xl">
                <p className="text-sm uppercase tracking-[0.32em] mb-3 opacity-80">Local market focus</p>
                <p className="text-lg font-semibold leading-snug">Delivering polished digital solutions for South African entrepreneurs and small businesses.</p>
              </div>
              <div className="rounded-[2rem] bg-white shadow-2xl border border-border p-6">
                <p className="text-sm uppercase tracking-[0.32em] mb-3 text-muted-foreground">Fast delivery</p>
                <p className="text-lg font-semibold text-foreground leading-snug">Rapid turnaround without compromising quality, so you can launch sooner.</p>
              </div>
            </div>
          </div>
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
