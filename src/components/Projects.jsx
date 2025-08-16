import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="flex flex-col border-2 border-white bg-white h-[38rem] lg:h-[33rem] w-[24rem] lg:w-[30rem] rounded-b-4xl">
      <div className="flex w-full h-1/4 items-center justify-start p-10">
        <h1 className="text-4xl font-bold text-green-500">
          <span className="underline underline-offset-8">Pro</span>jects
        </h1>
      </div>
      <hr className="text-gray-500" />
      <div className="flex flex-col justify-evenly h-full">
        <div className="flex flex-col w-full p-4 text-start">
          <div className="flex w-full justify-between items-center">
            <h3 className="text-lg font-bold text-green-500 hover:underline">
              <Link to={"https://serenova-eta.vercel.app/"} target="_blank">Serenova - empowering women, protecting futures</Link>
            </h3>
          </div>
          <h4 className="text-sm font-semibold">MERN + PYTHON</h4>
          <p className="text-sm">
            An AI-powered safety companion app designed to support women with
            features like an emergency SOS button (via WhatsApp), real-time
            location sharing, user story sharing, and intelligent story
            filtering (recent, trending, most liked). Currently under
            development with a focus on accessibility and empowerment.
          </p>
        </div>
        <div className="flex flex-col w-full p-4 text-start">
          <div className="flex w-full justify-between items-center">
            <h3 className="text-lg font-bold text-green-500 hover:underline">
              <Link to={"https://chat-app-mern-18de.onrender.com/"} target="_blank">Convosphere - chat with privacy</Link>
            </h3>
          </div>
          <h4 className="text-sm font-semibold">MERN</h4>
          <p className="text-sm">
            A real-time chat application using the MERN stack, Socket.io,
            TailwindCSS, and Daisy UI. Integrated JWT-based authentication,
            Zustand for global state management, and responsive design. Ensured
            seamless user experience with real-time communication, online
            status, robust error handling, and optimized performance across all
            devices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
