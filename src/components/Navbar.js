import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  //navbar scroll when active state
  const [navbar, setNavbar] = useState("");

  //navbar scroll changeBackground function
  const changeBackground = () => {
    // console.log(window.scrollY);
    if (window.scrollY >= 66) {
      setNavbar("bg-white");
    } else {
      setNavbar("false");
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <div>
      <div className={`${navbar} fixed w-full p-4 flex justify-between`}>
        <div></div>
        <div className="bg-[#E7E9F3] p-2 rounded-full flex font-bold">
          <Link to="/" className=" bg-white px-3 py-2 rounded-full text-[#2a384a]">
            หน้าแรก
          </Link>
          <Link to="" className="mx-5 px-3 py-2 rounded-full text-[#2a384a]">
            การนำเสนอด้วยวาจา
          </Link>
          <Link to="" className="mx-5 px-3 py-2 rounded-full text-[#2a384a]">
            การนำเสนอด้วยโปสเตอร์
          </Link>
          <Link to="" className="mx-5 px-3 py-2 rounded-full text-[#2a384a]">
            เกี่ยวกับงาน
          </Link>
        </div>
        <div className="bg-blue-500 p-2 rounded-full flex font-extrabold">
          <Link to="/" className="  px-3 py-2 rounded-full text-white">
            สมัครเลย !
          </Link>
       
        </div>
      </div>
    </div>
  );
}
