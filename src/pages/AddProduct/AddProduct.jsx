import Footer from "../../components/Footer";
import Form from "./Form";
import Navbar from "../../components/Navbar";

function AddProduct() {
  return (
    <div className="d-flex flex-column max-w-full vh-100 overflow-x-hidden bg-[#31304D]">
      <Navbar></Navbar>
      <Form></Form>
      <div className="mt-auto mb-0">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default AddProduct;
