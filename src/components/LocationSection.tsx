import AnimatedSection from "@/components/AnimatedSection";
import { WHATSAPP_LINK } from "@/lib/constants";

const LocationSection = () => (
  <section id="localizacao" className="py-20 sm:py-28 bg-card/50">
    <div className="container max-w-3xl">
      <AnimatedSection>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-gold-gradient text-center mb-4">
          Nos encontre no Centro de Patos de Minas
        </h2>
        <p className="font-body text-muted-foreground text-center mb-10">
          R. Maj. Gote, 338 - Centro, Patos de Minas - MG, 38700-001
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div className="rounded-lg overflow-hidden border border-border mb-8">
          <iframe
            title="NTbarber no Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.123!2d-46.5181!3d-18.5788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94aef3d0f1c1c1c1%3A0x0!2sR.+Maj.+Gote%2C+338+-+Centro%2C+Patos+de+Minas+-+MG!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <div className="text-center">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold-gradient text-primary-foreground font-body font-bold px-6 py-3 rounded-lg hover:scale-105 transition-transform"
          >
            💬 Falar no WhatsApp antes de vir
          </a>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default LocationSection;
