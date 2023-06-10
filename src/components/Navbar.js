import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";

export default function Navbar() {
  //navbar scroll when active state
  const [navbar, setNavbar] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  //navbar scroll changeBackground function
  const changeBackground = () => {
    // console.log(window.scrollY);
    if (window.scrollY >= 66) {
      setNavbar("");
    } else {
      setNavbar("");
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <div>
      <div className={`${navbar} fixed z-50 w-full p-4 flex justify-between`}>
        <div></div>
        <div className="bg-[#E7E9F3] p-2 rounded-full flex font-bold">
          <Link
            to="/"
            className=" bg-white px-3 py-2 rounded-full text-[#2a384a]"
          >
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
        <div
          onClick={() => setIsOpen(true)}
          className="bg-blue-500 p-2 rounded-full flex font-extrabold cursor-pointer"
        >
          <div className="  px-3 py-2 rounded-full text-white">สมัครเลย !</div>
        </div>
      </div>

      <Modal isOpen={isOpen} handleClose={() => setIsOpen(false)} />
    </div>
  );
}
