import React from "react";
import { sociales } from "../../data/SocialData";
import SocialCard from "../../components/SocialCard";

export const Contacto = () => {
  return (
    <section
      id="contacto"
      className="px-6 py-16 text-white md:px-20 lg:py-24"
    >
      <div className="max-w-[1300px] mx-auto space-y-14 border">
        {/* 🧭 Título */}
        <div className="space-y-3 text-center">
          <h1 className="text-3xl font-bold md:text-5xl">Contacto</h1>
          <p className="text-gray-400 text-sm md:text-base max-w-[600px] mx-auto">
            Conecta conmigo a través de mis redes o envíame un mensaje directo.
          </p>
        </div>

        {/* 🔄 Contenedor Principal */}
        <div className="flex flex-col gap-10 border lg:flex-row lg:justify-between">
          {/* 📌 Columna Izquierda - Redes Sociales */}
          <div className="flex flex-col w-full gap-6 border lg:w-1/2">
            {sociales.map((item) => (
              <SocialCard
                key={item.id}
                nombre={item.nombre}
                mensaje={item.mensaje}
                icono={item.icono}
              />
            ))}
          </div>

          {/* 📨 Columna Derecha - Formulario */}
          <div className="flex flex-col w-full lg:w-1/2 p-8 text-white transition-transform duration-300 transform rounded-2xl
                          bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:scale-[1.02] hover:-translate-y-1">
            <h2 className="mb-6 text-2xl font-bold text-center lg:text-left">
              Send Me a Message
            </h2>

            <form className="flex flex-col gap-5">
              {/* Nombre */}
              <div className="flex flex-col">
                <input
                  type="text"
                  id="nombre"
                  placeholder="Your Name"
                  className="p-2 text-sm text-white placeholder-gray-400 border rounded-lg bg-black/30 border-white/20 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="p-2 text-sm text-white placeholder-gray-400 border rounded-lg bg-black/30 border-white/20 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
                />
              </div>

              {/* Mensaje */}
              <div className="flex flex-col">
                <textarea
                  id="mensaje"
                  rows="4"
                  placeholder="Your Message"
                  className="p-2 text-sm text-white placeholder-gray-400 border rounded-lg resize-none bg-black/30 border-white/20 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
                ></textarea>
              </div>

              {/* Botón */}
              <button
                type="submit"
                className="px-4 py-2 mt-2 font-semibold text-black transition-all rounded-lg bg-amber-400 hover:bg-amber-500 hover:scale-105 focus:ring-2 focus:ring-amber-300"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
