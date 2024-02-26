import Image from "next/image"
import icon from "@/public/images/navbar/icon.svg"
import Link from "next/link"

function Navbar() {
    return (
        <div className="  flex justify-center bg-[#212731]  ">
            <div className="flex     w-[100%]   max-w-[70rem] justify-center px-16  py-3 items-center  gap-[4rem]">
                <div className="relative flex items-center">
                    <input type="text" className="border border-black rounded-md pl-[2rem] pr-2 py-1  outline-none" />
                    <Image src={icon} width={18} height={18} alt="search" className="absolute   left-3 top-1/2 transform -translate-y-1/2  h-5 w-4" />
                </div>
                <div className=" flex  " >
                    <Link className="mr-9 text-white" href={"/"}>Categories</Link>
                    <Link className="mr-9 text-white" href={"/"}>Website Builders</Link>
                    <Link className="mr-9 text-white" href={"/"}>Today&lsquo;s deals</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar