import { motion } from "framer-motion";
import { useState } from "react";
import { imagenes } from "../../data/ImagenesData";
import { infos } from "../../data/InfoData";
import { FaExclamationCircle } from 'react-icons/fa';
import { AiFillBell } from 'react-icons/ai';

export const SobreMi = () => {
  const [frontIndex, setFrontIndex] = useState(0);

  const handleClick = () => {
    setFrontIndex((prev) => (prev + 1) % imagenes.length);
  };

  // Animación simple para el título
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  // Animación para la imagen (desde la izquierda)
  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Animación para el contenido (desde la derecha)
  const contentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 }
    }
  };

  // Stagger para las secciones de info
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <section id="sobre-mi" className="p-6 text-white md:p-20">
      <div className="max-w-[1200px] mx-auto">
        {/* Título */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className='py-3 m-auto space-y-5 text-center'
        >
          <h1 className='text-3xl font-bold text-transparent md:text-5xl bg-gradient-to-r from-green-400 to-green-300 bg-clip-text'>
            About me
          </h1>
          <p className='font-semibold text-slate-400 text-md md:text-lg'>
            Discover my journey, passions and the story behind my work
          </p>
        </motion.div>

        <div className='flex flex-col gap-10 mt-10 lg:flex-row'>
          {/* Imagen con entrada desde la izquierda */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative flex justify-center mx-auto mt-10 cursor-pointer lg:w-1/2 min-h-[25rem] sm:min-h-[24rem] md:min-h-[28rem] group"
            onClick={handleClick}
          >
            {/* Efecto de brillo de fondo */}
            <div className="absolute inset-0 transition-all duration-700 rounded-full opacity-0 bg-gradient-to-br from-green-500/20 to-green-400/20 blur-3xl group-hover:opacity-100"></div>
            
            {imagenes.map((imagen, index) => {
              const relativeIndex = (index - frontIndex + imagenes.length) % imagenes.length;
              const isFront = relativeIndex === 0;

              return (
                <motion.div
                  key={imagen.id}
                  className="absolute overflow-hidden border shadow-2xl rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border-slate-700/50"
                  initial={false}
                  animate={{
                    opacity: isFront ? 1 : 0.7 - (relativeIndex * 0.1),
                    scale: isFront ? 1 : 0.9 - (relativeIndex * 0.05),
                    rotate: isFront ? 6 : -6 - (relativeIndex * 2),
                    x: isFront ? 0 : -60 - (relativeIndex * 10),
                    y: isFront ? 0 : 70 + (relativeIndex * 10),
                    zIndex: isFront ? 20 : 20 - relativeIndex
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  whileHover={isFront ? { scale: 1.02 } : {}}
                >
                  {/* Borde con gradiente en la imagen frontal */}
                  {isFront && (
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-500/30 via-transparent to-green-400/30 blur-sm"></div>
                  )}
                  <img
                    src={imagen.foto}
                    alt={`Image ${index + 1}`}
                    className="relative object-cover w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80"
                  />
                </motion.div>
              );
            })}
          </motion.div>

          {/* Información con entrada desde la derecha */}
          <motion.div
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-4 max-w-[48em] w-full mx-auto"
          >
            {/* Primer Nivel - Cards Who Am I y My Approach */}
            <motion.div
              variants={sectionVariants}
              className="flex flex-col gap-4 md:flex-row"
            >
              <motion.div 
                variants={itemVariants}
                className="relative flex-1 px-4 py-4 space-y-4 overflow-hidden transition-all duration-300 border shadow-xl group md:px-6 bg-gradient-to-br from-slate-800/95 to-slate-900/95 rounded-2xl backdrop-blur-lg border-slate-700/50 hover:border-green-500/60 hover:shadow-green-500/20 hover:shadow-2xl"
              >
                {/* Efecto de brillo superior */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>
                
                {/* Efecto de brillo flotante */}
                <div className="absolute top-0 right-0 w-24 h-24 transition-all duration-700 rounded-full bg-gradient-to-br from-green-400/0 to-transparent blur-2xl group-hover:from-green-400/20"></div>

                <div className="relative z-10 flex items-center gap-3 font-extrabold">
                  <div className="flex items-center justify-center p-2.5 transition-all duration-300 border shadow-lg rounded-xl bg-gradient-to-br from-slate-700/90 to-slate-800/90 border-slate-600/50 group-hover:border-green-500/60 group-hover:shadow-green-500/30 group-hover:scale-110">
                    <FaExclamationCircle className="text-xl text-green-400 group-hover:text-green-300" />
                  </div>
                  <h1 className="text-2xl text-white">Who Am I</h1>
                </div>
                <p className="relative z-10 font-semibold text-slate-400 group-hover:text-slate-300">
                  I'm Abraham Manuel Hilario Fernández, a Full Stack and Android Developer with over 1 year of professional experience building functional, scalable, and user-friendly digital solutions. I'm passionate about transforming ideas into powerful applications that combine clean design, solid architecture, and smooth user experiences.
                </p>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="relative flex-1 px-4 py-4 space-y-4 overflow-hidden transition-all duration-300 border shadow-xl group md:px-6 bg-gradient-to-br from-slate-800/95 to-slate-900/95 rounded-2xl backdrop-blur-lg border-slate-700/50 hover:border-green-500/60 hover:shadow-green-500/20 hover:shadow-2xl"
              >
                {/* Efecto de brillo superior */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>
                
                {/* Efecto de brillo flotante */}
                <div className="absolute top-0 right-0 w-24 h-24 transition-all duration-700 rounded-full bg-gradient-to-br from-green-400/0 to-transparent blur-2xl group-hover:from-green-400/20"></div>

                <div className="relative z-10 flex flex-wrap items-center gap-3 font-extrabold">
                  <div className="flex items-center justify-center p-2.5 transition-all duration-300 border shadow-lg rounded-xl bg-gradient-to-br from-slate-700/90 to-slate-800/90 border-slate-600/50 group-hover:border-green-500/60 group-hover:shadow-green-500/30 group-hover:scale-110 shrink-0">
                    <FaExclamationCircle className="text-xl text-green-400 group-hover:text-green-300" />
                  </div>
                  <h1 className="text-2xl text-white break-words">My Approach</h1>
                </div>
                <p className="relative z-10 font-semibold text-slate-400 group-hover:text-slate-300">
                  I believe in creating user-first solutions that balance performance, clean design, and functionality, ensuring every project feels intuitive, efficient, and impactful.
                </p>
              </motion.div>
            </motion.div>

            {/* Segundo Nivel - Personal Info */}
            <motion.div
              variants={itemVariants}
              className="relative flex flex-col gap-4 p-4 overflow-hidden transition-all duration-300 border shadow-xl group bg-gradient-to-br from-slate-800/95 to-slate-900/95 rounded-2xl backdrop-blur-lg border-slate-700/50 hover:border-green-500/60 hover:shadow-green-500/20 hover:shadow-2xl"
            >
              {/* Efecto de brillo superior */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>
              
              {/* Efecto de brillo flotante */}
              <div className="absolute top-0 right-0 w-32 h-32 transition-all duration-700 rounded-full bg-gradient-to-br from-green-400/0 to-transparent blur-3xl group-hover:from-green-400/20"></div>

              <div className="relative z-10 flex flex-wrap items-center gap-3 font-extrabold">
                <div className="flex items-center justify-center p-2.5 transition-all duration-300 border shadow-lg rounded-xl bg-gradient-to-br from-slate-700/90 to-slate-800/90 border-slate-600/50 group-hover:border-green-500/60 group-hover:shadow-green-500/30 group-hover:scale-110 shrink-0">
                  <AiFillBell className="text-xl text-green-400 group-hover:text-green-300" />
                </div>
                <h1 className="text-2xl text-white break-words">Personal Info</h1>
              </div>
            
              <div className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-2">
                {infos.map((item) => (
                  <motion.div
                    key={item.id}
                    whileHover={{ scale: 1.03, x: 4 }}
                    className="relative flex flex-col gap-3 p-3 overflow-hidden transition-all duration-300 border shadow-lg sm:flex-row sm:items-start group/item rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 hover:border-green-500/60 hover:shadow-green-500/20"
                  >
                    {/* Mini efecto de brillo */}
                    <div className="absolute top-0 right-0 w-16 h-16 transition-all duration-500 rounded-full bg-gradient-to-br from-green-400/0 to-transparent blur-xl group-hover/item:from-green-400/15"></div>
                    
                    <div className="relative z-10 flex items-center justify-center p-2 transition-all duration-300 border rounded-lg shadow-lg w-fit shrink-0 bg-gradient-to-br from-slate-700/90 to-slate-800/90 border-slate-600/50 group-hover/item:border-green-500/60 group-hover/item:shadow-green-500/30 group-hover/item:scale-110">
                      <div className="text-green-400 transition-colors duration-300 group-hover/item:text-green-300">
                        {item.icon}
                      </div>
                    </div>
                    <div className="relative z-10 flex flex-col">
                      <p className="leading-snug break-words text-slate-300 group-hover/item:text-slate-200">
                        <span className="font-bold text-white whitespace-pre-wrap">
                          {item.label.split(':')[0]}:
                        </span>{' '}
                        {item.label.split(':')[1]}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};