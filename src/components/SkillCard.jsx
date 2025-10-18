import { useState } from "react";
import { FaUpRightFromSquare } from "react-icons/fa6";

const SkillCard = ({ tipo, nombre, icono }) => {

  return (
     <div className="mt-10 border">
        <div className="flex flex-col items-center justify-center h-40 p-5 text-2xl font-bold text-white bg-black w-25 rounded-2xl ">
            { icono }
            <h1> { nombre} </h1>
        </div>        
      </div>      
  )};

export default SkillCard;
