import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="flex flex-col border-2 border-white bg-white h-[38rem] lg:h-[33rem] w-[24rem] lg:w-[30rem] rounded-b-4xl">
      <div className="flex w-full h-1/4 items-center justify-start p-10">
        <h1 className="text-4xl font-bold text-green-500">
          <span className="underline underline-offset-8">Pr</span>ojects
        </h1>
      </div>
      <hr className="text-gray-500" />
      <div className="flex flex-col justify-evenly h-full overflow-y-auto">
        <div className="flex flex-col w-full p-4 text-start">
          <div className="flex w-full justify-between items-center">
            <h3 className="text-lg font-bold text-green-500 hover:underline">
              <Link
                to={"https://github.com/Aryan030204/Cron-Job-Scheduler.git"}
                target="_blank"
              >
                Cron Job Scheduler - Console based job scheduling
              </Link>
            </h3>
          </div>
          <h4 className="text-[10px] my-1 text-white font-semibold bg-black w-fit p-[5px] rounded-xl">
            SPRING BOOT
          </h4>
          <p className="text-sm">
            A backend Spring Boot application that enables scheduling, managing,
            and monitoring jobs via REST APIs and a console-based CLI. It
            supports pausing, resuming, and deleting jobs, with robust failure
            handling using retry logic and exponential backoff. Job execution
            logs are stored in MongoDB for auditing and debugging, ensuring
            reliability and complete visibility of scheduled tasks.
          </p>
        </div>
        <div className="flex flex-col w-full p-4 text-start">
          <div className="flex w-full justify-between items-center">
            <h3 className="text-lg font-bold text-green-500 hover:underline">
              <Link to={"https://serenova-eta.vercel.app/"} target="_blank">
                Serenova - empowering women, protecting futures
              </Link>
            </h3>
          </div>
          <div className="flex gap-2 my-1">
            <h4 className="text-[10px] text-white font-semibold bg-black w-fit p-[5px] rounded-xl">MERN</h4>
            <h4 className="text-[10px] text-white font-semibold bg-black w-fit p-[5px] rounded-xl">AIML</h4>
          </div>
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
              <Link
                to={"https://chat-app-mern-18de.onrender.com/"}
                target="_blank"
              >
                Convosphere - chat with privacy
              </Link>
            </h3>
          </div>
          <h4 className="text-[10px] text-white font-semibold bg-black w-fit p-[5px] rounded-xl">MERN</h4>
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
