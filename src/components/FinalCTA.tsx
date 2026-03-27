import AnimatedSection from "@/components/AnimatedSection";
import { WHATSAPP_LINK } from "@/lib/constants";

const FinalCTA = () => (
  <section className="py-20 sm:py-28 relative overflow-hidden">
    {/* Gold gradient strip */}
    <div className="absolute inset-0 bg-gold-gradient opacity-[0.04]" />

    <div className="container text-center relative z-10">
      <AnimatedSection>
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-gold-gradient mb-4">
          Seu próximo corte está a um clique
        </h2>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <p className="font-body text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
          Agende agora pelo WhatsApp e garanta seu horário na NTbarber.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gold-gradient text-primary-foreground font-body font-bold text-lg px-10 py-4 rounded-lg shadow-gold hover:scale-105 transition-transform"
        >
          ✂️ Quero agendar meu horário
        </a>
        <p className="font-body text-muted-foreground text-sm mt-4">
          ⚡ Respondemos rápido — Seg a Sáb, 09h às 19h
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default FinalCTA;
