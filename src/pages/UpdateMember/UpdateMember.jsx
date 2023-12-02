import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Form from "./Form";

function UpdateMember() {
  return (
    <div className="d-flex flex-column max-w-full vh-100 overflow-x-hidden bg-[#F11A7B]">
      <Navbar></Navbar>
      <Form></Form>
      <div className="mt-auto mb-0">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default UpdateMember;
