import bekhuVideo from "@/assets/team/bekhu.mp4";

const PromoVideoSection = () => (
  <section id="promo" className="py-24 bg-background">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10 animate-fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
          Watch Bekhu in Action
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          A polished preview of Bekhukha Tech Solutions delivering modern digital experiences.
        </p>
      </div>
      <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-border animate-scale-in">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/30 to-transparent" />
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
        <div className="pointer-events-none absolute left-5 top-5 rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white backdrop-blur-sm border border-white/15">
          Bekhu Spotlight
        </div>
        <div className="pointer-events-none absolute inset-x-5 bottom-5 rounded-3xl bg-black/40 p-4 text-white/90 backdrop-blur-sm">
          <p className="text-xs uppercase tracking-[0.3em] text-white/70">Professional video showcase</p>
          <p className="mt-1 text-base md:text-lg font-semibold">A refined introduction to Bekhukha Tech's services, delivered with confidence.</p>
        </div>
        <video
          src={bekhuVideo}
          className="w-full h-auto min-h-[18rem] bg-black"
          autoPlay
          muted
          loop
          playsInline
          controls
        />
      </div>
    </div>
  </section>
);

export default PromoVideoSection;
