import React, { useState } from "react";
import Navbar from "./Navbar";
import Swal from "sweetalert2";
import axios from "axios";

export default function Register() {

  const [memberCount, setMemberCount] = useState(2);

  const [member1, setMember1] = useState("");
  const [member2, setMember2] = useState("");
  const [member3, setMember3] = useState("");
  const [member4, setMember4] = useState("");

  const [teacher1, setTeacher1] = useState("");
  const [teacher2, setTeacher2] = useState("");

  const [data, setData] = useState({
    project: "",
    thaiFile: "",
    engFile: "",
    leader: "",
    tel: "",
    members: [],
    teachers: [],
  });

  const newMemberData = [member1, member2, member3, member4];
  const newTeacherData = [teacher1, teacher2];

  const removeMember = (memberCount) => {
    if (memberCount === 3) {
      setMember3("");
    } else if (memberCount === 4) {
      setMember4("");
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();


    const dataObject = {
      project: data.project,
      thaiFile: data.project + " (" + data.leader  + ")" + ".pdf",
      engFile: data.engFile,
      leader: data.leader,
      tel: data.tel,
      members: newMemberData.filter((str) => str !== ""),
      teachers: newTeacherData,
    };

    console.log(dataObject);

    if (data.thaiFile != "") {
      const formData = new FormData();
      formData.append("file", data.thaiFile);

      // Get the file from the FormData object
      const file = formData.get("file");

      // Create a new File object with the updated filename
      const newFile = new File(
        [file],
        data.project +  " (" + data.leader  + ")" + ".pdf",
        {
          type: file.type,
        }
      );

      // Delete the original file from the FormData object
      formData.delete("file");

      // Append the new file to the FormData object with the updated filename
      formData.append("file", newFile, data.project + " (" + data.leader  + ")" + ".pdf");

      // Now the filename in the FormData object is changed to "123123.pdf"

      axios.post(`http://localhost:4000/project/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    }
    console.log(data.thaiFile);

    axios
      .post(`http://localhost:4000/project/create`, dataObject)
      .then((res) => {
        Swal.fire({
          title: "ส่งแบบฟอร์มเสร็จสิ้น!",
          icon: "success",
          confirmButtonText: "ตกลง",
        });
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
                className={`${
                  data.project === "" ? null : "bg-slate-100 "
                } my-2 w-full rounded-2xl border border-slate-200 p-5 text-xl duration-150 placeholder:text-xl focus:outline-blue-500`}
                type="text"
                value={data.project}
                onChange={(e) => {
                  setData({ ...data, project: e.target.value });
                  console.log(data);
                }}
                required
              />
            </div>
            <div className="m-5 inline-block">
              <label className="text-2xl">
                บทคัดย่อภาษาไทย{" "}
                <span className="text-slate-300">(.pdf) (ส่งภายหลังได้)</span>
              </label>
              <br />
              <input
                className={`${
                  data.thaiFile === "" ? null : "bg-slate-100 "
                } cursor-pointer my-2 w-full rounded-2xl border border-slate-200 p-5 text-xl duration-150 placeholder:text-xl focus:outline-blue-500`}
                type="file"
                // value={data.thaiFile}
                onChange={(e) => {
                  setData({ ...data, thaiFile: e.target.files[0] });
                  console.log(data.thaiFile);
                }}
                accept="application/pdf"
              />
            </div>
            <div className="m-5 inline-block">
              <label className="text-2xl">
                บทคัดย่อภาษาอังกฤษ{" "}
                <span className="text-slate-300">(.pdf) (ส่งภายหลังได้)</span>
              </label>
              <br />
              <input
                className={`${
                  data.engFile === "" ? null : "bg-slate-100 "
                } cursor-pointer my-2 w-full rounded-2xl border border-slate-200 p-5 text-xl duration-150 placeholder:text-xl focus:outline-blue-500`}
                type="file"
                value={data.engFile}
                onChange={(e) => {
                  setData({ ...data, engFile: e.target.value });
                  console.log(data);
                }}
                accept="application/pdf"
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
                className={`${
                  data.leader === "" ? null : "bg-slate-100 "
                } my-2 w-full rounded-2xl border border-slate-200 p-5 text-xl duration-150 placeholder:text-xl focus:outline-blue-500`}
                type="text"
                value={data.leader}
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
                className={`${
                  data.tel === "" ? null : "bg-slate-100 "
                } my-2 w-full rounded-2xl border border-slate-200 p-5 text-xl duration-150 placeholder:text-xl focus:outline-blue-500`}
                type="text"
                placeholder="080-000-0000"
                value={data.tel}
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
                className={`${
                  member1 === "" ? null : "bg-slate-100 "
                } my-2 w-full rounded-2xl border border-slate-200 p-5 text-xl duration-150 placeholder:text-xl focus:outline-blue-500`}
                type="text"
                value={member1}
                onChange={(e) => {
                  setMember1(e.target.value);
                  // setData({
                  //   ...data,
                  //   members: newMemberData.filter((str) => str !== ""),
                  // });
                  console.log(newMemberData);
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
                className={`${
                  member2 === "" ? null : "bg-slate-100 "
                } my-2 w-full rounded-2xl border border-slate-200 p-5 text-xl duration-150 placeholder:text-xl focus:outline-blue-500`}
                type="text"
                value={member2}
                onChange={(e) => {
                  setMember2(e.target.value);
                  // setData({
                  //   ...data,
                  //   members: newMemberData.filter((str) => str !== ""),
                  // });
                  console.log(newMemberData);
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
                <label className="text-2xl ">
                  ชื่อ - นามสกุล<sup className="text-red-500">*</sup>
                </label>
                <br />
                <input
                  className={`${
                    member3 === "" ? null : "bg-slate-100 "
                  } my-2 w-full rounded-2xl border border-slate-200 p-5 text-xl duration-150 placeholder:text-xl focus:outline-blue-500`}
                  type="text"
                  value={member3}
                  onChange={(e) => {
                    setMember3(e.target.value);
                    // setData({
                    //   ...data,
                    //   members: newMemberData.filter((str) => str !== ""),
                    // });
                    console.log(member3);
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
                <label className="text-2xl ">
                  ชื่อ - นามสกุล<sup className="text-red-500">*</sup>
                </label>
                <br />
                <input
                  className={`${
                    member4 === "" ? null : "bg-slate-100 "
                  } my-2 w-full rounded-2xl border border-slate-200 p-5 text-xl duration-150 placeholder:text-xl focus:outline-blue-500`}
                  type="text"
                  value={member4}
                  onChange={(e) => {
                    setMember4(e.target.value);
                    // setData({
                    //   ...data,
                    //   members: newMemberData.filter((str) => str !== ""),
                    // });
                    console.log(member4);
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
                  onClick={() => {
                    setMemberCount(memberCount - 1);
                    removeMember(memberCount);
                  }}
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
                    className={`${
                      teacher1 === "" ? null : "bg-slate-100 "
                    } my-2 w-full rounded-2xl border border-slate-200 p-5 text-xl duration-150 placeholder:text-xl focus:outline-blue-500`}
                    type="text"
                    value={teacher1}
                    onChange={(e) => {
                      setTeacher1(e.target.value);
                      // setData({
                      //   ...data,
                      //   teachers: newTeacherData,
                      // });
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
                    className={`${
                      teacher2 === "" ? null : "bg-slate-100 "
                    } my-2 w-full rounded-2xl border border-slate-200 p-5 text-xl duration-150 placeholder:text-xl focus:outline-blue-500`}
                    type="text"
                    value={teacher2}
                    onChange={(e) => {
                      setTeacher2(e.target.value);
                      // setData({
                      //   ...data,
                      //   teachers: newTeacherData,
                      // });
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
