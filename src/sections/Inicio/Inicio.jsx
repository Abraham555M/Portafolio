import fondo from '../../assets/jjj.png';
import { motion } from "framer-motion";
import { SocialIcon } from "../../components/SocialIcon"
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaReact, FaLaravel, FaAndroid } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import TypedText from '../../components/TypedText';
import { MdWavingHand } from "react-icons/md";
import { MdWork } from 'react-icons/md';

export const Inicio = () => {
  return (
      <section id="home" className="text-white flex flex-col lg:flex-row "
        /*
        style={{
          backgroundImage: `url(${fondo})`,
        }}
        */
      >
      {/* Sección de informacion */}
      <div className="w-full lg:w-[60%] p-10 lg:p-20 flex flex-col justify-center gap-10">
        {/* Parte 1 */}        
        <motion.div
          className=''
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >          
        <h1 className="font-bold text-xl sm:text-2xl">HELLO I'M</h1>        
        <h2 className="mt-5 mb-2 font-bold text-3xl sm:text-4xl lg:text-5xl">
          <span>Abraham Manuel</span><br />
          <span className="flex items-center mt-2">
            Hilario Fernández
            <MdWavingHand className="text-yellow-500 text-4xl ml-4 mt-2 rotate-360" />
          </span>
        </h2>
        <TypedText text="Full Stack Developer & Android Developer" />
        </motion.div>

        {/* Parte 2 */}
        <div className=''>
          <h2 className="text-xl font-bold text-white">
            Quick Stats
          </h2>
          <div className='flex gap-5 mt-2'>
          <div className="bg-white w-40 rounded-3xl p-3 text-black text-center font-semibold flex gap-2 transition-transform duration-300 hover:scale-105 cursor-pointer">
              <MdWork className="text-black text-2xl" />
              <p>+1 Experience</p>
            </div>
            <div className="bg-white w-40 rounded-3xl p-3 text-black text-center font-semibold flex gap-2 transition-transform duration-300 hover:scale-105 cursor-pointer">
              <MdWork className="text-black text-2xl" />
              <p>+1 Experience</p>
            </div>
            <div className="bg-white w-40 rounded-3xl p-3 text-black text-center font-semibold flex gap-2 transition-transform duration-300 hover:scale-105 cursor-pointer">
              <MdWork className="text-black text-2xl" />
              <p>+1 Experience</p>
            </div>
          </div>
        </div>

        {/* Parte 3 */}
        <motion.div
          className="font-mono "
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1 className="text-2xl font-semibold underline text-green-600">
            abraham2004hf@gmail.com
          </h1>
          <p className="font-semibold text-xl">
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
      
      {/* Sección de Iconos */}
      <div className="w-full lg:w-[40%] flex flex-wrap justify-center items-center gap-6 p-6 ">
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
          className="inline-block rounded-full bg-white text-black p-5"
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
