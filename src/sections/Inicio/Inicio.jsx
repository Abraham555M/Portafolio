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
      className="min-h-screen flex flex-col-reverse items-center justify-center max-w-[1200px] mx-auto py-20 text-white lg:flex-row lg:justify-between lg:items-center lg:gap-10 px-6"
    >
      <div className="w-full lg:w-[55%] flex flex-col justify-center gap-10 text-center lg:text-left">
        {/* Nombre */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-lg font-bold sm:text-2xl">HELLO I'M</h1>
          <h2 className="mt-5 mb-2 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            <span>Abraham Manuel</span>
            <br />
            <span className="flex flex-wrap items-center justify-center gap-2 mt-2 lg:justify-start">
              Hilario Fernández
              <MdWavingHand className="text-3xl text-yellow-500 sm:text-4xl" />
            </span>
          </h2>
          <TypedText text="Junior Full Stack & Android Developer" />
        </motion.div>

        {/* Estadísticas */}
        <div>
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-5 text-lg font-bold"
          >
            Quick Stats
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-3 sm:justify-start">
            {stats.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                className="flex flex-col items-center p-3 w-[120px] font-medium text-center text-white transition-transform duration-300 bg-gray-600 rounded-2xl hover:scale-110"
              >
                <div className="mb-1 text-2xl">{item.icon}</div>
                <p className="text-sm font-semibold">{item.otherlabel}</p>
                <p className="text-xs">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contacto */}
        <motion.div
          className="flex flex-col gap-2 font-mono text-center lg:text-left"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1 className="text-lg font-semibold text-green-500 underline break-all sm:text-xl lg:text-2xl">
            abraham2004hf@gmail.com
          </h1>
          <p className="text-base font-semibold sm:text-lg lg:text-xl">
            Lima, Puente Piedra <br /> Peru
          </p>
        </motion.div>
      </div>

      {/* Foto */}
      <motion.div
        className="relative flex justify-center items-center w-full max-w-[400px] aspect-square mx-auto mb-10 lg:mb-0"
        style={{
          opacity: imageOpacity,
          scale: imageScale,
          y: imageY,
        }}
      >
        {/* Imagen */}
        <div className="z-10 w-64 h-64 overflow-hidden border-4 border-white rounded-full shadow-lg sm:w-72 sm:h-72 lg:w-80 lg:h-80">
          <img src={foto} alt="Mi foto" className="object-cover w-full h-full" />
        </div>

        {/* Íconos orbitantes */}
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
    </section>
  );
};

/* 🛰️ Componente para iconos orbitantes */
