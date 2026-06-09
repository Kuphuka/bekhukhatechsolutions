import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-nav fixed top-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 sm:py-3">
        <a href="#home" className="flex items-center gap-4">
          <img src={logo} alt="Bekhukha Tech Solutions" className="h-12 w-12 md:h-10 md:w-10 rounded-full object-cover" />
          <span className="text-lg md:text-xl font-semibold">Bekhukha Tech Solutions</span>
        </a>
        <div className="hidden md:flex gap-6">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="text-sm font-medium opacity-80 hover:opacity-100 transition-opacity">
              {l.label}
            </a>
          ))}
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 pb-4 px-4">
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
              className="block py-2 text-sm opacity-80 hover:opacity-100">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
