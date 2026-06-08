import { Instagram, ArrowUp } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/bekhukhatechsolution?igsh=MWVnOHBlbWNkZjIweQ%3D%3D&utm_source=qr";

const Footer = () => (
  <footer className="bg-nav py-10">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
        <div className="text-center md:text-left">
          <p className="text-lg font-bold text-white font-[Space_Grotesk]">Bekhukha Tech Solutions</p>
          <p className="text-white/50 text-sm mt-1">Innovate · Connect · Deliver</p>
        </div>
        <div className="flex gap-6 text-sm text-white/60">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
      <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex gap-4">
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
            <Instagram size={20} />
          </a>
          <a href="https://facebook.com/bekhukhatechsolutions" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
        </div>
        <p className="text-sm text-white/50">© {new Date().getFullYear()} Bekhukha Tech Solutions. All rights reserved.</p>
        <a href="#home" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-white/20 hover:text-white transition-colors">
          <ArrowUp size={16} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
