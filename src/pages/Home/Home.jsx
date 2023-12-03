import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import Section from "../../components/Section";
import Cards from "../../components/Cards";
import Carousel from "../../components/Carousel";

function Home() {
  return (
    <div className="d-flex flex-column max-w-full vh-100 overflow-x-hidden bg-[#F11A7B]">
      <Navbar></Navbar>
      <Hero></Hero>
      {/* <h1 className="text-white text-center mt-3 mb-2 text-5xl font-bold">
        Our Products
      </h1>
      <Cards></Cards>
      <h1 className="text-white text-center mt-3 mb-2 text-5xl font-bold">
        Our Team
      </h1>
      <Carousel></Carousel> */}
      <Section></Section>
      <div className="mt-auto mb-0">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Home;
