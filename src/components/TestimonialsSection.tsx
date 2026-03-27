import AnimatedSection from "@/components/AnimatedSection";

const reviews = [
  "Muito boa a barbearia! Profissionais de alta qualidade e comprometimento, ambiente bom, ótimo preço de corte e atendimento dinâmico! Recomendo muito!",
  "Local muito bom, atendimento excelente, os meninos são muito atenciosos.",
  "Pode confiar, trabalho deles é top.",
  "Melhor barbearia de Patos, sem mais.",
  "Melhor atendimento sem dúvidas.",
];

const TestimonialsSection = () => (
  <section id="depoimentos" className="py-20 sm:py-28 bg-card/50">
    <div className="container">
      <AnimatedSection>
        <div className="flex flex-col items-center gap-3 mb-14">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gold-gradient text-center">
            O que nossos clientes dizem
          </h2>
          <div className="bg-gold-gradient text-primary-foreground font-body font-bold text-sm px-4 py-1.5 rounded-full">
            ⭐ 5.0 — Nota Máxima
          </div>
        </div>
      </AnimatedSection>

      {/* Mobile: horizontal scroll, Desktop: grid */}
      <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0">
        {reviews.map((r, i) => (
          <AnimatedSection key={i} delay={i * 0.08}>
            <div className="min-w-[280px] lg:min-w-0 snap-center bg-card border border-border rounded-lg p-6 flex flex-col border-t-2 border-t-primary">
              <span className="text-gold-DEFAULT text-3xl font-display leading-none mb-3">"</span>
              <p className="font-body text-muted-foreground text-sm leading-relaxed flex-1 mb-4">{r}</p>
              <div className="flex items-center gap-2">
                <span className="text-sm">⭐⭐⭐⭐⭐</span>
                <span className="font-body text-xs text-muted-foreground">— Cliente verificado</span>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
