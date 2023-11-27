import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import Section from "../../components/Section";
import Cards from "../../components/cards";
import Stat from "../../components/stat";

function Home() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-dark">
      <Navbar></Navbar>
      <Hero></Hero>
      <Cards></Cards>
      <Section></Section>
      <Stat></Stat>
      <div className="mt-auto mb-0">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Home;
