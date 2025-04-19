import React, { useState } from "react";
import { Link } from "react-router-dom";
import dp from "../assets/dp.png";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="relative z-50 bg-black text-white font-thin text-2xl w-full mb-[3rem]">
      {/* Desktop Navbar */}
      <div className="hidden md:flex justify-evenly items-center h-[8rem] w-full">
        <Link
          className="transition delay-100 duration-300 ease-in-out hover:-translate-y-1"
          to={"/"}
        >
          HOME
        </Link>
        <Link
          className="transition delay-100 duration-300 ease-in-out hover:-translate-y-1"
          to={"/about"}
        >
          ABOUT
        </Link>
        <img
          src={dp}
          alt="dp_avatar"
          className="w-[10rem] rounded-full border-[5px] border-white top-6 relative transition delay-100 duration-300 hover:shadow-lg hover:-translate-y-1 shadow-white z-9"
        />
        <Link
          className="transition delay-100 duration-300 ease-in-out hover:-translate-y-1"
          to={"/resume"}
        >
          RESUME
        </Link>
        <Link
          className="transition delay-100 duration-300 ease-in-out hover:-translate-y-1"
          to={"/contact"}
        >
          CONTACT
        </Link>
      </div>

      {/* Mobile Navbar */}
      <div className="flex md:hidden justify-between items-center px-6 py-4 relative">
        {/* Avatar */}
        <img
          src={dp}
          alt="dp_avatar"
          className="w-14 rounded-full border-2 border-white transition delay-100 duration-300 hover:shadow-lg hover:-translate-y-1 shadow-white"
        />

        {/* Menu Icon */}
        <button onClick={toggleMenu} className="z-10 cursor-pointer">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Dropdown Menu (Mobile) */}
      {menuOpen && (
        <div className="md:hidden absolute top-20 bg-black border-b-1 cursor-pointer border-white flex flex-col items-center w-full p-4 space-y-3 text-xl font-thin z-40 transition-all duration-300">
          <Link onClick={toggleMenu} to={"/"}>
            HOME
          </Link>
          <Link onClick={toggleMenu} to={"/about"}>
            ABOUT
          </Link>
          <Link onClick={toggleMenu} to={"/resume"}>
            RESUME
          </Link>
          <Link onClick={toggleMenu} to={"/contact"}>
            CONTACT
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
