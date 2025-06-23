import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative z-1 w-screen h-[32vh] bg-[#0f0f0f] text-white px-8 py-10">
      <div className="max-w-7xl mx-auto h-full flex flex-col lg:flex-row justify-between items-center gap-8">
        {/* Left: Branding */}
        <div className="text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-1 tracking-wide">
            Aryan Arora
          </h2>
          <p className="text-sm md:text-base text-gray-400">
            Portfolio &copy; {new Date().getFullYear()}
          </p>
        </div>

        {/* Center: Navigation */}
        <div className="flex flex-wrap gap-6 text-base md:text-lg justify-center">
          <Link to="/" className="hover:text-blue-400 transition duration-200">
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-blue-400 transition duration-200"
          >
            About
          </Link>
          <Link
            to="/resume"
            className="hover:text-blue-400 transition duration-200"
          >
            Resume
          </Link>
          <Link
            to="/contact"
            className="hover:text-blue-400 transition duration-200"
          >
            Contact
          </Link>
        </div>

        {/* Right: Socials */}
        <div className="flex gap-6 justify-center">
          <Link to={"https://github.com/Aryan030204"} target="_blank">
            <Github size={30} className="hover:text-gray-300 transition" />
          </Link>
          <Link
            to={"https://www.linkedin.com/in/aryan-arora-064082208/"}
            target="_blank"
          >
            <Linkedin size={30} className="hover:text-gray-300 transition" />
          </Link>
          <Link to={"https://www.instagram.com/_aryan_324/"} target="_blank">
            <Instagram size={30} className="hover:text-gray-300 transition" />
          </Link>
          <Link
            to={`https://mail.google.com/mail/?view=cm&fs=1&to=aroraaryan997@gmail.com`}
            target="_blank"
          >
            <Mail size={30} className="hover:text-gray-300 transition" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
