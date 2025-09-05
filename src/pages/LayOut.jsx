import work from "../assets/NavIcon/Work.png";
import home from "../assets/NavIcon/Home.png";
import about from "../assets/NavIcon/About.png";
import service from "../assets/NavIcon/service.png";
import logo from "../assets/WhatsApp Image 2025-09-04 at 18.42.11_10a73bfa.jpg";
import "../App.css";
import { MotionConfig,easeInOut,motion } from "framer-motion";
import { Outlet } from "react-router-dom";

function IndexApp() {
  return (
    <>
      <div className="w-screen h-screen overflow-hidden select-none">
        <div className="flex flex-row-reverse items-center gap-10 p-5 h-full text-white">

          <motion.nav
          initial={{
            x:100,
            opacity:0
          }}
          animate={{
            x:0,
            opacity:1
          }}
          exit={{
            x:100,
            opacity:0
          }}
          transition={{
            duration:1,
            ease:easeInOut
          }}
           className="w-15 h-100 flex overflow-hidden flex-col p-2.5 rounded-full backdrop-blur-xl back">
            <div className="w-10 h-20 -ml-0.5 bg-center bg-cover">
              <img className="border rounded-full p-1  shadow-green-500 shadow-lg " src={logo} />
            </div>
            <ul className="flex flex-col cursor-pointer items-center gap-3 p-5 w-full nav-hover">
              <li className="px-3 nav-lis py-2 transform duration-300 w-14 flex justify-center items-center ease-in-out">
                <div className="lis h-12 flex justify-center items-center">
                  <img src={home} alt="Home"/>
                </div>
              </li>
              <li className="px-3 nav-lis py-2 transform duration-300 w-13 flex justify-center items-center ease-in-out">
                <div className="lis h-12 flex justify-center items-center">
                  <img src={about} alt="Home" className="invert"/>
                </div>
              </li>
              <li className="px-3 nav-lis py-2 transform duration-300 w-14 ease-in-out">
                <div className="lis h-12 flex justify-center items-center">
                  <img src={service} alt="Home" className="invert"/>
                </div>
              </li>
              <li className="px-3 nav-lis py-2 transform duration-300 w-14 ease-in-out">
                <div className="lis h-12 flex justify-center items-center">
                  <img src={work} alt="Home" className="invert"/>
                </div>
              </li>
            </ul>
          </motion.nav>

          <main className="w-full">
              <Outlet/>
          </main>
        </div>
      </div>
    </>
  );
}

export default IndexApp;
