import Builder from "@/components/builder/Builder";
import Card from "@/components/card/Card";
import Footer from "@/components/footer/Footer";
import CardWrapper from "@/components/generalComponents/CardWrapper";
import Navbar from "@/components/header/Navbar";
import Hero from "@/components/hero/Hero";
import Deals from "@/components/signin/Deals";


export default function Home() {
  return (
    <div className=" flex justify-center flex-col">
      <Navbar />
      <Hero />
      <Card/>
      <Builder />
      <Deals />
      <Footer />
    </div>
  );
}
