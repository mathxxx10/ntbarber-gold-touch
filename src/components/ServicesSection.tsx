import AnimatedSection from "@/components/AnimatedSection";
import { WHATSAPP_LINK } from "@/lib/constants";

const services = [
  { icon: "✂️", name: "Corte Masculino", desc: "Técnica apurada para realçar seu estilo" },
  { icon: "🪒", name: "Barba", desc: "Modelagem e acabamento com navalha para um visual impecável" },
  { icon: "✂️🪒", name: "Corte + Barba", desc: "O combo completo para quem quer chegar no nível" },
  { icon: "💆", name: "Relaxamento", desc: "Ritual de cuidado para couro cabeludo e barba" },
  { icon: "👦", name: "Corte Infantil", desc: "Atendimento especial e cuidadoso para os pequenos" },
  { icon: "💈", name: "Hidratação", desc: "Tratamento premium para cabelo e barba saudáveis" },
];

const ServicesSection = () => (
  <section id="servicos" className="py-20 sm:py-28 bg-card/50">
    <div className="container">
      <AnimatedSection>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-gold-gradient text-center mb-14">
          Nossos Serviços
        </h2>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <AnimatedSection key={s.name} delay={i * 0.08}>
            <div className="bg-card border border-border rounded-lg p-6 flex flex-col h-full hover:border-primary transition-colors group">
              <span className="text-3xl mb-4">{s.icon}</span>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">{s.name}</h3>
              <p className="font-body text-muted-foreground text-sm mb-6 flex-1">{s.desc}</p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-gold-gradient text-primary-foreground font-body font-semibold text-sm px-5 py-2.5 rounded-md hover:scale-105 transition-transform"
              >
                Agendar
              </a>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
