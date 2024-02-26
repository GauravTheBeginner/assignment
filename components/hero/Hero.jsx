import Image from "next/image"
import left from "@/public/images/hero/left.svg"
import explain from "@/public/images/hero/explain.svg"
import down from "@/public/images/hero/down.svg"

function Hero() {
    return (
        <div className="flex justify-center py-5 px-16 ">
            <div className="w-[100%] flex flex-col gap-4 max-w-[70rem]">
                <p className=" text-[3rem]   font-[400]">Best Website builders in the US</p>
                <div className=" flex justify-between border- py-2 border-[#E1E4E6] border-2  border-l-0 border-r-0">
                    <div className="flex gap-5 ">
                        <div className=" flex gap-2">
                            <Image src={left} alt="left" />
                            <p className="text-[black] ">Last Updated - February 22, 2020</p>
                        </div>
                        <div className=" flex gap-2">
                            <Image src={explain} alt="left" />
                            <p className="text-[black]">Advertising Disclosure</p>
                        </div>
                    </div>
                    <div className=" flex gap-2">
                        <p className="text-[black]">Top Relevant</p>
                        <Image className=" cursor-pointer" src={down} alt="left" />
                    </div>
                </div>
                <div className="flex gap-[1rem]">
                    <p className="px-4 py-2   border-[1px] text-[black] text-[14px] font-[400]   rounded-xl"> Tools</p>
                    <p className="px-4 py-2   border-[1px] text-[black] text-[14px] font-[400]   rounded-xl">AWS Builder</p>
                    <p className="px-4 py-2   border-[1px] text-[black] text-[14px] font-[400]   rounded-xl"> Start Build</p>
                    <p className="px-4 py-2   border-[1px] text-[black] text-[14px] font-[400]   rounded-xl"> Build Supplies</p>
                    <p className="px-4 py-2   border-[1px] text-[black] text-[14px] font-[400]   rounded-xl"> Tooling</p>
                    <p className="px-4 py-2   border-[1px] text-[black] text-[14px] font-[400]   rounded-xl"> BlueHosting</p>
                </div>
               
                     <div className="flex" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                            <li className="inline-flex items-center">
                                <a href="#" className="inline-flex items-center text-[15px] hover:text-black hover:cursor-pointer font-[400] text-[#727D87]  ">
                                    <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                    </svg>
                                    Home
                                </a>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    <a href="#" className="ms-1 text-[15px] hover:text-black hover:cursor-pointer font-[400] text-[#727D87]  md:ms-2 ">Hosting for all</a>
                                </div>
                            </li>
                            <li aria-current="page">
                                <div className="flex items-center">
                                    <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    <span className="ms-1 text-[15px] hover:text-black hover:cursor-pointer font-[400] text-[#727D87] md:ms-2 ">Hosting</span>
                                </div>
                            </li>
                            <li aria-current="page">
                                <div className="flex items-center">
                                    <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    <span className="ms-1 text-[15px] hover:text-black hover:cursor-pointer font-[400] text-[#727D87] md:ms-2 ">Hosting6</span>
                                </div>
                            </li>
                            <li aria-current="page">
                                <div className="flex items-center">
                                    <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    <span className="ms-1 text-[15px] hover:text-black hover:cursor-pointer font-[400] text-[#727D87] md:ms-2 ">Hosting5</span>
                                </div>
                            </li>
                        </ol>
                    </div>

                </div>
            
        </div>
    )
}

export default Hero