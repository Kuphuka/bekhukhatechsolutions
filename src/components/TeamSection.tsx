import { Linkedin, Mail } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import emmanuelAsset from "@/assets/emmanuel-ngobeni.jpeg.asset.json";
import freemanAsset from "@/assets/freeman-rikhotso.png.asset.json";

const team = [
  {
    name: "Emmanuel Ngobeni",
    role: "CEO & Founder",
    image: emmanuelAsset.url,
    bio: "Emmanuel is the visionary behind Bekhukha Tech Solutions. With a passion for technology and a deep commitment to empowering South African businesses, he founded the company to make professional tech services accessible and affordable. He leads strategy, innovation, and client partnerships — ensuring every project reflects excellence and integrity.",
  },
  {
    name: "Freeman Rikhotso",
    role: "Manager",
    image: freemanAsset.url,
    bio: "Freeman keeps Bekhukha running like clockwork. As Manager, he oversees daily operations, client relations, and project delivery. Known for his calm leadership and sharp eye for detail, Freeman makes sure every client receives world-class service and that every promise we make is one we keep.",
  },
];

const TeamSection = () => {
  const { ref, visible } = useScrollReveal();
  return (
    <section id="team" className="py-20 bg-background">
      <div ref={ref} className="container mx-auto px-4">
        <div className={`text-center mb-14 opacity-0 ${visible ? "animate-fade-up" : ""}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Meet Our Team</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            The people behind Bekhukha Tech Solutions — driven, dedicated, and proudly South African.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {team.map((m, i) => (
            <div
              key={m.name}
              className={`bg-card rounded-2xl p-8 shadow-sm border border-border/60 card-hover flex flex-col items-center text-center opacity-0 ${visible ? "animate-fade-up" : ""}`}
              style={{ animationDelay: visible ? `${i * 150}ms` : "0ms" }}
            >
              <div className="relative mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent blur-md opacity-30" />
                <div className="relative w-40 h-40 rounded-full overflow-hidden ring-4 ring-primary/20 ring-offset-4 ring-offset-card">
                  <img src={m.image} alt={`${m.name} — ${m.role} at Bekhukha Tech Solutions`} className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground">{m.name}</h3>
              <p className="text-sm font-semibold text-gradient mb-4 uppercase tracking-wide">{m.role}</p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{m.bio}</p>
              <div className="flex gap-3">
                <a href="https://wa.me/27799844222" target="_blank" rel="noopener noreferrer" aria-label={`Contact ${m.name}`} className="w-9 h-9 rounded-full bg-secondary text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Mail className="w-4 h-4" />
                </a>
                <a href="#" aria-label={`${m.name} on LinkedIn`} className="w-9 h-9 rounded-full bg-secondary text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
