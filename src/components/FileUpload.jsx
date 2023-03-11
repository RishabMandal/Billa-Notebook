import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { db, storage } from "../../firebase";
import {} from "firebase/firestore";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { v4 } from "uuid";

const FileUpload = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const imagesListRef = ref(storage, "images/");

  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <div className="bg-black min-h-screen w-full text-white p-3 py-10 md:p-10">
      <div className="md:flex md:flex-wrap">
        <div className="w-fit mx-auto">
          <div className="text-5xl mb-10 font-semibold font-serif">
            Preview Files here
          </div>
          <div>
            {imageUrls?.map((url) => {
              return (
                <img
                  key={url}
                  className="rounded-xl mx-auto m-1 md: my-5"
                  src={url}
                />
              );
            })}
          </div>
        </div>
        <div className="w-fit mx-auto">
          <div className="text-5xl my-10 md:mt-0 font-semibold font-serif">
            Upload Files here
          </div>
          <input
            onChange={(event) => {
              setImageUpload(event.target.files[0]);
            }}
            type="file"
            name=""
            id=""
          />
          <button
            className="bg-white my-5 text-black rounded-full font-bold border-2 border-gray-800 hover:border-white hover:bg-black hover:text-white transition ease-in px-4 py-2 cursor-pointer"
            onClick={uploadFile}
          >
            Upload file
          </button>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
