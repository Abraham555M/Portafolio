import { motion } from "framer-motion";

const SkillCard = ({ nombre, icono }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1, y: -8 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative flex flex-col items-center justify-center p-5 text-white transition-all duration-500 border shadow-xl group w-36 h-44 rounded-2xl backdrop-blur-lg bg-gradient-to-br from-slate-800/95 to-slate-900/95 border-slate-700/50 hover:border-emerald-500/60 hover:shadow-emerald-500/30 hover:shadow-2xl before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-emerald-500/0 before:to-cyan-500/0 hover:before:from-emerald-500/10 hover:before:to-cyan-500/10 before:transition-all before:duration-500"
    >
      {/* Brillo decorativo superior */}
      <div className="absolute top-0 right-0 w-20 h-20 transition-all duration-500 rounded-full bg-gradient-to-br from-emerald-400/0 to-transparent blur-xl group-hover:from-emerald-400/20"></div>
      
      {/* Brillo decorativo inferior */}
      <div className="absolute bottom-0 left-0 w-20 h-20 transition-all duration-500 rounded-full bg-gradient-to-tr from-cyan-400/0 to-transparent blur-xl group-hover:from-cyan-400/15"></div>

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Icono con fondo circular */}
        <div className="relative mb-4">
          <div className="absolute inset-0 transition-all duration-500 rounded-full bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 blur-md group-hover:from-emerald-500/40 group-hover:to-cyan-500/40"></div>
          <motion.div
            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.5 }}
            className="relative text-6xl transition-all duration-300 drop-shadow-2xl text-emerald-400 group-hover:text-emerald-300 group-hover:scale-110"
          >
            {icono}
          </motion.div>
        </div>

        {/* Nombre */}
        <h1 className="text-base font-bold tracking-wide text-center capitalize transition-colors duration-300 text-slate-200 group-hover:text-white">
          {nombre}
        </h1>

        {/* Línea decorativa */}
        <div className="w-0 h-0.5 mt-2 bg-gradient-to-r from-emerald-500 to-cyan-500 group-hover:w-12 transition-all duration-500 rounded-full"></div>
      </div>
    </motion.div>
  );
};

export default SkillCard;