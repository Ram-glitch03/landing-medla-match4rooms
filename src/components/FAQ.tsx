import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "¿Cómo funciona el proceso de reserva?",
    answer: "Comenzamos con una consulta para entender tus necesidades, zona preferida y presupuesto. Luego te mostramos opciones verificadas, organizamos visitas (presenciales o virtuales) y te ayudamos con el contrato y el depósito. Todo de forma transparente y sin sorpresas.",
  },
  {
    question: "¿Necesito un aval para rentar?",
    answer: "En la mayoría de los casos, sí. Si eres estudiante, solemos solicitar la firma de un padre o tutor como avalista. Si no dispones de uno, podemos ofrecerte alternativas de seguros de impago adaptadas a tu situación.",
  },
  {
    question: "¿Qué servicios suelen estar incluidos?",
    answer: "Depende de la habitación, pero muchas de nuestras opciones incluyen agua, luz, gas e internet de alta velocidad en el precio mensual para que no tengas que preocuparte por facturas extra.",
  },
  {
    question: "¿Puedo visitar la habitación antes de pagar?",
    answer: "¡Por supuesto! Recomendamos siempre visitar el lugar. Si estás fuera de la ciudad, nuestros asesores pueden realizar una videollamada contigo para mostrarte cada detalle de la habitación y las zonas comunes.",
  },
  {
    question: "¿Qué pasa si tengo problemas con mis compañeros?",
    answer: "Contamos con un servicio de mediación. Si surge algún conflicto grave de convivencia, nuestro equipo intervendrá para buscar una solución o ayudarte a encontrar una nueva ubicación si fuera necesario.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: "#F5F3EF" }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 px-4 py-1.5 bg-white rounded-full">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#C9A84C" }} />
                  <span className="section-eyebrow" style={{ color: "#C9A84C" }}>FAQ</span>
                </div>
                <div className="h-px flex-grow" style={{ backgroundColor: "#E8E5DE" }} />
              </div>
              <h2 className="text-4xl md:text-5xl" style={{ color: "#1A1A2E", fontFamily: '"Playfair Display", serif', fontWeight: 700 }}>
                Preguntas frecuentes
              </h2>
            </div>

            <div className="space-y-8">
              <div className="aspect-[1.8] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://framerusercontent.com/images/iv87QVFz8fU7Ehqwdtr429bPNmo.webp"
                  alt="FAQ"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-5">
                <p className="text-lg leading-relaxed" style={{ color: "rgba(26,26,46,0.6)", fontFamily: '"DM Sans", sans-serif' }}>
                  ¿Tienes más dudas? Nuestro equipo está listo para ayudarte.
                </p>
                <a
                  href="https://medla-asesores.com/agenda-tu-cita/" target="_blank" rel="noopener noreferrer"
                  className="inline-block px-8 py-4 bg-white rounded-full font-bold transition-all"
                  style={{ color: "#1A1A2E", fontFamily: '"DM Sans", sans-serif', border: "1px solid #E8E5DE", textDecoration: "none" }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = "#1A1A2E"; e.currentTarget.style.color = "#ffffff"; }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = "#ffffff"; e.currentTarget.style.color = "#1A1A2E"; }}
                >
                  Contáctanos
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Accordion */}
          <div className="lg:col-span-7">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b last:border-0" style={{ borderColor: "#E8E5DE" }}>
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full py-7 flex justify-between items-center text-left"
                >
                  <span
                    className="text-lg md:text-xl pr-4 transition-colors"
                    style={{
                      color: openIndex === index ? "#C9A84C" : "#1A1A2E",
                      fontFamily: '"Playfair Display", serif',
                      fontWeight: 700,
                    }}
                  >
                    {faq.question}
                  </span>
                  <div
                    className="p-2.5 rounded-full transition-all flex-shrink-0"
                    style={{
                      backgroundColor: openIndex === index ? "#1A1A2E" : "#ffffff",
                      color: openIndex === index ? "#C9A84C" : "#1A1A2E",
                      transform: openIndex === index ? "rotate(45deg)" : "none",
                    }}
                  >
                    <Plus size={18} />
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-7 text-base leading-relaxed" style={{ color: "rgba(26,26,46,0.65)", fontFamily: '"DM Sans", sans-serif' }}>
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
