import React, { useState, useEffect } from "react";

export default function Hero() {
  const [placeholder, setplaceholder] = useState("วิทยาศาสตร์");
  useEffect(() => {
    const intervalId = setInterval(() => {
        setplaceholder((prevCount) => prevCount + 1);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <div className="flex justify-center flex-col text-center">
        <img src="./hero.png" alt="" />
        <h1 className="text-3xl transition-all duration-300">
          งานแข่งขันโครงงาน<span className="transition-all duration-300">{placeholder}</span>
        </h1>
      </div>
    </>
  );
}
