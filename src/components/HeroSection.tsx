import logoTagline from "@/assets/logo-tagline.jpeg";

const HeroSection = () => (
  <section
    id="home"
    className="relative min-h-[90vh] flex items-center justify-center pt-16"
  >
    {/* Background image with overlay */}
    <div className="absolute inset-0">
      <img
        src={logoTagline}
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[hsla(222,80%,14%,0.75)] via-[hsla(222,80%,14%,0.5)] to-[hsla(210,100%,52%,0.4)]" />
    </div>

    <div className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-fade-up">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
        Innovate · Connect · Deliver
      </h1>
      <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl mx-auto drop-shadow">
        Affordable tech solutions tailored to help your business grow in the digital age.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <a
          href="#services"
          className="inline-flex items-center px-8 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity shadow-lg"
        >
          Our Services
        </a>
        <a
          href="https://wa.me/27799844222"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
        >
          WhatsApp Us
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
