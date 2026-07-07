import { useState, type MouseEvent } from "react";
import logoTagline from "@/assets/logo-tagline.jpeg";

const HeroSection = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMove = (event: MouseEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    setTilt({ x: x * 10, y: y * 10 });
  };

  const handleLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <section
      id="home"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <img src={logoTagline} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.2),transparent_35%),linear-gradient(135deg,rgba(3,16,43,0.94),rgba(17,52,116,0.72))]" />
        <div
          className="absolute left-[10%] top-[18%] h-36 w-36 rounded-full bg-cyan-300/30 blur-3xl"
          style={{ transform: `translate3d(${tilt.x * 10}px, ${tilt.y * 10}px, 0)` }}
        />
        <div
          className="absolute bottom-[12%] right-[8%] h-56 w-56 rounded-full bg-sky-500/20 blur-3xl"
          style={{ transform: `translate3d(${tilt.x * 6}px, ${tilt.y * 6}px, 0)` }}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[84vh] max-w-7xl flex-col items-start justify-center px-4 py-24 sm:px-6 lg:px-8">
        <div
          className="max-w-3xl rounded-[1.8rem] border border-white/20 bg-slate-950/35 p-8 shadow-[0_35px_120px_-35px_rgba(0,0,0,0.7)] backdrop-blur-xl sm:p-10 lg:p-12"
          style={{
            transform: `perspective(1200px) rotateX(${(-tilt.y * 0.4).toFixed(2)}deg) rotateY(${(tilt.x * 0.4).toFixed(2)}deg)`,
            transition: "transform 180ms ease-out",
          }}
        >
          <p className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium uppercase tracking-[0.24em] text-cyan-100">
            AI-powered digital growth
          </p>
          <h1 className="mb-6 text-4xl font-bold leading-tight text-white drop-shadow-lg sm:text-5xl lg:text-6xl">
            Design smarter digital experiences that convert.
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-slate-100/90 sm:text-xl">
            From polished websites and branding to automation and support, we help ambitious South African businesses move faster and look sharper online.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3 font-semibold text-accent-foreground shadow-lg shadow-sky-500/20 transition-transform duration-300 hover:-translate-y-1"
            >
              Explore Services
            </a>
            <a
              href="https://wa.me/27799844222"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 py-3 font-semibold text-white transition-colors hover:bg-white/20"
            >
              Book a Consultation
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-100/80">
            <span className="rounded-full border border-white/15 bg-white/10 px-3 py-2">Web design</span>
            <span className="rounded-full border border-white/15 bg-white/10 px-3 py-2">Brand systems</span>
            <span className="rounded-full border border-white/15 bg-white/10 px-3 py-2">AI-ready automation</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
