import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

function AddReview() {
  return (
    <>
       <div className="d-flex flex-column min-vh-100 max-w-100">
      <Navbar></Navbar>
      <div className="mt-auto mb-0">
        <Footer></Footer>
      </div>
    </div>
    </>
  );
}

export default AddReview;
