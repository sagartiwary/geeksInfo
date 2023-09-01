import React from "react";
import Logo from "../image/banner.png";

export const Banner = () => {
  return (
    <div className="md:bg-neutral-950 sm:bg-neutral-950 md:h-[660px] sm:h-[450px] relative text-center">
      <img
        src={Logo}
        alt="logo"
        className="text-center bg-no-repeat bg-contain bg-center mt-[8%] mb-[5%] ml-[5%] mr-[8%] absolute top-0 right-0 left-0 bottom-0 overflow-hidden z-6"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <h1 className="md:text-7xl sm:text-5xl uppercase font-semibold md:mb-7 lg:mb-7 sm:mb-3 mt-6">Embrace the Future</h1>
        <h1 className="text-3xl  leading-4 my-5">
          Welcome To The Age Of Action
        </h1>
      </div>
    </div>
  );
};
