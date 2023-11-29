import ReactUseState from "../Pages/ReactUseState";
import ReactUseEffect from "../Pages/ReactUseEffect";
import ReactUseContext from "../Pages/ReactUseContext";
import ReactUseReducer from "../Pages/ReactUseReduce";
import ReactUseRef from "../Pages/ReactUseRef";
import useStateImg from "../assets/useStateImg.png";
import useEffectImg from "../assets/useEffect1.png";
import { IoMdBook } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";

import Home from "../Pages/Home";

const navData = [
  { icon: <IoHomeOutline />, name: "Home", navComponent: <Home /> },
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
  { icon: <IoMdBook />, name: "UseContext", navComponent: <ReactUseContext /> },
  { icon: <IoMdBook />, name: "UseRef", navComponent: <ReactUseRef /> },
  { icon: <IoMdBook />, name: "UseReducer", navComponent: <ReactUseReducer /> },
];

export default navData;
