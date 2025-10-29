import { motion } from "framer-motion";
import ProjectCard from "../../components/ProjectCard";
import { proyectos } from "../../data/TechnologyData";

export const Proyectos = () => {
  // Animación simple para el título
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
  };

  // Animación para el subtítulo
  const subtitleVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
        ease: "easeOut"
      }
    }
  };

  // Contenedor con stagger para las cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  // Animación individual de cada card
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section
      id="proyectos"
      className="px-5 py-16 text-white sm:px-10 md:px-20 lg:py-24"
    >
      {/* Título y descripción */}
      <div className="max-w-3xl mx-auto space-y-6 text-center">
        <motion.h1
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-2xl font-bold text-transparent sm:text-3xl md:text-5xl bg-gradient-to-r from-green-400 to-green-300 bg-clip-text"
        >
          Projects
        </motion.h1>
        
        <motion.p
          variants={subtitleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto text-sm font-medium text-gray-400 sm:text-base md:text-lg max-w-[700px]"
        >
          Here are some of the projects I've built using different technologies.
          Each one reflects my focus on clean code, modern UI, and real-world solutions.
        </motion.p>
      </div>

      {/* Contenedor de tarjetas */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 gap-8 mx-auto mt-10 sm:grid-cols-2 lg:grid-cols-3 xl:max-w-7xl"
      >
        {proyectos.map((proyecto, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
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