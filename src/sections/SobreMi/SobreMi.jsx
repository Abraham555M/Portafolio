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
          <p className='font-semibold text-gray-400 text-md md:text-lg'>
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
            className="relative flex justify-center mx-auto mt-10 cursor-pointer lg:w-1/2 min-h-[25rem] sm:min-h-[24rem] md:min-h-[28rem]"
            onClick={handleClick}
          >
            {imagenes.map((imagen, index) => {
              const relativeIndex = (index - frontIndex + imagenes.length) % imagenes.length;
              const isFront = relativeIndex === 0;

              return (
                <motion.img
                  key={imagen.id}
                  src={imagen.foto}
                  alt={`Image ${index + 1}`}
                  className="absolute object-cover w-48 h-64 transform shadow-xl rounded-xl sm:w-56 sm:h-72 md:w-64 md:h-80"
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
                />
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
                className="flex-1 px-4 py-4 space-y-4 transition-colors duration-300 border md:px-6 bg-slate-800/30 rounded-xl backdrop-blur-sm border-slate-700/50 hover:border-green-500/30"
              >
                <div className="flex items-center gap-2 font-extrabold">
                  <div className="flex items-center justify-center p-2 text-black bg-white rounded-lg w-fit">
                    <FaExclamationCircle className="text-xl" />
                  </div>
                  <h1 className="text-2xl text-white">Who Am I</h1>
                </div>
                <p className="font-semibold text-gray-400">
                  I'm Abraham Manuel Hilario Fernández, a Full Stack and Android Developer with over 1 year of professional experience building functional, scalable, and user-friendly digital solutions. I'm passionate about transforming ideas into powerful applications that combine clean design, solid architecture, and smooth user experiences.
                </p>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="flex-1 px-4 py-4 space-y-4 transition-colors duration-300 border md:px-6 bg-slate-800/30 rounded-xl backdrop-blur-sm border-slate-700/50 hover:border-green-500/30"
              >
                <div className="flex flex-wrap items-center gap-2 font-extrabold">
                  <div className="flex items-center justify-center p-2 text-black bg-white rounded-lg w-fit shrink-0">
                    <FaExclamationCircle className="text-xl" />
                  </div>
                  <h1 className="text-2xl text-white break-words">My Approach</h1>
                </div>
                <p className="font-semibold text-gray-400">
                  I believe in creating user-first solutions that balance performance, clean design, and functionality, ensuring every project feels intuitive, efficient, and impactful.
                </p>
              </motion.div>
            </motion.div>

            {/* Segundo Nivel - Personal Info */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-4 p-4 transition-colors duration-300 border bg-slate-800/30 rounded-xl backdrop-blur-sm border-slate-700/50 hover:border-green-500/30"
            >
              <div className="flex flex-wrap items-center gap-2 font-extrabold">
                <div className="flex items-center justify-center p-2 text-black bg-white rounded-lg w-fit shrink-0">
                  <AiFillBell className="text-xl" />
                </div>
                <h1 className="text-2xl text-white break-words">Personal Info</h1>
              </div>
            
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {infos.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col gap-3 sm:flex-row sm:items-start group"
                  >
                    <div className="flex items-center justify-center p-2 text-black transition-transform duration-200 bg-white rounded-lg w-fit shrink-0 group-hover:scale-110">
                      {item.icon}
                    </div>
                    <div className="flex flex-col">
                      <p className="leading-snug text-gray-300 break-words">
                        <span className="font-bold text-white whitespace-pre-wrap">
                          {item.label.split(':')[0]}:
                        </span>{' '}
                        {item.label.split(':')[1]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};