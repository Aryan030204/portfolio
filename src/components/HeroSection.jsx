import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <div className="flex flex-col justify-end w-full h-[40rem] relative">
      <div className="flex flex-col relative items-start w-fit ml-[3rem] mb-[8rem] h-fit">
        <div className="flex items-center h-[30rem]">
          <h1 className="text-white text-[3.5rem] lg:text-[6rem]">
            Hello, I am <br />{" "}
            <span className="font-bold text-[2rem] text-red-500 lg:text-[7rem]">
              <Typewriter
                words={["ARYAN ARORA"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={150}
                deleteSpeed={150}
                delaySpeed={2000}
              />
            </span>
          </h1>
        </div>
        <div className="flex flex-col">
          <div className="flex w-fit text-white">
            <h1 className="font-extralight text-xl">
              FULL STACK DEVELOPER | DESIGNER
            </h1>
          </div>
          <div className="flex text-white bg-red-400 w-fit p-2 rounded-2xl mt-3 font-bold">
            <Link
              to={
                "https://drive.google.com/file/d/1pibfVk4Ia1cfbWQShSrLLT10RG-k4ZJM/view?usp=sharing"
              } target="_blank"
            >
              Download Resume
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
