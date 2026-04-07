import { motion } from "motion/react";
import { Compass, ShieldCheck } from "lucide-react";
import { ReactNode } from "react";

export default function About() {
  return (
    <section id="nosotros" className="py-24 md:py-32 overflow-hidden" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full" style={{ backgroundColor: "#F5F3EF" }}>
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#C9A84C" }} />
                  <span className="section-eyebrow" style={{ color: "#C9A84C" }}>Quiénes somos</span>
                </div>
                <div className="h-px flex-grow" style={{ backgroundColor: "#E8E5DE" }} />
              </div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl leading-[1.1]"
                style={{ color: "#1A1A2E", fontFamily: '"Playfair Display", serif', fontWeight: 700 }}
              >
                Nuestra misión es facilitarte la vida universitaria
              </motion.h2>

              <p className="text-xl leading-relaxed" style={{ color: "rgba(26,26,46,0.65)", fontFamily: '"DM Sans", sans-serif' }}>
                En MEDLA Habitaciones apoyamos a estudiantes y propietarios con herramientas que simplifican la búsqueda, mejoran la convivencia y brindan seguridad en cada paso.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <AboutCard
                icon={<Compass size={32} />}
                title="Búsqueda Inteligente"
                description="Filtramos las mejores opciones por cercanía a tu campus, precio y servicios incluidos. Todo pensado para tu comodidad y presupuesto."
              />
              <AboutCard
                icon={<ShieldCheck size={32} />}
                title="Habitaciones Verificadas"
                description="Evaluamos el estado de cada habitación y la confiabilidad de los propietarios para que reserves sin sorpresas ni riesgos."
              />
            </div>
          </div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src="https://framerusercontent.com/images/GWjQzjMp1XmOB5JsfRvqcRke3E.webp"
              alt="Habitación estudiante"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div
              className="absolute bottom-6 left-6 right-6 p-5 rounded-xl"
              style={{ backgroundColor: "#1A1A2E", opacity: 0.95 }}
            >
              <p className="section-eyebrow mb-1" style={{ color: "#C9A84C" }}>Más de 5,000 estudiantes felices</p>
              <p className="text-white text-sm leading-relaxed" style={{ fontFamily: '"DM Sans", sans-serif' }}>
                Encontrar tu habitación ideal nunca fue tan sencillo. Confía en MEDLA para tu próximo hogar.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AboutCard({ icon, title, description }: { icon: ReactNode; title: string; description: string }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="p-8 rounded-2xl flex gap-6 items-start transition-all"
      style={{ backgroundColor: "#F5F3EF" }}
    >
      <div className="p-4 rounded-xl shadow-sm flex-shrink-0" style={{ backgroundColor: "#ffffff", color: "#C9A84C" }}>
        {icon}
      </div>
      <div className="space-y-2">
        <h3 className="text-xl" style={{ color: "#1A1A2E", fontFamily: '"Playfair Display", serif', fontWeight: 700 }}>
          {title}
        </h3>
        <p className="leading-relaxed" style={{ color: "rgba(26,26,46,0.6)", fontFamily: '"DM Sans", sans-serif' }}>
          {description}
        </p>
      </div>
    </motion.div>
  );
}
