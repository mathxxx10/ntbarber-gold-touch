import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
  "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
  "18:00", "18:30",
];

const BookingForm = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !date || !time) return;

    const formattedDate = new Date(date + "T12:00:00").toLocaleDateString("pt-BR", {
      weekday: "long",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

    const message = `Olá! Vi o site da NTbarber e quero agendar meu horário!\n\n📋 *Nome:* ${name.trim()}\n📅 *Data:* ${formattedDate}\n⏰ *Horário:* ${time}`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/5534991844644?text=${encoded}`, "_blank");
  };

  // Minimum date = today
  const today = new Date().toISOString().split("T")[0];

  return (
    <section id="agendar" className="py-20 sm:py-28 bg-card/50">
      <div className="container max-w-md">
        <AnimatedSection>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gold-gradient text-center mb-4">
            Agende seu Horário
          </h2>
          <p className="font-body text-muted-foreground text-center mb-10">
            Preencha os dados abaixo e finalize pelo WhatsApp
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="bg-card border border-border rounded-lg p-6 sm:p-8 space-y-5"
          >
            {/* Nome */}
            <div className="space-y-2">
              <label htmlFor="name" className="font-body text-sm font-medium text-foreground">
                Nome completo
              </label>
              <input
                id="name"
                type="text"
                required
                maxLength={100}
                placeholder="Seu nome completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="flex h-11 w-full rounded-md border border-border bg-background px-4 py-2 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Data */}
            <div className="space-y-2">
              <label htmlFor="date" className="font-body text-sm font-medium text-foreground">
                Dia do agendamento
              </label>
              <input
                id="date"
                type="date"
                required
                min={today}
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="flex h-11 w-full rounded-md border border-border bg-background px-4 py-2 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent [color-scheme:dark]"
              />
            </div>

            {/* Horário */}
            <div className="space-y-2">
              <label htmlFor="time" className="font-body text-sm font-medium text-foreground">
                Horário desejado
              </label>
              <select
                id="time"
                required
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="flex h-11 w-full rounded-md border border-border bg-background px-4 py-2 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent [color-scheme:dark]"
              >
                <option value="">Selecione o horário</option>
                {timeSlots.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-gold-gradient text-primary-foreground font-body font-bold text-base px-6 py-3.5 rounded-lg shadow-gold hover:scale-[1.02] transition-transform mt-2"
            >
              ✂️ Agendar pelo WhatsApp
            </button>

            <p className="font-body text-muted-foreground text-xs text-center">
              Você será redirecionado ao WhatsApp para confirmar
            </p>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default BookingForm;
