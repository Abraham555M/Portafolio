import { useState } from "react";
import { FaUpRightFromSquare } from "react-icons/fa6";

const ProjectCard = ({ imagen, imagen2, titulo, descipcion, enlace, tecnologias }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="max-w-md h-[450px] p-5 text-white transform scale-100 transition-transform duration-300 rounded-2xl
                 bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-md border border-slate-700/50 
                 shadow-xl hover:shadow-green-500/20 hover:scale-105 hover:-translate-y-1 hover:border-green-500/50"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Contenedor de imágenes */}
      <div className="relative h-48 overflow-hidden rounded-xl ring-1 ring-slate-700/50">
        {/* Imagen 1 */}
        <img
          src={imagen}
          alt="Project"
          className={`object-cover w-full h-full absolute top-0 left-0 transition-opacity duration-500 ${
            hovered ? "opacity-0" : "opacity-100"
          }`}
        />
        {/* Imagen 2 */}
        <img
          src={imagen2}
          alt="Project Hover"
          className={`object-cover w-full h-full absolute top-0 left-0 transition-opacity duration-500 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Degradado inferior */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
      </div>

      {/* Contenedor scrollable */}
      <div className="mt-2 overflow-y-auto h-[170px] pr-2 scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-800/50">
        {/* Título + Icono */}
        <div className="flex items-center mb-2 space-x-2.5">
          <h1 className="text-2xl font-bold text-transparent bg-gradient-to-r from-green-400 to-green-500 bg-clip-text">
            {titulo}
          </h1>
          <a href={enlace} target="_blank" rel="noopener noreferrer">
            <FaUpRightFromSquare className="mt-1 transition-colors text-slate-400 hover:text-green-400" />
          </a>
        </div>

        {/* Descripción */}
        <p className="mb-4 text-sm leading-relaxed text-slate-300">{descipcion}</p>

        {/* Tecnologías */}
        <div className="flex flex-wrap gap-2">
          {tecnologias.map((tech, index) => (
            <div
              key={index}
              className="flex items-center px-3 py-1.5 space-x-2 text-xs font-semibold text-green-100 
                         bg-gradient-to-r from-slate-700/80 to-slate-800/80 backdrop-blur-sm 
                         rounded-full border border-slate-600/50 hover:border-green-500/50 transition-colors"
            >
              {tech.icono}
              <span>{tech.nombre}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
