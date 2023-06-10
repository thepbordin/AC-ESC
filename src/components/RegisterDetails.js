import React from 'react'
import Arrow from './Arrow'
import '../App.css'
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
      <div className='grid lg:grid-cols-3 lg:px-40 mt-14 gap-10'>
        <div className='bg-white lg:col-span-2 p-14 rounded-[30px]'>
            <span >นำเสนอด้วย</span>
            <h2 className='text-4xl font-black'>วาจา</h2>
        </div>
        <div className='relative bg-white p-14 rounded-[30px] detailed-box'>
            <Arrow className='absolute top-5 right-5 scale-50'/>
            <span >นำเสนอด้วย</span>
            <h2 className='text-4xl font-black'>โปสเตอร์</h2>
        </div>
      </div>
    </>
  )
}
