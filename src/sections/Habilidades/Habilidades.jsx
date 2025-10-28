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
          <div className="w-full mx-auto overflow-x-auto border shadow-lg rounded-2xl bg-white/10 backdrop-blur-md border-white/20 scrollbar-hide">
            <ul className="flex text-lg font-semibold">
              {categorias.map((categoria, index) => (
                <li
                  key={categoria.id}
                  onClick={() => setTipoSeleccionado(categoria.id)}
                  className={`flex-1 min-w-[140px] px-6 py-3 cursor-pointer text-center ${
                    index !== categorias.length - 1 ? "border-r" : ""
                  } border-white/20 transition-all duration-300 hover:bg-white/10 hover:backdrop-blur-lg ${
                    tipoSeleccionado === categoria.id ? "bg-white/20" : ""
                  }`}
                >
                  {categoria.nombre}
                </li>
              ))}
            </ul>
          </div>

          {/* Botón para ver todos */}
          {tipoSeleccionado && (
            <button
              onClick={() => setTipoSeleccionado(null)}
              className="px-4 py-2 mt-4 text-sm font-semibold transition-all duration-300 border rounded-lg border-white/30 hover:bg-white/10"
            >
              Ver todos
            </button>
          )}
        </div>

        {/* Listado de Skills */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(8rem,1fr))] gap-6 mt-10 justify-items-center place-items-center">
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