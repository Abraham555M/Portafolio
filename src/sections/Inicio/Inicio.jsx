import fondo from '../../assets/jjj.png';
import { FaAndroid, FaReact, FaLaravel } from 'react-icons/fa';
import { SiMysql } from 'react-icons/si'; // Ícono de MySQL desde Simple Icons
import { motion } from "framer-motion";

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
          <h2 className='mt-8 mb-2 font-bold text-5xl'>Abraham Manuel Hilario Fernández</h2>
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
            Lima, Puente Piedra <br /> Perú
          </p>
        </motion.div>

        {/* Parte 3 */}
        <motion.div
          className="mt-15 flex gap-4"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >          
          {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/abraham-manuel-hilario-fern%C3%A1ndez-a04731282/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full bg-white/10 hover:bg-blue-500 transition-all duration-300"
            >
              <svg
                className="w-6 h-6 fill-white group-hover:fill-white transition-all duration-300"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5C3.34 3.5 2 4.84 2 6.48s1.34 2.98 2.98 2.98c1.65 0 2.98-1.34 2.98-2.98S6.63 3.5 4.98 3.5zM2.4 8.9h5.16V21H2.4V8.9zM9.6 8.9h4.92v1.64h.07c.69-1.3 2.37-2.66 4.88-2.66 5.22 0 6.18 3.43 6.18 7.89V21h-5.16v-6.9c0-1.65-.03-3.78-2.3-3.78-2.3 0-2.65 1.8-2.65 3.66V21H9.6V8.9z" />
              </svg>
            </a>
          {/* GitHub */}
            <a
              href="https://github.com/Manuelh2004"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full bg-white/10 hover:bg-green-500 transition-all duration-300"
            >
              <svg
                className="w-6 h-6 fill-white group-hover:fill-white transition-all duration-300"
                viewBox="0 0 24 24"
              >
                <path d="M12 0a12 12 0 0 0-3.8 23.4c.6.1.8-.2.8-.6v-2.2c-3.3.7-4-1.5-4-1.5-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.6.7 1.3 1.3.9.3 1.9.2 2.6-.1.1-.6.4-1.2.7-1.5-2.6-.3-5.4-1.3-5.4-5.9 0-1.3.5-2.4 1.2-3.3-.1-.3-.6-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.6 11.6 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.2.8.9 1.2 2 1.2 3.3 0 4.7-2.8 5.6-5.4 5.9.4.4.7 1 .7 2v2.9c0 .4.2.7.8.6A12 12 0 0 0 12 0z" />
              </svg>
            </a>
          {/* Instagram */}
            <a
              href="https://www.instagram.com/tu_usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full bg-white/10 hover:bg-pink-500 transition-all duration-300"
            >
              <svg
                className="w-6 h-6 fill-white group-hover:fill-white transition-all duration-300"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.3.5.5.2.9.5 1.3.9.4.4.7.8.9 1.3.2.4.4 1.1.5 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.5 2.3-.2.5-.5.9-.9 1.3-.4.4-.8.7-1.3.9-.4.2-1.1.4-2.3.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.3-.5-.5-.2-.9-.5-1.3-.9-.4-.4-.7-.8-.9-1.3-.2-.4-.4-1.1-.5-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.9.5-2.3.2-.5.5-.9.9-1.3.4-.4.8-.7 1.3-.9.4-.2 1.1-.4 2.3-.5C8.4 2.2 8.8 2.2 12 2.2zm0-2.2C8.7 0 8.3 0 7 .1 5.5.2 4.4.4 3.5.8c-.9.4-1.7.9-2.5 1.7-.8.8-1.3 1.6-1.7 2.5C-.4 6.4-.2 7.5-.1 9c.1 1.3.1 1.7.1 5s0 3.6.1 4.9c.1 1.5.3 2.6.7 3.5.4.9.9 1.7 1.7 2.5.8.8 1.6 1.3 2.5 1.7.9.4 2 .6 3.5.7 1.3.1 1.7.1 5 .1s3.6 0 4.9-.1c1.5-.1 2.6-.3 3.5-.7.9-.4 1.7-.9 2.5-1.7.8-.8 1.3-1.6 1.7-2.5.4-.9.6-2 .7-3.5.1-1.3.1-1.7.1-5s0-3.6-.1-4.9c-.1-1.5-.3-2.6-.7-3.5-.4-.9-.9-1.7-1.7-2.5C21.6.7 20.8.2 19.9-.2 19-.6 17.9-.8 16.4-.9 15.1-1 14.7-1 12-1zM12 5.8A6.2 6.2 0 1 0 12 18.2 6.2 6.2 0 0 0 12 5.8zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-10.9a1.4 1.4 0 1 1-2.8 0 1.4 1.4 0 0 1 2.8 0z" />
              </svg>
            </a>
        </motion.div>
      </div>

      {/* Sección de Iconos */}
      <div className="border-amber-100 w-250 p-20">
        <div className='flex items-center justify-between gap-6'>
          <FaAndroid className="text-green-500 text-7xl transition-transform duration-300 hover:scale-125 cursor-pointer" />
          <FaReact className="text-cyan-400 text-7xl transition-transform duration-300 hover:scale-125 cursor-pointer" />
          <FaLaravel className="text-red-600 text-7xl transition-transform duration-300 hover:scale-125 cursor-pointer" />
          <SiMysql className="text-7xl transition-transform duration-300 hover:scale-125 cursor-pointer" />
        </div>
      </div>

    </section>
  )
}
