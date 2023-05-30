import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="bg-black min-h-screen w-full flex justify-center items-center text-white p-3 py-10 md:p-10">
      <div>
        <div className="font-bold font-serif text-6xl md:text-8xl mb-5">
          Oops!
        </div>
        <div className="text-2xl md:text-4xl font-serif">404 Not Found </div>
        <NavLink
          to="/"
          initial="hidden"
          animate="visible"
          onClick={() => {
            navigator.vibrate(100);
          }}
          className="bg-white my-5 block text-black rounded-full font-bold border-2 border-gray-800 hover:border-white hover:bg-black hover:text-white transition ease-in px-4 py-2 cursor-pointer"
        >
          Go Back
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
