import fondo from '../../assets/jjj.png';
import { FaReact } from 'react-icons/fa';
import { motion } from "framer-motion";
import { SocialIcon } from "../../components/SocialIcon"
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export const Inicio = () => {
  return (
    <section id="home" 
        className=" text-white flex" 
        /**
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
          <span className='font-semibold text-2xl font-mono'>Full Stack Developer & Android Developer</span>
        </motion.div>

        {/* Parte 2 */}
        <motion.div
          className="mt-15 font-mono"
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
      <div className="border-amber-100 w-250 p-20">
        <motion.div whileHover={{ scale: 1.2 }} transition={{ type: 'spring', stiffness: 300 }}>
          <FaReact className="text-cyan-400 text-7xl cursor-pointer" />
        </motion.div>        
      </div>
    </section>
  )
}
