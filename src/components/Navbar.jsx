import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="font-bold text-white">
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
            <li>
              <a 
                href="#home" 
                className="relative transition-all duration-300 hover:text-green-500 whitespace-nowrap 
                            after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-green-500 
                            after:transition-all after:duration-300 hover:after:w-full"
                >
                Home
                </a>
            </li>
            <li>
              <a 
                href="#sobre-mi" 
                className="relative transition-all duration-300 hover:text-green-500 whitespace-nowrap 
                            after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-green-500 
                            after:transition-all after:duration-300 hover:after:w-full"
                >
                About
              </a>
            </li>
            <li>
              <a 
                href="#proyectos" 
                className="relative transition-all duration-300 hover:text-green-500 whitespace-nowrap 
                            after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-green-500 
                            after:transition-all after:duration-300 hover:after:w-full"
                >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#habilidades" 
                className="relative transition-all duration-300 hover:text-green-500 whitespace-nowrap 
                            after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-green-500 
                            after:transition-all after:duration-300 hover:after:w-full"
                >
                Skills
              </a>
            </li>
            <li>
              <a 
                href="#experiencia" 
                className="relative transition-all duration-300 hover:text-green-500 whitespace-nowrap 
                            after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-green-500 
                            after:transition-all after:duration-300 hover:after:w-full"
                >
                Experience
              </a>
            </li>
            <li>
              <a 
                href="#contacto" 
                className="relative transition-all duration-300 hover:text-green-500 whitespace-nowrap 
                            after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-green-500 
                            after:transition-all after:duration-300 hover:after:w-full"
                >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Botón CV (desktop) */}
        <div className="items-center flex-shrink-0 hidden gap-2 px-3 py-2 transition-transform duration-300 border-2 cursor-pointer xl:gap-3 xl:px-4 2xl:px-5 lg:flex rounded-3xl hover:bg-green-500 hover:scale-105 whitespace-nowrap">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 20 20" 
            fill="currentColor" 
            className="w-4 h-4 xl:w-5 xl:h-5"
          >
            <path d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z" />
            <path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
          </svg>
          <button className="text-xs xl:text-sm 2xl:text-base">Download CV</button>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {isOpen && (
        <nav className="border-t border-gray-700 lg:hidden">
          <ul className="flex flex-col gap-4 py-4 text-base text-center sm:text-lg">
            <li>
              <a 
                href="#home" 
                className="block transition-colors duration-200 hover:text-green-500"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#sobre-mi" 
                className="block transition-colors duration-200 hover:text-green-500"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#proyectos" 
                className="block transition-colors duration-200 hover:text-green-500"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#habilidades" 
                className="block transition-colors duration-200 hover:text-green-500"
                onClick={() => setIsOpen(false)}
              >
                Skills
              </a>
            </li>
            <li>
              <a 
                href="#experiencia" 
                className="block transition-colors duration-200 hover:text-green-500"
                onClick={() => setIsOpen(false)}
              >
                Experience
              </a>
            </li>
            <li>
              <a 
                href="#contacto" 
                className="block transition-colors duration-200 hover:text-green-500"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </li>
            <li>
              <div className="flex items-center justify-center gap-2 px-5 py-2 mx-auto mt-2 transition duration-300 border-2 cursor-pointer rounded-3xl hover:bg-green-500 max-w-fit">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 20 20" 
                  fill="currentColor" 
                  className="w-5 h-5"
                >
                  <path d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z" />
                  <path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
                </svg>
                <button>Download CV</button>
              </div>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};