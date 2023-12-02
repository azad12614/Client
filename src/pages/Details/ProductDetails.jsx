import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { useLoaderData } from "react-router-dom";

function ProductDetails() {
  const product = useLoaderData();
  return (
    <div className="d-flex flex-column max-w-full vh-100 overflow-x-hidden bg-[#F11A7B]">
      <Navbar></Navbar>
      <h1 className="text-center text-4xl font-semibold text-white pb-4">Product Details</h1>
      <div className="card card-side bg-[#fed7aa] shadow-xl m-auto max-w-7xl">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.name}</h2>
          <p className="pt-4">Price: {product.price}</p>
          <p>Available Items: {product.items}</p>
          <div className="card-actions justify-center">
            <div className="btn text-center text-white bg-[#3E001F] hover:bg-transparent border-0 m-2">
              {product.date}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-auto mb-0">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default ProductDetails;
