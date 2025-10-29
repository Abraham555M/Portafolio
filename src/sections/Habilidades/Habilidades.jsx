import { useState, useMemo } from "react";
import { skills } from "../../data/SkillsData";
import SkillCard from "../../components/SkillCard";
import { categorias } from "../../data/CategoriasData";
import { motion, AnimatePresence, useSpring } from "framer-motion";

export const Habilidades = () => {
  const [tipoSeleccionado, setTipoSeleccionado] = useState(null);

  // ✅ useMemo para evitar recalcular el filtrado en cada render
  const skillsFiltradas = useMemo(() => {
    return tipoSeleccionado
      ? skills.filter((skill) => skill.tipo === tipoSeleccionado)
      : skills;
  }, [tipoSeleccionado]);

  // Variantes optimizadas
  const categoriesBarVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, staggerChildren: 0.08 },
    },
  };

  const categoryItemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  const skillsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: 0.1 },
    },
  };

  const skillCardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 14 },
    },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
  };

  // 🌀 Pequeño spring para suavizar la transición al cambiar de categoría
  const smoothTransition = useSpring(tipoSeleccionado, {
    stiffness: 80,
    damping: 15,
  });

  return (
    <section
      id="habilidades"
      className="p-6 text-white border md:p-20 will-change-transform"
      style={{ transform: "translateZ(0)" }}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Título */}
        <div className="py-3 space-y-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-3xl font-bold text-center text-transparent md:text-5xl bg-gradient-to-r from-green-400 to-green-300 bg-clip-text"
          >
            Skills
          </motion.h1>

          {/* Categorías */}
          <motion.div
            variants={categoriesBarVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full mx-auto overflow-x-auto border shadow-xl rounded-2xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-lg border-slate-700/40 scrollbar-hide"
          >
            <ul className="flex text-base font-semibold text-slate-200">
              {categorias.map((categoria, index) => (
                <motion.li
                  key={categoria.id}
                  variants={categoryItemVariants}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setTipoSeleccionado(categoria.id)}
                  className={`flex-1 min-w-[140px] px-6 py-3 cursor-pointer text-center transition-all duration-300 
                    ${index !== categorias.length - 1 ? "border-r border-slate-700/40" : ""}
                    hover:bg-gradient-to-r hover:from-green-500/10 hover:to-green-400/10 
                    hover:text-green-400
                    ${
                      tipoSeleccionado === categoria.id
                        ? "bg-gradient-to-r from-green-500/15 to-green-400/15 text-green-400"
                        : ""
                    }
                  `}
                >
                  {categoria.nombre}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Botón para mostrar todas */}
          <AnimatePresence>
            {tipoSeleccionado && (
              <motion.button
                initial={{ opacity: 0, scale: 0.9, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -10 }}
                transition={{ duration: 0.25 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setTipoSeleccionado(null)}
                className="px-5 py-2 mt-5 text-sm font-semibold tracking-wide transition-all duration-300 border rounded-lg shadow-md text-slate-200 border-green-500/40 bg-slate-800/40 backdrop-blur-md hover:bg-green-500/15 hover:border-green-500/70 hover:text-green-400 hover:shadow-green-500/20"
              >
                Show All
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        {/* Grid de Skills */}
        <motion.div
          key={tipoSeleccionado || "all"}
          variants={skillsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          className="grid grid-cols-[repeat(auto-fit,minmax(8rem,1fr))] gap-10 mt-10 justify-items-center place-items-center"
          style={{
            willChange: "transform, opacity",
            transform: "translateZ(0)",
          }}
        >
          <AnimatePresence mode="popLayout">
            {skillsFiltradas.map((skill) => (
              <motion.div
                key={skill.id}
                variants={skillCardVariants}
                layout
                style={{ willChange: "transform, opacity" }}
              >
                <SkillCard
                  tipo={skill.tipo}
                  nombre={skill.nombre}
                  icono={skill.icono}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
