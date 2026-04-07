import { motion } from "motion/react";
import { CheckCircle2, TrendingDown, ShieldCheck, Star } from "lucide-react";

export default function WhyUs() {
  const stats = [
    {
      label: "Firma Digital en 24h",
      value: "24h",
      icon: <CheckCircle2 size={24} />,
      description: "Proceso 100% online y sin papeleo interminable. Asegura tu habitación desde tu móvil antes de llegar a la ciudad.",
    },
    {
      label: "Garantía Anti-Estafas",
      value: "✓",
      icon: <ShieldCheck size={24} />,
      description: "Propiedades auditadas legalmente por MEDLA. Lo que ves en fotos es exactamente donde vas a vivir.",
    },
    {
      label: "Ahorro garantizado",
      value: "€200",
      icon: <TrendingDown size={24} />,
      description: "Evita gastos de gestión abusivos e inmobiliarias tradicionales. Precios transparentes adaptados a estudiantes.",
    },
    {
      label: "Red de Estudiantes",
      value: "10k+",
      icon: <Star size={24} />,
      description: "Únete a la comunidad de estudiantes internacionales que ya confían en Match4Rooms para su estadía.",
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
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="p-8 rounded-3xl space-y-5 flex flex-col justify-between hover:shadow-xl transition-all duration-300 border border-transparent hover:border-brand-accent/20 cursor-default"
                style={{ backgroundColor: "#F5F3EF" }}
              >
                <div className="flex justify-between items-start">
                  <div style={{ color: "#1A1A2E", fontFamily: '"Playfair Display", serif', fontWeight: 700, fontSize: "2.5rem", lineHeight: 1 }}>
                    {stat.value}
                  </div>
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    style={{ color: "rgba(201,168,76,0.8)" }}
                  >
                    {stat.icon}
                  </motion.div>
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg" style={{ color: "#1A1A2E", fontFamily: '"Playfair Display", serif', fontWeight: 700 }}>
                    {stat.label}
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(26,26,46,0.65)", fontFamily: '"DM Sans", sans-serif' }}>
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
