import { motion } from "framer-motion";

const SkillCard = ({ tipo, nombre, icono }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="flex flex-col items-center justify-center w-32 h-40 p-4 text-white shadow-lg rounded-2xl bg-zinc-900 hover:bg-zinc-800"
    >
      <div className="mb-2 text-5xl text-blue-400">{icono}</div>
      <h1 className="text-lg font-semibold text-center capitalize">
        {nombre}
      </h1>
    </motion.div>
  );
};

export default SkillCard;
