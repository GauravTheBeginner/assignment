import Image from 'next/image'
import React from 'react'
import card from "@/public/images/card/card.svg"
function Card() {
  return (
    <div className='  shadow-md flex flex-col items-center px-5 rounded-lg py-7 gap-[2rem]     '>
        <div className=' '>
            <Image src={card} className=' ' alt='card' />
        </div>
        <div className='flex flex-col gap-2  '>
            <div className='flex  gap-2'>
                <p className='px-2  bg-[#F2F4F7] text-[14px] text-[#074786] rounded-lg  border-none font-400 py-1'>20% Off</p>
                <p className='px-2  bg-[#F2F4F7] text-[14px] text-[#074786] rounded-lg  border-none font-400 py-1' >Limited time</p>
            </div>
            <p className=' text-[16px] text-center font-[700]   text-[#626E79]'>Webbuilder 1</p>
            <p className=' text-[16px] font-400 text-[#626E79]'> Computer Modern clasic with wix support</p>
            <div className=' flex  gap-2 items-end'>
                <p className='text-[20px] text-[#5C6874]'>$39.96</p>
                <div className=' flex gap-2'>
                    <p className=' text-[#9FA9B3] text-[14px]'> $49.96</p>
                    <p className=' text-[#EF4C5D] text-[13px]'>(20% Off)</p>
                </div>
            </div>
            <button className=' w-full  py-3   text-[16px] text-white bg-[#1B88F4] rounded-lg'>View Deal</button>
        </div>
    </div>
  )
}

export default Card