import { Phone, MessageCircle, Instagram } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const INSTAGRAM_URL = "https://www.instagram.com/bekhukhatechsolution?igsh=MWVnOHBlbWNkZjIweQ%3D%3D&utm_source=qr";

const ContactSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="contact" className="py-24 bg-section-alt">
      <div
        ref={ref}
        className={`container mx-auto px-4 sm:px-6 lg:px-8 text-center opacity-0 ${visible ? "animate-fade-up" : ""}`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Get In Touch</h2>
        <p className="text-muted-foreground mb-10 max-w-lg mx-auto">Ready to grow your business? Contact us today.</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
          <a href="tel:0799844222" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
            <Phone size={20} /> 079 984 4222
          </a>
          <a href="https://wa.me/27799844222" target="_blank" rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3 rounded-lg bg-[#25D366] text-white font-semibold hover:opacity-90 transition-opacity">
            <MessageCircle size={20} /> WhatsApp Us
          </a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3 rounded-lg bg-gradient-to-r from-primary via-accent to-secondary text-white font-semibold hover:opacity-90 transition-opacity">
            <Instagram size={20} /> Instagram
          </a>
        </div>

        <div className="flex flex-wrap gap-6 justify-center text-sm text-muted-foreground">
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            Instagram: @bekhukhatechsolution
          </a>
          <a href="https://facebook.com/bekhukhatechsolutions" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            Facebook: bekhukhatechsolutions
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
