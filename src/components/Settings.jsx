import React from "react";
import heart from "../assets/heart.png";

const Settings = () => {
  return (
    <div className="bg-black min-h-screen w-full text-white p-3 py-10 md:p-10">
      <div className="text-5xl mb-10 font-semibold font-serif">Settings</div>

      <div className="text-white flex flex-row items-center bg-transparent text-xl w-fit h-fit fixed bottom-5 left-5 md:bottom-10 md:left-10">
        - Made with by <img src={heart} className="w-fit h-8 m-1" alt="" />{" "}
        Rishab Mandal
      </div>
    </div>
  );
};

export default Settings;
