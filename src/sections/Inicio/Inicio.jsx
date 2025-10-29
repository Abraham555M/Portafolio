import { motion, useScroll, useTransform } from "framer-motion";
import { FaReact, FaLaravel, FaAndroid } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import TypedText from "../../components/TypedText";
import { MdWavingHand } from "react-icons/md";
import { stats } from "../../data/StatsData";
import foto from "../../assets/usuario.jpg";
import { IconosInicio } from "../../components/IconosInicio";

export const Inicio = () => {
  const { scrollYProgress } = useScroll();
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
  const imageY = useTransform(scrollYProgress, [0, 0.5], [0, 300]);

  return (
    <section
      id="home"
      className="p-6 text-white border md:p-20"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col-reverse items-center justify-center w-full min-h-screen py-10 md:py-20 lg:flex-row lg:justify-between lg:items-center lg:gap-10">
        
        {/* Contenido izquierdo */}
        <div className="w-full lg:w-[55%] flex flex-col justify-center gap-8 md:gap-12 text-center lg:text-left px-2 sm:px-0">
          {/* Nombre */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <h1 className="text-lg font-bold text-green-500 sm:text-2xl">HELLO I'M</h1>
            <h2 className="mt-5 mb-2 text-2xl font-bold leading-tight break-words sm:text-3xl md:text-4xl lg:text-5xl">
              <span className="block">Abraham Manuel</span>
              <span className="flex flex-wrap items-center justify-center gap-2 mt-2 lg:justify-start">
                <span className="break-words">Hilario Fernández</span>
                <MdWavingHand className="flex-shrink-0 text-2xl text-yellow-500 sm:text-3xl lg:text-4xl" />
              </span>
            </h2>
            <div className="w-full">
              <TypedText text="Junior Full Stack & Android Developer" />
            </div>
          </motion.div>

          {/* Estadísticas */}
          <div className="w-full">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6 text-2xl font-bold text-transparent bg-gradient-to-r from-green-400 to-green-500 bg-clip-text"
            >
              Quick Stats
            </motion.h2>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:justify-start">
              {stats.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.08, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative flex flex-col items-center p-3 sm:p-4 w-[110px] sm:w-[130px] font-medium text-center text-white rounded-2xl
                            bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-lg
                            border border-slate-700/50 shadow-xl
                            hover:border-green-500/60 hover:shadow-green-500/30 hover:shadow-2xl
                            before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br 
                            before:from-green-500/0 before:to-green-500/0 
                            hover:before:from-green-500/10 hover:before:to-green-500/10 
                            before:transition-all before:duration-500"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 transition-all duration-500 rounded-full bg-gradient-to-br from-green-400/0 to-transparent blur-xl group-hover:from-green-400/20"></div>

                  <div className="relative z-10 flex flex-col items-center">
                    <div className="relative mb-2">
                      <div className="absolute inset-0 transition-all duration-500 rounded-full bg-gradient-to-br from-green-500/20 to-green-500/20 blur-sm group-hover:from-green-500/40 group-hover:to-green-500/40"></div>
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                        className="relative text-2xl text-green-400 transition-colors duration-300 sm:text-3xl group-hover:text-green-300 drop-shadow-lg"
                      >
                        {item.icon}
                      </motion.div>
                    </div>

                    <p className="w-full text-base font-bold break-words transition-colors duration-300 sm:text-lg text-slate-100 group-hover:text-white">
                      {item.otherlabel}
                    </p>

                    <p className="w-full text-xs break-words transition-colors duration-300 text-slate-400 group-hover:text-slate-300">
                      {item.label}
                    </p>

                    <div className="w-0 h-0.5 mt-2 bg-gradient-to-r from-green-500 to-green-400 group-hover:w-10 transition-all duration-500 rounded-full"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contacto */}
          <motion.div
            className="flex flex-col w-full gap-2 font-mono text-center lg:text-left"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1 className="text-base font-semibold text-green-500 underline break-words sm:text-lg lg:text-xl xl:text-2xl overflow-wrap-anywhere">
              abraham2004hf@gmail.com
            </h1>
            <p className="text-sm font-semibold break-words sm:text-base lg:text-lg xl:text-xl">
              Lima, Puente Piedra <br /> Peru
            </p>
          </motion.div>
        </div>

        {/* Foto */}
        <motion.div
          className="relative justify-center items-center w-full max-w-[400px] aspect-square mx-auto mb-10 lg:mb-0 hidden sm:flex"
          style={{
            opacity: imageOpacity,
            scale: imageScale,
            y: imageY,
          }}
        >
          <div className="z-10 w-64 h-64 overflow-hidden border-4 border-white rounded-full shadow-lg sm:w-72 sm:h-72 lg:w-80 lg:h-80">
            <img src={foto} alt="Mi foto" className="object-cover w-full h-full" />
          </div>

          <IconosInicio angle={0} duration={12}>
            <FaReact className="text-xl text-black sm:text-2xl" />
          </IconosInicio>
          <IconosInicio angle={120} duration={15}>
            <FaLaravel className="text-xl text-black sm:text-2xl" />
          </IconosInicio>
          <IconosInicio angle={240} duration={18}>
            <FaAndroid className="text-xl text-black sm:text-2xl" />
          </IconosInicio>
          <IconosInicio angle={300} duration={20}>
            <SiMysql className="text-xl text-black sm:text-2xl" />
          </IconosInicio>
        </motion.div>

      </div>
    </section>
  );
};
