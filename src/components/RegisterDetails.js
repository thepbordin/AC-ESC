import React from 'react'

export default function RegisterDetails() {
  return (
    <>
        <div className="text-center mt-28 ">
        <h1 className="font-black mx-auto text-5xl text-[#2A384A] ">
        สมัครเลย!
        </h1>
        <div className="bg-blue-500 max-w-max mx-auto px-12 py-0.5 rounded-lg mt-3">
          <h2 className="font-black uppercase text-xl inline text-white tracking-wide">
          เลือกประเภท
          </h2>
        </div>
      </div>
      <div className='grid grid-cols-3 px-40 mt-14 gap-10'>
        <div className='bg-white col-span-2 p-20 rounded-[50px]'>
            <span >นำเสนอด้วย</span>
            <h2 className='text-4xl font-black'>วาจา</h2>
        </div>
        <div className='bg-white p-20 rounded-[50px]'>
            <span >นำเสนอด้วย</span>
            <h2 className='text-4xl font-black'>โปสเตอร์</h2>
        </div>
      </div>
    </>
  )
}
