import ProjectCard from "../../components/ProjectCard";
import { FaReact, FaLaravel, FaAndroid } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import  foto  from "../../assets/image.png"

export const Proyectos = () => {
  return (
    <>
    <section id="proyectos" className="text-white border p-20">
        <h2 className="text-3xl">Proyectos</h2>
        {/** 
        <div className = "flex gap-5 p-5">
          <ProjectCard
            title="Sistema de Pedidos"
            description="App de pedidos y control de platos para restaurante. Backend con Laravel, base de datos MySQL y frontend en React."
            imageUrl="/images/pedidos.png"
            githubUrl="https://github.com/usuario/pedidos"
            liveUrl="https://pedidos-demo.vercel.app"
            tools={[FaReact, FaLaravel, SiMysql]}
          />
        </div>
        */}

        <div>
          <div>
            <h1></h1>
            <img className="" src={foto} alt="" />
          </div>
        </div>
     <div>
          <div>
            <h1></h1>
            <img className="" src={foto} alt="" />
          </div>
        </div>
         <div>
          <div>
            <h1></h1>
            <img className="" src={foto} alt="" />
          </div>
        </div>
    
    </section>
    </>
  );
};
