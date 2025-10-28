import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useState, useRef } from "react";
import { imagenes } from "../../data/ImagenesData";
import { infos } from "../../data/InfoData";
import { FaExclamationCircle } from 'react-icons/fa';
import { AiFillBell } from 'react-icons/ai';

export const SobreMi = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const [frontIndex, setFrontIndex] = useState(0);

  const handleClick = () => {
    setFrontIndex((prev) => (prev + 1) % imagenes.length);
  };

  return (
    <section ref={sectionRef} id="sobre-mi" className="p-6 text-white border md:p-20">
      <div className="max-w-[1200px] mx-auto">
        {/* 🔹 Título */}
        <motion.div
          className='py-3 m-auto space-y-5 text-center'
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className='text-3xl font-bold md:text-5xl'>About me</h1>
          <p className='font-semibold text-gray-400 text-md md:text-lg'>
            Discover my journey, passions and the story behind my work
          </p>
        </motion.div>

        <div className='flex flex-col gap-10 mt-10 lg:flex-row'>
          {/* 🔹 Imagen con entrada desde la izquierda */}
          <motion.div
            className="relative flex justify-center mx-auto mt-10 cursor-pointer lg:w-1/2 min-h-[25rem] sm:min-h-[24rem] md:min-h-[28rem]"
            onClick={handleClick}
            initial={{ opacity: 0, x: -100, scale: 0.9 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -100, scale: 0.9 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
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

          {/* 🔹 Información con entrada desde la derecha */}
          <motion.div
            className="space-y-4 max-w-[48em] w-full mx-auto"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
          >
            {/* Primer Nivel */}
            <motion.div
              className="flex flex-col gap-4 md:flex-row"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <motion.div 
                className="flex-1 px-4 py-4 space-y-4 md:px-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="flex items-center gap-2 font-extrabold">
                  <motion.div 
                    className="flex items-center justify-center p-2 text-black bg-white rounded-lg w-fit"
                    initial={{ rotate: -180, scale: 0 }}
                    animate={isInView ? { rotate: 0, scale: 1 } : { rotate: -180, scale: 0 }}
                    transition={{ duration: 0.6, delay: 0.7, type: "spring", stiffness: 200 }}
                  >
                    <FaExclamationCircle className="text-xl" />
                  </motion.div>
                  <h1 className="text-2xl text-white">Who Am I</h1>
                </div>
                <p className="font-semibold text-gray-400">
                  I'm Abraham Manuel Hilario Fernández, a Full Stack and Android Developer with over 1 year of professional experience building functional, scalable, and user-friendly digital solutions. I'm passionate about transforming ideas into powerful applications that combine clean design, solid architecture, and smooth user experiences.
                </p>
              </motion.div>

              <motion.div 
                className="flex-1 px-4 py-4 space-y-4 md:px-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <div className="flex flex-wrap items-center gap-2 font-extrabold">
                  <motion.div 
                    className="flex items-center justify-center p-2 text-black bg-white rounded-lg w-fit shrink-0"
                    initial={{ rotate: -180, scale: 0 }}
                    animate={isInView ? { rotate: 0, scale: 1 } : { rotate: -180, scale: 0 }}
                    transition={{ duration: 0.6, delay: 0.8, type: "spring", stiffness: 200 }}
                  >
                    <FaExclamationCircle className="text-xl" />
                  </motion.div>
                  <h1 className="text-2xl text-white break-words">My Approach</h1>
                </div>
                <p className="font-semibold text-gray-400">
                  I believe in creating user-first solutions that balance performance, clean design, and functionality, ensuring every project feels intuitive, efficient, and impactful.
                </p>
              </motion.div>
            </motion.div>

            {/* Segundo Nivel */}
            <motion.div
              className="flex flex-col gap-4 m-4"
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
            <div className="flex flex-wrap items-center gap-2 font-extrabold">
              <motion.div 
                className="flex items-center justify-center p-2 text-black bg-white rounded-lg w-fit shrink-0"
                initial={{ rotate: -180, scale: 0 }}
                animate={isInView ? { rotate: 0, scale: 1 } : { rotate: -180, scale: 0 }}
                transition={{ duration: 0.6, delay: 0.9, type: "spring", stiffness: 200 }}
              >
                <AiFillBell className="text-xl" />
              </motion.div>
              <h1 className="text-2xl text-white break-words">Personal Info</h1>
            </div>
            
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {infos.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
                    transition={{ duration: 0.5, delay: 1.0 + (index * 0.1) }}
                    className="flex flex-col gap-3 sm:flex-row sm:items-start"
                  >
                    <motion.div 
                      className="flex items-center justify-center p-2 text-black bg-white rounded-lg w-fit shrink-0"
                      initial={{ rotate: -180, scale: 0 }}
                      animate={isInView ? { rotate: 0, scale: 1 } : { rotate: -180, scale: 0 }}
                      transition={{ duration: 0.5, delay: 1.1 + (index * 0.1), type: "spring", stiffness: 200 }}
                    >
                      {item.icon}
                    </motion.div>
                    <div className="flex flex-col">
                      <p className="leading-snug text-gray-300 break-words">
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