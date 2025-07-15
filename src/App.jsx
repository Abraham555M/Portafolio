import { Navbar } from "./components/Navbar";
import { Contacto } from "./sections/Contacto/Contacto";
import { Experiencia } from "./sections/Experiencia/Experiencia";
import { Habilidades } from "./sections/Habilidades/Habilidades";
import { Inicio } from "./sections/Inicio/Inicio";
import { Proyectos } from "./sections/Proyectos/Proyectos";
import { SobreMi } from "./sections/SobreMi/SobreMi";

export const App = () => {
  return (
    <>
    <Navbar/>
    <Inicio/>
    <SobreMi/>
    <Proyectos/>
    <Habilidades/>
    <Experiencia/>
    <Contacto/>
    </>
  );
}
