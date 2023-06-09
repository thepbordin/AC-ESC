import React from "react";
import ChangingText from "./ChangingText";
export default function Hero() {
  return (
    <>
      <div className="text-center pt-10">
        <img
          src="./title.png"
          className="w-full max-w-[1000px] mx-auto"
          alt=""
        />
        <h1 className="mt-10 font-bold text-4xl transition-all duration-300 mx-auto">
          งานแข่งขันโครงงาน
          <span className={'text-blue-500 font-bold'}><ChangingText /></span>
        </h1>
        <span className="text-gray-400 block font-bold text-2xl mt-6 ">23-25 กรกฎาคม 2566</span>
      </div>
    </>
  );
}
