import React from "react";

export const SmartEducation = () => {
  return (
    <div className="bg-neutral-950 h-[1100px] flex justify-center  items-center pb-4">
      <div className=" gap-10 text-white max-w-7xl flex flex-col md:flex-row justify-between items-center mx-auto relative p-5 lg:flex-row  ">
        <div className="md:w-1/2 sm:w-full lg:w-1/2 w-full mt-5 md:mt-0 relative">
          <img
            className="w-full sm:w-full md:w-full lg:w-full h-auto"
            src="https://geeksinvention.com/assets/v3/industry-education.webp"
            alt="logo"
          />
        </div>
        <div className="text-center md:text-left md:w-1/2">
          <h3 className="md:text-[63px] sm:text-[24px] sm:text-left m-4 font-semibold">
            Smart Education
          </h3>
          <h3 className="text-3xl font-semibold sm:text-left m-4 text-gray-300">
            Elevate your Education Institution
          </h3>
          <div className="ml-4">
            <button className="text-white bg-gray-780 mr-2 shadow py-2 px-4 rounded-full mt-4">
              Connected manufacturing
            </button>
            <button className="bg-gray-780 text-white mr-2 shadow py-2 px-4 rounded-full mt-2">
              Aviation
            </button>
            <button className="text-white bg-gray-780 mr-2 shadow py-2 px-4 rounded-full mt-2">
              Smart Building
            </button>
          </div>
          <p className="mt-4 m-4 sm:text-left text-lg">
            Elevate your education institution with our comprehensive software
            solutions. Learning management, course offerings, professional
            training, certification, and school management tools to streamline
            your operations and enhance your students' learning experience.
            Trust us to provide the cutting-edge technology and support you need
            to thrive in the ever-evolving education industry
          </p>
          <button className=" text-white border border-white m-4 py-4 px-8 rounded-full mt-4">
            See full case study
          </button>
        </div>
      </div>
    </div>
  );
};
