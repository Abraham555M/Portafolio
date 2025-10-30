import { FaCss3Alt, FaHtml5, FaJava, FaJs, FaLaravel, FaPhp, FaReact } from "react-icons/fa";
import { FaFigma } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { IoLogoAndroid, IoLogoJavascript } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import { LuCodeXml } from "react-icons/lu";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiGooglecloud, SiMysql, SiPostman, SiSpring, SiVite } from "react-icons/si";

export const proyectos = [
  {
    imagen: "https://creasystem.net/assets/uploads/media-uploader/dns1663876488.png",
    imagen2: "https://www.creasystem.net/assets/uploads/media-uploader/aplicacion-web-y-de-escritorio-011663869647.jpg",
    titulo: "Mi Proyecto Laravel + React",
    descipcion: "Un sistema de pedidos en tiempo real.",
    enlace: "https://github.com/mi-proyecto",
    tecnologias: [
      { nombre: "Laravel", icono: <FaLaravel /> },
      { nombre: "React", icono: <FaReact /> },
      { nombre: "MySQL", icono: <SiMysql /> }
    ]
  },
  {
    imagen: "https://i.ibb.co/35KfW128/Captura-de-pantalla-2025-10-30-122744.png",
    imagen2: "https://i.ibb.co/ycZq8xRR/Captura-de-pantalla-2025-10-30-122912.png",
    titulo: "Plataforma administrativa del albergue San Francisco",
    descipcion: "Un sistema web diseñado para optimizar la administración de un albergue, permitiendo gestionar de manera eficiente los registros de animales, adopciones, personal y recursos, todo desde una interfaz centralizada y fácil de usar.",
    enlace: "https://github.com/Abraham555M/frontend_adprso.git",
    tecnologias: [
      { nombre: "React", icono: <FaReact /> },
      { nombre: "Spring Boot", icono: <SiSpring /> },
      { nombre: "MySQL", icono: <GrMysql /> },
      { nombre: "Tailwind", icono: <RiTailwindCssFill /> },
      { nombre: "Figma", icono: <FaFigma /> },
      { nombre: "Vite", icono: <SiVite /> }
    ]
  },
  {
    imagen: "https://i.ibb.co/nMDkkCMM/Captura-de-pantalla-2025-10-30-111323.png",
    imagen2: "https://i.ibb.co/4np7LDCP/Captura-de-pantalla-2025-10-30-111457.png",
    titulo: "Aplicación móvil para la gestión de gastos personales" ,
    descipcion: "Aplicación móvil diseñada para facilitar la gestión y control de los gastos personales, permitiendo al usuario registrar sus movimientos financieros, analizar sus hábitos de consumo y optimizar la administración de sus recursos económicos de forma sencilla e intuitiva.",
    enlace: "https://github.com/Manuelh2004/PHP_PROYECTO_MOVILES.git",
    tecnologias: [
      { nombre: "Android", icono: <IoLogoAndroid /> },
      { nombre: "PHP", icono: <FaPhp /> },
      { nombre: "Firebase", icono: <IoLogoFirebase /> },
      { nombre: "MySQL", icono: <GrMysql /> },
      { nombre: "Java", icono: <FaJava /> },
    ]
  },
  {
    imagen: "https://creasystem.net/assets/uploads/media-uploader/dns1663876488.png",
    imagen2: "https://www.creasystem.net/assets/uploads/media-uploader/aplicacion-web-y-de-escritorio-011663869647.jpg",
    titulo: "Marcado de Asistencia",
    descipcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    enlace: "https://github.com/otro-proyecto",
    tecnologias: [
      { nombre: "Laravel", icono: <FaLaravel /> },
      { nombre: "React", icono: <FaReact /> },
      { nombre: "Tailwind", icono: <RiTailwindCssFill /> }
   
    ]
  },
  {
    imagen: "https://i.ibb.co/LDPcP8kB/Captura-de-pantalla-2025-10-30-171058.png",
    imagen2: "https://i.ibb.co/NdszVjyR/Captura-de-pantalla-2025-10-30-171218.png",
    titulo: "Aplicación móvil para la gestión de pedidos",
    descipcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    enlace: "https://github.com/Abraham555M/ProyectoLaGranja.git",
    tecnologias: [
      { nombre: "Android", icono: <IoLogoAndroid /> },
      { nombre: "PHP", icono: <FaPhp /> },
      { nombre: "Firebase", icono: <IoLogoFirebase /> },
      { nombre: "Google Cloud ", icono: <SiGooglecloud /> },
      { nombre: "Java", icono: <FaJava /> },
    ]
  }
];