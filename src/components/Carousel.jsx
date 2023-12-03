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
      <div className="bg-[#fed7aa] shadow-xl" key={member._id}>
        <div className="m-auto border-2 border-dark">
          <figure>
            <img className="object-cover h-52 w-64" src={`${pic}`} alt="Member image" />
          </figure>
        </div>
        <div className="card-body">
          <h4 className="card-title justify-evenly font-bold -mt-5 mb-2">{member.name}</h4>
          <p className="bg-[#982176] p-1 rounded-lg mx-auto font-semibold ">{member.role}</p>
          <div className="card-actions justify-evenly mt-3 -mb-3">
            <FaLinkedinIn></FaLinkedinIn>
            <FaFacebook></FaFacebook>
            <FaXTwitter></FaXTwitter>
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
