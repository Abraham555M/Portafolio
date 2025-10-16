import React from 'react'
import { motion } from "framer-motion";
import foto from '../../assets/foto.png';
import { RiFocusLine } from "react-icons/ri";
import { FaQuestionCircle, FaStar } from 'react-icons/fa';
import { infos } from "../../data/InfoData";

const codeString = `
const softSkills = [
  "Responsabilidad",
  "Liderazgo",
  "Proactividad",
  "Trabajo en equipo",
  "Aprendizaje continuo",
  "Comunicación efectiva"
];
`
export const SobreMi = () => {

   return (
    <section id="sobre-mi" className="p-20 text-white border">
      {/* About me*/}
      <div className='py-3 m-auto space-y-3 text-center'>
        <h1 className='text-5xl font-bold'>About me</h1>
        <p className='text-gray-400 text-md'>Discover my journey, passions and the story behind my work </p>
      </div>

      {/* Contenido About me */}
      <div className='flex gap-10 mt-13'>
        {/* Imagen */} 
        <motion.div 
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='transition-transform duration-300 w-80 hover:scale-105'
        >
        <img src={foto} alt="Mi foto"/>
        </motion.div>
        
        {/* Información */}          
        <div className='space-y-4 border w-250'>
          {/* Primer Nivel */}
          <div className='flex gap-4'>
            <div className='flex-1 px-6 py-4 space-y-4 border'>
              <div className='flex items-center gap-2'>
                <RiFocusLine />
                <h1>Who Am I</h1>
              </div>
              <div>
                <p>
                  I’m Abraham Manuel Hilario Fernández, a Full Stack and Android developer with over 1 year of experience building efficient and modern technological solutions.                </p>
              </div>
            </div>     
            <div className='flex-1 px-6 py-4 border'>
              <h1>My Approach</h1>

              
            </div>         
          </div>
          {/* Segundo Nivel */}
          <div className="flex flex-col gap-4 m-4">
            {infos.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                className="flex items-center gap-3" 
              >
                {/* Ícono */}
                <div className="flex items-center justify-center p-2 text-white bg-black rounded-lg">
                  {item.icon}
                </div>

                {/* Texto */}
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center">
                  <p className="font-semibold">{item.val}</p>
                  <p>{item.label}</p>
                </div>
              </motion.div>
            ))}
          

            
           
            

            
          </div>
        </div>    
      </div>     
    </section>
  )
}
