import { Link } from "react-router-dom";
import React from "react";
import { useEffect, useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Carousel = () => {
  const [team, setTeam] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/all-members`)
      .then((res) => res.json())
      .then((data) => setTeam(data));
  }, []);

  function single(member) {
    const pic = member?.image;
    console.log(pic);
    return (
      <div className="bg-[#161A30] shadow-xl mb-4" key={member._id}>
        <div className="m-auto border-2 border-dark">
          <figure>
            <img
              className="object-cover h-52 w-64"
              src={`${pic}`}
              alt="Member image"
            />
          </figure>
        </div>
        <div className="card-body text-[#fed7aa]">
          <h4 className="card-title justify-evenly font-bold text-2xl -mt-5 mb-2">
            {member.name}
          </h4>
          <h1 className="btn text-center text-[#FFFFFF] -mt-3 font-bold text-xl bg-transparent border-0">
            {member.role}
          </h1>
          <div className="card-actions justify-evenly">
            <Link to={`/member/${member?._id}`}>
              <button className="btn text-center text-[#fed7aa] bg-[#31304D] hover:bg-transparent border-0">
                Details
              </button>
            </Link>
            <button
              className="btn text-center text-[#fed7aa] bg-[#31304D] hover:bg-transparent border-0"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              E-mail
            </button>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box bg-[#31304D]">
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">
                  You can contact with me by the E-mail address!!!<br></br>
                  E-mail: {`${member?.email}`};
                </p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn bg-[#161A30]">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
          <div className="card-actions justify-evenly mt-3 -mb-3">
            <a href="https://www.linkedin.com/" target="_blank">
              <FaLinkedinIn></FaLinkedinIn>
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <FaFacebook></FaFacebook>
            </a>
            <a href="https://twitter.com/login" target="_blank">
              <FaXTwitter></FaXTwitter>
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mx-auto">
      {team.map((member) => single(member))}
    </div>
  );
};

export default Carousel;
