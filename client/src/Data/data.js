import ReactUseState from "../Pages/ReactUseState";
import ReactUseEffect from "../Pages/ReactUseEffect";
import ReactUseContext from "../Pages/ReactUseContext";
import ReactUseReducer from "../Pages/ReactUseReduce";
import ReactUseRef from "../Pages/ReactUseRef";
import useStateImg from "../assets/useStateImg.png";
import useEffectImg from "../assets/useEffect1.png";
import useRefImg from "../assets/UseRefImg.png";
import useContext from "../assets/UseContext.png";
import Active from "../Pages/Active";
import Notes from "../Pages/Notes";
import Tabs from "../Pages/Tabs";
import Scroll from "../Pages/Scroll";
import { IoMdBook } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { GoPencil } from "react-icons/go";
import { PiTabs } from "react-icons/pi";
import { LuScroll } from "react-icons/lu";
import { IoIosAdd } from "react-icons/io";

import Home from "../Pages/Home";

const navData = [
  { icon: <IoHomeOutline />, name: "Home", navComponent: <Home /> },
  { icon: <GoPencil />, name: "Notes", navComponent: <Notes /> },
  {
    icon: <IoMdBook />,
    name: "UseState",
    navComponent: <ReactUseState />,
    img: useStateImg,
  },
  {
    icon: <IoMdBook />,
    name: "UseEffect",
    navComponent: <ReactUseEffect />,
    img: useEffectImg,
  },
  {
    icon: <IoMdBook />,
    name: "UseContext",
    navComponent: <ReactUseContext />,
    img: useContext,
  },
  {
    icon: <IoMdBook />,
    name: "UseRef",
    navComponent: <ReactUseRef />,
    img: useRefImg,
  },
  { icon: <IoMdBook />, name: "UseReducer", navComponent: <ReactUseReducer /> },
  { icon: <PiTabs />, name: "Tabs", navComponent: <Tabs /> },
  { icon: <LuScroll />, name: "Scroll", navComponent: <Scroll /> },
  { icon: <IoIosAdd />, name: "Active", navComponent: <Active /> },
];

export default navData;
