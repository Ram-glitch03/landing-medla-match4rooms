import { motion } from "motion/react";
import { ArrowRight, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contacto" className="pt-24 pb-12 overflow-hidden" style={{ backgroundColor: "#1A1A2E" }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-24">
        {/* CTA Section */}
        <div className="relative rounded-3xl overflow-hidden p-12 md:p-24 text-center space-y-8">
          <img
            src="https://framerusercontent.com/images/nMjqmhT2Oe3KiMkktCf7hsSVQ.jpg"
            alt="Encuentra tu habitación"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-0 left-0 right-0 h-0.5" style={{ backgroundColor: "#C9A84C", opacity: 0.5 }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent, rgba(26,26,46,0.8) 70%, #1A1A2E)" }} />

          <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
            <div
              className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 shadow-2xl relative"
              style={{ borderColor: "rgba(201,168,76,0.3)" }}
            >
              <img
                src="https://framerusercontent.com/images/pFWmjh1MmUlHUjB5a37IqhjHfDc.webp"
                alt="Asesor"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2" style={{ borderColor: "#1A1A2E" }} />
            </div>

            <h2 className="text-4xl md:text-5xl text-white" style={{ fontFamily: '"Playfair Display", serif', fontWeight: 700 }}>
              Encontremos tu habitación ideal
            </h2>
            <p className="text-xl" style={{ color: "rgba(255,255,255,0.6)", fontFamily: '"DM Sans", sans-serif' }}>
              ¿Listo para mudarte? Nuestros asesores están aquí para ayudarte a encontrar el lugar perfecto.
            </p>
            <motion.a
              href="mailto:habitaciones@medla.com"
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold transition-all group"
              style={{ backgroundColor: "#C9A84C", color: "#1A1A2E", fontFamily: '"DM Sans", sans-serif', textDecoration: "none" }}
            >
              Ponte en contacto
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </div>

        {/* Footer Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-start">
          {/* Brand */}
          <div className="space-y-5">
            <div className="flex items-center gap-2">
              <span style={{ fontFamily: '"Playfair Display", serif', fontWeight: 700, fontSize: "1.6rem", color: "#ffffff", letterSpacing: "-0.01em" }}>
                MEDLA
              </span>
              <span style={{ fontFamily: '"DM Sans", sans-serif', fontWeight: 500, fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C9A84C", marginTop: "4px" }}>
                Habitaciones
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.4)", fontFamily: '"DM Sans", sans-serif' }}>
              Habitaciones verificadas para estudiantes en las principales ciudades universitarias de España.
            </p>
          </div>

          <div className="space-y-6">
            <p className="section-eyebrow" style={{ color: "rgba(255,255,255,0.3)" }}>Menú</p>
            <div className="flex flex-col gap-3">
              {["Inicio", "Habitaciones", "Zonas", "Nosotros", "Contacto"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-base font-medium transition-colors"
                  style={{ color: "rgba(255,255,255,0.55)", fontFamily: '"DM Sans", sans-serif', textDecoration: "none" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#C9A84C")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <p className="section-eyebrow" style={{ color: "rgba(255,255,255,0.3)" }}>Síguenos</p>
            <div className="flex gap-3">
              {[Twitter, Facebook, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-3 rounded-full transition-all"
                  style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = "rgba(201,168,76,0.2)")}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.06)")}
                >
                  <Icon size={18} color="#C9A84C" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <p className="section-eyebrow" style={{ color: "rgba(255,255,255,0.3)" }}>Boletín informativo</p>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.4)", fontFamily: '"DM Sans", sans-serif' }}>
              Recibe nuevas habitaciones y actualizaciones del mercado directamente en tu correo.
            </p>
            <form
              className="flex border-b pb-3"
              style={{ borderColor: "rgba(201,168,76,0.3)" }}
              onSubmit={e => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="bg-transparent border-none outline-none flex-grow text-sm"
                style={{ color: "#ffffff", fontFamily: '"DM Sans", sans-serif' }}
              />
              <button
                type="submit"
                className="section-eyebrow"
                style={{ color: "#C9A84C", background: "none", border: "none", cursor: "pointer" }}
              >
                Enviar
              </button>
            </form>
          </div>
        </div>

        {/* Brand Watermark & Bottom */}
        <div className="pt-8 space-y-10">
          <div className="relative overflow-hidden">
            <h1
              className="text-center select-none"
              style={{
                fontSize: "clamp(4rem, 15vw, 12rem)",
                fontFamily: '"Playfair Display", serif',
                fontWeight: 700,
                lineHeight: 0.85,
                color: "rgba(201,168,76,0.05)",
                letterSpacing: "-0.02em",
              }}
            >
              MEDLA
            </h1>
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #1A1A2E 20%, transparent 100%)" }} />
          </div>

          <div
            className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "1.5rem" }}
          >
            <p style={{ color: "rgba(255,255,255,0.25)", fontFamily: '"DM Sans", sans-serif' }}>
              © 2026 MEDLA Habitaciones · Todos los derechos reservados.
            </p>
            <div className="flex gap-8">
              {["Política de Privacidad", "Términos de Servicio"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="transition-colors"
                  style={{ color: "rgba(255,255,255,0.25)", fontFamily: '"DM Sans", sans-serif', textDecoration: "none" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#C9A84C")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.25)")}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
