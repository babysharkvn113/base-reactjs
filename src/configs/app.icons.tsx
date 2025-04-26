import { FaCube, FaHome, FaList, FaUser } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { FiLogOut, FiMenu, FiPlus } from "react-icons/fi";

const appIcons = {
    logout: <FiLogOut size={16} />,
    menu: <FiMenu className="cursor-pointer" size="20" />,
    home: <FaHome size={18} />,
    cube: <FaCube size={18} />,
    list: <FaList size={18} />,
    user: <FaUser size={18} />,
    group: <FaUserGroup size={18} />,
    plus: <FiPlus size={18} />
}



export default appIcons;