import { FaLaravel } from "react-icons/fa"
import { skills } from "../../data/SkillsData";

export const Habilidades = () => {
  



  return (   
    <section id="habilidades" className="p-6 text-white md:p-20">
      <div className="max-w-[1200px] mx-auto">
        {/* Título */}
        <div className="py-3 space-y-10 text-center">
          <h1 className="text-3xl font-bold md:text-5xl">Skills</h1>         

          {/* Contenedor con efecto de cristal */}
          <div className="max-w-3xl mx-auto overflow-hidden border shadow-lg rounded-2xl bg-white/10 backdrop-blur-md border-white/20">
            <ul className="flex justify-center text-lg font-semibold">
              <li className="flex-1 px-6 py-3 transition-all duration-300 border-r cursor-pointer border-white/20 hover:bg-white/10 hover:backdrop-blur-lg">
                Frontend
              </li>
              <li className="flex-1 px-6 py-3 transition-all duration-300 border-r cursor-pointer border-white/20 hover:bg-white/10 hover:backdrop-blur-lg">
                Backend
              </li>
              <li className="flex-1 px-6 py-3 transition-all duration-300 border-r cursor-pointer border-white/20 hover:bg-white/10 hover:backdrop-blur-lg">
                Base de Datos
              </li>
              <li className="flex-1 px-6 py-3 transition-all duration-300 cursor-pointer hover:bg-white/10 hover:backdrop-blur-lg">
                Herramientas
              </li>
            </ul>
          </div>
        </div> 

        
        <div className="mt-10 border">
          
        </div>      
      </div>     
      
      
    </section>
  )
}
