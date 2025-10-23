import { FaUpRightFromSquare } from "react-icons/fa6";

const SocialCard = ({ nombre, mensaje, icono }) => {
  return (
    <div
      className="flex items-center justify-between w-full gap-4 p-4 transition-all duration-300 ease-in-out border shadow-sm rounded-2xl bg-white/70 backdrop-blur-sm hover:shadow-lg hover:scale-105 sm:max-w-md"
    >
      {/* Icono */}
      <div className="flex items-center justify-center p-3 text-black rounded-2xl bg-amber-50">
        <span className="text-3xl">{icono}</span>
      </div>

      {/* Texto */}
      <div className="flex-1 min-w-0">
        <h1 className="text-lg font-extrabold text-gray-800 truncate">
          {nombre}
        </h1>
        <p className="text-sm text-gray-600 truncate">{mensaje}</p>
      </div>

      {/* Flecha */}
      <div className="flex items-center ml-2 text-gray-700 cursor-pointer hover:text-amber-500">
        <a href="https://www.google.com/search?q=icono+linkedin&ie=UTF-8"> <FaUpRightFromSquare className="text-lg" /></a>
      </div>
    </div>
  );
};

export default SocialCard;
