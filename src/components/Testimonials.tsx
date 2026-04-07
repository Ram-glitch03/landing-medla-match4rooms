import { motion } from "motion/react";
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-24" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="rounded-3xl p-8 md:p-16 space-y-16" style={{ backgroundColor: "#F5F3EF" }}>
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="space-y-6 max-w-xl">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 px-4 py-1.5 bg-white rounded-full">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#C9A84C" }} />
                  <span className="section-eyebrow" style={{ color: "#C9A84C" }}>Testimonios</span>
                </div>
                <div className="h-px flex-grow" style={{ backgroundColor: "#E8E5DE" }} />
              </div>
              <h2 className="text-4xl md:text-5xl" style={{ color: "#1A1A2E", fontFamily: '"Playfair Display", serif', fontWeight: 700 }}>
                Lo que dicen nuestros estudiantes
              </h2>
            </div>
            <div className="hidden md:block w-20 h-1 rounded-full" style={{ backgroundColor: "#C9A84C", opacity: 0.4 }} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <TestimonialCard
              quote="MEDLA hizo que mi búsqueda de habitación fuera increíblemente sencilla. Su guía y conocimiento de las zonas universitarias me ayudaron a encontrar el lugar perfecto en tiempo récord."
              author="María Thompson"
              role="Estudiante de Medicina · Madrid"
              image="https://framerusercontent.com/images/gA1SCU5nhjQJUNwN4dAS9raqw.webp"
            />
            <TestimonialCard
              quote="Me sentí acompañado en cada paso. Los consejos claros y la verificación de las habitaciones me dieron la tranquilidad que necesitaba para mi primer año fuera de casa."
              author="Brian Ruiz"
              role="Estudiante de Ingeniería · Barcelona"
              image="https://framerusercontent.com/images/2dvCOPoaEniJFuC835ZxLdqZ0.webp"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ quote, author, role, image }: { quote: string; author: string; role: string; image: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="bg-white p-8 md:p-12 rounded-3xl space-y-8 shadow-sm"
    >
      <Quote size={40} style={{ color: "rgba(201,168,76,0.25)" }} fill="rgba(201,168,76,0.1)" />
      <p className="text-xl md:text-2xl leading-relaxed italic" style={{ color: "rgba(26,26,46,0.8)", fontFamily: '"Playfair Display", serif', fontWeight: 600 }}>
        "{quote}"
      </p>
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
          <img src={image} alt={author} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div>
          <h4 className="text-lg" style={{ color: "#1A1A2E", fontFamily: '"Playfair Display", serif', fontWeight: 700 }}>
            {author}
          </h4>
          <p className="text-sm" style={{ color: "rgba(26,26,46,0.5)", fontFamily: '"DM Sans", sans-serif' }}>
            {role}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
