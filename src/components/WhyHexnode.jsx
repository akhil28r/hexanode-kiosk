"use client";
import React, { useState } from "react";
import img1 from "../assets/whyHexnode1.webp";
import img2 from "../assets/whyHexnode2.webp";
import Carousel from "./Carousel";

function WhyHexnode() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      img: img1,
      heading: "Hexnode is of great value. Works great with Android and iOS!",
      name: "Chris Robinson",
      title: "Executive Account Manager, NCS",
    },
    {
      img: img2,
      heading: "Hexnode is of great value. Works great with Android and iOS!",
      name: "Chris Robinson",
      title: "Executive Account Manager, NCS",
    },
  ];

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-[#F7F7F7] min-h-screen flex flex-col items-center justify-center pt-20 ">

      <h1 className="text-[#020a19] font-bold text-4xl pb-10 text-center">
        Why should you choose Hexnode?
      </h1>

      <div className="tailwind-container mx-auto relative flex flex-col items-center justify-center  max-w-4xl">
        {/* Slider Content */}
        <div className="md:w-full z-10 flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className=" w-full  md:w-1/3">
            <img
              src={slides[currentIndex].img}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full object-cover transition-transform duration-500"
            />
          </div>
          <div className=" w-full sm:w-[70%] md:w-2/3 flex flex-col justify-center px-5 py-10 text-center ">
            <p className="text-lg font-bold border-b-4 border-[#F7F7F7] px-1 pb-7">
              {slides[currentIndex].heading}
            </p>
            <p className="text-gray-600 mt-5">{slides[currentIndex].name}</p>
            <p className="text-gray-500 text-sm">
              {slides[currentIndex].title}
            </p>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center items-center w-full gap-5 mt-4 lg:hidden">
          <button
            onClick={prevSlide}
            className="w-12 h-12 bg-white text-black rounded-lg shadow-md transition"
          >
            &#10094;
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 bg-white text-black rounded-lg shadow-md transition"
          >
            &#10095;
          </button>
        </div>

        {/* Arrows for Large Screens */}
        <button
          onClick={prevSlide}
          className="hidden lg:block absolute left-0 w-12 h-12 transform -translate-x-16 z-10 p-3 bg-white text-black rounded-lg shadow-md transition"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="hidden lg:block absolute right-0 w-12 h-12 transform translate-x-16 z-10 p-3 bg-white text-black rounded-lg shadow-md transition"
        >
          &#10095;
        </button>
      </div>
      <Carousel/>
    </div>
  );
}

export default WhyHexnode;
