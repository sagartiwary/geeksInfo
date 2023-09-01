import React from "react";

export const Fintech = () => {
  return (
    <div className="bg-indigo-800 h-[980px] flex justify-center  items-center pb-16">
      <div className="text-white max-w-7xl flex flex-col md:flex-row justify-between items-center mx-auto relative p-5 lg:flex-row sm:flex-col-reverse ">
        <div className="text-center md:text-left md:w-1/2">
          <h3 className="md:text-[63px] sm:text-[24px] sm:text-left m-4 font-semibold">
            Fintech Solution
          </h3>
          <h3 className="text-3xl font-semibold sm:text-left m-4 text-gray-300">
            Transforming Fintech with AI
          </h3>
          <div className="ml-4">
            <button className="text-white bg-indigo-700 mr-2 shadow py-2 px-4 rounded-full mt-4">
              Fraud detection
            </button>
            <button className="text-white bg-indigo-700 mr-2 shadow py-2 px-4 rounded-full mt-2">
              Transaction categorisation
            </button>
            <button className="text-white bg-indigo-700 mr-2 shadow py-2 px-4 rounded-full mt-2">
              Risk Scoring
            </button>
          </div>
          <p className="mt-4 m-4 sm:text-left text-lg">
            Empower your financial institution with our advanced fintech
            solutions. From real-time fraud detection to easy bookkeeping, our
            software development services provide credit risk scoring for
            accurate lending eligibility, transaction categorization for
            seamless organization, and anomaly detection to safeguard your
            assets
          </p>
          <button className="bg-indigo-800 text-white border border-gray-400 m-4 py-4 px-8 rounded-full mt-4">
            See full case study
          </button>
        </div>

        <div className="md:w-1/2 sm:w-full lg:w-1/2 w-full mt-5 md:mt-0 relative">
          <img
            className="w-full sm:w-full md:w-full lg:w-full h-auto"
            src="https://geeksinvention.com/assets/v3/industry-fintech.svg"
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
};
