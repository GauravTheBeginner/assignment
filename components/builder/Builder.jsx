import Card from "./Card"


function Builder() {
  return (
    <div className=" flex md:px-16 xl:px-16 lg:px-16 2xl:px-16  px-6 py-5 justify-center">
        <div className="max-w-[70rem] w-[100%]">
            <p className=" text-[2rem] font-[400] text-[#2C384A]">Related deals you might like for</p>
            <div className="flex  px-3 flex-col md:flex-row lg:flex-row 2xl:flex-row py-3 ju gap-3">
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    </div>
  )
}

export default Builder