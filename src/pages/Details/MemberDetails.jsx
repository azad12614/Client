import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { useLoaderData } from "react-router-dom";

function MemberDetails() {
  const member = useLoaderData();
  return (
    <div className="d-flex flex-column max-w-full vh-100 overflow-x-hidden bg-[#F11A7B]">
      <Navbar></Navbar>
      <div className="d-flex flex-row card card-compact m-auto bg-[#fed7aa] shadow-xl">
        <figure className="w-80 rounded-lg">
          <img src="https://picsum.photos/450/400" alt="Product image" />
        </figure>
        <div className="card-body w-80">
          <h2 className="card-title text-5xl">{member.name}</h2>
          <h1 className="my-2 text-3xl">Role: {member.role}</h1>
          <p className="my-1  text-xl">Message: {member.msg}</p>
        </div>
      </div>
      <div className="mt-auto mb-0">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default MemberDetails;
