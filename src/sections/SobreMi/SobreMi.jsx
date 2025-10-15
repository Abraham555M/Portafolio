import React from 'react'
import { motion } from "framer-motion";
import foto from '../../assets/foto.png';
import { RiFocusLine } from "react-icons/ri";

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
    <section id="sobre-mi" className="text-white border p-20">
      {/* About me*/}
      <div className='text-center m-auto space-y-3 bg-black py-3'>
        <h1 className='text-5xl font-bold'>About me</h1>
        <p className='text-md text-gray-400'>Discover my journey, passions and the story behind my work </p>
      </div>

      {/* Contenido About me */}
      <div className='flex gap-10 mt-13'>
        {/* Imagen */} 
        <motion.div 
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='w-80 hover:scale-105 transition-transform duration-300'
        >
        <img src={foto} alt="Mi foto"/>
        </motion.div>          
        <div className='border w-250 space-y-4'>
          {/* Primer Nivel */}
          <div className='flex gap-4'>
            <div className='flex-1 px-6 py-4 space-y-4 border'>
              <div className='flex gap-2 items-center'>
                <RiFocusLine />
                <h1>Who Am I</h1>
              </div>
              <div>
                <p>
                  I’m Abraham Manuel Hilario Fernández, a Full Stack and Android developer with over 1 year of experience building efficient and modern technological solutions.                </p>
              </div>
            </div>     
            <div className='flex-1 border px-6 py-4'>
              <h1>Personal Info</h1>
            </div>         
          </div>
          {/* Segundo Nivel */}
          <div className='border px-6 py-4'>
            <h1>aa</h1>
          </div>
        </div>
        
        
      </div>

      

        {/**        
        {/* Imagen 
        <motion.div 
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='w-80 hover:scale-105 transition-transform duration-300'
        >
        <img src={foto} alt="Mi foto"/>
        </motion.div>

          <div className='border w-105'>
          <h1>My Approach</h1>
        </div>
        */} 
    </section>
  )
}
