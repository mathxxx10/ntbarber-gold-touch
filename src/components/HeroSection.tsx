import AnimatedSection from "@/components/AnimatedSection";
import { WHATSAPP_LINK } from "@/lib/constants";
import logo from "@/assets/logo.png";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center bg-barbershop-pattern overflow-hidden">
    {/* Badge */}
    <div className="absolute top-24 right-4 sm:top-28 sm:right-8 z-10">
      <div className="bg-gold-gradient text-primary-foreground px-4 py-2 rounded-md font-body text-xs sm:text-sm font-bold shadow-gold animate-float">
        ⭐ 5.0 — Nota Máxima no Google
      </div>
    </div>

    <div className="container text-center py-32 relative z-10">
      <AnimatedSection>
        <img src={logo} alt="NTbarber Logo" className="w-28 h-28 mx-auto mb-8 rounded-full border-2 border-primary" />
      </AnimatedSection>

      <AnimatedSection delay={0.15}>
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-gold-gradient mb-6 leading-tight">
          Estilo. Precisão. Resultado.
        </h1>
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
        <p className="font-body text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          A barbearia com nota 5.0 no Google em Patos de Minas.
          <br />
          Venha descobrir por que somos a escolha dos homens que se cuidam.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.45}>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gold-gradient text-primary-foreground font-body font-bold text-lg px-8 py-4 rounded-lg shadow-gold hover:scale-105 transition-transform"
        >
          ✂️ Agendar meu horário agora
        </a>
      </AnimatedSection>
    </div>

    {/* Decorative bottom line */}
    <div className="absolute bottom-0 left-0 right-0 h-px bg-gold-gradient opacity-30" />
  </section>
);

export default HeroSection;
