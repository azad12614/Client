import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import Section from "../../components/Section";
import Cards from "../../components/Cards";

function Home() {
  return (
    <div className="d-flex flex-column max-w-full vh-100 overflow-x-hidden bg-dark">
      <Navbar></Navbar>
      <Hero></Hero>
      <Cards></Cards>
      <Section></Section>
      <div className="mt-auto mb-0">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Home;
