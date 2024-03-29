import React from "react";
import { gridData } from "../data";
import Audi from "../image/audi.png";
import ibm from "../image/ibm.png";

export const Grid = () => {
  return (
    <div className="bg-neutral-950 ">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 gap-5">
        {gridData.map((ele) => {
          return (
            <div
              key={Math.random()}
              className="border border-gray-900 p-10 py-16 px-14 bg-gray-900 h-[550px] text-center"
            >
            
              <img
                src={ibm}
                className="mx-auto mb-4 sm:w-[50%] sm:text-center"
                alt="Name"
              />
              <h3 className="text-white mb-4 mt-10 text-lg">{ele.title}</h3>
              <p className="text-gray-300 text-md">{ele.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
