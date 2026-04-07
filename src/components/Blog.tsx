import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    title: "5 consejos para elegir a tus compañeros de piso",
    category: "Convivencia",
    date: "Jul 10, 2024",
    image: "https://framerusercontent.com/images/8fzfbl09J7vNXlRZgjyaKMLK8Q.webp",
  },
  {
    title: "Cómo ahorrar en el alquiler siendo estudiante",
    category: "Finanzas",
    date: "Jun 19, 2025",
    image: "https://framerusercontent.com/images/n9jzUZuNSxkgzqgWxnEUD2bHUS0.webp",
  },
  {
    title: "Las mejores zonas para vivir en Madrid si estudias",
    category: "Guía Ciudad",
    date: "Sep 5, 2024",
    image: "https://framerusercontent.com/images/tz8mQp6A9VEmOspdBz5vm6uNZWY.webp",
  },
];

export default function Blog() {
  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-16">
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12" style={{ backgroundColor: "#E8E5DE" }} />
            <span className="section-eyebrow" style={{ color: "rgba(26,26,46,0.5)" }}>Blog para estudiantes</span>
            <div className="h-px w-12" style={{ backgroundColor: "#E8E5DE" }} />
          </div>
          <h2 className="text-4xl md:text-5xl" style={{ color: "#1A1A2E", fontFamily: '"Playfair Display", serif', fontWeight: 700 }}>
            Consejos y Guías
          </h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "rgba(26,26,46,0.55)", fontFamily: '"DM Sans", sans-serif' }}>
            Compartimos actualizaciones prácticas y consejos sobre la vida universitaria y el alquiler para ayudarte en tu etapa académica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer space-y-6"
            >
              <div className="aspect-[1.2] rounded-2xl overflow-hidden relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  style={{ backgroundColor: "rgba(26,26,46,0.45)" }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: "#C9A84C" }}>
                    <ArrowUpRight size={20} color="#1A1A2E" />
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span
                    className="px-3 py-1 rounded-full text-[10px] font-bold uppercase"
                    style={{ backgroundColor: "#F5F3EF", color: "#C9A84C", fontFamily: '"DM Sans", sans-serif', letterSpacing: "0.08em" }}
                  >
                    {post.category}
                  </span>
                  <span className="text-xs font-medium" style={{ color: "rgba(26,26,46,0.45)", fontFamily: '"DM Sans", sans-serif' }}>
                    {post.date}
                  </span>
                </div>
                <h3 className="text-xl leading-tight" style={{ color: "#1A1A2E", fontFamily: '"Playfair Display", serif', fontWeight: 700 }}>
                  {post.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
