import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Cards from "../../components/Cards";
import Section from "../../components/Section";

function AddProduct() {
  return (
    <div className="d-flex flex-column max-w-full vh-100 overflow-x-hidden bg-[#31304D]">
      <Navbar></Navbar>
      <Section></Section>
      <h1 className="text-center text-4xl font-semibold text-white my-3">
          Our Products
        </h1>
      <Cards></Cards>
      <div className="mt-auto mb-0">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default AddProduct;
