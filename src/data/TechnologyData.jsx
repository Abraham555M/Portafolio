import { FaCss3Alt, FaHtml5, FaJava, FaJs, FaLaravel, FaPhp, FaReact } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { IoLogoAndroid, IoLogoJavascript } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import { LuCodeXml } from "react-icons/lu";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql, SiPostman } from "react-icons/si";

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
    imagen: "https://creasystem.net/assets/uploads/media-uploader/dns1663876488.png",
    imagen2: "https://www.creasystem.net/assets/uploads/media-uploader/aplicacion-web-y-de-escritorio-011663869647.jpg",
    titulo: "Landing Page",
    descipcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    enlace: "https://github.com/otro-proyecto",
    tecnologias: [
      { nombre: "HTML", icono: <FaHtml5 /> },
      { nombre: "CSS", icono: <FaCss3Alt /> },
      { nombre: "JavaScript", icono: <FaJs /> }
    ]
  },
  {
    imagen: "https://creasystem.net/assets/uploads/media-uploader/dns1663876488.png",
    imagen2: "https://www.creasystem.net/assets/uploads/media-uploader/aplicacion-web-y-de-escritorio-011663869647.jpg",
    titulo: "Aplicación móvil para la gestión de gastos personales" ,
    descipcion: "Aplicación móvil diseñada para facilitar la gestión y control de los gastos personales, permitiendo al usuario registrar sus movimientos financieros, analizar sus hábitos de consumo y optimizar la administración de sus recursos económicos de forma sencilla e intuitiva.",
    enlace: "https://github.com/otro-proyecto",
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
      { nombre: "Tailwind", icono: <RiTailwindCssFill /> },
      { nombre: "React", icono: <FaReact /> },
      { nombre: "Postman", icono: <SiPostman /> },
      { nombre: "Javascript", icono: <IoLogoJavascript /> }
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
      { nombre: "Tailwind", icono: <RiTailwindCssFill /> },
      { nombre: "React", icono: <FaReact /> },
      { nombre: "Postman", icono: <SiPostman /> },
      { nombre: "Javascript", icono: <IoLogoJavascript /> }
    ]
  }
];