import Footer from "@/components/footer/Footer";
import Navbar from "@/components/header/Navbar";
import Hero from "@/components/hero/Hero";
import Deals from "@/components/signin/Deals";


export default function Home() {
  return (
      <div className=" flex justify-center flex-col">
        <Navbar/>
        <Hero/>
        <Deals/>
        <Footer/>
      </div>
  );
}
