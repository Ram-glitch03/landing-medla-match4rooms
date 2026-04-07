import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Habitaciones", href: "#habitaciones" },
    { name: "Zonas", href: "#zonas" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 px-4 md:px-8 pointer-events-none">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="pointer-events-auto"
        >
          <a href="/" className="flex items-center gap-2" style={{ textDecoration: "none" }}>
            <span style={{ fontFamily: '"Playfair Display", serif', fontWeight: 700, fontSize: "1.5rem", color: "#ffffff", letterSpacing: "-0.01em" }}>
              MEDLA
            </span>
            <span style={{ fontFamily: '"DM Sans", sans-serif', fontWeight: 500, fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C9A84C", marginTop: "2px" }}>
              Habitaciones
            </span>
          </a>
        </motion.div>

        {/* Desktop Menu */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="hidden md:flex items-center gap-1 p-1.5 bg-white rounded-full pointer-events-auto shadow-xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-6 py-2 text-sm font-medium rounded-full transition-colors"
              style={{ color: "#1A1A2E", fontFamily: '"DM Sans", sans-serif', textDecoration: "none" }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#F5F3EF")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              {link.name}
            </a>
          ))}
        </motion.div>

        {/* Mobile Menu Toggle */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="md:hidden pointer-events-auto"
        >
          <button onClick={() => setIsOpen(!isOpen)} className="p-3 bg-white rounded-full shadow-lg" style={{ color: "#1A1A2E" }}>
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </motion.div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute top-20 left-4 right-4 bg-white rounded-2xl p-6 shadow-2xl md:hidden pointer-events-auto"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-semibold pb-2 border-b"
                style={{ color: "#1A1A2E", borderColor: "#E8E5DE", fontFamily: '"DM Sans", sans-serif', textDecoration: "none" }}
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
