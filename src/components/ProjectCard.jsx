import { useState } from "react";
import { motion } from "framer-motion";
import { FaUpRightFromSquare } from "react-icons/fa6";

const ProjectCard = ({ imagen, imagen2, titulo, descipcion, enlace, tecnologias }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -6 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-[380px] xl:max-w-[420px] 
                 h-[420px] sm:h-[440px] md:h-[460px] lg:h-[480px] 
                 p-4 sm:p-5 text-white transition-all duration-500 border shadow-xl group rounded-2xl backdrop-blur-lg
                 bg-gradient-to-br from-slate-800/95 to-slate-900/95 border-slate-700/50
                 hover:border-green-500/60 hover:shadow-green-500/30 hover:shadow-2xl
                 before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br
                 before:from-green-500/0 before:to-green-500/0
                 hover:before:from-green-500/10 hover:before:to-green-500/10
                 before:transition-all before:duration-500"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Brillos decorativos */}
      <div className="absolute top-0 right-0 w-24 h-24 transition-all duration-500 rounded-full sm:w-28 sm:h-28 md:w-32 md:h-32 bg-gradient-to-br from-green-400/0 to-transparent blur-2xl group-hover:from-green-400/25"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 transition-all duration-500 rounded-full sm:w-28 sm:h-28 md:w-32 md:h-32 bg-gradient-to-tr from-green-400/0 to-transparent blur-2xl group-hover:from-green-400/20"></div>

      {/* Imagen del proyecto */}
      <div className="relative z-10 h-[180px] sm:h-[200px] md:h-[220px] overflow-hidden transition-all duration-500 shadow-lg rounded-xl ring-1 ring-slate-700/50 group-hover:ring-green-500/50">
        <motion.img
          src={imagen}
          alt="Project"
          initial={{ opacity: 1 }}
          animate={{ opacity: hovered ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          className="absolute top-0 left-0 object-cover w-full h-full"
        />
        <motion.img
          src={imagen2}
          alt="Project Hover"
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="absolute top-0 left-0 object-cover w-full h-full"
        />
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
        <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-br from-green-500/10 to-transparent group-hover:opacity-100"></div>
      </div>

      {/* Contenido scrollable */}
        <div className="relative z-10 mt-4 overflow-y-auto h-[170px] md:h-[190px] pr-2">

        {/* Título + icono */}
        <div className="flex items-center mb-3 space-x-2">
          <motion.h1
            whileHover={{ scale: 1.02 }}
            className="text-xl font-bold tracking-wide text-white transition-all duration-300 sm:text-2xl md:text-xl group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-green-300 group-hover:bg-clip-text"
          >
            {titulo}
          </motion.h1>

          <motion.a
            href={enlace}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            className="flex items-center"
          >
            <FaUpRightFromSquare className="text-base sm:text-lg text-white hover:text-green-400 transition-all duration-300 
                                          drop-shadow-lg hover:drop-shadow-[0_0_8px_rgba(74,222,128,0.5)]" />
          </motion.a>
        </div>

        {/* Descripción */}
        <p className="mb-4 text-sm leading-relaxed text-gray-400 transition-colors duration-300 sm:text-base group-hover:text-slate-200">
          {descipcion}
        </p>

        {/* Tecnologías */}
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {tecnologias.map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              className="relative flex items-center px-2 sm:px-3 py-1 sm:py-1.5 space-x-1.5 sm:space-x-2 text-xs sm:text-sm font-semibold text-green-100
                         bg-gradient-to-r from-slate-700/90 to-slate-800/90 backdrop-blur-sm
                         rounded-full border border-slate-600/60 hover:border-green-500/70
                         transition-all duration-300 shadow-md hover:shadow-green-500/20
                         before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r
                         before:from-green-500/0 before:to-green-500/0
                         hover:before:from-green-500/10 hover:before:to-green-500/10
                         before:transition-all before:duration-300"
            >
              <span className="relative z-10 text-sm">{tech.icono}</span>
              <span className="relative z-10">{tech.nombre}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Línea inferior decorativa */}
      <div className="absolute bottom-0 left-0 right-0 mx-4 w-0 h-0.5 bg-gradient-to-r from-green-500 to-green-400 group-hover:w-[calc(100%-2rem)] transition-all duration-700 rounded-full z-10"></div>
    </motion.div>
  );
};

export default ProjectCard;
