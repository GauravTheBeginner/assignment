import Link from "next/link"


function Footer() {
  return (
    <div className=" flex justify-center pt-9 bg-[#212731]  pb-20 px-16">
      <div className="flex   w-[100%] max-w-[70rem]">
        <div className="flex mr-[8rem] flex-col gap-2">
          <p className="text-[16px] font-[400] text-white" >Categories</p>
          <div className=" flex flex-col gap-2">
            <Link className="text-[13px] font-[400] text-[#B6BDC4]" href={""}>Web Builder</Link>
            <Link className="text-[13px] font-[400] text-[#B6BDC4]" href={""}>Hosting</Link>
            <Link className="text-[13px] font-[400] text-[#B6BDC4]" href={""}>Data Center</Link>
            <Link className="text-[13px] font-[400] text-[#B6BDC4]" href={""}>Robotic-Automation</Link>
          </div>
        </div>
        <div className="flex mr-[8rem] flex-col gap-2">
          <p  className="text-[16px] font-[400] text-white">Contact</p>
          <div className=" flex flex-col gap-2">
            <Link className="text-[13px] font-[400] text-[#B6BDC4]" href={""}> Contact</Link>
            <Link className="text-[13px] font-[400] text-[#B6BDC4]" href={""}>Privacy Policy</Link>
            <Link className="text-[13px] font-[400] text-[#B6BDC4]" href={""}>Terms Of Service</Link>
            <Link className="text-[13px] font-[400] text-[#B6BDC4]" href={""}> Categories</Link>
            <Link className="text-[13px] font-[400] text-[#B6BDC4]" href={""}> About</Link>
          </div>
        </div>
        <div className=" flex justify-center">
          <select  className=" outline-none  bg-[#212731] text-white" name="" id="">
            <option   className=" outline-none  bg-[#212731] text-white" value="United States">United States</option>
            <option className=" outline-none  bg-[#212731] text-white" value="India">India</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Footer