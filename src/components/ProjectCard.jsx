import { FaUpRightFromSquare } from "react-icons/fa6";

const ProjectCard = ({ imagen, titulo, descipcion, enlace, tecnologias }) => {
  return (
    <div className="max-w-md p-5 text-black bg-white shadow-lg w-100 rounded-2xl">
      <div className="relative overflow-hidden rounded-xl">
        {/* Imagen */}
        <img src={imagen} alt="Proyecto" className="object-cover w-full h-48" />

        {/* Efecto degradado en la parte inferior */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <div className="flex items-center space-x-2">
        <h1 className="py-2 text-2xl font-bold">{titulo}</h1>
        <a href={enlace} target="_blank" rel="noopener noreferrer">
          <FaUpRightFromSquare className="mt-2 transition-colors hover:text-blue-600" />
        </a>
      </div>

      <p className="mb-5 text-sm text-gray-600">
        {descipcion}
      </p>

      {/* Tecnologías */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tecnologias.map((tech, index) => (
          <div
            key={index}
            className="flex items-center p-2 space-x-2 text-xs font-bold text-white bg-black rounded-2xl"
          >
            {tech.icono}
            <span>{tech.nombre}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
