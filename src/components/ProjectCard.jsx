import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiReact, SiLaravel, SiMysql, SiAndroid } from 'react-icons/si';

const ProjectCard = ({ title, description, imageUrl, githubUrl, liveUrl, tools }) => {
  return (
    
    <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-5 shadow-xl transition hover:shadow-cyan-500/30 hover:scale-[1.015] duration-300 group max-w-md">
      {/* Imagen de fondo */}
      <div className="w-full h-48 mb-4 overflow-hidden rounded-xl">
        <img
          alt={title}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Título */}
      <h3 className="mb-2 text-2xl font-semibold text-white">{title}</h3>

      {/* Descripción */}
      <p className="mb-4 text-sm leading-relaxed text-gray-300">{description}</p>

      {/* Herramientas */}
      <div className="flex gap-4 mb-4">
        {tools?.map((ToolIcon, i) => (
          <ToolIcon
            key={i}
            className="text-2xl text-gray-300 transition-colors duration-200 hover:text-cyan-400"
            title={ToolIcon.name.replace("Si", "")}
          />
        ))}
      </div>

      {/* Enlaces */}
      <div className="flex gap-6">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-colors hover:text-white"
            title="Ver repositorio"
          >
            <FaGithub size={20} />
          </a>
        )}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-colors hover:text-white"
            title="Ver demo"
          >
            <FaExternalLinkAlt size={18} />
          </a>
        )}
      </div>
    </div>
      
  );
};

export default ProjectCard;
