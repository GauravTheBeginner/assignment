import Footer from "@/components/footer/Footer";
import Navbar from "@/components/header/Navbar";
import Hero from "@/components/hero/Hero";


export default function Home() {
  return (
      <div className=" flex justify-center flex-col">
        <Navbar/>
        <Hero/>
        <Footer/>
      </div>
  );
}
