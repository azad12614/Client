import Footer from "../../components/Footer";
import Form from "./Form";
import Navbar from "../../components/Navbar";

function ContactUS() {
  return (
    <div className="d-flex flex-column min-vh-100 max-w-100">
      <Navbar></Navbar>
      <Form></Form>
      <div className="mt-auto mb-0">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default ContactUS;
