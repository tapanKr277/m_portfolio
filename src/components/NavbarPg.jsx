import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar2 = ({ setpg }) => {
  const smoothScroll = (target) => {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className="w-full lg:px-14 px-4 pt-6 pb-2 text-secondary flex justify-between items-center">
      {/* Left Logo + Name */}
      <div
        className="flex items-center gap-3 cursor-pointer hover:text-black transition duration-200"
        onClick={() => setpg(0)}
      >
{/*         <img
          src="/logo.png"
          alt="Logo"
          className="w-10 h-10 rounded-full border border-gray-300 shadow-sm"
        /> */}
        <span className="text-[32px] font-bold hover:underline">
          Madhu Kumari
        </span>
      </div>

      {/* Desktop Nav */}
      {/* Desktop Nav */}
      <div className="text-base lg:flex hidden items-center gap-6">
      <a
          className="cursor-pointer hover:text-black hover:underline transition duration-200"
          onClick={() => smoothScroll("#work")}
        >
          Work
        </a>
        <a
          className="cursor-pointer hover:text-black hover:underline transition duration-200"
          onClick={() => smoothScroll("#education")}
        >
          Education
        </a>
        <a
          className="cursor-pointer hover:text-black hover:underline transition duration-200"
          onClick={() => setpg(1)}
        >
          About
        </a>
    
        <a
          className="cursor-pointer hover:text-black hover:underline transition duration-200"
          onClick={() => smoothScroll("#contact")}
        >
          Contact
        </a>
      </div>

      {/* Mobile Hamburger */}
      <div className="mr-2 lg:hidden">
        <button
          className="lg:hidden flex top-0 right-0 z-20 relative w-10 h-10 text-black focus:outline-none"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <div className="absolute w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
            <span
              className={`absolute h-0.5 w-5 bg-text transform transition duration-300 ease-in-out ${
                navbarOpen
                  ? "rotate-45 delay-200 dark:bg-white"
                  : "-translate-y-1.5 dark:bg-secondary"
              }`}
            ></span>
            <span
              className={`absolute h-0.5 bg-text dark:bg-secondary transform transition-all duration-200 ease-in-out ${
                navbarOpen
                  ? "w-0 opacity-50 dark:bg-white"
                  : "w-5 delay-200 opacity-100"
              }`}
            ></span>
            <span
              className={`absolute h-0.5 w-5 bg-text transform transition duration-300 ease-in-out ${
                navbarOpen
                  ? "-rotate-45 delay-200 dark:bg-white"
                  : "translate-y-1.5 dark:bg-secondary"
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Nav */}
      <nav
        className={`fixed flex top-0 left-0 w-full p-10 z-10 h-screen pt-24 bg-black text-white bg-opacity-100 transform delay-100 transition-all duration-300 ${
          navbarOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-full"
        }`}
      >
        <ul className="w-full flex flex-col items-start">
          <li className="nav-li">
            <Link
              onClick={() => {
                setNavbarOpen(false);
                setpg(0);
              }}
            >
              Home
            </Link>
          </li>
          <li className="nav-li">
            <Link
              onClick={() => {
                setNavbarOpen(false);
                setpg(1);
              }}
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar2;
