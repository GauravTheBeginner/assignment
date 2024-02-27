import Image from "next/image"
import icon from "@/public/images/navbar/icon.svg"
import open from "@/public/images/navbar/open.svg"
import close from "@/public/images/navbar/close.svg"
import Link from "next/link"

function Navbar() {
    return (
        <div className="  flex justify-center bg-[#212731]  ">
            <div className="flex     w-[100%]   max-w-[70rem] justify-between md:justify-center xl:justify-center 2xl:justify-center md:px-16 xl:px-16 lg:px-16 2xl:px-16  px-6 py-3 items-center  gap-[2rem] md:gap-[4rem] xl:gap-[4rem]  2xl:gap-[4rem]">
                <div className="relative flex items-center">
                    <input type="text" className="border border-black rounded-md pl-[2rem] pr-2 py-1  outline-none" />
                    <Image src={icon} width={18} height={18} alt="search" className="absolute   left-3 top-1/2 transform -translate-y-1/2  h-5 w-4" />
                </div>
                <div className="hidden md:flex xl:flex lg:flex 2xl:flex " >
                    <Link className="mr-9 text-[13px] text-white" href={"/"}>Categories</Link>
                    <Link className="mr-9 text-[13px] text-white" href={"/"}>Website Builders</Link>
                    <Link className="mr-9 text-[13px] text-white" href={"/"}>Today&lsquo;s deals</Link>
                </div>
                <div className=" flex md:hidden xl:hidden 2xl:hidden   ">
                   <Image  className=" h-[2rem] ]" src={open} alt="open"/>
                </div>
            </div>
        </div>
    )
}

export default Navbar