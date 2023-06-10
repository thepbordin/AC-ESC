import React, { useState } from "react";
import Navbar from "./Navbar";
import Swal from "sweetalert2";

export default function Register() {
  const [memberCount, setMemberCount] = useState(2);




  const [data, setData] = useState({
    project: "",
    thaiFile: "",
    engFile: "",
    leader: "",
    tel: "",
    member1:"",
    member2:"",
    member3:"",
    member4:"",
    teacher1:"",
    teacher2:""
  });

  const onSubmit = (e) => {
    e.preventDefault();
    

    Swal.fire({
        title: "ส่งแบบฟอร์มเสร็จสิ้น!",
        icon: "success",
        confirmButtonText: "รับทราบ",
      });
  };

  return (
    <div className="text-[#2a384a]">
      <Navbar />
      <div>
        <img src="./img/register.png" className="w-2/3 mx-auto pt-20" />
        <div className="bg-white p-20 mx-36 box-shadow rounded-3xl mt-[-120px] mb-20">
          <form className="rounded-2xl bg-white  lg:p-10" onSubmit={onSubmit}>
            <h1 className="my-8 text-3xl font-extrabold  sm:text-4xl">
              รายละเอียดโครงงาน
            </h1>
            <div className="m-5 inline-block">
              <label className="text-2xl">
                ชื่อโครงงาน<sup className="text-red-500">*</sup>
              </label>
              <br />
              <input
                className={` my-2 w-full rounded-2xl border border-slate-200 p-5 text-xl duration-150 placeholder:text-xl focus:outline-blue-500`}
                type="text"
                onChange={(e) => {
                  setData({ ...data, project: e.target.value });
                  console.log(data);
                }}
                required
              />
            </div>
            <div className="m-5 inline-block">
              <label className="text-2xl">
                บทคัดย่อภาษาไทย (.pdf)<sup className="text-red-500">*</sup>
              </label>
              <br />
              <input
                className={`cursor-pointer my-2 w-full rounded-2xl border border-slate-200 p-5 text-xl duration-150 placeholder:text-xl focus:outline-blue-500`}
                type="file"
                onChange={(e) => {
                  setData({ ...data, thaiFile: e.target.value });
                  console.log(data);
                }}
                accept="application/pdf"
                required
              />
            </div>
            <div className="m-5 inline-block">
              <label className="text-2xl">
                บทคัดย่อภาษาอังกฤษ (.pdf)<sup className="text-red-500">*</sup>
              </label>
              <br />
              <input
                className={`cursor-pointer my-2 w-full rounded-2xl border border-slate-200 p-5 text-xl duration-150 placeholder:text-xl focus:outline-blue-500`}
                type="file"
                onChange={(e) => {
                    setData({ ...data, engFile: e.target.value });
                    console.log(data);
                  }}
                accept="application/pdf"
                required
              />
            </div>

            <h1 className="my-8 text-3xl font-extrabold  sm:text-4xl">
              สมาชิกทีม & ผู้ประสานงาน
            </h1>
            <div className="m-5 inline-block">
              <label className="text-2xl font-bold ">ผู้ประสานงาน</label>
              <br />
              <br />
              <label className="text-2xl ">
                ชื่อ - นามสกุล<sup className="text-red-500">*</sup>
              </label>
              <br />
              <input
                className={` my-2 w-full rounded-2xl border border-slate-200 p-5 text-xl duration-150 placeholder:text-xl focus:outline-blue-500`}
                type="text"
                onChange={(e) => {
                    setData({ ...data, leader: e.target.value });
                    console.log(data);
                  }}
                required
              />
            </div>
            <div className="m-5 inline-block">
              <label className="text-2xl">
                เบอร์โทรศัพท์<sup className="text-red-500">*</sup>
              </label>
              <br />
              <input
                className={` my-2 w-full rounded-2xl border border-slate-200 p-5 text-xl duration-150 placeholder:text-xl focus:outline-blue-500`}
                type="text"
                placeholder="080-000-0000"
               
                onChange={(e) => {
                    setData({ ...data, tel: e.target.value });
                    console.log(data);
                  }}
                required
              />
            </div>
            <div className="m-5 inline-block">
              <label className="text-2xl font-bold ">สมาชิกทีมคนที่ 1</label>
              <br />
              <br />
              <label className="text-2xl ">
                ชื่อ - นามสกุล<sup className="text-red-500">*</sup>
              </label>
              <br />
              <input
                className={` my-2 w-full rounded-2xl border border-slate-200 p-5 text-xl duration-150 placeholder:text-xl focus:outline-blue-500`}
                type="text"
                onChange={(e) => {
                    setData({ ...data, member1: e.target.value });
                    console.log(data);
                  }}
                required
              />
            </div>
            <div className="m-5 inline-block">
              <label className="text-2xl font-bold ">สมาชิกทีมคนที่ 2</label>
              <br />
              <br />
              <label className="text-2xl ">
                ชื่อ - นามสกุล<sup className="text-red-500">*</sup>
              </label>
              <br />
              <input
                className={` my-2 w-full rounded-2xl border border-slate-200 p-5 text-xl duration-150 placeholder:text-xl focus:outline-blue-500`}
                type="text"
                onChange={(e) => {
                  setData({ ...data, member2: e.target.value });
                  console.log(data);
                }}
                required
              />
            </div>
            {memberCount >= 3 ? (
              <div className="m-5 inline-block">
                <label className="text-2xl font-bold ">สมาชิกทีมคนที่ 3</label>
                <br />
                <br />
                <label className="text-2xl ">ชื่อ - นามสกุล<sup className="text-red-500">*</sup></label>
                <br />
                <input
                  className={` my-2 w-full rounded-2xl border border-slate-200 p-5 text-xl duration-150 placeholder:text-xl focus:outline-blue-500`}
                  type="text"
                  onChange={(e) => {
                  setData({ ...data, member3: e.target.value });
                  console.log(data);
                }}
                  required
                />
              </div>
            ) : null}

            {memberCount >= 4 ? (
              <div className="m-5 inline-block">
                <label className="text-2xl font-bold ">สมาชิกทีมคนที่ 4</label>
                <br />
                <br />
                <label className="text-2xl ">ชื่อ - นามสกุล<sup className="text-red-500">*</sup></label>
                <br />
                <input
                  className={` my-2 w-full rounded-2xl border border-slate-200 p-5 text-xl duration-150 placeholder:text-xl focus:outline-blue-500`}
                  type="text"
                  onChange={(e) => {
                  setData({ ...data, member4: e.target.value });
                  console.log(data);
                }}
                  required
                />
              </div>
            ) : null}

            {memberCount >= 4 ? null : (
              <>
                <div className="m-5 inline-block">
                  <div
                    className={` my-2  font-bold  rounded-2xl border-2 border-dashed border-slate-200 p-5 w-full text-2xl text-slate-400 duration-150 placeholder:text-xl hover:bg-slate-100  cursor-pointer`}
                    onClick={() => setMemberCount(memberCount + 1)}
                  >
                    + &nbsp;&nbsp;เพิ่มสมาชิก
                  </div>
                </div>
              </>
            )}

            {memberCount >= 3 ? (
              <div className="m-5 inline-block">
                <div
                  className={` my-2  font-bold  rounded-2xl border-2 border-dashed border-slate-200 p-5 w-full text-2xl text-slate-400 duration-150 placeholder:text-xl hover:bg-slate-100  cursor-pointer`}
                  onClick={() => setMemberCount(memberCount - 1)}
                >
                  - &nbsp;&nbsp;ลดสมาชิก
                </div>
              </div>
            ) : null}

            <br />
            <div className="flex">
              <div className="w-full">
                <h1 className="my-8 text-3xl font-extrabold  sm:text-4xl">
                  ครูที่ปรึกษาคนที่ 1
                </h1>
                <div className="m-5 ">
                  <label className="text-2xl ">
                    ชื่อ - นามสกุล<sup className="text-red-500">*</sup>
                  </label>
                  <br />
                  <input
                    className={` my-2 w-full rounded-2xl border border-slate-200 p-5 text-xl duration-150 placeholder:text-xl focus:outline-blue-500`}
                    type="text"
                    onChange={(e) => {
                        setData({ ...data, teacher1: e.target.value });
                        console.log(data);
                      }}
                    required
                  />
                </div>
              </div>
              <div className="w-full">
                <h1 className="my-8 text-3xl font-extrabold  sm:text-4xl">
                  ครูที่ปรึกษาคนที่ 2
                </h1>
                <div className="m-5 ">
                  <label className="text-2xl ">
                    ชื่อ - นามสกุล<sup className="text-red-500">*</sup>
                  </label>
                  <br />
                  <input
                    className={` my-2 w-full rounded-2xl border border-slate-200 p-5 text-xl duration-150 placeholder:text-xl focus:outline-blue-500`}
                    type="text"
                    onChange={(e) => {
                        setData({ ...data, teacher2: e.target.value });
                        console.log(data);
                      }}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="mt-5 inline-block">
              <input
                className={`my-2 w-full cursor-pointer rounded-2xl bg-blue-500 p-5 text-xl font-extrabold text-white duration-150 ease-in-out hover:bg-blue-700`}
                type="submit"
                value="ส่งแบบฟอร์ม"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
