import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Menubar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="md:hidden z-50">
        <RiMenu3Line
          className="text-white text-3xl cursor-pointer"
          onClick={() => {
            setIsOpen(true);
          }}
        />
      </div>

      {isOpen && <div className="fixed inset-0 bg-black/50 z-40"></div>}

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gradient-to-tr from-sky-900  to-[#111827] text-white shadow-lg transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <RiCloseLine
            onClick={() => {
              setIsOpen(false);
            }}
            className="text-3xl cursor-pointer"
          />
        </div>

        <ul className="flex flex-col gap-6 p-6 text-lg">
          <li>
            <a
              href="#Home"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#About"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#Services"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Our Services
            </a>
          </li>
          <li>
            <a
              href="#Contact"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menubar;
