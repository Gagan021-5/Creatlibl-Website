import React from "react";
import mainlogo from "../assets/creatibl.png";
import Menubar from "./Menubar";

const Navbar = () => {
  return (
    <header className="h-20 w-full flex items-center justify-between px-4   shadow-md fixed top-0 left-0 z-50">
      <div className="flex items-center cursor-pointer" aria-label="Logo and Brand">
        <img
          src={mainlogo}
          alt="Creatibl Logo"
          className="h-12 object-contain"
        />
        <h1 className="ml-2 text-white/90 from- font-semibold text-2xl">
          Creatibl
        </h1>
      </div>

      <nav className="hidden md:flex items-center" aria-label="Main navigation">
        <ul className="flex gap-8 text-gray-300 text-lg font-medium">
          <li>
            <a
              href="#Home"
              className="hover:text-white transition-colors duration-200"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#About"
              className="hover:text-white transition-colors duration-200"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#Services"
              className="hover:text-white transition-colors duration-200"
            >
              Our Services
            </a>
          </li>
          <li>
            <a
              href="#Contact"
              className="hover:text-white transition-colors duration-200"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </nav>

     
      <div className="md:hidden" aria-label="Mobile menu">
        <Menubar />
      </div>
    </header>
  );
};

export default Navbar;
