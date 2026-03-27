import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";

const faqs = [
  { q: "Como faço para agendar?", a: "É só clicar no botão do WhatsApp e mandar mensagem. Respondemos rápido!" },
  { q: "Precisa marcar horário ou pode chegar direto?", a: "Recomendamos agendar pelo WhatsApp para garantir seu horário sem espera." },
  { q: "Vocês atendem crianças?", a: "Sim! Atendemos crianças com toda atenção e cuidado." },
  { q: "Qual o endereço exato?", a: "R. Maj. Gote, 338 - Centro, Patos de Minas - MG." },
  { q: "Vocês trabalham aos sábados?", a: "Sim! Atendemos sábado das 09h às 19h. Domingo fechado." },
  { q: "Quais formas de pagamento aceitas?", a: "Aceitamos Pix, dinheiro e cartão. Consulte no agendamento." },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="container max-w-2xl">
        <AnimatedSection>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gold-gradient text-center mb-14">
            Perguntas Frequentes
          </h2>
        </AnimatedSection>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left bg-card border border-border rounded-lg overflow-hidden"
              >
                <div className="flex items-center justify-between px-6 py-4">
                  <span className="font-body font-medium text-foreground pr-4">{f.q}</span>
                  <span className={`text-primary text-xl transition-transform ${open === i ? "rotate-45" : ""}`}>+</span>
                </div>
                {open === i && (
                  <div className="px-6 pb-4">
                    <p className="font-body text-muted-foreground text-sm leading-relaxed">{f.a}</p>
                  </div>
                )}
              </button>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
