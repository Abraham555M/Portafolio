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
      <div className='text-center m-auto space-y-4'>
        <h1 className='text-5xl font-bold'>About me</h1>
        <p className='text-md text-gray-400'>Discover my journey, passions and the story behind my work </p>
      </div>

      {/* Contenido About me */}
      <div className='flex mt-15 gap-4'>
        {/* Imagen */} 
        <motion.div 
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='w-80 hover:scale-105 transition-transform duration-300'
        >
        <img src={foto} alt="Mi foto"/>
        </motion.div>          
        <div className='border ml-40 w-105'>
          <div className='border px-6 py-4 space-y-4'>
            <div className='flex gap-2 items-center'>
              <RiFocusLine />
              <h1>Who Am I</h1>
            </div>
            <div >
              <p>
                Soy Abraham Manuel Hilario Fernández, desarrollador Full Stack y Android con más de 1 año de experiencia construyendo soluciones tecnológicas eficientes y modernas.
              </p>
            </div>
          </div>     
          <div className='border px-6 py-4'>
            <h1>Personal Info</h1>
          </div>         
        </div>
        <div className='border w-105'>
          <h1>My Approach</h1>
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
        */} 
    </section>
  )
}
