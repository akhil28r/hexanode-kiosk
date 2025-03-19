import React from "react";
import image1 from "../assets/idc.webp";
import image2 from "../assets/gartner.webp";
import image3 from "../assets/forrester.webp";

function Achievements() {
  const data = [
    {
      img: image1,
      text: "Hexnode is listed as a leader and a major player in IDC MarketScape UEM Vendors Assessment Reports 2024.",
    },
    {
      img: image2,
      text: "Hexnode was recognized in the 2025 Gartner® Market Guide for Unified Endpoint Management Tools.",
    },
    {
      img: image3,
      text: "Forrester includes Hexnode as a Notable vendor in The Unified Endpoint Management Landscape, Q3 2023.",
    },
  ];

  return (
    <div className="bg-[#1A1C2B] py-10">
      <div className="tailwind-container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-10 items-center text-center">
          {data.map((item, index) => (
            <div
              key={index}
              className={`md:my-10 md:px-6 lg:px-10 flex flex-col items-center ${
                index !== data.length - 1
                  ? "md:border-r-[1px] md:border-[rgb(255,255,255,60%)]"
                  : ""
              }`}
            >
              <img src={item.img} className="w-[100px]" />
              <p className="text-[rgb(255,255,255,60%)] mt-5 text-sm leading-5 ">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Achievements;
