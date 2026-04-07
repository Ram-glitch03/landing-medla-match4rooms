import { motion } from "motion/react";
import { useState } from "react";
import { Bed, Bath, Maximize, ArrowUpRight } from "lucide-react";

const listings = [
  {
    id: 1,
    title: "Habitación Moderna en el Centro",
    location: "Cerca de la Universidad Central, Madrid",
    price: "€450/mes",
    specs: { sqft: "15", beds: "1", baths: "Compartido" },
    type: "Habitación",
    status: "Disponible",
    image: "https://framerusercontent.com/images/7qddMcFEDswacgycG4I3MRkL56o.webp",
  },
  {
    id: 2,
    title: "Estudio Luminoso para Estudiantes",
    location: "Zona Universitaria, Barcelona",
    price: "€600/mes",
    specs: { sqft: "25", beds: "1", baths: "Privado" },
    type: "Estudio",
    status: "Disponible",
    image: "https://framerusercontent.com/images/vS2CA5Cg9J9whGTYIJAYs6DfPs.webp",
  },
  {
    id: 3,
    title: "Habitación Premium con Balcón",
    location: "Barrio de Gràcia, Barcelona",
    price: "€550/mes",
    specs: { sqft: "18", beds: "1", baths: "Privado" },
    type: "Habitación",
    status: "Disponible",
    image: "https://framerusercontent.com/images/NCe5u2vNkJTDq99aE4z9j4nnomw.webp",
  },
  {
    id: 4,
    title: "Piso Compartido — Habitación Grande",
    location: "Cerca de la Politécnica, Valencia",
    price: "€350/mes",
    specs: { sqft: "20", beds: "1", baths: "Compartido" },
    type: "Habitación",
    status: "Disponible",
    image: "https://framerusercontent.com/images/w5FoqrGf2ajYCpdOTgI4Rm4s1s.webp",
  },
  {
    id: 5,
    title: "Habitación en Residencia",
    location: "Campus Universitario, Sevilla",
    price: "€500/mes",
    specs: { sqft: "12", beds: "1", baths: "Privado" },
    type: "Residencia",
    status: "Disponible",
    image: "https://framerusercontent.com/images/phjPBLFz2C2keKmrYPkV1hNS92Y.webp",
  },
  {
    id: 6,
    title: "Habitación en Ático con Terraza",
    location: "Centro Histórico, Granada",
    price: "€300/mes",
    specs: { sqft: "14", beds: "1", baths: "Compartido" },
    type: "Habitación",
    status: "Disponible",
    image: "https://framerusercontent.com/images/D2Rosu46lk7tmVyYhuODw5KE6Qs.webp",
  },
  {
    id: 7,
    title: "Habitación Loft para Estudiantes",
    location: "Malasaña, Madrid",
    price: "€500/mes",
    specs: { sqft: "22", beds: "1", baths: "Privado" },
    type: "Habitación",
    status: "Disponible",
    image: "https://images.unsplash.com/photo-1522771731478-44710c28d116?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    title: "Piso Estudiantil Entero",
    location: "Ciudad Universitaria, Salamanca",
    price: "€850/mes",
    specs: { sqft: "75", beds: "3", baths: "1" },
    type: "Piso Completo",
    status: "Disponible",
    image: "https://images.unsplash.com/photo-1502672260266-1c1de2d9d1c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 9,
    title: "Habitación Económica Campus",
    location: "Campus de Teatinos, Málaga",
    price: "€280/mes",
    specs: { sqft: "12", beds: "1", baths: "Compartido" },
    type: "Habitación",
    status: "Próximamente",
    image: "https://images.unsplash.com/photo-1560185007-caccf4c28f32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  }
];

export default function Listings() {
  const [activeTab, setActiveTab] = useState("disponible");

  return (
    <section id="habitaciones" className="py-24" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-16">
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12" style={{ backgroundColor: "#E8E5DE" }} />
            <span className="section-eyebrow" style={{ color: "rgba(26,26,46,0.5)" }}>Catálogo</span>
            <div className="h-px w-12" style={{ backgroundColor: "#E8E5DE" }} />
          </div>
          <h2 className="text-4xl md:text-5xl" style={{ color: "#1A1A2E", fontFamily: '"Playfair Display", serif', fontWeight: 700 }}>
            Últimas habitaciones disponibles
          </h2>

          {/* Tabs */}
          <div className="flex justify-center gap-2">
            {["disponible", "proximamente"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="px-8 py-3 rounded-full font-bold transition-all"
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                  backgroundColor: activeTab === tab ? "#1A1A2E" : "#F5F3EF",
                  color: activeTab === tab ? "#ffffff" : "rgba(26,26,46,0.5)",
                }}
              >
                {tab === "disponible" ? "Disponibles" : "Próximamente"}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listings.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span
                    className="px-3 py-1 backdrop-blur text-[10px] font-bold uppercase rounded-full shadow-sm"
                    style={{ backgroundColor: "rgba(201,168,76,0.9)", color: "#1A1A2E", fontFamily: '"DM Sans", sans-serif', letterSpacing: "0.08em" }}
                  >
                    {item.status}
                  </span>
                  <span
                    className="px-3 py-1 bg-white/90 backdrop-blur text-[10px] font-bold uppercase rounded-full shadow-sm"
                    style={{ color: "#1A1A2E", fontFamily: '"DM Sans", sans-serif', letterSpacing: "0.08em" }}
                  >
                    {item.type}
                  </span>
                </div>
                {/* Hover overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4"
                  style={{ background: "linear-gradient(to top, rgba(26,26,46,0.6), transparent)" }}
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "#C9A84C" }}>
                    <ArrowUpRight size={18} color="#1A1A2E" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-lg group-hover:text-[#C9A84C] transition-colors" style={{ color: "#1A1A2E", fontFamily: '"Playfair Display", serif', fontWeight: 700 }}>
                      {item.title}
                    </h3>
                    <p className="text-sm mt-0.5" style={{ color: "rgba(26,26,46,0.5)", fontFamily: '"DM Sans", sans-serif' }}>
                      {item.location}
                    </p>
                  </div>
                  <div className="text-lg font-bold flex-shrink-0" style={{ color: "#C9A84C", fontFamily: '"Playfair Display", serif' }}>
                    {item.price}
                  </div>
                </div>

                <div className="flex items-center gap-6 pt-4 border-t" style={{ borderColor: "#E8E5DE" }}>
                  {[
                    { icon: <Maximize size={15} />, label: `${item.specs.sqft} m²` },
                    { icon: <Bed size={15} />, label: `${item.specs.beds} Cama` },
                    { icon: <Bath size={15} />, label: `Baño ${item.specs.baths}` },
                  ].map(({ icon, label }) => (
                    <div key={label} className="flex items-center gap-2" style={{ color: "rgba(26,26,46,0.5)", fontFamily: '"DM Sans", sans-serif' }}>
                      {icon}
                      <span className="text-xs font-medium">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center pt-8">
          <a
            href="#contact"
            className="px-10 py-4 rounded-full font-bold transition-all flex items-center gap-2 group"
            style={{ border: "1.5px solid #1A1A2E", color: "#1A1A2E", fontFamily: '"DM Sans", sans-serif', textDecoration: "none" }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = "#1A1A2E"; e.currentTarget.style.color = "#ffffff"; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "#1A1A2E"; }}
          >
            Ver más opciones
            <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
