import { motion } from "framer-motion";

export const IconosInicio = ({ children, angle, duration }) => (
  <motion.div
    initial={{ rotate: angle }}
    animate={{ rotate: angle + 360 }}
    transition={{ duration, repeat: Infinity, ease: "linear" }}
    className="absolute"
    style={{ transformOrigin: "center" }}
  >
    <div
      className="absolute flex items-center justify-center w-16 h-16 transition-all duration-500 border rounded-full shadow-xl cursor-pointer sm:w-20 sm:h-20 border-slate-700/50 bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-lg hover:scale-110 hover:shadow-green-500/30 hover:border-green-500/60"
      style={{
        transform: "translateX(min(20vw, 140px))",
      }}
    >
      {/* Ícono */}
      <motion.div
        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
        transition={{ duration: 0.6 }}
        className="relative text-2xl text-green-400 sm:text-3xl drop-shadow-lg hover:text-green-300"
      >
        {children}
      </motion.div>

      {/* Glow circular interior */}
      <div className="absolute inset-0 transition-all duration-500 rounded-full opacity-0 bg-gradient-to-br from-green-500/10 to-green-500/10 hover:opacity-100 blur-sm"></div>
    </div>
  </motion.div>
);
