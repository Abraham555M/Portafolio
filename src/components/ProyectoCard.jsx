import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export const ProyectoCard = ({ titulo, imagen, tecnologias, github, demo }) => {
  return (
    <div className="bg-zinc-800 rounded-xl p-4 shadow-md hover:shadow-lg transition duration-300 w-72">
      <img
        src={imagen}
        alt={titulo}
        className="rounded-lg h-36 w-full object-cover mb-3"
      />
      <h3 className="text-white font-semibold text-lg">{titulo}</h3>

      <div className="flex flex-wrap gap-1 mt-2 mb-3">
        {tecnologias.map((tech, idx) => (
          <span
            key={idx}
            className="text-xs bg-blue-700 text-white px-2 py-0.5 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex justify-between mt-2">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white text-sm flex items-center gap-1"
        >
          <FaGithub /> Código
        </a>
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white text-sm flex items-center gap-1"
        >
          <FaExternalLinkAlt /> Demo
        </a>
      </div>
    </div>
  );
};
