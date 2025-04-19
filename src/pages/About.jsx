import React from "react";
import WhoAmI from "../components/WhoAmI";
import PersonalInfo from "../components/PersonalInfo";
import Expertise from "../components/Expertise";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full lg:h-[40rem] relative">

      <div className="relative flex flex-col lg:flex-row p-10 items-center justify-center text-center gap-[3rem] lg:gap-[2rem]">
        <WhoAmI />
        <div className="bg-white w-0.5 h-full mx-5 rotate-90 lg:rotate-0 lg:block"></div>
        <PersonalInfo />
        <div className="bg-white w-0.5 h-full mx-5 rotate-90 lg:rotate-0 lg:block"></div>
        <Expertise />
      </div>
    </div>
  );
};

export default About;
