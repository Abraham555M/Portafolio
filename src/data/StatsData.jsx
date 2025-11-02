import { MdWorkOutline } from "react-icons/md";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaLaptop } from "react-icons/fa";

export const stats = [
  { 
    id: 1, 
    otherlabel: "+1 Year", 
    label: "Experience", 
    icon: <MdWorkOutline className="mb-1 text-2xl" /> 
  },
  { 
    id: 2, 
    otherlabel: "Laravel", 
    label: "Main Language", 
    icon: <FaLaptop className="mb-1 text-2xl" /> 
  },
  { 
    id: 3, 
    otherlabel: "5 Projects", 
    label: "Total Projects", 
    icon: <AiOutlineFundProjectionScreen className="mb-1 text-2xl" /> 
  },
];
