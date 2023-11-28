import ReactUseState from "../Pages/ReactUseState";
import ReactUseEffect from "../Pages/ReactuseEffect";
import ReactUseContext from "../Pages/ReactUseContext";
import ReactUseReducer from "../Pages/ReactUseReduce";
import ReactUseRef from "../Pages/ReactUseRef";
import useStateImg from "../assets/useStateImg.png";
import useEffectImg from "../assets/useEffect1.png";
import { FaHome } from "react-icons/fa";
import { GiHook } from "react-icons/gi";
import Home from "../Pages/Home";

const navData = [
  { icon: <FaHome />, name: "Home", navComponent: <Home /> },
  {
    icon: <GiHook />,
    name: "UseState",
    navComponent: <ReactUseState />,
    img: useStateImg,
  },
  {
    icon: <GiHook />,
    name: "UseEffect",
    navComponent: <ReactUseEffect />,
    img: useEffectImg,
  },
  { icon: <GiHook />, name: "UseContext", navComponent: <ReactUseContext /> },
  { icon: <GiHook />, name: "UseRef", navComponent: <ReactUseRef /> },
  { icon: <GiHook />, name: "UseReducer", navComponent: <ReactUseReducer /> },
];

export default navData;
