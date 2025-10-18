import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { imagenes } from "../../data/ImagenesData";
import { infos } from "../../data/InfoData";
import { FaExclamationCircle } from 'react-icons/fa';
import { AiFillBell } from 'react-icons/ai';

export const SobreMi = () => {
  const { scrollYProgress } = useScroll();
  const [frontIndex, setFrontIndex] = useState(0);

  const imageOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const imageScale = useTransform(scrollYProgress, [0.2, 0.5], [0.8, 1]);
  const imageY = useTransform(scrollYProgress, [0.2, 0.5], [-80, 0]);

  const handleClick = () => {
    setFrontIndex((prev) => (prev + 1) % imagenes.length);
  };

  return (
    <section id="sobre-mi" className="p-6 text-white md:p-20">
      <div className="max-w-[1200px] mx-auto">
        {/* Título */}
        <div className='py-3 m-auto space-y-10 text-center'>
          <h1 className='text-3xl font-bold md:text-5xl'>About me</h1>
          <p className='font-semibold text-gray-400 text-md md:text-lg'>
            Discover my journey, passions and the story behind my work
          </p>
        </div>

        <div className='flex flex-col gap-10 mt-10 lg:flex-row'>
          {/* Imagen */}
          <motion.div
            className="relative flex justify-center mx-auto mt-10 cursor-pointer lg:w-1/2 min-h-[25rem] sm:min-h-[24rem] md:min-h-[28rem]"
            style={{ opacity: imageOpacity, scale: imageScale, y: imageY }}
            onClick={handleClick}
          >
            {imagenes.map((imagen, index) => {
              // Calcular el índice relativo respecto a la imagen frontal
              const relativeIndex = (index - frontIndex + imagenes.length) % imagenes.length;
              
              // La imagen frontal tiene relativeIndex = 0
              const isFront = relativeIndex === 0;
              
              return (
                <motion.img
                  key={imagen.id}
                  src={imagen.foto}
                  alt={`Image ${index + 1}`}
                  className="absolute object-cover w-48 h-64 transform shadow-xl rounded-xl sm:w-56 sm:h-72 md:w-64 md:h-80"
                  animate={{
                    opacity: isFront ? 1 : 0.7 - (relativeIndex * 0.1),
                    scale: isFront ? 1 : 0.9 - (relativeIndex * 0.05),
                    rotate: isFront ? 6 : -6 - (relativeIndex * 2),
                    x: isFront ? 0 : -60 - (relativeIndex * 10),
                    y: isFront ? 0 : 70 + (relativeIndex * 10),
                    zIndex: isFront ? 20 : 20 - relativeIndex
                  }}
                  transition={{ 
                    duration: 0.6, 
                    ease: "easeInOut" 
                  }}
                  style={{
                    zIndex: isFront ? 20 : 20 - relativeIndex
                  }}
                />
              );
            })}
          </motion.div>

          {/* Información */}
          <div className="space-y-4 max-w-[48em] w-full mx-auto">
            {/* Primer Nivel */}
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="flex-1 px-4 py-4 space-y-4 md:px-6">
                <div className="flex items-center gap-2 font-extrabold">
                  <div className="flex items-center justify-center p-2 text-black bg-white rounded-lg w-fit">
                    <FaExclamationCircle className="text-xl" />
                  </div>
                  <h1 className="text-2xl text-white">Who Am I</h1>
                </div>
                <p className="font-semibold text-gray-400">
                  I’m Abraham Manuel Hilario Fernández, a Full Stack and Android Developer with over 1 year of professional experience building functional, scalable, and user-friendly digital solutions. I’m passionate about transforming ideas into powerful applications that combine clean design, solid architecture, and smooth user experiences.                 
                </p>
              </div>

              <div className="flex-1 px-4 py-4 space-y-4 md:px-6">
                <div className="flex items-center gap-2 font-extrabold">
                  <div className="flex items-center justify-center p-2 text-black bg-white rounded-lg w-fit">
                    <FaExclamationCircle className="text-xl" />
                  </div>
                  <h1 className="text-2xl text-white">My Approach</h1>
                </div>
                <p className="font-semibold text-gray-400">
                  I believe in creating user-first solutions that balance performance, clean design, and functionality, ensuring every project feels intuitive, efficient, and impactful.                </p>
              </div>
            </div>

            {/* Segundo Nivel */}
            <div className="flex flex-col gap-4 m-4">
              <div className="flex items-center gap-2 font-extrabold">
                <div className="flex items-center justify-center p-2 text-black bg-white rounded-lg w-fit">
                  <AiFillBell className="text-xl" />
                </div>
                <h1 className="text-2xl text-white">Personal Info</h1>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Primera columna */}
                <div className="space-y-4">
                  {infos.slice(0, Math.ceil(infos.length / 2)).map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.2 }}
                      className="flex flex-col gap-3 sm:flex-row sm:items-start"
                    >
                      <div className="flex items-center justify-center p-2 text-black bg-white rounded-lg w-fit shrink-0">
                        {item.icon}
                      </div>
                      <div className="flex flex-col">
                        <p className="text-gray-300">
                          <span className="font-bold text-white">
                            {item.label.split(':')[0]}:
                          </span>
                          {' '}
                          {item.label.split(':')[1]}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Segunda columna */}
                <div className="space-y-4">
                  {infos.slice(Math.ceil(infos.length / 2)).map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.2 }}
                      className="flex flex-col gap-3 sm:flex-row sm:items-start"
                    >
                      <div className="flex items-center justify-center p-2 text-black bg-white rounded-lg w-fit shrink-0">
                        {item.icon}
                      </div>
                      <div className="flex flex-col">
                        <p className="text-gray-300">
                          <span className="font-bold text-white">
                            {item.label.split(':')[0]}:
                          </span>
                          {' '}
                          {item.label.split(':')[1]}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
