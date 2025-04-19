import React from "react";

const Languages = () => {
  return (
    <div className="flex flex-col border-2 bg-white h-[11.6rem] w-[24rem] lg:w-[30rem] rounded-b-4xl">
      <div className="flex w-full h-1/4 items-center justify-start p-10">
        <h1 className="text-4xl font-bold text-blue-500">
          <span className="underline underline-offset-8">Lan</span>guages
        </h1>
      </div>
      <hr className="text-gray-500" />
      <div className="flex flex-col justify-evenly items-start h-full">
        <ol className="px-12 text-lg text-start list-disc font-semibold">
            <li>Hindi</li>
            <li>English</li>
        </ol>
      </div>
    </div>
  );
};

export default Languages;
