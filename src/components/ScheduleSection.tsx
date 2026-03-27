import AnimatedSection from "@/components/AnimatedSection";
import { WHATSAPP_LINK } from "@/lib/constants";

const schedule = [
  { day: "Segunda", hours: "09:00 – 19:00" },
  { day: "Terça", hours: "09:00 – 19:00" },
  { day: "Quarta", hours: "09:00 – 19:00" },
  { day: "Quinta", hours: "09:00 – 19:00" },
  { day: "Sexta", hours: "09:00 – 19:00" },
  { day: "Sábado", hours: "09:00 – 19:00" },
  { day: "Domingo", hours: "Fechado" },
];

const ScheduleSection = () => (
  <section id="horarios" className="py-20 sm:py-28">
    <div className="container max-w-lg">
      <AnimatedSection>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-gold-gradient text-center mb-14">
          Horários de Funcionamento
        </h2>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          {schedule.map((s) => (
            <div
              key={s.day}
              className={`flex justify-between items-center px-6 py-4 border-b border-border last:border-b-0 ${
                s.day === "Domingo" ? "text-muted-foreground" : "text-foreground"
              }`}
            >
              <span className="font-body font-medium">{s.day}</span>
              <span className="font-body text-sm">{s.hours}</span>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <div className="text-center mt-8">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold-gradient text-primary-foreground font-body font-bold px-6 py-3 rounded-lg hover:scale-105 transition-transform"
          >
            💬 Agendar pelo WhatsApp
          </a>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default ScheduleSection;
