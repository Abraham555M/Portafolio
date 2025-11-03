import { BiLogoPostgresql } from "react-icons/bi";
import { DiJavascript } from "react-icons/di";
import { FaBootstrap, FaCss3Alt, FaHtml5, FaJava, FaPhp, FaLaravel, FaReact } from "react-icons/fa";
import { FaFigma } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { IoLogoAndroid } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiGooglecloud, SiPostman, SiSpring, SiVite } from "react-icons/si";

export const proyectos = [
  {
    imagen: "https://i.ibb.co/kVRzK4gD/Captura-de-pantalla-2025-10-30-232822.png",
    imagen2: "https://i.ibb.co/SDrkxvMq/Captura-de-pantalla-2025-10-30-232944.png",
    titulo: "Business Web Administrative System",
    descripcion:
      "Development of an integrated web system aimed at optimizing the company’s administrative management. It enables efficient management of staff, control of technological resources, client information, and user role assignment based on access levels. Its design improves internal processes, enhances organization, and facilitates decision-making through an intuitive and functional interface.",
    enlace: "https://github.com/Abraham555M/software_wb4.git",
    tecnologias: [
      { nombre: "Laravel", icono: <FaLaravel /> },
      { nombre: "JavaScript", icono: <DiJavascript /> },
      { nombre: "PostgreSQL", icono: <BiLogoPostgresql /> },
      { nombre: "HTML", icono: <FaHtml5 /> },
      { nombre: "Bootstrap", icono: <FaBootstrap /> },
      { nombre: "CSS", icono: <FaCss3Alt /> },
    ],
  },
  {
    imagen: "https://i.ibb.co/35KfW128/Captura-de-pantalla-2025-10-30-122744.png",
    imagen2: "https://i.ibb.co/ycZq8xRR/Captura-de-pantalla-2025-10-30-122912.png",
    titulo: "San Francisco Shelter Management Platform",
    descripcion:
      "A web system designed to optimize the management of an animal shelter, allowing efficient control of animal records, adoptions, staff, and resources — all from a centralized and user-friendly interface.",
    enlace: "https://github.com/Abraham555M/frontend_adprso.git",
    tecnologias: [
      { nombre: "React", icono: <FaReact /> },
      { nombre: "Spring Boot", icono: <SiSpring /> },
      { nombre: "MySQL", icono: <GrMysql /> },
      { nombre: "Tailwind CSS", icono: <RiTailwindCssFill /> },
      { nombre: "Figma", icono: <FaFigma /> },
      { nombre: "Vite", icono: <SiVite /> },
    ],
  },
  {
    imagen: "https://i.ibb.co/nMDkkCMM/Captura-de-pantalla-2025-10-30-111323.png",
    imagen2: "https://i.ibb.co/4np7LDCP/Captura-de-pantalla-2025-10-30-111457.png",
    titulo: "Mobile App for Personal Expense Management",
    descripcion:
      "A mobile application designed to help users easily manage and track their personal expenses. It allows users to record financial movements, analyze spending habits, and optimize financial management in a simple and intuitive way.",
    enlace: "https://github.com/Manuelh2004/PHP_PROYECTO_MOVILES.git",
    tecnologias: [
      { nombre: "Android", icono: <IoLogoAndroid /> },
      { nombre: "PHP", icono: <FaPhp /> },
      { nombre: "Firebase", icono: <IoLogoFirebase /> },
      { nombre: "MySQL", icono: <GrMysql /> },
      { nombre: "Java", icono: <FaJava /> },
    ],
  },
  {
    imagen: "https://i.ibb.co/GXSNrZM/Captura-de-pantalla-2025-10-30-230435.png",
    imagen2: "https://i.ibb.co/vxXS0QRj/Captura-de-pantalla-2025-10-30-230639.png",
    titulo: "Backend for Attendance Tracking System",
    descripcion:
      "Backend development responsible for managing employee attendance records, monitoring, and control. It includes functionalities such as user authentication, attendance data storage, and report generation, ensuring efficiency, security, and scalability in handling work-related information.",
    enlace: "https://github.com/Abraham555M/backend_sistema_control_asistencia.git",
    tecnologias: [
      { nombre: "Laravel", icono: <FaLaravel /> },
      { nombre: "PHP", icono: <FaPhp /> },
      { nombre: "Postman", icono: <SiPostman /> },
    ],
  },
  {
    imagen: "https://i.ibb.co/LDPcP8kB/Captura-de-pantalla-2025-10-30-171058.png",
    imagen2: "https://i.ibb.co/NdszVjyR/Captura-de-pantalla-2025-10-30-171218.png",
    titulo: "Mobile App for Order Management",
    descripcion:
      "A mobile application created to streamline the management of customer orders, allowing businesses to track requests, manage deliveries, and improve communication with clients. It leverages cloud services and real-time synchronization for efficient operation.",
    enlace: "https://github.com/Abraham555M/ProyectoLaGranja.git",
    tecnologias: [
      { nombre: "Android", icono: <IoLogoAndroid /> },
      { nombre: "PHP", icono: <FaPhp /> },
      { nombre: "Firebase", icono: <IoLogoFirebase /> },
      { nombre: "Google Cloud", icono: <SiGooglecloud /> },
      { nombre: "Java", icono: <FaJava /> },
    ],
  },
];
