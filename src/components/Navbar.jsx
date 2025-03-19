import React, { useState, useEffect } from "react";
import Logo from "../assets/Logo.svg";

function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = hidden ? "hidden" : "auto";
  }, [hidden]);

  const navbarStyles = isScrolled || isHovered
    ? "bg-white text-black border-b border-gray-300"
    : "bg-[#020A19] text-white border-b border-gray-700"; 

  return (
    <div
      className={`fixed w-full overflow-x-hidden z-50 transition-all duration-300 ${navbarStyles}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="tailwind-container mx-auto flex justify-between items-center py-3">
        {/* Logo */}
        <div className="w-28">
          <img
            src={Logo}
            className={`w-full h-full object-fill transition-all duration-300 ${
              isScrolled || isHovered ? "" : "invert"
            }`}
            alt="Logo"
          />
        </div>

        {/* Desktop Button */}
        <div className="hidden lg:block">
          <button
            className={`w-fit px-8 py-3 font-semibold rounded-sm transition-all duration-300 ${
              isScrolled || isHovered
                ? "bg-[#020A19] text-white"
                : "bg-[#dd0735] text-white"
            }`}
          >
            14 DAYS FREE TRIAL
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="block lg:hidden">
          <div onClick={() => setHidden(!hidden)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 16 16"
              className={`transition-all duration-300 ${
                isScrolled || isHovered ? "text-black" : "text-white"
              }`}
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"
              />
            </svg>
          </div>

          {/* Mobile Menu */}
          {hidden && (
            <div className="fixed top-0 right-0 w-full md:max-w-[50%] h-screen bg-white z-50 shadow-lg">
              {/* Close Button */}
              <div
                onClick={() => setHidden(!hidden)}
                className="py-6 flex justify-end pr-10  border-b border-gray-500 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="black"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                </svg>
              </div>

              {/* Menu Content */}
              <div className="flex flex-col items-center p-6 gap-5">
                <button className="border w-full bg-[#dd0735] px-5 py-3 rounded-xl text-white">
                  14 DAYS FREE TRIAL
                </button>
                <button className="text-black w-full">Login</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
