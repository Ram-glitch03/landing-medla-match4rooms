import { motion } from "motion/react";

export default function Stats() {
  const stats = [
    { label: "Habitaciones rentadas", value: "1.2k+" },
    { label: "Estudiantes felices", value: "5k+" },
    { label: "Zonas universitarias", value: "15+" },
    { label: "Tasa de satisfacción", value: "99%" },
  ];

  return (
    <section className="py-20 px-4 md:px-8" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-7xl mx-auto rounded-3xl p-8 md:p-16 overflow-hidden relative" style={{ backgroundColor: "#1A1A2E" }}>
        <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl" style={{ backgroundColor: "#C9A84C" }} />

        <div className="relative z-10 space-y-16">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12" style={{ backgroundColor: "rgba(201,168,76,0.4)" }} />
              <span className="section-eyebrow" style={{ color: "#C9A84C" }}>MEDLA en números</span>
              <div className="h-px w-12" style={{ backgroundColor: "rgba(201,168,76,0.4)" }} />
            </div>
            <h2 className="text-3xl md:text-5xl" style={{ color: "#ffffff", fontFamily: '"Playfair Display", serif', fontWeight: 700 }}>
              Tu hogar lejos de casa, garantizado
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center space-y-3"
              >
                <div style={{ color: "#C9A84C", fontFamily: '"Playfair Display", serif', fontWeight: 700, fontSize: "clamp(2.5rem,6vw,4.5rem)", lineHeight: 1 }}>
                  {stat.value}
                </div>
                <p className="text-sm md:text-base font-medium" style={{ color: "rgba(255,255,255,0.55)", fontFamily: '"DM Sans", sans-serif' }}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
