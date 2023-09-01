import React from "react";

export const About = () => {
  return (
    <div className="bg-neutral-950 pt-[80px]">
      <div className="max-w-2xl  mx-auto">
        <h3 className="text-white text-[48px] text-center font-semibold tracking-tight pl-1">
          Get to know us better!
        </h3>
        <p className="text-white text-center mt-3 p-3 text-md">
          It is a pleasure to have you on our website. Let us know if there's an
          opportunity to do something together.
        </p>
      </div>
      <button className="block mx-auto text-white hover:bg-white bg-orange-600  hover:text-orange-500 mt-10 border border-orange-500 px-6 py-3 rounded-full transition duration-150 hover:ease-in-out">
        {" "}
        Drop us a message
      </button>
    </div>
  );
};
