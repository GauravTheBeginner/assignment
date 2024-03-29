

function Deals() {
    return (
        <div className="flex  justify-center md:px-16 xl:px-16 lg:px-16 2xl:px-16  px-6 py-5">
            <div className="flex flex-wrap gap-3 justify-between items-center max-w-[70rem] w-[100%]">
               <p className=" md:text-[30px] xl:text-[30px] 2xl:text-[30px] text-[2rem] text-[#5C6874] w-96 font-[400]">Sign up and get exclusive special deals</p>
                <div class="flex">
                    <input type="text" class="px-4 py-2 border outline-none rounded-l-[12px]" />
                    <button class="px-4 py-2 bg-[#1B88F4] text-[14px] text-white  rounded-r-[12px]">Sign Up</button>
                </div>

            </div>
        </div>
    )
}

export default Deals