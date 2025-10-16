import { motion, useScroll, useTransform } from "framer-motion";
import { SocialIcon } from "../../components/SocialIcon"
import { FaGithub, FaLinkedin, FaInstagram, FaReact, FaLaravel, FaAndroid } from 'react-icons/fa';
import { SiMysql } from "react-icons/si";
import TypedText from '../../components/TypedText';
import { MdWavingHand } from "react-icons/md";
import { stats } from "../../data/StatsData";
import foto from '../../assets/usuario.jpg';

export const Inicio = () => {
  const { scrollYProgress } = useScroll();

  // Transformaciones para la imagen en INICIO (desaparece al hacer scroll)
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
  const imageY = useTransform(scrollYProgress, [0, 0.5], [0, 300]);

  return (
    <section id="home" className="flex flex-col text-white lg:flex-row">
      {/* Sección de informacion */}
      <div className="w-full lg:w-[60%] p-10 lg:p-15 flex flex-col justify-center gap-10">
        {/* Parte 1 */}        
        <motion.div
          className=''
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >          
          <h1 className="text-xl font-bold sm:text-2xl">HELLO I'M</h1>        
          <h2 className="mt-5 mb-2 text-3xl font-bold sm:text-4xl lg:text-5xl">
            <span>Abraham Manuel</span><br />
            <span className="flex items-center mt-2 ">
              Hilario Fernández
              <MdWavingHand className="mt-2 ml-4 text-4xl text-yellow-500 rotate-360" />
            </span>
          </h2>
          <TypedText text="Full Stack Developer & Android Developer" />
        </motion.div>

        {/* Parte 2 */}
        <div>
          <motion.div
            className=''
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >         
            <h2 className="mb-2 text-lg font-bold text-white">Quick Stats</h2>
          </motion.div>

          <div className="flex flex-wrap gap-4">
            {stats.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                className="flex flex-col items-center p-2 font-medium text-center text-white transition-transform duration-300 bg-gray-500 cursor-pointer w-30 rounded-2xl hover:scale-110"
              >
                {item.icon}
                <p className="text-sm font-semibold text-white">{item.otherlabel}</p>
                <p className="text-xs text-white">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Parte 3 */}
        <motion.div
          className="font-mono "
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1 className="text-2xl font-semibold text-green-500 underline">
            abraham2004hf@gmail.com
          </h1>
          <p className="text-xl font-semibold">
            Lima, Puente Piedra <br /> Peru
          </p>
        </motion.div>

        {/* Parte 4 */}
        <motion.div
          className=""
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-xl font-bold text-white"> Follow me </h2>
          <div className='flex gap-4 mt-2'>
            <SocialIcon href="https://www.instagram.com/tu_usuario" color="hover:bg-blue-500">
              <FaLinkedin/>
            </SocialIcon>
            <SocialIcon href="https://www.instagram.com/tu_usuario" color="hover:bg-green-500">
              <FaGithub/>
            </SocialIcon>
            <SocialIcon href="https://www.instagram.com/tu_usuario" color="hover:bg-pink-500">
              <FaInstagram/>
            </SocialIcon>
          </div>
        </motion.div>
      </div>
      
      {/* Sección de Iconos - CON ANIMACIÓN DE SCROLL */}
      <motion.div 
        className="w-full lg:w-[40%] flex flex-wrap justify-left items-center gap-6 p-6"
        style={{ 
          opacity: imageOpacity,
          scale: imageScale,
          y: imageY
        }}
      >       
        <div className="relative flex items-center justify-center w-100 h-100">
          {/* Imagen centrada */}
          <div className="z-10 overflow-hidden border-4 border-white rounded-full shadow-lg w-100 h-100">
            <img
              src={foto}
              alt="Mi foto"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Iconos flotantes alrededor de la imagen */}
          <motion.div
            animate={{
              x: [120, 140, 100, 120],
              y: [-80, -60, -100, -80],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.3 }}
            className="absolute p-5 text-black bg-white rounded-full shadow-lg cursor-pointer"
            style={{ top: '25%', right: '15%' }}
          >
            <FaReact className="text-2xl" />
          </motion.div>

          <motion.div
            animate={{
              x: [-120, -140, -100, -120],
              y: [80, 100, 60, 80],
            }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.3 }}
            className="absolute p-5 text-black bg-white rounded-full shadow-lg cursor-pointer"
            style={{ bottom: '10%', left: '15%' }}
          >
            <FaLaravel className="text-2xl" />
          </motion.div>

          <motion.div
            animate={{
              x: [0, 20, -20, 0],
              y: [-120, -140, -130, -120],
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.3 }}
            className="absolute p-5 text-black bg-white rounded-full shadow-lg cursor-pointer"
            style={{ top: '15%', left: '5%', marginLeft: '-20px' }}
          >
            <FaAndroid className="text-2xl" />
          </motion.div>

          <motion.div
            animate={{
              x: [0, 20, -20, 0],
              y: [-120, -140, -130, -120],
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.3 }}
            className="absolute p-5 text-black bg-white rounded-full shadow-lg cursor-pointer"
            style={{ top: '150%', left: '65%', marginLeft: '-40px' }}
          >
            <SiMysql className="text-2xl" />
          </motion.div>
        </div>
      </motion.div>     
    </section> 
  )
}