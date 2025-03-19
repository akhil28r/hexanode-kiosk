import React, { useState, useEffect } from "react";
import Logo from "../assets/Logo.svg";

function Navbar() {
  const [hidden, setHidden] = useState(false);

  // Prevent body scrolling when the mobile menu is open
  useEffect(() => {
    if (hidden) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [hidden]);

  return (
    <div className="bg-[#020A19] text-white fixed w-full overflow-x-hidden z-50">

      <div className="tailwind-container mx-auto flex justify-between items-center py-3 z-50">
        {/* Logo */}
        <div className="w-28">
          <img src={Logo} className="w-full h-full object-fill filter invert" />
        </div>

        {/* Desktop Button */}
        <div className="hidden xl:block">
          <button className="w-fit bg-[#dd0735] px-8 py-3 text-white font-semibold rounded-sm">
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
            <div className="fixed top-0 right-0  w-full md:max-w-[50%] h-screen bg-white z-50 shadow-lg">
              {/* Close Button */}
              <div
                onClick={() => setHidden(!hidden)}
                className="py-3 flex justify-end pr-6 pt-3 border-b border-black"
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
                <button className="border w-full bg-[#dd0735] px-5 py-3 rounded-xl">
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
