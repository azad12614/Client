import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

function AddProduct() {
  return (
    <div className="d-flex flex-column max-w-full vh-100 overflow-x-hidden bg-[#31304D]">
      <Navbar></Navbar>
      <h1 className="text-center text-4xl font-semibold text-white my-4">
        Our Team
      </h1>
      <Carousel></Carousel>
      <div className="mt-auto mb-0">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default AddProduct;
