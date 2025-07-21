import ProjectCard from "../../components/ProjectCard";
import { FaReact, FaLaravel, FaAndroid } from "react-icons/fa";
import { SiMysql } from "react-icons/si";

export const Proyectos = () => {
  return (
    <>
    <section id="proyectos" className="text-white border h-500">
        <h2 className="text-3xl">Proyectos</h2>

<div className = "flex gap-5 p-5">
          <ProjectCard
  title="Sistema de Pedidos"
  description="App de pedidos y control de platos para restaurante. Backend con Laravel, base de datos MySQL y frontend en React."
  imageUrl="/images/pedidos.png"
  githubUrl="https://github.com/usuario/pedidos"
  liveUrl="https://pedidos-demo.vercel.app"
  tools={[FaReact, FaLaravel, SiMysql]}
/>

<ProjectCard
  title="Sistema de Pedidos"
  description="App de pedidos y control de platos para restaurante. Backend con Laravel, base de datos MySQL y frontend en React."
  imageUrl="/images/pedidos.png"
  githubUrl="https://github.com/usuario/pedidos"
  liveUrl="https://pedidos-demo.vercel.app"
  tools={[FaReact, FaLaravel, SiMysql]}
/>

<ProjectCard
  title="Sistema de Pedidos"
  description="App de pedidos y control de platos para restaurante. Backend con Laravel, base de datos MySQL y frontend en React."
  imageUrl="/images/pedidos.png"
  githubUrl="https://github.com/usuario/pedidos"
  liveUrl="https://pedidos-demo.vercel.app"
  tools={[FaReact, FaLaravel, SiMysql]}
/>

<ProjectCard
  title="Sistema de Pedidos"
  description="App de pedidos y control de platos para restaurante. Backend con Laravel, base de datos MySQL y frontend en React."
  imageUrl="/images/pedidos.png"
  githubUrl="https://github.com/usuario/pedidos"
  liveUrl="https://pedidos-demo.vercel.app"
  tools={[FaReact, FaLaravel, SiMysql]}
/>

</div>

    
    
    </section>
    </>
  );
};
