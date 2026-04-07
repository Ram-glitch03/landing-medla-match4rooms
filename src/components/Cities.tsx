import { motion } from "motion/react";

const cities = [
  {
    name: "Madrid",
    description: "Vive en el corazón de la capital, cerca de las principales universidades.",
    image: "https://framerusercontent.com/images/8fFtFdelNtmUpvHVxzb5hMqYfK8.webp",
  },
  {
    name: "Barcelona",
    description: "Habitaciones con estilo en la ciudad más cosmopolita y universitaria.",
    image: "https://framerusercontent.com/images/pUfhVbYewD1MibDQ5Y0Z9LsuQBs.webp",
  },
  {
    name: "Valencia",
    description: "Disfruta del sol y la playa mientras estudias en un entorno vibrante.",
    image: "https://framerusercontent.com/images/IKoqxtt8qK3DbVRrwyyLxuiA7r8.webp",
  },
  {
    name: "Sevilla",
    description: "Tradición y modernidad en las mejores zonas para estudiantes.",
    image: "https://framerusercontent.com/images/Wh50vBYScZqjQOgfqElUflDbYc.webp",
  },
];

export default function Cities() {
  return (
    <section id="zonas" className="py-24 md:py-32" style={{ backgroundColor: "#F5F3EF" }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-16">
        <div className="max-w-2xl space-y-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-1.5 bg-white rounded-full">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#C9A84C" }} />
              <span className="section-eyebrow" style={{ color: "#C9A84C" }}>Ubicaciones</span>
            </div>
            <div className="h-px flex-grow" style={{ backgroundColor: "#E8E5DE" }} />
          </div>
          <h2 className="text-4xl md:text-5xl" style={{ color: "#1A1A2E", fontFamily: '"Playfair Display", serif', fontWeight: 700 }}>
            Ciudades destacadas
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: "rgba(26,26,46,0.6)", fontFamily: '"DM Sans", sans-serif' }}>
            Explora las ciudades preferidas por los estudiantes por su ambiente, oferta académica y calidad de vida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cities.map((city, index) => (
            <motion.div
              key={city.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img
                src={city.image}
                alt={city.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(26,26,46,0.92) 35%, rgba(26,26,46,0.1) 100%)" }} />
              <div className="absolute inset-x-0 bottom-0 p-7 space-y-1">
                <p className="section-eyebrow" style={{ color: "#C9A84C" }}>España</p>
                <h3 className="text-2xl text-white" style={{ fontFamily: '"Playfair Display", serif', fontWeight: 700 }}>
                  {city.name}
                </h3>
                <p className="text-sm leading-relaxed mt-2" style={{ color: "rgba(255,255,255,0.65)", fontFamily: '"DM Sans", sans-serif' }}>
                  {city.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
