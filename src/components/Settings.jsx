import React from "react";
import { motion } from "framer-motion";
import heart from "../assets/heart.png";

const Settings = () => {
  return (
    <motion.div
      // initial={{ opacity: 0, y: 100 }}
      // animate={{ opacity: 1, y: 0 }}
      // exit={{ opacity: 0, y: 100 }}
      // transition={{ duration: 0.5 }}
      className="bg-black min-h-screen w-full text-white p-3 py-10 md:p-10"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-5xl mb-10 font-semibold font-serif"
      >
        Settings
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-white flex flex-row items-center bg-transparent text-xl w-fit h-fit fixed bottom-5 left-5 md:bottom-10 md:left-10"
      >
        - Made with by{" "}
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          src={heart}
          className="w-fit h-8 m-1"
          alt=""
        />{" "}
        Rishab Mandal
      </motion.div>
    </motion.div>
  );
};

export default Settings;
