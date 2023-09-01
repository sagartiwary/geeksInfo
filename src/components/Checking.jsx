import React from 'react'

export const Checking = () => {
  return (
    <div className="bg-neutral-950 h-[700px]">
      <div className="max-w-2xl  mx-auto">
        <h3 className="text-white text-[48px] text-center font-semibold tracking-tight pl-1">
          Check out more works by Geeks Invention
        </h3>
        <p className="text-white text-center mt-3 p-3 text-md">
          Our case studies describe design and development solutions implemented
          at our Geeks Invention projects. The stories are a valuable resource
          for those looking to develop their own mobile apps.
        </p>
      </div>
      <button className="block mx-auto text-orange-500 hover:bg-orange-600 hover:text-white mt-10 border border-orange-500 px-6 py-3 rounded-full transition duration-150 hover:ease-in-out">
        {" "}
        See all case studies
      </button>

      <div className="max-w-2xl  mx-auto md:mt-[120px]">
        <h3 className="text-white text-[48px] text-center font-semibold tracking-tight pl-1">
          Recent Clients
        </h3>
        <p className="text-white text-center mt-3 p-3 text-md">
          We worked with the Fortune 500 companies in the USA, Africa, UK,
          Middle East World's 4th Strongest Banking Brand, Automobile & IoT
          industry
        </p>
      </div>
      
    </div>
  );
}
