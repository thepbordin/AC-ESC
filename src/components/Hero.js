import React, { useState, useEffect } from "react";

export default function Hero() {
    const WORDS = ["วิทยาศาสตร์", "คอมพิวเตอร์", "คณิตศาสตร์",]
  const [placeholderid, setplaceholderid] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
        setplaceholderid((prevCount) => prevCount + 1 % WORDS.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <div className="flex justify-center flex-col text-center">
        <img src="./hero.png" alt="" />
        <h1 className="text-3xl transition-all duration-300">
          งานแข่งขันโครงงาน<span className="transition-all duration-300">{WORDS[placeholderid]}</span>
        </h1>
      </div>
    </>
  );
}
