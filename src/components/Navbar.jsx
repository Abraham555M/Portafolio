import { useState } from "react";
import { IoMdDownload } from "react-icons/io";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full font-bold text-white backdrop-blur-md">
      <div className="flex items-center justify-between px-4 py-3 md:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex-shrink-0 cursor-pointer w-28 sm:w-32 md:w-36">
          <div className="text-2xl font-bold text-green-500">
            CODE LOGO
          </div>
        </div>

        {/* Botón hamburguesa (solo móvil) */}
        <button
          className="z-10 lg:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            // Ícono X
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Ícono hamburguesa
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m0 6H4" />
            </svg>
          )}
        </button>

        {/* Navbar desktop */}
        <nav className="flex-1 hidden mx-4 lg:block xl:mx-8">
          <ul className="flex items-center justify-center gap-4 text-sm xl:gap-8 2xl:gap-10 xl:text-base 2xl:text-lg">
            {["home", "sobre-mi", "proyectos", "habilidades", "experiencia", "contacto"].map((section, i) => (
              <li key={i}>
                <a
                  href={`#${section}`}
                  className="relative transition-all duration-300 hover:text-green-500 whitespace-nowrap 
                            after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-green-500 
                            after:transition-all after:duration-300 hover:after:w-full"
                >
                  {section === "home" ? "Home" :
                   section === "sobre-mi" ? "About" :
                   section === "proyectos" ? "Projects" :
                   section === "habilidades" ? "Skills" :
                   section === "experiencia" ? "Experience" :
                   "Contact"}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Botón CV (desktop) */}
        <div className="items-center flex-shrink-0 hidden gap-2 px-3 py-2 transition-transform duration-300 border-2 cursor-pointer xl:gap-3 xl:px-4 2xl:px-5 lg:flex rounded-3xl hover:bg-green-500 hover:scale-105 whitespace-nowrap">
          <IoMdDownload className="w-4 h-4 xl:w-5 xl:h-5" /> {/* 👈 Ícono de descarga */}
          <button className="text-xs xl:text-sm 2xl:text-base">Download CV</button>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {isOpen && (
        <nav className="border-t border-gray-700 lg:hidden">
          <ul className="flex flex-col gap-4 py-4 text-base text-center sm:text-lg">
            {["home", "sobre-mi", "proyectos", "habilidades", "experiencia", "contacto"].map((section, i) => (
              <li key={i}>
                <a
                  href={`#${section}`}
                  className="block transition-colors duration-200 hover:text-green-500"
                  onClick={() => setIsOpen(false)}
                >
                  {section === "home" ? "Home" :
                   section === "sobre-mi" ? "About" :
                   section === "proyectos" ? "Projects" :
                   section === "habilidades" ? "Skills" :
                   section === "experiencia" ? "Experience" :
                   "Contact"}
                </a>
              </li>
            ))}

            {/* Botón CV móvil */}
            <li>
              <div className="flex items-center justify-center gap-2 px-5 py-2 mx-auto mt-2 transition duration-300 border-2 cursor-pointer rounded-3xl hover:bg-green-500 max-w-fit">
                <IoMdDownload className="w-5 h-5" /> {/* 👈 Ícono de descarga */}
                <button>Download CV</button>
              </div>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};
