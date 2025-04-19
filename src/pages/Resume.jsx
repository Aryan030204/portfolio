import React from "react";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Languages from "../components/Languages";

const Resume = () => {
  return (
    <>
      <div className="flex flex-col justify-end w-full relative">
        <div className="relative flex flex-col lg:flex-row p-10 items-center justify-center text-center gap-[3rem] lg:gap-[6rem] lg:h-fit sm:h-full">
          <Education />
          <Projects />
          <div className="flex flex-col gap-5">
            <Skills />
            <Languages />
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
