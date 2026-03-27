import { useState, useEffect } from "react";
import { WHATSAPP_LINK } from "@/lib/constants";

const StickyHeader = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md shadow-gold" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between py-4">
        <a href="#" className="flex items-center gap-2">
          <span className="text-2xl">💈</span>
          <span className="font-display text-xl font-bold text-gold-gradient">NTbarber</span>
        </a>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-2 rounded-md border border-primary px-4 py-2 font-body text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          Agendar pelo WhatsApp
        </a>
      </div>
    </header>
  );
};

export default StickyHeader;
