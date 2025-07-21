import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiReact, SiLaravel, SiMysql, SiAndroid } from 'react-icons/si';
import fondo from '../assets/jjj.png';

const ProjectCard = ({ title, description, imageUrl, githubUrl, liveUrl, tools }) => {
  return (
    <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-5 shadow-xl transition hover:shadow-cyan-500/30 hover:scale-[1.015] duration-300 group max-w-md">
      {/* Imagen de fondo */}
      <div className="w-full h-48 overflow-hidden rounded-xl mb-4">
        <img
          src={fondo}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Título */}
      <h3 className="text-white text-2xl font-semibold mb-2">{title}</h3>

      {/* Descripción */}
      <p className="text-gray-300 text-sm leading-relaxed mb-4">{description}</p>

      {/* Herramientas */}
      <div className="flex gap-4 mb-4">
        {tools?.map((ToolIcon, i) => (
          <ToolIcon
            key={i}
            className="text-gray-300 text-2xl hover:text-cyan-400 transition-colors duration-200"
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
            className="text-gray-400 hover:text-white transition-colors"
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
            className="text-gray-400 hover:text-white transition-colors"
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
