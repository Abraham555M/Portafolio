import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { imagenes } from "../../data/ImagenesData";
import { infos } from "../../data/InfoData";
import { FaExclamationCircle } from 'react-icons/fa';
import { AiFillBell } from 'react-icons/ai';

export const SobreMi = () => {
  const { scrollYProgress } = useScroll();
  const [frontIndex, setFrontIndex] = useState(0);

  const imageOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
  const imageScale = useTransform(scrollYProgress, [0.2, 0.5], [0.8, 1]);
  const imageY = useTransform(scrollYProgress, [0.2, 0.5], [-80, 0]);

  const frontImageId = imagenes[frontIndex].id;
  const backImageId = imagenes[(frontIndex + 1) % imagenes.length].id;

  const handleClick = () => {
    setFrontIndex((prev) => (prev + 1) % imagenes.length);
  };

  const frontImage = imagenes[frontIndex].foto;
  const backImage = imagenes[(frontIndex + 1) % imagenes.length].foto;

  return (
    <section id="sobre-mi" className="p-6 text-white md:p-20">
      <div className="max-w-[1200px] mx-auto">
        {/* Título */}
        <div className='py-3 m-auto space-y-3 text-center'>
          <h1 className='text-3xl font-bold md:text-5xl'>About me</h1>
          <p className='font-semibold text-gray-400 text-md md:text-lg'>
            Discover my journey, passions and the story behind my work
          </p>
        </div>

        <div className='flex flex-col gap-10 mt-10 lg:flex-row'>

          {/* Imagen */}
          <motion.div
            className="relative flex justify-center mx-auto mt-10 cursor-pointer lg:w-1/2"
            style={{ opacity: imageOpacity, scale: imageScale, y: imageY }}
            onClick={handleClick}
          >

            {/* Imagen principal */}
            <motion.img
              key={frontImageId}
              src={frontImage}
              alt="Front Image"
              className="absolute z-20 object-cover w-48 h-64 transform shadow-xl rounded-xl sm:w-56 sm:h-72 md:w-64 md:h-80"
              initial={{ opacity: 0, scale: 0.9, rotate: 10, x: 50, y: 50 }}
              animate={{ opacity: 1, scale: 1, rotate: 6, x: 0, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />

            {/* Imagen detrás */}
            <motion.img
              key={backImageId}
              src={backImage}
              alt="Back Image"
              className="absolute z-10 object-cover w-48 h-64 transform shadow-xl rounded-xl sm:w-56 sm:h-72 md:w-64 md:h-80"
              initial={{ opacity: 0.7, scale: 0.9, rotate: -10, x: -60, y: 70 }}
              animate={{ opacity: 0.7, scale: 0.9, rotate: -6, x: -60, y: 70 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
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
                  I’m Abraham Manuel Hilario Fernández, a Full Stack and Android Developer with over 1 year of experience...
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
                  I believe in creating user-first solutions that combine performance and clean design...
                </p>
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
                <div className="space-y-4">
                  {infos.slice(0, 4).map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.2 }}
                      className="flex flex-col gap-3 sm:flex-row sm:items-center"
                    >
                      <div className="flex items-center justify-center p-2 text-black bg-white rounded-lg w-fit">
                        {item.icon}
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                        <p className="font-bold text-white">{item.val}</p>
                        <p className="text-gray-400">{item.label}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="space-y-4">
                  {infos.slice(4, 6).map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.2 }}
                      className="flex flex-col gap-3 sm:flex-row sm:items-center"
                    >
                      <div className="flex items-center justify-center p-2 text-black bg-white rounded-lg w-fit">
                        {item.icon}
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                        <p className="font-bold text-white">{item.val}</p>
                        <p className="text-gray-400">{item.label}</p>
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
