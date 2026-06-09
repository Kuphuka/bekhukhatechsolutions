import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "How long does it take to build a website?",
    a: "Most business websites are completed within 5–10 working days, depending on the complexity and content provided. We keep you updated throughout the process.",
  },
  {
    q: "What does the R2,000 website package include?",
    a: "You get a fully responsive, professionally designed website with up to 5 pages, contact form integration, mobile optimisation, basic SEO setup, and free hosting guidance.",
  },
  {
    q: "What does the monthly maintenance cover?",
    a: "Our R290/month plan includes content updates, security patches, performance monitoring, backups, and priority email support so your site stays healthy.",
  },
  {
    q: "Can I request changes after the website is delivered?",
    a: "Absolutely! Minor tweaks are included at no extra cost within the first 7 days. After that, changes are covered under our maintenance plan or quoted separately.",
  },
  {
    q: "Do you offer logo design as a standalone service?",
    a: "Yes. For R450 you receive 2–3 initial concepts, two rounds of revisions, and final files in PNG, SVG, and PDF formats ready for print and digital use.",
  },
  {
    q: "How do I get started?",
    a: "Simply reach out via WhatsApp at 079 984 4222 or use the contact section on this page. We'll discuss your needs and provide a free quote within 24 hours.",
  },
];

const FAQSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      id="faq"
      ref={ref}
      className={`py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-3">
          <HelpCircle className="w-7 h-7 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center">
            Frequently Asked Questions
          </h2>
        </div>
        <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
          Everything you need to know about our services, pricing, and process.
        </p>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card rounded-xl border border-border/60 px-5 shadow-sm data-[state=open]:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline hover:text-primary transition-colors">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
