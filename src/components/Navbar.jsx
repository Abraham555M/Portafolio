import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdDownload } from "react-icons/io";
import logo from "../assets/logo_3.png";
import { menuItems } from "../data/MenuItems";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/src/assets/documentos/ABRAHAM MANUEL HILARIO FERNÁNDEZ.pdf";
    link.download = "CV_Abraham_Manuel_Hilario_Fernández.pdf";
    link.click();
  };

  // Nueva función para hacer scroll suave a las secciones
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    // Si el menú móvil está abierto, lo cerramos primero
    if (isOpen) {
      setIsOpen(false);
      // Espera a que termine la animación del cierre antes de hacer scroll
      setTimeout(() => scrollToSection(section), 350);
    } else {
      scrollToSection(section);
    }
  };

  const scrollToSection = (section) => {
    // Usamos requestAnimationFrame para medir después del render final
    requestAnimationFrame(() => {
      const navbarHeight = document.querySelector("header")?.offsetHeight || 80;
      const yOffset = -navbarHeight + 10;
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    });
  };





  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 z-50 w-full font-bold text-white"
    >
      <div className="relative mx-2 mt-2 overflow-hidden border shadow-2xl md:mx-4 md:mt-3 lg:mx-6 lg:mt-4 rounded-2xl md:rounded-3xl backdrop-blur-lg bg-gradient-to-br from-slate-800/95 to-slate-900/95 border-slate-700/50">
        {/* Efecto de brillo superior */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>

        <div className="flex items-center justify-between px-4 py-3 md:px-6 lg:px-8">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative flex-shrink-0 cursor-pointer w-28 sm:w-32 md:w-36"
            onClick={() => handleScroll("home")}
          >
            <div className="absolute inset-0 transition-all duration-500 rounded-lg bg-gradient-to-br from-green-500/0 to-green-500/0 blur-sm hover:from-green-500/20 hover:to-green-500/20"></div>
            <img
              src={logo}
              alt="Logo"
              className="relative z-10 object-contain h-auto w-200"
            />
          </motion.div>

          {/* Botón hamburguesa (solo móvil) */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative z-10 p-2 ml-auto transition-all duration-300 border rounded-lg lg:hidden focus:outline-none bg-slate-800/50 border-slate-700/50 hover:border-green-500/60 hover:bg-slate-700/50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.svg
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </motion.svg>
              ) : (
                <motion.svg
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m0 6H4"
                  />
                </motion.svg>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Navbar desktop */}
          <nav className="flex-1 hidden mx-4 lg:block xl:mx-8">
            <ul className="flex items-center justify-center gap-2 text-sm xl:gap-4 2xl:gap-6 xl:text-base 2xl:text-lg">
              {menuItems.map((item, i) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <motion.a
                    onClick={() => handleScroll(item.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative px-3 py-2 transition-all duration-300 rounded-lg cursor-pointer group whitespace-nowrap hover:text-green-400"
                  >
                  <span className="relative z-10 pointer-events-none">{item.label}</span>
                    <motion.div
                      className="absolute inset-0 rounded-lg bg-gradient-to-br from-slate-700/0 to-slate-700/0"
                      whileHover={{
                        background:
                          "linear-gradient(to bottom right, rgb(51 65 85 / 0.5), rgb(30 41 59 / 0.5))",
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-green-500 to-green-400"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Botón CV (desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownloadCV}
            className="relative items-center flex-shrink-0 hidden gap-2 px-3 py-2 overflow-hidden transition-all duration-300 border cursor-pointer lg:flex group xl:gap-3 xl:px-4 2xl:px-5 rounded-xl bg-gradient-to-br from-slate-700/90 to-slate-800/90 border-slate-600/50 hover:border-green-500/60 whitespace-nowrap hover:shadow-green-500/30 hover:shadow-xl"
          >
            <div className="absolute top-0 right-0 w-16 h-16 transition-all duration-500 rounded-full bg-gradient-to-br from-green-400/0 to-transparent blur-xl group-hover:from-green-400/30"></div>
            <motion.div
              whileHover={{
                y: [0, -6, 0], // sube y baja una vez
                transition: { duration: 0.6, ease: "easeOut" },
              }}
            >
              <IoMdDownload className="relative z-10 w-4 h-4 text-green-400 transition-all duration-300 xl:w-5 xl:h-5 group-hover:text-green-300" />
            </motion.div>
            <span className="relative z-10 text-xs transition-colors duration-300 xl:text-sm 2xl:text-base group-hover:text-green-300">
              Download CV
            </span>
          </motion.div>
        </div>

        {/* Menú móvil desplegable */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden border-t lg:hidden border-slate-700/50"
            >
              <ul className="flex flex-col gap-2 p-4 text-base text-center sm:text-lg">
                {menuItems.map((item, i) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    <motion.a
                      onClick={() => handleScroll(item.id)}
                      whileHover={{ scale: 1.02, x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      className="relative block px-4 py-3 overflow-hidden transition-all duration-300 border cursor-pointer rounded-xl group bg-slate-800/50 border-slate-700/50 hover:border-green-500/60 hover:bg-slate-700/50"
                    >
                      <div className="absolute top-0 right-0 w-16 h-16 transition-all duration-500 rounded-full bg-gradient-to-br from-green-400/0 to-transparent blur-lg group-hover:from-green-400/20"></div>
                      <span className="relative z-10 transition-colors duration-300 group-hover:text-green-400">
                        {item.label}
                      </span>
                    </motion.a>
                  </motion.li>
                ))}

                {/* Botón CV móvil */}
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: menuItems.length * 0.05 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      handleDownloadCV();
                      setIsOpen(false);
                    }}
                    className="relative flex items-center justify-center gap-2 px-5 py-3 mx-auto mt-2 overflow-hidden transition-all duration-300 border cursor-pointer group rounded-xl bg-gradient-to-br from-slate-700/90 to-slate-800/90 border-slate-600/50 hover:border-green-500/60 max-w-fit hover:shadow-green-500/30 hover:shadow-xl"
                  >
                    <div className="absolute top-0 right-0 w-20 h-20 transition-all duration-500 rounded-full bg-gradient-to-br from-green-400/0 to-transparent blur-xl group-hover:from-green-400/30"></div>
                    <IoMdDownload className="relative z-10 w-5 h-5 text-green-400 transition-all duration-300 group-hover:text-green-300 group-hover:animate-bounce" />
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-green-300">
                      Download CV
                    </span>
                  </motion.div>
                </motion.li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};
