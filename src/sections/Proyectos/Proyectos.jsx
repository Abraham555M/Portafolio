import ProjectCard from "../../components/ProjectCard";
import { proyectos } from "../../data/TechnologyData";

export const Proyectos = () => {
  return (
    <>
    <section id="proyectos" className="p-20 text-white border">
        <div className='py-3 m-auto space-y-3 text-center'>
          <h1 className='text-3xl font-bold md:text-5xl'>Projects</h1>
          <p className='font-semibold text-gray-400 text-md md:text-lg'>
            Here are some of the projects I’ve built using different technologies. Each one reflects my focus on clean code, modern UI, and real-world solutions
          </p>
        </div>
      
        {/* Contenedor de tarjetas */}
        <div className="flex flex-wrap justify-center gap-8 mt-10">
          {proyectos.map((proyecto, index) => (
            <ProjectCard
              key={index}
              imagen={proyecto.imagen}
              titulo={proyecto.titulo}
              descipcion={proyecto.descipcion}
              enlace={proyecto.enlace}
              tecnologias={proyecto.tecnologias}
            />
          ))}
        </div>

        
    
    </section>
    </>
  );
};
