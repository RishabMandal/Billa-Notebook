import { ref, uploadBytes } from "firebase/storage";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { storage } from "../../firebase";
import { motion } from "framer-motion";

const FilesUpload = () => {
  const handleFileUpload = async (file) => {
    // const storageRef = ref(storage, file.name);
    if (file == null) return;
    const storageRef = ref(storage, `files/${file}`);
    await uploadBytes(storageRef, file).catch((error) => {
      console.error(error);
    });
    console.log("File uploaded successfully");
    alert("File uploaded successfully");
  };
  const getFileUrl = async (fileName) => {
    const storageRef = ref(storage, `files/${fileName}`);
    const url = await getDownloadURL(storageRef);
    console.log(`File URL: ${url}`);
    return url;
  };

  const [file, setFile] = useState();
  const fileRef = useRef();

  return (
    <motion.div
      className="text-white bg-black min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        FilesUpload
      </motion.div>
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <input ref={fileRef} type="file" />
      </motion.div>
      <motion.div
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <button
          onClick={() => {
            setFile(fileRef.current.value);
          }}
        >
          Upload
        </button>
        <motion.button
          onClick={() => {
            handleFileUpload(file);
          }}
          className="bg-white block text-black rounded-full font-bold border-2 border-gray-800 hover:border-white hover:bg-black hover:text-white transition ease-in px-4 py-3 text-xl cursor-pointer"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Submit
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default FilesUpload;
