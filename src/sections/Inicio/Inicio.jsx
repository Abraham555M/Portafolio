import fondo from '../../assets/jjj.png';
import { motion } from "framer-motion";
import { SocialIcon } from "../../components/SocialIcon"
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaReact, FaLaravel, FaAndroid } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import TypedText from '../../components/TypedText';

export const Inicio = () => {
  return (
    <section id="home" 
        className=" text-white flex" 
        /*
        style={{
          backgroundImage: `url(${fondo})`,
        }}
        */
      >
      {/* Sección de informacion */}
      <div className="w-200 h-180 p-20 flex flex-col justify-center gap-7">
       {/* Parte 1 */}        
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >          
        <h1 className='font-bold text-2xl'>HELLO I'M</h1>
        <h2 className='mt-5 mb-2 font-bold text-5xl'>Abraham Manuel Hilario Fernández</h2>
        <TypedText text="Full Stack Developer & Android Developer" />
      </motion.div>


        {/* Parte 2 */}
        <motion.div
          className="mt-15 font-mono mt-5"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1 className="text-3xl font-semibold underline text-green-600">
            abraham2004hf@gmail.com
          </h1>
          <p className="font-semibold text-2xl">
            Lima, Puente Piedra <br /> Peru
          </p>
        </motion.div>

        {/* Parte 3 */}
        <motion.div
          className="mt-15 flex gap-4"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <SocialIcon href="https://www.linkedin.com/in/abraham-manuel-hilario-fernández-a04731282/" color="blue-500">
            <FaLinkedin className="text-white text-2xl group-hover:text-white transition-all duration-300" />
          </SocialIcon>

          <SocialIcon href="https://github.com/Manuelh2004" color="green-500">
            <FaGithub className="text-white text-2xl group-hover:text-white transition-all duration-300" />
          </SocialIcon>

          <SocialIcon href="https://www.instagram.com/tu_usuario" color="pink-500">
            <FaInstagram className="text-white text-2xl group-hover:text-white transition-all duration-300" />
          </SocialIcon>
        </motion.div>
      </div>

      {/* Sección de Iconos */}
      <div className="w-200 flex gap-8 justify-center items-center p-10 border">


        
        {/* React */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.2 }}
          className="inline-block rounded-full bg-black p-5"
        >
          <FaReact className="text-2xl cursor-pointer" />
        </motion.div>

        {/* Laravel */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.2 }}
          className="inline-block rounded-full bg-black p-5"
        >
          <FaLaravel className="text-2xl cursor-pointer" />
        </motion.div>

        {/* MySQL */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.2 }}
          className="inline-block rounded-full bg-black p-5"
        >
          <SiMysql className=" text-2xl cursor-pointer" />
        </motion.div>

        {/* Android */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.2 }}
          className="inline-block rounded-full bg-black p-5"
        >
          <FaAndroid className="text-2xl cursor-pointer" />
        </motion.div>
      </div> 
    </section> 
  )
}
