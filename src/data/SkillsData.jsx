import { BiLogoSpringBoot } from "react-icons/bi";
import { DiJavascript } from "react-icons/di";
import { FaCss3Alt, FaHtml5, FaJava, FaLaravel, FaPhp, FaReact } from "react-icons/fa";

/*
    1: Backend
    2: Frontend
    3: Base de Datos
    4: Herramientas
*/
export const skills = [
    {
        id: 1,
        tipo: 1,
        nombre: "laravel",
        icono:  <FaLaravel/>
    },
    {
        id: 2,
        tipo: 1,
        nombre: "Spring Boot",
        icono:  <BiLogoSpringBoot/>
    },
    {
        id: 3,
        tipo: 1,
        nombre: "PHP",
        icono:  <FaPhp/>
    },
    {
        id: 4,
        tipo: 1,
        nombre: "Java",
        icono:  <FaJava />
    },
    {
        id: 5,
        tipo: 2,
        nombre: "React",
        icono:  <FaReact />
    },
    {
        id: 6,
        tipo: 2,
        nombre: "HTML",
        icono:  <FaHtml5/>
    },
    {
        id: 7,
        tipo: 2,
        nombre: "JavaScript",
        icono:  <DiJavascript />
    },
    {
        id: 8,
        tipo: 2,
        nombre: "CSS",
        icono:  <FaCss3Alt />
    }
   
];
