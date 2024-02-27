import Image from 'next/image'
import React from 'react'
import card from "@/public/images/card/card.svg"
import down2 from "@/public/images/card/down2.svg"
import sign from "@/public/images/card/sign.svg"


function CardWrapper({ award, img, title, text, content, value, stars, info, number, name }) {
  return (

    <div className=' shadow-md gap-0 md:gap-[3rem] lg:gap-[3rem] xl:gap-[3rem] border-2 rounded-lg  flex-col md:flex-row lg:flex-row xl:flex-row      px-6 flex'>
      <div className=' flex  items-center gap-2    justify-between     flex-col '>
        {award && (
          <div className=' md:ml-[-5.5rem] xl:ml-[-5.5rem] lg:ml-[-5.5rem] 2xl:ml-[-5.5rem] w-full  flex justify-start  md:-mt-4  xl:-mt-4  2xl:-mt-4  mt-2  '>
            <div className='w-[9rem] bg-[#FF7724] md:rounded-r-xl xl:rounded-r-xl lg:rounded-r-xl rounded-lg py-2 px-2 flex gap-2 '>
              <Image src={img} alt='champion' />
              <p className='text-[16px] text-white'>{award}</p>
            </div>
          </div>
        )}

        <div className=' w-full  mr-[5.5rem]'>
          <p className='border-[1px] ml-0  relative  top-[1rem] text-left text-[20px] text-[#626E79] flex justify-center items-center rounded-full  h-10 w-10'>{value}</p>
        </div>
        <div className=' flex justify-center flex-col mb-0 md:mb-12 xl:mb-12 2xl:mb-12 gap-2   items-center'>
        <Image className=' w-[50rem] md:w-[30rem] xl:w-[30rem]  2xl:w-[30rem] h-[10rem] md:h-[8rem] xl:h-[8rem] lg:h-[8rem] 2xl:h-[8rem] ' src={card} alt='card' />
        <p>{name}</p>
        </div>
      </div>
      <div className='flex flex-col  pt-[3rem]  pb-3 justify-between gap-2  '>
        <p className='text-[16px] text-black  font-[400] '> <span className='text-[#4B5665] font-[700]'>{title}</span>{text}</p>
        <p className='text-[#2C384A] font-[700]'>Main highlights</p>
        <p className='text-[#4B5665]  text-[16px] py-3 px-2 '>{content}</p>
        <div className=" flex items-center  gap-1">
          <p className="text-[#1B88F4] text-[18px] font-[400]">Show more</p>
          <Image className=" cursor-pointer" src={down2} alt="left" />
        </div>
      </div>
      <div className=' flex items-center gap-4   justify-between gap-5rem flex-col '>
        <div className='bg-[#F3F9FF] flex   gap-2  px-2 py-3 w-full  rounded-b-0   md:rounded-b-3xl xl:rounded-b-3xl flex-col   2xl:rounded-b-3xl justify-center items-center h-auto md:h-[9rem] xl:h-[9rem] 2xl:h-[9rem]  md:w-[10rem] xl:w-[10rem] 2xl:w-[10rem] lg:w-[10rem] '>
          <div className='flex-row md:flex-col xl:flex-col 2xl:flex-col justify-center items-center flex'>
          <div className='flex items-start'>
            <p className='text-[32px] text-[#074786]'>{number}</p>
            <Image alt='sign' src={sign} />
          </div>
          <p className='text-[14px] text-[#074786]'>{info}</p>
          </div>
          <Image src={stars} alt='star1' />
        
        </div>
        <button className='rounded-xl mb-3 bg-[#1B88F4]  md:w-[13rem] xl:w-[13rem] lg:w-[13rem] 2xl:w-[13rem] w-full py-3 text-white px-4'>View</button>
      </div>
    </div>

  )
}

export default CardWrapper