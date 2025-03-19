import React from "react";
import HeroImage from "../assets/hexnode-kiosk.webp";

function Hero() {
  return (
    <div className=" bg-[#020A19] overflow-hidden pb-10">
      <div className="tailwind-container mx-auto  justify-center flex flex-col-reverse xl:flex-row xl:justify-between gap-10 ">
        <div className=" w-full xl:w-1/2 flex flex-col items-center text-center xl:text-left xl:items-start  justify-center">
          <p className="text-white text-[30px] md:text-[42px] xl:items-start font-bold">
            Turn your devices into kiosks in a few minutes with Hexnode UEM
          </p>
          <div className="w-full md:w-[600px] mt-10 xl:items-start ">
            <div className="flex gap-5 flex-col md:flex-row w-full">
              <div className="w-full">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="p-3 w-full bg-white text-black placeholder-opacity-20 text-lg rounded-sm"
                />
              </div>
              <div className="w-full md:max-w-[250px]">
                <button className="text-[#fff] bg-[#dd0735] px-5 text-lg rounded-sm py-3 w-full cursor-pointer hover:bg-red-500">
                  GET STARTED NOW
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-1/2 max-w-[597px] max-[420px]:h-[258px] max-[420px]:mb-10 mt-5 flex justify-center xl:justify-end mx-auto xl:mx-0">
  <img className="w-full h-full object-fill" src={HeroImage} />
</div>
      </div>
    </div>
  );
}

export default Hero;
