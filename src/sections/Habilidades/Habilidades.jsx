import { useState } from "react";
import { skills } from "../../data/SkillsData";
import SkillCard from "../../components/SkillCard";
import { categorias } from "../../data/CategoriasData";

export const Habilidades = () => {
  const [tipoSeleccionado, setTipoSeleccionado] = useState(null);

  // Filtrar skills por tipo seleccionado
  const skillsFiltradas = tipoSeleccionado
    ? skills.filter((skill) => skill.tipo === tipoSeleccionado)
    : skills;
  
  return (
    <section id="habilidades" className="p-6 text-white border md:p-20">
      <div className="max-w-[1200px] mx-auto">
        {/* Título */}
        <div className="py-3 space-y-10 text-center">
          <h1 className="text-3xl font-bold md:text-5xl">Skills</h1>

          {/* Barra de categorías con scroll horizontal */}
          <div className="w-full mx-auto overflow-x-auto border shadow-xl rounded-2xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-lg border-slate-700/40 scrollbar-hide">
            <ul className="flex text-base font-semibold text-slate-200">
              {categorias.map((categoria, index) => (
                <li
                  key={categoria.id}
                  onClick={() => setTipoSeleccionado(categoria.id)}
                  className={`flex-1 min-w-[140px] px-6 py-3 cursor-pointer text-center transition-all duration-300 
                    ${index !== categorias.length - 1 ? "border-r border-slate-700/40" : ""}
                    hover:bg-gradient-to-r hover:from-green-500/10 hover:to-green-400/10 
                    hover:text-green-400
                    ${tipoSeleccionado === categoria.id 
                      ? "bg-gradient-to-r from-green-500/15 to-green-400/15 text-green-400" 
                      : ""}
                  `}
                >
                  {categoria.nombre}
                </li>
              ))}
            </ul>
          </div>
          
         {/* Button to show all */}
          {tipoSeleccionado && (
            <button
              onClick={() => setTipoSeleccionado(null)}
              className="px-5 py-2 mt-5 text-sm font-semibold tracking-wide transition-all duration-300 border rounded-lg shadow-md text-slate-200 border-green-500/40 bg-slate-800/40 backdrop-blur-md hover:bg-green-500/15 hover:border-green-500/70 hover:text-green-400 hover:shadow-green-500/20"
            >
              Show All
            </button>
          )}
        </div>

        {/* Listado de Skills */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(8rem,1fr))] gap-10 mt-10 justify-items-center place-items-center">
          {skillsFiltradas.map((skill) => (
            <SkillCard
              key={skill.id}
              tipo={skill.tipo}
              nombre={skill.nombre}
              icono={skill.icono}
            />
          ))}
        </div>
      </div>
    </section>
  );
};