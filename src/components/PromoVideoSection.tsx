import promoVideo from "@/assets/promo-video.mp4.asset.json";

const PromoVideoSection = () => (
  <section id="promo" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-10 animate-fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
          See Bekhukha Tech in Motion
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          A quick look at how we innovate, connect, and deliver for South African businesses.
        </p>
      </div>
      <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-border animate-scale-in">
        <video
          src={promoVideo.url}
          className="w-full h-auto"
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
