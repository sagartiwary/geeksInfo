import React from "react";
import { serviceData } from "../data";

export const Service = () => {
  return (
    <div className="bg-neutral-950  pt-[150px]">
      <div className="max-w-2xl  mx-auto">
        <h3 className="text-white text-[48px] text-center font-semibold tracking-tight pl-1">
          Only dedicated teams
        </h3>
        <p className="text-white text-center mt-3 p-3 text-md">
          Our team is 100% concentrated on your project and you have full
          control over management of the dedicated team members.
        </p>
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 gap-10 max-w-[1420px] mx-auto mt-[120px]">
        {serviceData.map((ele) => {
          return (
            <div key={Math.random()}>
              <img
                src={ele.img}
                alt={ele.title}
                className="w-[100%] h-[100px]"
              />
              <h2 className="text-white text-center mt-4">{ele.title}</h2>
            </div>
          );
        })}
      </div>
      <button className="block mx-auto text-orange-500 hover:bg-orange-600 hover:text-white mt-[100px] border border-orange-500 px-6 py-3 rounded-full transition duration-150 hover:ease-in-out">
        {" "}
        See our services
      </button>
    </div>
  );
};
