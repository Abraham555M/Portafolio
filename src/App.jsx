import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "./components/Navbar";
import { Contacto } from "./sections/Contacto/Contacto";
import { Experiencia } from "./sections/Experiencia/Experiencia";
import { Habilidades } from "./sections/Habilidades/Habilidades";
import { Inicio } from "./sections/Inicio/Inicio";
import { Proyectos } from "./sections/Proyectos/Proyectos";
import { SobreMi } from "./sections/SobreMi/SobreMi";
import { FaArrowUp } from "react-icons/fa";

export const App = () => {
  const [showButton, setShowButton] = useState(false);

  // Mostrar el botón cuando se hace scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Función para volver al inicio
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Inicio />
      <SobreMi />
      <Proyectos />
      <Habilidades />
      <Experiencia />
      <Contacto />

      {/* Flotante Global - Modern Design */}
      <AnimatePresence>
        {showButton && (
          <motion.button
            onClick={scrollToTop}
            initial={{ scale: 0, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1, y: -4 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed z-50 p-4 overflow-hidden transition-all duration-300 border shadow-2xl group bottom-6 right-6 rounded-2xl backdrop-blur-lg bg-gradient-to-br from-slate-800/95 to-slate-900/95 border-slate-700/50 hover:border-green-500/60 hover:shadow-green-500/30 hover:shadow-2xl"
          >
            {/* Efecto de brillo superior */}
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>
            
            {/* Efecto de brillo flotante */}
            <div className="absolute top-0 right-0 w-16 h-16 transition-all duration-500 rounded-full bg-gradient-to-br from-green-400/0 to-transparent blur-xl group-hover:from-green-400/30"></div>
            
            {/* Ícono con animación de rebote */}
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <FaArrowUp className="text-xl text-green-400 transition-colors duration-300 group-hover:text-green-300" />
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};