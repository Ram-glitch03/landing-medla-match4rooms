import { motion } from "motion/react";
import { ArrowUpRight, Search } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col justify-end px-4 md:px-8 pb-12 md:pb-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://framerusercontent.com/images/I5TK0E5MrO84hanvd42um4tv0.webp"
          alt="Habitaciones para estudiantes"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, #1A1A2E 30%, rgba(26,26,46,0.55) 65%, rgba(26,26,46,0.2) 100%)" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Left Content */}
          <div className="lg:col-span-8 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="section-eyebrow mb-4" style={{ color: "#C9A84C" }}>
                Alojamiento Premium para Estudiantes
              </p>
              <h1 className="hero-title text-white">
                Tu hogar ideal<br />cerca del campus
              </h1>
            </motion.div>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="max-w-md text-lg leading-relaxed"
                style={{ color: "rgba(255,255,255,0.8)", fontFamily: '"DM Sans", sans-serif' }}
              >
                Descubre habitaciones verificadas, totalmente seguras y equipadas para que vivas la mejor experiencia universitaria desde el primer día. Sin sorpresas ni letra pequeña.
              </motion.p>

              <motion.a
                href="#habitaciones"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="px-8 py-4 font-bold rounded-full flex items-center gap-2 group transition-all flex-shrink-0"
                style={{ backgroundColor: "#C9A84C", color: "#1A1A2E", fontFamily: '"DM Sans", sans-serif', textDecoration: "none" }}
              >
                Ver habitaciones
                <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.a>
            </div>
          </div>

          {/* Right Content - Search Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="lg:col-span-4"
          >
            <a
              href="#habitaciones"
              className="bg-white p-6 rounded-2xl shadow-2xl flex items-center gap-4 group cursor-pointer hover:scale-[1.02] transition-transform"
              style={{ textDecoration: "none", display: "flex" }}
            >
              <div className="w-16 h-16 rounded-xl flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: "#1A1A2E" }}>
                <Search size={26} color="#C9A84C" />
              </div>
              <div className="flex-grow">
                <p className="section-eyebrow" style={{ color: "rgba(26,26,46,0.45)" }}>Disponibles ahora</p>
                <h3 className="text-lg" style={{ color: "#1A1A2E", fontFamily: '"Playfair Display", serif', fontWeight: 700 }}>
                  Busca tu habitación
                </h3>
              </div>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white flex-shrink-0" style={{ backgroundColor: "#1A1A2E" }}>
                <ArrowUpRight size={20} />
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
