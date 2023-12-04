import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import Section from "../../components/Section";

function Home() {
  return (
    <div className="d-flex flex-column max-w-full vh-100 overflow-x-hidden bg-[#F11A7B]">
      <Navbar></Navbar>
      <Hero></Hero>
      <Section></Section>
      <div className="mt-auto mb-0">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Home;
