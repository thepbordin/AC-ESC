import React from "react";

export default function Timeline() {
  const TimelineList = [
    {
      icon: "register.png",
      title: "ลงทะเบียนผู้เข้าใช้งาน และส่งชื่อโครงงาน",
      date: "12 - 16 มิถุนายน 2566",
    },
    { icon: "files.png", title: "ส่งบทคัดย่อ", date: "30 มิถุนายน 2566" },
    {
      icon: "conference.png",
      title: "ประชุมคณะกรรมการแต่ละสาขา",
      date: "5-7 กรกฎาคม 2566",
    },
    {
      icon: "conference.png",
      title: "ประชุมคณะกรรมการแต่ละสาขา",
      date: "5-7 กรกฎาคม 2566",
    },
    {
      icon: "conference.png",
      title: "ประชุมคณะกรรมการแต่ละสาขา",
      date: "5-7 กรกฎาคม 2566",
    },
    {
      icon: "conference.png",
      title: "ประชุมคณะกรรมการแต่ละสาขา",
      date: "5-7 กรกฎาคม 2566",
    },
  ];
  return (
    <>
      <div className="text-center mt-5">
        <h1 className="font-black mx-auto text-5xl text-[#2A384A] ">
          กำหนดการณ์
        </h1>
        <div className="bg-blue-500 max-w-max mx-auto px-12 py-0.5 rounded-lg mt-3">
          <h2 className="font-black uppercase text-xl inline text-white ">
            Timeline
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:px-40 gap-y-16 mt-14">
        {/* TODO: Add view timeline as modal */}
        {TimelineList.map((item, index) => (
          <div className="flex flex-col items-center text-center" key={index}>
            <div className="bg-white aspect-square grid place-items-center p-5 rounded-[30px]">
              <img src={item.icon} className="max-w-[150px]" alt="" />
            </div>

            <span className="font-bold text-xl mt-5">{item.title}</span>
            <span className="text-[#999999] font-bold text-lg">
              {item.date}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
