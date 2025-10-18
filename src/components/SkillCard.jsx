import { motion } from "framer-motion";

const SkillCard = ({ tipo, nombre, icono }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="relative flex flex-col items-center justify-center p-4 text-white transition-all duration-300 border shadow-lg w-36 h-44 rounded-2xl backdrop-blur-md bg-white/10 border-white/20 hover:bg-white/20 hover:shadow-xl"
    >
      {/* efecto de brillo sutil */}
      <div className="absolute inset-0 pointer-events-none rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-20" />

      <div className="mb-3 text-5xl text-blue-400 drop-shadow-lg">{icono}</div>
      <h1 className="text-lg font-semibold tracking-wide text-center capitalize">
        {nombre}
      </h1>
    </motion.div>
  );
};

export default SkillCard;
