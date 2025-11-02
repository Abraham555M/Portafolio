import { BiLogoSpringBoot } from "react-icons/bi";
import { DiJavascript, DiPostgresql } from "react-icons/di";
import {
  FaAndroid,
  FaCss3Alt,
  FaDocker,
  FaFigma,
  FaHtml5,
  FaJava,
  FaLaravel,
  FaPhp,
  FaReact,
} from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { IoLogoFirebase } from "react-icons/io5";
import { SiGooglecloud, SiMongodb, SiTypescript, SiVirtualbox } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

/*
    Category types:
    1: Backend
    2: Frontend
    3: Databases
    4: Tools / Cloud
    5: Mobile Development
*/

export const skills = [
  // Backend
  { id: 1, tipo: 1, nombre: "Laravel", icono: <FaLaravel /> },
  { id: 2, tipo: 1, nombre: "PHP", icono: <FaPhp /> },
  { id: 3, tipo: 1, nombre: "Spring Boot", icono: <BiLogoSpringBoot /> },
  { id: 4, tipo: 1, nombre: "Java", icono: <FaJava /> },

  // Frontend
  { id: 5, tipo: 2, nombre: "HTML", icono: <FaHtml5 /> },
  { id: 6, tipo: 2, nombre: "CSS", icono: <FaCss3Alt /> },
  { id: 7, tipo: 2, nombre: "JavaScript", icono: <DiJavascript /> },
  { id: 8, tipo: 2, nombre: "TypeScript", icono: <SiTypescript /> },
  { id: 9, tipo: 2, nombre: "React", icono: <FaReact /> },

  // Mobile
  { id: 10, tipo: 3, nombre: "Android", icono: <FaAndroid /> },

  // Databases
  { id: 11, tipo: 4, nombre: "MySQL", icono: <GrMysql /> },
  { id: 12, tipo: 4, nombre: "PostgreSQL", icono: <DiPostgresql /> },
  { id: 13, tipo: 4, nombre: "MongoDB", icono: <SiMongodb /> },
  { id: 14, tipo: 4, nombre: "Firebase", icono: <IoLogoFirebase /> },

  // Tools / Cloud
  { id: 15, tipo: 5, nombre: "Google Cloud", icono: <SiGooglecloud /> },
  { id: 16, tipo: 5, nombre: "Docker", icono: <FaDocker /> },
  { id: 17, tipo: 5, nombre: "VirtualBox", icono: <SiVirtualbox /> },
  { id: 18, tipo: 5, nombre: "Figma", icono: <FaFigma /> },

  // Mobile Development
  { id: 19, tipo: 6, nombre: "React Native", icono: <TbBrandReactNative /> },
];
