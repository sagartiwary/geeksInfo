import React from "react";

export const Kitchen = () => {
  return (
    <div className="bg-teal-500 h-[980px] flex justify-center  items-center pb-4">
      <div className=" gap-10 text-white max-w-7xl flex flex-col md:flex-row justify-between items-center mx-auto relative p-5 lg:flex-row  ">
        <div className="md:w-1/2 sm:w-full lg:w-1/2 w-full mt-5 md:mt-0 relative">
          <img
            className="w-full sm:w-full md:w-full lg:w-full h-auto"
            src="https://geeksinvention.com/assets/v3/industry-iot.webp"
            alt="logo"
          />
        </div>
        <div className="text-center md:text-left md:w-1/2">
          <h3 className="md:text-[63px] sm:text-[24px] sm:text-left m-4 font-semibold">
            Industrial IoT
          </h3>
          <h3 className="text-3xl font-semibold sm:text-left m-4 text-gray-300">
            Providing a better connected experience
          </h3>
          <div className="ml-4">
            <button className="text-white bg-teal-780 mr-2 shadow py-2 px-4 rounded-full mt-4">
              Learning Management
            </button>
            <button className="bg-teal-780 text-white mr-2 shadow py-2 px-4 rounded-full mt-2">
              Course offering
            </button>
            <button className="text-white bg-teal-780 mr-2 shadow py-2 px-4 rounded-full mt-2">
              Professional Training
            </button>
          </div>
          <p className="mt-4 m-4 sm:text-left text-lg">
            Revolutionize your industry with our innovative IoT solutions. Our
            software development services offer connected manufacturing,
            pollution control, smart transportation, and intelligent farming,
            agriculture, and forestry. With our expertise, you can harness the
            power of technology to increase efficiency, reduce waste, and
            optimize operations for a sustainable future.
          </p>
          <button className=" text-white border border-white m-4 py-4 px-8 rounded-full mt-4">
            See full case study
          </button>
        </div>
      </div>
    </div>
  );
};
