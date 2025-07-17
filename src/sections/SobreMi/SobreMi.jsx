import React from 'react'
import { motion } from "framer-motion";
import foto from '../../assets/foto.png';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

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
    <section id="sobre-mi" className="text-white my-10">
      <div className='flex p-20 gap-20 border'>
        {/* Imagen */}
       <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='w-80 hover:scale-105 transition-transform duration-300'
        >
        <img src={foto} alt="Mi foto"/>
        </motion.div>
          {/* Resumen */}
          <div className=' space-y-10 w-200'>
          {/* Sobre mi */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='space-y-10'
          >            
            <h2 className="text-4xl font-bold">About me</h2>
            <p className='text-md font-mono'>
              Desarrollador web apasionado por la tecnología y la innovación, especializado en Laravel y React. Cuento
              con experiencia en desarrollo frontend y backend, bases de datos SQL/NoSQL, despliegue en la nube y
              administración de servidores. Enfocado en crear aplicaciones escalables, seguras y optimizadas, aplicando
              buenas prácticas de desarrollo. Busco oportunidades para aportar mis conocimientos en proyectos
              innovadores y seguir creciendo profesionalmente.
            </p>
          </motion.div>
          <div className=''>
            {/* Habilidades blandas en formato de código */}
            <SyntaxHighlighter className = "hover:scale-104 transition-transform duration-300" language="javascript" style={atomDark} customStyle={{ borderRadius: '10px', width: '350px'}}>
              {codeString}
            </SyntaxHighlighter>          
          </div>        
        </div>    
      </div>
      
    </section>
  )
}
