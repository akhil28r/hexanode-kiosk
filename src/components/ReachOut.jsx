import React from "react";

function ReachOut() {
  return (
    <div className="bg-[#020a19] flex flex-col justify-center items-center py-20">
      <h1 className="text-white font-bold text-[30px] md:text-[42px] text-center px-5 pb-10">
        Sign up and try Hexnode free for 14 days!
      </h1>
      <div className="mx-10 mt-5">
        <div className="flex gap-5 flex-col md:flex-row md:min-w-[600px]">
            <div>
                <input type="email" placeholder="Enter your email" className="p-3 w-full bg-white text-black placeholder-opacity-20 text-lg rounded-sm text-left"/>
            </div>
            <div >
                <button className="text-[#fff] bg-[#dd0735] px-5 text-lg rounded-sm py-3 w-full cursor-pointer hover:gb-red-500 md:max-w-[250px]">GET STARTED NOW</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ReachOut;
