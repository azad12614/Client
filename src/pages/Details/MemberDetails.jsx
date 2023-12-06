import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { useLoaderData } from "react-router-dom";

function MemberDetails() {
  const member = useLoaderData();
  const pic = member?.image;
  return (
    <div className="d-flex flex-column max-w-full vh-100 overflow-x-hidden bg-[#31304D]">
      <Navbar></Navbar>
      <h1 className="text-center text-4xl font-semibold text-white my-4">
        Member Details
      </h1>
      <div className="card card-side bg-[#161A30] shadow-xl m-auto max-w-7xl">
        <figure>
          <img src={`${pic}`} alt="member" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-[#FFFFFF] text-bold text-2xl">{member.name}</h2>
          <div className="card-actions justify-center">
            <div className="text-center text-[#fed7aa] text-bold text-xl rounded-lg hover:bg-transparent border-0">
              {member.role}
            </div>
          </div>
          <p className="text-[#FFFFFF]">{member.msg}...</p>
        </div>
      </div>
      <div className="mt-auto mb-0">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default MemberDetails;
