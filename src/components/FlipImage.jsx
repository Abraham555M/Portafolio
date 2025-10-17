// components/FlipImage.jsx
import { motion } from "framer-motion";

export const FlipImage = ({ src, index, activeIndex, total }) => {
  // Distancia en X para las posiciones laterales
  const offset = 60;

  const isActive = activeIndex === index;

  // Calcular posición X según la diferencia con la imagen activa
  const diff = index - activeIndex;

  return (
    <motion.img
      src={src}
      alt={`Imagen ${index}`}
      className={`absolute object-cover w-48 h-64 transform rounded-xl shadow-xl sm:w-56 sm:h-72 md:w-64 md:h-80 transition-all ease-out ${
        isActive ? "z-20" : "z-10"
      }`}
      animate={{
        rotate: isActive
          ? [index % 2 === 0 ? 8 : -8, index % 2 === 0 ? 6 : -6]
          : [diff > 0 ? 15 : -15, diff > 0 ? 4 : -4],
        scale: isActive ? 1 : 0.9,
        x: isActive ? 0 : diff * offset,
        y: isActive ? 0 : 70,
        opacity: isActive ? 1 : 0.7,
      }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
        delay: isActive ? 0.15 : 0,
      }}
    />
  );
};
