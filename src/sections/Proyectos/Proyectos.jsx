import { motion } from 'framer-motion';
import ProjectCard from "../../components/ProjectCard";
import { proyectos } from "../../data/TechnologyData";

export const Proyectos = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section 
      id="proyectos" 
      className="px-5 py-16 text-white border sm:px-10 md:px-20 lg:py-24"
    >
      {/* Título y descripción */}
      <motion.div
        className="max-w-3xl mx-auto space-y-3 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h1
          className="text-2xl font-bold sm:text-3xl md:text-5xl"
          variants={textVariants}
        >
          Projects
        </motion.h1>
        <motion.p
          className="mx-auto text-sm font-medium text-gray-400 sm:text-base md:text-lg max-w-[700px]"
          variants={textVariants}
          transition={{ delay: 0.2 }}
        >
          Here are some of the projects I've built using different technologies.
          Each one reflects my focus on clean code, modern UI, and real-world solutions.
        </motion.p>
      </motion.div>

      {/* Contenedor de tarjetas */}
      <motion.div
        className="grid grid-cols-1 gap-8 mx-auto mt-10 sm:grid-cols-2 lg:grid-cols-3 xl:max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {proyectos.map((proyecto, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            <ProjectCard
              imagen={proyecto.imagen}
              imagen2={proyecto.imagen2}
              titulo={proyecto.titulo}
              descipcion={proyecto.descipcion}
              enlace={proyecto.enlace}
              tecnologias={proyecto.tecnologias}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
