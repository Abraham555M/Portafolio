import { BiLogoSpringBoot } from "react-icons/bi";
import { DiJavascript, DiPostgresql } from "react-icons/di";
import { FaAndroid, FaCss3Alt, FaDocker, FaFigma, FaHtml5, FaJava, FaLaravel, FaPhp, FaReact } from "react-icons/fa";
import { GrDocker, GrMysql } from "react-icons/gr";
import { IoLogoFirebase } from "react-icons/io5";
import { SiGooglecloud, SiMongodb, SiTypescript, SiVirtualbox } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

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
        nombre: "PHP",
        icono:  <FaPhp/>
    },
    {
        id: 3,
        tipo: 1,
        nombre: "Spring Boot",
        icono:  <BiLogoSpringBoot/>
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
        nombre: "HTML",
        icono:  <FaHtml5/>
    },
    {
        id: 6,
        tipo: 2,
        nombre: "JavaScript",
        icono:  <DiJavascript />
    },
    {
        id: 7,
        tipo: 2,
        nombre: "CSS",
        icono:  <FaCss3Alt />
    },
    {
        id: 8,
        tipo: 2,
        nombre: "React",
        icono:  <FaReact />
    },
    {
        id: 9,
        tipo: 3,
        nombre: "Android",
        icono:  <FaAndroid />
    },
    {
        id: 10,
        tipo: 4,
        nombre: "MySQL",
        icono:  <GrMysql />
    },
    {
        id: 11,
        tipo: 4,
        nombre: "PostGreSQL",
        icono:  <DiPostgresql />
    },
    {
        id: 12,
        tipo: 4,
        nombre: "Firebase",
        icono:  <IoLogoFirebase />
    },
    {
        id: 13,
        tipo: 4,
        nombre: "MongoDB",
        icono:  <SiMongodb />
    },
    {
        id: 14,
        tipo: 5,
        nombre: "Google Cloud",
        icono:  <SiGooglecloud />
    },
    {
        id: 15,
        tipo: 5,
        nombre: "Docker",
        icono:  <GrDocker />
    },
    {
        id: 16,
        tipo: 5,
        nombre: "Virtualización",
        icono:  <SiVirtualbox />
    },
    {
        id: 17,
        tipo: 5,
        nombre: "Figma",
        icono:  <FaFigma />
    },
    {
        id: 18,
        tipo: 6,
        nombre: "ReactNative",
        icono:  <TbBrandReactNative />
    },
    {
        id: 19,
        tipo: 6,
        nombre: "Typescript",
        icono:  <SiTypescript />
    }
];
