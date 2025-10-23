import React from "react";
import { sociales } from "../../data/SocialData";
import SocialCard from "../../components/SocialCard";

export const Contacto = () => {
  return (
    <section id="contacto" className="p-6 text-white md:p-20">
      <div className="max-w-[1200px] mx-auto space-y-10">
        {/* Título */}
        <div className="py-3 space-y-10 text-center">
          <h1 className="text-3xl font-bold md:text-5xl">Contact</h1>
        </div>

        <div className="flex flex-col gap-10 lg:flex-row">
          {/* 📌 Columna Izquierda - Redes Sociales */}
          <div className="flex flex-col w-full gap-6">
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
          <div className="flex flex-col w-full p-6 border rounded-2xl bg-white/10 backdrop-blur-sm">
            <h2 className="mb-4 text-2xl font-bold text-center lg:text-left">
              ¡Envíame un mensaje! 📩
            </h2>
            <form className="flex flex-col gap-4">
              {/* Nombre */}
              <div className="flex flex-col">
                <label htmlFor="nombre" className="mb-1 text-sm font-semibold">
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  placeholder="Tu nombre"
                  className="p-2 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label htmlFor="email" className="mb-1 text-sm font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="tucorreo@mail.com"
                  className="p-2 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>

              {/* Mensaje */}
              <div className="flex flex-col">
                <label htmlFor="mensaje" className="mb-1 text-sm font-semibold">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  rows="4"
                  placeholder="Escribe tu mensaje..."
                  className="p-2 text-black rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-amber-400"
                ></textarea>
              </div>

              {/* Botón */}
              <button
                type="submit"
                className="px-4 py-2 mt-2 font-semibold text-black transition-all rounded-lg bg-amber-400 hover:bg-amber-500"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
