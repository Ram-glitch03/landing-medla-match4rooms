import { motion } from "motion/react";
import { CheckCircle2, TrendingDown, ShieldCheck, Star } from "lucide-react";

export default function WhyUs() {
  const stats = [
    {
      label: "Reserva rápida",
      value: "24h",
      icon: <CheckCircle2 size={24} />,
      description: "Confirmamos tu reserva en menos de 24 horas para que no pierdas tiempo ni oportunidades.",
    },
    {
      label: "100% Verificadas",
      value: "✓",
      icon: <ShieldCheck size={24} />,
      description: "Todas nuestras habitaciones son revisadas personalmente por nuestro equipo antes de publicarse.",
    },
    {
      label: "Ahorro medio",
      value: "€150",
      icon: <TrendingDown size={24} />,
      description: "Negociamos los mejores precios y condiciones adaptados al presupuesto estudiantil.",
    },
    {
      label: "Recomendación",
      value: "98%",
      icon: <Star size={24} />,
      description: "Casi todos nuestros usuarios nos recomiendan a sus compañeros de facultad.",
    },
  ];

  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-20">
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12" style={{ backgroundColor: "#E8E5DE" }} />
            <span className="section-eyebrow" style={{ color: "rgba(26,26,46,0.5)" }}>¿Por qué elegirnos?</span>
            <div className="h-px w-12" style={{ backgroundColor: "#E8E5DE" }} />
          </div>
          <h2 className="text-4xl md:text-5xl text-balance" style={{ color: "#1A1A2E", fontFamily: '"Playfair Display", serif', fontWeight: 700 }}>
            Expertos en alojamiento estudiantil
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left - Large Image Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden min-h-[500px] flex flex-col justify-end p-10 md:p-12"
          >
            <img
              src="https://framerusercontent.com/images/RaxVOpZHxB9OK3LWaCEa2t0ICcU.webp"
              alt="MEDLA Habitaciones"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(26,26,46,0.97) 30%, rgba(26,26,46,0.4) 70%, transparent 100%)" }} />

            <div className="relative z-10 space-y-5">
              <div
                className="flex items-center gap-2 px-4 py-1.5 rounded-full w-fit"
                style={{ backgroundColor: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.4)" }}
              >
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#C9A84C" }} />
                <span className="section-eyebrow" style={{ color: "#C9A84C" }}>La mejor agencia estudiantil</span>
              </div>
              <h3 className="text-3xl md:text-4xl text-white leading-tight" style={{ fontFamily: '"Playfair Display", serif', fontWeight: 700 }}>
                Más de 5,000 estudiantes confían en MEDLA
              </h3>
              <p className="leading-relaxed max-w-md" style={{ color: "rgba(255,255,255,0.65)", fontFamily: '"DM Sans", sans-serif' }}>
                Elegir el lugar adecuado importa. Nuestra experiencia y acompañamiento constante aseguran que tu única preocupación sea estudiar.
              </p>
            </div>
          </motion.div>

          {/* Right - Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-3xl space-y-5 flex flex-col justify-between"
                style={{ backgroundColor: "#F5F3EF" }}
              >
                <div className="flex justify-between items-start">
                  <div style={{ color: "#1A1A2E", fontFamily: '"Playfair Display", serif', fontWeight: 700, fontSize: "2.5rem", lineHeight: 1 }}>
                    {stat.value}
                  </div>
                  <div style={{ color: "rgba(201,168,76,0.5)" }}>{stat.icon}</div>
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg" style={{ color: "#1A1A2E", fontFamily: '"Playfair Display", serif', fontWeight: 700 }}>
                    {stat.label}
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(26,26,46,0.55)", fontFamily: '"DM Sans", sans-serif' }}>
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
