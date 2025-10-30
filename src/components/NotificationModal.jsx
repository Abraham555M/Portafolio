import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiCheckCircle, FiAlertCircle } from "react-icons/fi";

export const NotificationModal = ({ isOpen, onClose, type, message }) => {
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: -20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { type: "spring", duration: 0.5, bounce: 0.3 }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8, 
      y: 20,
      transition: { duration: 0.2 }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: { delay: 0.2, type: "spring", stiffness: 200 }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md p-8 overflow-hidden border shadow-2xl rounded-2xl bg-gradient-to-br from-slate-800/95 to-slate-900/95 border-slate-700/50"
          >
            {/* Botón cerrar */}
            <button
              onClick={onClose}
              className="absolute p-2 transition-all duration-300 border rounded-lg top-4 right-4 text-slate-400 hover:text-white bg-slate-800/50 border-slate-700/50 hover:border-slate-600 hover:bg-slate-700/50"
            >
              <FiX className="text-xl" />
            </button>

            {/* Contenido */}
            <div className="flex flex-col items-center text-center">
              <motion.div
                variants={iconVariants}
                initial="hidden"
                animate="visible"
                className={`flex items-center justify-center w-20 h-20 mb-6 rounded-full ${
                  type === "success"
                    ? "bg-green-500/20 border-2 border-green-500/50"
                    : "bg-red-500/20 border-2 border-red-500/50"
                }`}
              >
                {type === "success" ? (
                  <FiCheckCircle className="text-5xl text-green-400" />
                ) : (
                  <FiAlertCircle className="text-5xl text-red-400" />
                )}
              </motion.div>

              <h3 className="mb-3 text-2xl font-bold text-white">
                {type === "success" ? "Message Sent!" : "Oops! Something went wrong"}
              </h3>

              <p className="mb-6 text-slate-300">
                {message}
              </p>

              <button
                onClick={onClose}
                className={`w-full py-3 font-semibold text-white transition-all duration-300 border shadow-xl rounded-xl hover:scale-[1.02] active:scale-[0.98] ${
                  type === "success"
                    ? "bg-gradient-to-br from-green-600/90 to-green-700/90 border-green-500/50 hover:border-green-400/60 hover:shadow-green-500/30"
                    : "bg-gradient-to-br from-slate-700/90 to-slate-800/90 border-slate-600/50 hover:border-slate-500/60"
                }`}
              >
                Close
              </button>
            </div>

            {/* Efecto de brillo */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500/50 to-transparent animate-pulse" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};