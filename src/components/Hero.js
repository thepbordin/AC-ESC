import React from "react";
import ChangingText from "./ChangingText";
export default function Hero() {
  

  return (
    <>
      <div className="flex justify-center flex-col text-center">
        <img src="./title.png" alt="" />
        <h1 className="font-bold text-3xl transition-all duration-300">
          งานแข่งขันโครงงาน
          <span
            className={`text-blue-500 font-bold`}
          >
            <ChangingText/>
          </span>
        </h1>
      </div>
    </>
  );
}
