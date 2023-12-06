import { useLoaderData,useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { TbHttpDelete } from "react-icons/tb";
import { GrUpdate } from "react-icons/gr";

function Table() {
  const navigate = useNavigate();
  const team = useLoaderData();
  function handleDelete(id){
    fetch(`http://localhost:3000/delete-member/${id}`,{
      method: "DELETE"
    }).then((res) => res.json())
    .then((data) => {
      if (data.acknowledged) {
        navigate("/manage-member");
      }
    })
    
  }
  return (
    <>
      <div className="my-auto mx-auto md:mx-40 lg:mx-96">
        <h1 className="text-center text-4xl font-semibold text-white pb-4">
          Manage Team 
        </h1>
        <table className="table table-dark">
          <thead>
            <tr className="border-[#000000]">
              <th className="text-center font-bold text-lg ">Name</th>
              <th className="text-center font-bold text-lg ">E-mail</th>
              <th className="text-center font-bold text-lg ">Role</th>
              <th className="text-center font-bold text-lg ">Actions</th>
            </tr>
          </thead>
          <tbody>
            {team?.map((member) => (
              <tr className="hover" key={member._id}>
                <td className="text-center text-lg border-[#000000] ">{member.name}</td>
                <td className="text-center text-lg border-[#000000] ">{member.email}</td>
                <td className="text-center text-lg border-[#000000] ">{member.role}</td>
                <td className="text-center text-lg border-[#000000] ">
                  <Link to={`/member/${member?._id}`}>
                    <button className="btn btn-sm md:btn-md lg:btn-lg btn-outline btn-accent mx-1"> <FaEye></FaEye> </button>
                  </Link>
                  <button className="btn btn-sm md:btn-md lg:btn-lg btn-outline btn-warning  mx-1" onClick={()=>handleDelete(member?._id)}> <TbHttpDelete></TbHttpDelete> </button>
                  <Link to={`/update-member/${member?._id}`}>
                    <button className="btn btn-sm md:btn-md lg:btn-lg btn-outline btn-primary mx-1"> <GrUpdate></GrUpdate> </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
