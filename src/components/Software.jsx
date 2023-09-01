import React from "react";
import {softwareData} from '../data'
export const Software = () => {
  return (
    <div className="bg-neutral-950 pt-[140px]">
      <div className="max-w-4xl  mx-auto">
        <h3 className="text-white text-[63px] text-center font-semibold tracking-tight pl-1">
          Software for modern platforms
        </h3>
        <p className="text-gray-400 text-center mt-3 p-3 text-lg">
          We develop applications for mobile, web, wearables, and TV.
        </p>
      </div>
      <div className="flex md:flex-row lg:flex-row sm:flex-wrap justify-between items-center  gap-2 max-w-[1240px] mt-[120px] mx-auto">
        {softwareData.map((ele) => (
          <div key={Math.random()} className="inline">
            <img
              src={ele.img}
              alt={ele.title}
              className="object-contain w-[100px] h-[100px]"
            />
            <h2 className="text-white text-center mt-5 font-semibold text-lg">
              {ele.title}
            </h2>
          </div>
        ))}
      </div>
      <button className="block mx-auto mt-[100px] text-orange-500 hover:bg-orange-600 hover:text-white  border border-orange-500 px-6 py-3 rounded-full transition duration-150 hover:ease-in-out">
        {" "}
        See your tech stack
      </button>
    </div>
  );
};
