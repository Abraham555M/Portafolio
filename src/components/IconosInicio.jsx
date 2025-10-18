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
      className="absolute p-4 transition bg-white rounded-full shadow-lg cursor-pointer hover:scale-125"
      style={{
        transform: "translateX(clamp(90px, 20vw, 140px))",
      }}
    >
      {children}
    </div>
  </motion.div>
);
