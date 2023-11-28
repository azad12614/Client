import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

function AddReview() {
  return (
    <>
      <div className="d-flex flex-column max-w-full vh-100 overflow-x-hidden bg-dark">
        <Navbar></Navbar>
        <div className="mt-auto mb-0">
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default AddReview;
