import { useLoaderData, useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();
  const member = useLoaderData();

  function formHandle(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const role = event.target.role.value;
    const image = event.target.image.value;
    const msg = event.target.msg.value;
    const team = {
      name,
      email,
      role,
      image,
      msg
    };
    fetch(`http://localhost:3000/update-member/${member?._id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(team),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          navigate("/manage-member");
        }
      });
  }
  return (
    <>
      <form
        method="PUT"
        onSubmit={formHandle}
        className="m-auto w-96 bg-[#161A30] px-10 pt-4 pb-3 rounded-lg border-1 border-[#B6BBC4] text-[#B6BBC4] font-semibold"
      >
        <div className="grid md:grid-cols-1 md:gap-2">
        <h1 className="text-center text-4xl font-semibold text-white pb-4">Update Member</h1>
        <div className="relative z-0 w-full mb-3 group">
            <input
              type="text"
              name="name"
              id="name"
              className="font-medium block py-2.5 px-0 w-full text-md bg-transparent border-b-2 border-[#B6BBC4] appearance-none focus:border-[#B6BBC4] focus:outline-none focus:ring-0 peer"
            placeholder=" "
              required=""
              defaultValue={member?.name}
            />
            <label
              htmlFor="name"
              className="peer-focus:font-medium absolute text-md text-[#B6BBC4] dark:text-[#B6BBC4] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#B6BBC4] peer-focus:dark:text-[#B6BBC4] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name
            </label>
          </div>
        <div className="relative z-0 w-full mb-3 group">
            <input
              type="text"
              name="email"
              id="email"
              className="font-medium block py-2.5 px-0 w-full text-md bg-transparent border-b-2 border-[#B6BBC4] appearance-none focus:border-[#B6BBC4] focus:outline-none focus:ring-0 peer"
              placeholder=" "
              required=""
              defaultValue={member?.email}
            />
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute text-md text-[#B6BBC4] dark:text-[#B6BBC4] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#B6BBC4] peer-focus:dark:text-[#B6BBC4] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              E-mail
            </label>
          </div>
          <div className="relative z-0 w-full mb-3 group">
            <input
              type="text"
              name="role"
              id="role"
              className="font-medium block py-2.5 px-0 w-full text-md bg-transparent border-b-2 border-[#B6BBC4] appearance-none focus:border-[#B6BBC4] focus:outline-none focus:ring-0 peer"
              placeholder=" "
              required=""
              defaultValue={member?.role}
            />
            <label
              htmlFor="role"
              className="peer-focus:font-medium absolute text-md text-[#B6BBC4] dark:text-[#B6BBC4] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#B6BBC4] peer-focus:dark:text-[#B6BBC4] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Role
            </label>
          </div>
        </div>
        <div className="relative z-0 w-full mb-3 group">
          <input
            type="text"
            name="image"
            id="image"
            className="font-medium block py-2.5 px-0 w-full text-md bg-transparent border-b-2 border-[#B6BBC4] appearance-none focus:border-[#B6BBC4] focus:outline-none focus:ring-0 peer"
            placeholder=" "
            required=""
            defaultValue={member?.image}
          />
          <label
            htmlFor="image"
            className="peer-focus:font-medium absolute text-md text-[#B6BBC4] dark:text-[#B6BBC4] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#B6BBC4] peer-focus:dark:text-[#B6BBC4] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Image URL
          </label>
        </div>{" "}
        <div className="relative z-0 w-full mb-3 group">
          <textarea
            name="msg"
            id="msg"
            rows={4}
            className="mb-3 block p-2.5 w-full text-md text-[#B6BBC4] bg-transparent rounded-lg border-1 border-gray-300 focus:ring-[#B6BBC4] focus:border-[#B6BBC4] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#B6BBC4] dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Leave a comment..."
            defaultValue={member?.msg}
          />
        </div>{" "}
        <button
          type="submit"
          className="btn text-center text-[#fed7aa] bg-[#31304D] hover:bg-transparent border-0"
        >
          Update
        </button>
      </form>
    </>
  );
}

export default Form;
