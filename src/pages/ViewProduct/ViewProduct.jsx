import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Cards from "../../components/Cards";

function AddProduct() {
  return (
    <div className="d-flex flex-column max-w-full vh-100 overflow-x-hidden bg-[#F11A7B]">
      <Navbar></Navbar>
      <h1 className="text-center text-4xl font-semibold text-white my-4">
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
