import React from "react";

const Education = () => {
  return (
    <div className="flex flex-col border-2 border-white bg-white h-[36rem] w-[27rem] lg:w-[30rem] rounded-b-4xl">
      <div className="flex w-full h-1/4 items-center justify-start p-10">
        <h1 className="text-4xl font-bold text-red-500">
          <span className="underline underline-offset-8">Edu</span>cation
        </h1>
      </div>
      <hr className="text-gray-500" />
      <div className="flex flex-col justify-evenly h-full">
        <div className="flex flex-col w-full p-4 text-start">
          <div className="flex w-full justify-between items-center">
            <h3 className="text-lg font-semibold text-red-500">
              Btech (Computer science Engg.)
            </h3>
            <h2 className="text-lg font-semibold">2022-Present</h2>
          </div>
          <h4 className="text-sm font-semibold">
            The Northcap university, Gurugram
          </h4>
          <p className="text-sm">
            Focused on full stack web development with practical experience in
            multiple projects combining frontend, backend, and APIs for complete
            end-to-end functionality. Built a solid foundation in Data
            Structures, Algorithms, and Database Management.
          </p>
        </div>
        <div className="flex flex-col w-full p-4 text-start">
          <div className="flex w-full justify-between items-center">
            <h3 className="text-lg font-semibold text-red-500">
              High School (Science stream)
            </h3>
            <h2 className="text-lg font-semibold">2020-2022</h2>
          </div>
          <h4 className="text-sm font-semibold">
            Vidya mandir public school, Faridabad
          </h4>
          <p className="text-sm">
            Built a strong academic foundation in Physics, Chemistry, and
            Mathematics. Developed analytical and problem-solving skills through
            practical lab work and theoretical learning. This laid the
            groundwork for pursuing a technical degree in Computer Science and
            Engineering.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
