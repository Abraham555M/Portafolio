import { useEffect, useState } from "react";
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
    <>
      <Navbar/>
      <Inicio/>
      <SobreMi/>
      <Proyectos/>
      <Habilidades/>
      <Experiencia/>
      <Contacto/>

     {/* Flotante Global */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed p-4 text-white transition bg-green-600 rounded-full shadow-lg bottom-6 right-6 hover:bg-green-700"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
}
