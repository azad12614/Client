import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { useLoaderData } from "react-router-dom";

function MemberDetails() {
  const member = useLoaderData();
  return (
    <div className="d-flex flex-column max-w-full vh-100 overflow-x-hidden bg-dark">
      <Navbar></Navbar>
      <div className="card card-compact text-center my-auto mx-auto w-72 text-white bg-base-100 shadow-xl">
        <figure>
          <img src="https://picsum.photos/450/400" alt="Product image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-6xl">{member.name}</h2>
          <h1 className="my-3 text-4xl">Role: {member.role}</h1>
          <p className="my-3  text-xl">Message: {member.msg}</p>
        </div>
      </div>
      <div className="mt-auto mb-0">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default MemberDetails;
