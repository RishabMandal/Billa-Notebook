import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { db } from "../../firebase";
import {
  getDocs,
  collection,
  addDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const LandingPage = () => {
  const inputRef = useRef();
  const [textNotes, setTextNotes] = useState();
  const [textareaNotes, setTextareaNotes] = useState();

  useEffect(() => {
    const getNotes = async () => {
      try {
        const data = await getDocs(collection(db, "notes"));
        console.log(data.docs.map((doc) => doc.data()));
        setTextNotes(data.docs.map((doc) => doc.data()));
        // inputRef.current.value = data.docs.map(
        //   (doc) => doc.data().textNotes[0].notepad
        // );
      } catch (error) {
        alert(error);
        console.error(error);
      }
    };
    getNotes();
  }, []);

  const submitNotes = async () => {
    console.log("Clicked");
    // console.log(textNotes);
    console.log(textareaNotes);
    const docRef = doc(db, "notes", "HsJ8NLbbkjzmRPHqRIZA");
    await updateDoc(docRef, {
      date: "11-03-2023",
      //   notepad: textNotes[0].notepad,
      notepad: textareaNotes,
    })
      .then((docRef) => {
        alert("Uploaded successfully!");
        console.log(
          "A New Document Field has been added to an existing document"
        );
      })
      .catch((error) => {
        alert(error);
        console.error(error);
      });
  };

  useEffect(() => {
    if (textNotes) inputRef.current.value = textNotes[0]?.notepad;
  }, [textNotes]);

  useEffect(() => {
    submitNotes();
  }, [textareaNotes]);

  const [fontsize, setFontsize] = useState("xl");

  return (
    <div className="bg-black min-h-screen w-full text-white p-3 py-10 md:p-10">
      <div className="text-5xl mb-10 font-semibold font-serif flex flex-wrap justify-between">
        <div className="w-fit">Experience the Best Notebook</div>
        <div className="w-fit flex flex-row mt-7 md:mt-0 mx-auto md:mx-0">
          - PowerBilla
          <img
            className="invert w-fit px-2 h-[3rem]"
            src="https://img.icons8.com/pastel-glyph/64/000000/cat-back-view.png"
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        <textarea
          className={`bg-black border-2 ${fontsize} p-3 mb-8 md:p-10 w-full md:w-[70vw] rounded-xl`}
          ref={inputRef}
          name=""
          id=""
          placeholder="Enter new notes here..."
          //   cols="100"
          rows="30"
        ></textarea>
        <div className="md:w-[20vw] mx-auto h-fit md:sticky md:top-10">
          <div className="flex flex-row justify-evenly">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                onClick={() => {
                  navigator.vibrate(150);
                  setFontsize("text-lg");
                }}
                stroke="currentColor"
                className="w-6 h-6 hover:scale-75 transition ease-in"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM13.5 10.5h-6"
                />
              </svg>
            </button>
            <div className="font-semibold">Zoom</div>
            <motiobutton>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                onClick={() => {
                  navigator.vibrate(150);
                  setFontsize("text-3xl");
                }}
                stroke="currentColor"
                className="w-6 h-6 hover:scale-125 cursor-pointer transition ease-in"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
                />
              </svg>
            </motiobutton>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => alert("Coming soon....")}
            className="bg-white my-5 text-black rounded-full font-bold border-2 border-gray-800 hover:border-white hover:bg-black hover:text-white transition ease-in px-4 py-3 text-xl cursor-pointer"
          >
            <NavLink to="/filesUpload">View uploaded files</NavLink>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.3,
              ease: "easeOut",
            }}
            className="bg-white block text-black rounded-full font-bold border-2 border-gray-800 hover:border-white hover:bg-black hover:text-white transition ease-in px-4 py-3 text-xl cursor-pointer"
          >
            <NavLink to="/fileUpload">View uploaded images</NavLink>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.3,
              ease: "easeOut",
            }}
            className="bg-white mt-5 text-black rounded-full font-bold border-2 border-gray-800 hover:border-white hover:bg-black hover:text-white transition ease-in px-4 py-3 text-xl cursor-pointer"
            onClick={() => {
              navigator.vibrate(150);
              setTextareaNotes(inputRef.current.value);
            }}
          >
            Upload this note
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 400 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.3,
              ease: "easeOut",
            }}
            className="bg-white mt-5 text-black rounded-full font-bold border-2 border-gray-800 hover:border-white hover:bg-black hover:text-white transition ease-in px-4 py-3 text-xl cursor-pointer"
            onClick={() => {
              navigator.vibrate(150);
              navigator.clipboard.writeText(inputRef.current.value);
              alert("Clipboard has been updated");
            }}
          >
            Copy this note
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
