import React, { useState, useEffect } from "react";

export default function Hero() {
  const WORDS = ["วิทยาศาสตร์", "คอมพิวเตอร์", "คณิตศาสตร์"];
  const [placeholderId, setPlaceholderId] = useState(0);
  const [fadeProp, setFadeProp] = useState({ fade: "opacity-100" });
  useEffect(() => {
    const fadeTimeout = setInterval(() => {
      fadeProp.fade === "opacity-0"
        ? setFadeProp({ fade: "opacity-100" })
        : setFadeProp({ fade: "opacity-0" });
    }, 3000);
    return () => clearInterval(fadeTimeout);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPlaceholderId((prevCount) => (prevCount + 1) % WORDS.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <div className="flex justify-center flex-col text-center">
        <img src="./title.png" alt="" />
        <h1 className="font-bold text-3xl transition-all duration-300">
          งานแข่งขันโครงงาน
          <span
            className={`${fadeProp.fade} transition-opacity duration-300 text-blue-500 font-bold`}
          >
            {WORDS[placeholderId]}
          </span>
        </h1>
      </div>
    </>
  );
}
