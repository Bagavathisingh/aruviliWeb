import { MotionConfig, easeInOut, motion, scale } from "framer-motion";
import TextType from "../UiComponents/textType.jsx"
import SplitText from "../UiComponents/SplitText.jsx";
import logo from "../assets/WhatsApp Image 2025-09-04 at 18.42.11_10a73bfa.jpg";
export default function Content() {
  return (
    <>
      <div
        initial={{
          opacity: 0,
          height: "25%",
        }}
        animate={{
          opacity: 1,
          height: "100%",
        }}
        transition={{
          duration: "2",
          ease: "easeInOut",
        }}
        exit={{
          opacity: 0,
          height: "25%",
        }}
        className=" text-black h-fit flex justify-end p-5 "
      >
        <div className="h-20 text-black p-5 font-serif font-bold w-100">
          <TextType
            text={["“We design and develop apps that make your business grow faster.“ "]}
            typingSpeed={50}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            textColors="black"
          />
        </div>
      </div>
      <Box1 />
    </>
  );
}

function Box1() {
  return (
    <>
      <motion.div
        initial={{
          scale: 0,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 1,
          ease: easeInOut,
        }}
        exit={{
          scale: 0,
          opacity: 0,
        }}
        className="shadow-xl z-1 cursor-pointer border-black h-60 w-60  absolute ml-40 -rotate-10 rounded-2xl bg-[#c0b1fbdd] backdrop-blur-md text-black font-serif anihover"
      >
        <div className="h-full w-full flex flex-col justify-center items-center p-5">
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            explicabo similique harum repellat error. Cumque eos vel eius unde
            amet.
          </span>
        </div>
      </motion.div>
      <Box2 />
    </>
  );
}

export function Box2() {
  return (
    <>
      <motion.div
        initial={{
          scale: 0,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 1,
          ease: easeInOut,
        }}
        exit={{
          scale: 0,
          opacity: 0,
        }}
        className="shadow-xl z-1 cursor-pointer absolute ml-140 mt-55 rotate-3 bg-[#CDE5CD] border-black h-80 w-70 rounded-2xl"
      >
        <div className="h-full w-full flex flex-col p-5">
          <div className="h-full w-full flex justify-center items-center">
            <img className="h-30 rounded-2xl" src={logo} alt="logo" />
          </div>
          <div className="flex justify-center items-center text-black h-50 w-full">
            <span className="text-3xl font-serif">Aruvili</span>
          </div>
          <div className="h-30 flex justify-center items-center">
            <button
              className="shadow-lg font-serif px-10 h-10 rounded-full bg-green-100 text-black
                    hover:scale-103 ttransition duration-300 ease-in-out hovers"
            >
              {" "}
              Learn More{" "}
            </button>
          </div>
        </div>
      </motion.div>
      <Box3 />
    </>
  );
}

function Box3() {
  return (
    <>
      <motion.div
        initial={{
          scale: 0,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 1,
          ease: easeInOut,
        }}
        exit={{
          scale: 0,
          opacity: 0,
        }}
        className="shadow-2xl z-1 cursor-pointer border-black h-60 w-60 absolute right-0 bottom-2 mr-15 rotate-12 rounded-2xl bg-[#efc0f0d4] backdrop-blur-md text-black font-serif anihover"
      >
        <div className="h-full w-full flex flex-col justify-center items-center p-5">
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            explicabo similique harum repellat error. Cumque eos vel eius unde
            amet.
          </span>
        </div>
      </motion.div>
      <Header/>
    </>
  );
}

function Header(){
    return(
        <>
        <div className="border-black h-80 mt-60 w-130 flex flex-col p-5 justify-between">
          <div className="h-20 border-black">
            <SplitText
              text="Smart Websites And Apps For Your Business"
              className="text-2xl font-semibold text-center"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              classNames="text-black text-4xl font-bold"
            />
          </div>
        </div>
        </>
    );
}
