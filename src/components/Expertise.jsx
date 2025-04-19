import { Braces, CodeXml, SquareTerminal } from "lucide-react";
import React from "react";

const Expertise = () => {
  return (
    <div className="flex flex-col items-center gap-12 justify-start h-full text-white w-full max-w-1/2 px-0">
      <h1 className="lg:text-3xl text-6xl font-bold whitespace-nowrap md:text-4xl">
        <span className="underline underline-offset-4">M</span>y Expertise
      </h1>

      <div className="flex flex-col md:flex-row gap-5 items-center w-full">
        <CodeXml size={70} className="text-red-500" />
        <div className="flex flex-col gap-2 text-center md:text-left">
          <h2 className="text-xl md:text-2xl">MERN stack Development</h2>
          <p className="text-sm sm:text-base">
            Built full-stack apps using MongoDB, Express, React, and Node.js with clean, scalable architecture.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-5 items-center w-full">
        <Braces size={70} className="text-green-500" />
        <div className="flex flex-col gap-2 text-center md:text-left">
          <h2 className="text-xl md:text-2xl">RESTful API Design</h2>
          <p className="text-sm sm:text-base">
            Built and consumed REST APIs efficiently using Node.js and Express for scalable backend services.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-5 items-center w-full">
        <SquareTerminal size={70} className="text-blue-500" />
        <div className="flex flex-col gap-2 text-center md:text-left">
          <h2 className="text-xl md:text-2xl">Version Control: Git & GitHub</h2>
          <p className="text-sm sm:text-base">
            Experienced in collaborative development, managing codebases with Git, branches, and GitHub pull requests.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
