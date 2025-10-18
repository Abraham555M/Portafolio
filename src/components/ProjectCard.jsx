import { useState } from "react";
import { FaUpRightFromSquare } from "react-icons/fa6";

const ProjectCard = ({ imagen, imagen2, titulo, descipcion, enlace, tecnologias }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="max-w-md h-[450px] p-5 text-white transition-transform duration-300 transform rounded-2xl
                 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:scale-100"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Contenedor de imágenes */}
      <div className="relative h-48 overflow-hidden rounded-xl">
        {/* Imagen 1 */}
        <img
          src={imagen}
          alt="Proyecto"
          className={`object-cover w-full h-full absolute top-0 left-0 transition-opacity duration-500 ${
            hovered ? "opacity-0" : "opacity-100"
          }`}
        />
        {/* Imagen 2 */}
        <img
          src={imagen2}
          alt="Proyecto Hover"
          className={`object-cover w-full h-full absolute top-0 left-0 transition-opacity duration-500 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Degradado inferior */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>

      {/* Contenedor scrollable */}
      <div className="mt-2 overflow-y-auto h-[170px] pr-2 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent">
        {/* Título + Icono */}
        <div className="flex items-center mb-2 space-x-2.5">
          <h1 className="text-2xl font-bold">{titulo}</h1>
          <a href={enlace} target="_blank" rel="noopener noreferrer">
            <FaUpRightFromSquare className="mt-1 transition-colors hover:text-blue-400" />
          </a>
        </div>

        {/* Descripción */}
        <p className="mb-4 text-sm text-gray-200">{descipcion}</p>

        {/* Tecnologías */}
        <div className="flex flex-wrap gap-2">
          {tecnologias.map((tech, index) => (
            <div
              key={index}
              className="flex items-center p-2 space-x-2 text-xs font-bold text-white bg-black/60 backdrop-blur-sm rounded-2xl"
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
