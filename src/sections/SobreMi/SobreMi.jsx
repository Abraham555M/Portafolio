import { motion, useScroll, useTransform } from "framer-motion";
import foto from '../../assets/usuario.jpg';
import { infos } from "../../data/InfoData";
import { FaExclamationCircle } from 'react-icons/fa';
import { AiFillBell } from 'react-icons/ai';

export const SobreMi = () => {
  // Hook para detectar el scroll
  const { scrollYProgress } = useScroll();
  
  // Transformaciones para la imagen (aparece al hacer scroll)
  const imageOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
  const imageScale = useTransform(scrollYProgress, [0.2, 0.5], [0.8, 1]);
  const imageY = useTransform(scrollYProgress, [0.2, 0.5], [-80, 0]);
  
  return (
    <section id="sobre-mi" className="p-6 text-white md:p-20">
      <div className="max-w-[1200px] mx-auto ">
        {/* Título principal */}
        <div className='py-3 m-auto space-y-3 text-center'>
          <h1 className='text-3xl font-bold md:text-5xl'>About me</h1>
          <p className='font-semibold text-gray-400 text-md md:text-lg'>
            Discover my journey, passions and the story behind my work
          </p>
        </div>

        {/* Contenido principal */}
        <div className='flex flex-col gap-10 mt-10 lg:flex-row'>
          {/* Imagen */}
          <motion.div 
            style={{ 
              opacity: imageOpacity,
              scale: imageScale,
              y: imageY,
            }}
          >
            <img src={foto} alt="Mi foto" className="object-cover h-auto w-80"/> {/* Buscar implementar mas imagenes */}
            <img src={foto} alt="Mi foto" className="object-cover h-auto w-80"/>
          </motion.div>
          
          {/* Información */}
          <div className="space-y-4  max-w-[48em] w-full mx-auto">
            {/* Primer Nivel */}
            <div className="flex flex-col gap-4 md:flex-row">
              {/* Columna 1 */}
              <div className="flex-1 px-4 py-4 space-y-4 md:px-6">
                <div className="flex items-center gap-2 font-extrabold">
                  <div className="flex items-center justify-center p-2 text-black bg-white rounded-lg w-fit">
                    <FaExclamationCircle className="text-xl" />
                  </div>
                  <h1 className="text-2xl text-white">Who Am I</h1>
                </div>
                <div>
                  <p className="font-semibold text-gray-400">
                    I’m Abraham Manuel Hilario Fernández, a Full Stack and Android Developer with over 1 year of experience building efficient, scalable, and modern technological solutions. I’m passionate about crafting clean code, intuitive interfaces, and impactful digital products.
                  </p>
                </div>
              </div>

              {/* Columna 2 */}
              <div className="flex-1 px-4 py-4 space-y-4 md:px-6">
                <div className="flex items-center gap-2 font-extrabold">
                  <div className="flex items-center justify-center p-2 text-black bg-white rounded-lg w-fit">
                    <FaExclamationCircle className="text-xl" />
                  </div>
                  <h1 className="text-2xl text-white">My Approach</h1>
                </div>
                <div>
                  <p className="font-semibold text-gray-400">
                    I believe in creating user-first solutions that combine performance, clean design, and efficient architecture. I focus on writing maintainable code, collaborating effectively, and continuously improving to deliver real impact.                  
                  </p>
                </div>
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

              {/* Grid de información */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Columna 1 (4 items) */}
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

                {/* Columna 2 (2 items) */}
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
  )
}
