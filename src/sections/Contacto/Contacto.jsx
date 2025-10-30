import { useState } from "react";
import { motion } from "framer-motion";
import { sociales } from "../../data/SocialData";
import { FiSend, FiChevronRight } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import emailjs from "@emailjs/browser"; // Importa EmailJS
import { NotificationModal } from "../../components/NotificationModal"; // Importa el modal

export const Contacto = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("success");
  const [modalMessage, setModalMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        "service_kbdp38t",
        "template_5vz3sgq",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          title: "Nuevo mensaje de portafolio",
        },
        "VX6N_LRDGKGhN4s4W"
      )
      .then(
        () => {
          // 👇 Muestra modal de éxito
          setModalType("success");
          setModalMessage("Thank you for reaching out! I'll get back to you soon.");
          setModalOpen(true);
          setIsSending(false);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Error:", error);
          // 👇 Muestra modal de error
          setModalType("error");
          setModalMessage("Unable to send your message. Please try again or contact me directly.");
          setModalOpen(true);
          setIsSending(false);
        }
      );
  };
  
  // Animaciones
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  const formVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut", delay: 0.3 } },
  };

  return (
    <section id="contacto" className="p-6 text-white md:p-20">
      <div className="max-w-[1200px] mx-auto">
        <motion.h1
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 text-3xl font-bold text-center text-transparent md:text-5xl bg-gradient-to-r from-green-400 to-green-300 bg-clip-text"
        >
          Contact
        </motion.h1>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Redes sociales */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-4"
          >
            {sociales.map((social) => (
              <motion.a
                key={social.id}
                href={social.enlace}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                className="relative flex items-center justify-between p-6 overflow-hidden transition-all duration-300 border shadow-xl group rounded-2xl backdrop-blur-lg bg-gradient-to-br from-slate-800/95 to-slate-900/95 border-slate-700/50 hover:border-green-500/60 hover:shadow-green-500/20 hover:shadow-2xl hover:translate-x-1"
              >
                <div className="relative z-10 flex items-center gap-4">
                  <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 transition-all duration-300 border shadow-lg rounded-2xl bg-gradient-to-br from-slate-700/90 to-slate-800/90 border-slate-600/50 group-hover:border-green-500/60 group-hover:shadow-green-500/30 group-hover:scale-110">
                    <div className="relative z-10 text-3xl text-green-400 transition-colors duration-300 group-hover:text-green-300">
                      {social.icono}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-white">
                      {social.nombre}
                    </h3>
                    <p className="text-sm text-slate-400 group-hover:text-slate-300">
                      {social.mensaje}
                    </p>
                  </div>
                </div>
                <div className="transition-all duration-300 text-slate-400 group-hover:text-green-400 group-hover:translate-x-1">
                  <FiChevronRight className="text-2xl" />
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Formulario */}
          <motion.div
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative p-8 overflow-hidden transition-all duration-300 border shadow-xl rounded-2xl backdrop-blur-lg bg-gradient-to-br from-slate-800/95 to-slate-900/95 border-slate-700/50 hover:border-green-500/60 hover:shadow-green-500/20 hover:shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-12 h-12 border shadow-lg rounded-xl bg-gradient-to-br from-slate-700/90 to-slate-800/90 border-slate-600/50">
                <MdEmail className="text-2xl text-green-400" />
              </div>
              <h2 className="text-2xl font-bold text-transparent bg-gradient-to-r from-green-400 to-green-300 bg-clip-text">
                Send Me a Message
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 text-white border rounded-xl bg-slate-900/50 placeholder:text-slate-500 border-slate-700/50 focus:border-green-500/60 focus:ring-2 focus:ring-green-500/20"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 text-white border rounded-xl bg-slate-900/50 placeholder:text-slate-500 border-slate-700/50 focus:border-green-500/60 focus:ring-2 focus:ring-green-500/20"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-3 text-white border rounded-xl bg-slate-900/50 placeholder:text-slate-500 border-slate-700/50 focus:border-green-500/60 focus:ring-2 focus:ring-green-500/20"
              ></textarea>

              <button
                type="submit"
                disabled={isSending}
                className="relative w-full py-4 font-semibold text-white transition-all duration-300 border shadow-xl group rounded-xl bg-gradient-to-br from-slate-700/90 to-slate-800/90 border-slate-600/50 hover:border-green-500/60 hover:shadow-green-500/30 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-green-300">
                  {isSending ? "Sending..." : "Send"}
                  {!isSending && <FiSend className="text-xl group-hover:translate-x-1" />}
                </span>
              </button>

              {status && (
                <p className="mt-4 text-sm text-center text-green-400">{status}</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>

      <NotificationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        type={modalType}
        message={modalMessage}
      />
    </section>
  );
};
