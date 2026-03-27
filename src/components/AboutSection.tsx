import AnimatedSection from "@/components/AnimatedSection";

const stats = [
  { icon: "🌟", label: "5.0 no Google" },
  { icon: "✂️", label: "Profissionais Especializados" },
  { icon: "📍", label: "Centro de Patos de Minas" },
];

const AboutSection = () => (
  <section id="sobre" className="py-20 sm:py-28">
    <div className="container">
      <AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-2 bg-card rounded-lg p-6 border border-border">
              <span className="text-3xl">{s.icon}</span>
              <span className="font-body font-semibold text-foreground text-center">{s.label}</span>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.15}>
        <p className="font-body text-muted-foreground text-center max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          Na NTbarber, cada corte é tratado com atenção, técnica e respeito pelo seu estilo.
          Aqui você não é mais um cliente — é um convidado.
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default AboutSection;
