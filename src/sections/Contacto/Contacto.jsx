import { useState } from "react";
import { motion } from "framer-motion";
import { sociales } from "../../data/SocialData";
import { FiSend, FiChevronRight } from "react-icons/fi";
import { MdEmail } from "react-icons/md";

export const Contacto = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log("Form submitted:", formData);
  };

  // Variantes de animación
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section
      id="contacto"
      className="p-6 text-white md:p-20"
    >
      <div className="max-w-[1200px] mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='mb-12 text-3xl font-bold text-center text-transparent md:text-5xl bg-gradient-to-r from-green-400 to-green-300 bg-clip-text'
        >
          Contact
        </motion.h1>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Columna izquierda - Redes Sociales */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {sociales.map((social) => (
              <motion.a
                key={social.id}
                href={social.enlace}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                className="relative flex items-center justify-between p-6 overflow-hidden transition-all duration-500 border shadow-xl group rounded-2xl backdrop-blur-lg bg-gradient-to-br from-slate-800/95 to-slate-900/95 border-slate-700/50 hover:border-green-500/60 hover:shadow-green-500/20 hover:shadow-2xl before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-green-500/0 before:to-green-500/0 hover:before:from-green-500/10 hover:before:to-green-500/10 before:transition-all before:duration-500"
              >
                {/* Brillo decorativo */}
                <div className="absolute top-0 right-0 w-32 h-32 transition-all duration-500 rounded-full bg-gradient-to-br from-green-400/0 to-transparent blur-2xl group-hover:from-green-400/20"></div>

                <div className="relative z-10 flex items-center gap-4">
                  {/* Icono */}
                  <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 transition-all duration-300 border shadow-lg rounded-2xl bg-gradient-to-br from-slate-700/90 to-slate-800/90 border-slate-600/50 group-hover:border-green-500/60 group-hover:shadow-green-500/30">
                    <div className="absolute inset-0 transition-all duration-500 rounded-2xl bg-gradient-to-br from-green-500/0 to-green-500/0 group-hover:from-green-500/20 group-hover:to-green-500/20"></div>
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="relative z-10 text-3xl text-green-400 transition-colors duration-300 group-hover:text-green-300"
                    >
                      {social.icono}
                    </motion.div>
                  </div>

                  {/* Texto */}
                  <div>
                    <h3 className="text-xl font-bold transition-colors duration-300 text-slate-100 group-hover:text-white">
                      {social.nombre}
                    </h3>
                    <p className="text-sm transition-colors duration-300 text-slate-400 group-hover:text-slate-300">
                      {social.mensaje}
                    </p>
                  </div>
                </div>

                {/* Flecha */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className="relative z-10 transition-all duration-300 text-slate-400 group-hover:text-green-400"
                >
                  <FiChevronRight className="text-2xl" />
                </motion.div>

                {/* Línea decorativa inferior */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-green-400 group-hover:w-full transition-all duration-500 rounded-full z-10"></div>
              </motion.a>
            ))}
          </motion.div>

          {/* Columna derecha - Formulario */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative p-8 overflow-hidden transition-all duration-500 border shadow-xl rounded-2xl backdrop-blur-lg bg-gradient-to-br from-slate-800/95 to-slate-900/95 border-slate-700/50 hover:border-green-500/60 hover:shadow-green-500/20 hover:shadow-2xl"
          >
            {/* Brillo decorativo */}
            <div className="absolute top-0 right-0 w-40 h-40 transition-all duration-500 rounded-full bg-gradient-to-br from-green-400/10 to-transparent blur-3xl"></div>

            <div className="relative z-10">
              {/* Título del formulario */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-12 h-12 transition-all duration-300 border shadow-lg rounded-xl bg-gradient-to-br from-slate-700/90 to-slate-800/90 border-slate-600/50">
                  <MdEmail className="text-2xl text-green-400" />
                </div>
                <h2 className="text-2xl font-bold text-transparent bg-gradient-to-r from-green-400 to-green-300 bg-clip-text">
                  Send Me a Message
                </h2>
              </div>

              {/* Formulario */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Nombre */}
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-white transition-all duration-300 border rounded-xl bg-slate-900/50 backdrop-blur-sm border-slate-700/50 focus:border-green-500/60 focus:outline-none focus:ring-2 focus:ring-green-500/20 placeholder:text-slate-500"
                  />
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-white transition-all duration-300 border rounded-xl bg-slate-900/50 backdrop-blur-sm border-slate-700/50 focus:border-green-500/60 focus:outline-none focus:ring-2 focus:ring-green-500/20 placeholder:text-slate-500"
                  />
                </div>

                {/* Mensaje */}
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 text-white transition-all duration-300 border resize-none rounded-xl bg-slate-900/50 backdrop-blur-sm border-slate-700/50 focus:border-green-500/60 focus:outline-none focus:ring-2 focus:ring-green-500/20 placeholder:text-slate-500"
                  ></textarea>
                </div>

                {/* Botón de envío */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative w-full py-4 overflow-hidden font-semibold text-white transition-all duration-500 border shadow-xl group rounded-xl bg-gradient-to-br from-slate-700/90 to-slate-800/90 border-slate-600/50 hover:border-green-500/60 hover:shadow-green-500/30 hover:shadow-2xl before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-br before:from-green-500/0 before:to-green-500/0 hover:before:from-green-500/20 hover:before:to-green-500/20 before:transition-all before:duration-500"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2 transition-colors duration-300 group-hover:text-green-300">
                    Send
                    <FiSend className="text-xl transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};