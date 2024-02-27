import React from 'react'
import CardWrapper from '../generalComponents/CardWrapper'
import Wrapper from '../generalComponents/Wrapperr'
import a from "@/public/images/card/a.svg"
import b from "@/public/images/card/b.svg"
import star1 from "@/public/images/card/star1.svg"
import star2 from "@/public/images/card/star2.svg"
import star3 from "@/public/images/card/star3.svg"
import star4 from "@/public/images/card/star4.svg"

function Card() {
  return (
    <div className='flex justify-center md:px-16 xl:px-16 lg:px-16 2xl:px-16 px-6 py-5'>
      <div className='flex flex-col gap-8 w-[100%] max-w-[68rem]'>
        <CardWrapper name="Builder 1" value="1" award="Best Choice" img={a} text="Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)" title="WixPro 72-Inch Responsive Website Builder-" content="[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations" info="Exceptional" stars={star1} number="9.8" />
        <CardWrapper name="Builder" value="2" award="Best Value" img={b} text="Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)" title="SiteCraft 68-Inch Ultimate Web Design Studio-" content="[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides." info="Excellent" stars={star2} number="9.5" />
        <CardWrapper name="Builder 1" value="3" award="" img={b} text="Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)" title="WixPro 72-Inch Responsive Website Builder-" content="[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides." info="Exceptional" stars={star3} number="9.3" />
        <Wrapper name="CDK" value="4" award="" img={b} text="An extensive library of widgets and apps, and detailed step-by-step guides" title="CDK Resposive Builder: "  info="Very Good" stars={star4} number="9.1" />
      </div>
    </div>
  )
  }
export default Card
