import { motion } from 'framer-motion'
import { experiences } from '../../data/ExperienceData'

export const Experiencia = () => {
  // Animación suave para el título
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  // Animación escalonada para los items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="experiencia" className="p-6 text-white md:p-20">     
      <div className="max-w-[1200px] mx-auto">
        {/* Título con animación */}
        <motion.h1 
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className='mb-12 text-3xl font-bold text-center text-transparent md:text-5xl bg-gradient-to-r from-green-400 to-green-300 bg-clip-text'
        >
          Experience
        </motion.h1>
        
        {/* Contenedor con stagger suave */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6"
        >
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id} 
              variants={itemVariants}
              className="flex gap-4"
            >
              {/* Punto e indicador */}
              <div className="flex flex-col items-center">
                <div className="relative flex-shrink-0 w-6 h-6 mt-1 rounded-full shadow-lg bg-gradient-to-br from-green-400 to-green-500 shadow-green-500/50">
                  {/* Anillo pulsante - solo CSS */}
                  <div className="absolute inset-0 bg-green-400 rounded-full opacity-50 animate-ping" 
                       style={{ animationDuration: '2s' }} />
                </div>
                {index < experiences.length - 1 && (
                  <div className="w-0.5 bg-gradient-to-b from-green-500/50 to-slate-700/50 flex-grow mt-2" />
                )}
              </div>
              
              {/* Contenido */}
              <div className="flex-grow pb-8 group">
                <div className="relative p-6 overflow-hidden transition-all duration-300 border shadow-xl rounded-2xl backdrop-blur-lg bg-gradient-to-br from-slate-800/95 to-slate-900/95 border-slate-700/50 hover:border-green-500/60 hover:shadow-green-500/20 hover:shadow-2xl hover:translate-x-1">
                  {/* Brillo decorativo */}
                  <div className="absolute top-0 right-0 w-32 h-32 transition-opacity duration-300 rounded-full opacity-0 bg-gradient-to-br from-green-400/20 to-transparent blur-2xl group-hover:opacity-100"></div>
                  
                  {exp.puestos ? (
                    // Caso con múltiples puestos
                    exp.puestos.map((puesto, pIndex) => (
                      <div key={pIndex} className={pIndex > 0 ? 'mt-6 pt-6 border-t border-slate-700/50' : ''}>
                        <h3 className="relative z-10 text-lg font-semibold transition-colors duration-200 text-slate-100 group-hover:text-green-300">
                          {puesto.cargo} <span className="text-slate-400 group-hover:text-slate-300">- {exp.empresa}</span>
                        </h3>
                        <p className="relative z-10 mb-2 text-sm transition-colors duration-200 text-slate-400 group-hover:text-green-400/80">
                          {puesto.fechaIni} - {puesto.fechaFin}
                        </p>
                        <p className="relative z-10 leading-relaxed transition-colors duration-200 text-slate-300 group-hover:text-slate-200">
                          {puesto.descripcion}
                        </p>
                      </div>
                    ))
                  ) : (
                    // Caso con un solo puesto
                    <>
                      <h3 className="relative z-10 text-lg font-semibold transition-colors duration-200 text-slate-100 group-hover:text-green-300">
                        {exp.cargo} <span className="text-slate-400 group-hover:text-slate-300">- {exp.empresa}</span>
                      </h3>
                      <p className="relative z-10 mb-2 text-sm transition-colors duration-200 text-slate-400 group-hover:text-green-400/80">
                        {exp.fechaIni} - {exp.fechaFin}
                      </p>
                      <p className="relative z-10 leading-relaxed transition-colors duration-200 text-slate-300 group-hover:text-slate-200">
                        {exp.descripcion}
                      </p>
                    </>
                  )}
                  
                  {/* Línea decorativa inferior */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-green-400 group-hover:w-full transition-all duration-300"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}