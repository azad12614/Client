import { useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();

  function formHandle(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const role = event.target.role.value;
    const img = event.target.img.value;
    const msg = event.target.msg.value;
    const member = {
      name,
      email,
      role,
      img,
      msg,
    };
    fetch("http://localhost:3000/add-member", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(member),
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
        method="POST"
        onSubmit={formHandle}
        className="mx-auto my-10 gap-y-2 w-96 bg-[#982176] p-5 rounded-lg border-1 border-[#fed7aa]  text-[#fed7aa]  font-semibold"
      >
        <h1 className="text-center text-4xl font-semibold text-white pb-4">
          Add Member
        </h1>
        <div className="grid md:grid-cols-1 md:gap-2">
          <div className="relative z-0 w-full mb-3 group">
            <input
              type="text"
              name="name"
              id="name"
              className="font-medium block py-2.5 px-0 w-full text-md bg-transparent border-b-2 border-[#fed7aa]  appearance-none focus:border-[#fed7aa]  focus:outline-none focus:ring-0 peer"
              placeholder=" "
              required=""
            />
            <label
              htmlFor="name"
              className="peer-focus:font-medium absolute text-md text-gray-600 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#fed7aa]  peer-focus:dark:text-[#fed7aa]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name
            </label>
          </div>
          <div className="relative z-0 w-full mb-3 group">
            <input
              type="text"
              name="email"
              id="email"
              className="font-medium block py-2.5 px-0 w-full text-md bg-transparent border-b-2 border-[#fed7aa]  appearance-none focus:border-[#fed7aa]  focus:outline-none focus:ring-0 peer"
              placeholder=" "
              required=""
            />
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute text-md text-gray-600 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#fed7aa]  peer-focus:dark:text-[#fed7aa]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              E-mail
            </label>
          </div>
          <div className="relative z-0 w-full mb-3 group">
            <input
              type="text"
              name="role"
              id="role"
              className="font-medium block py-2.5 px-0 w-full text-md bg-transparent border-b-2 border-[#fed7aa]  appearance-none focus:border-[#fed7aa]  focus:outline-none focus:ring-0 peer"
              placeholder=" "
              required=""
            />
            <label
              htmlFor="role"
              className="peer-focus:font-medium absolute text-md text-gray-600 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#fed7aa]  peer-focus:dark:text-[#fed7aa]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Role
            </label>
          </div>
        </div>
        <div className="relative z-0 w-full mb-3 group">
          <input
            type="text"
            name="img"
            id="img"
            className="font-medium block py-2.5 px-0 w-full text-md bg-transparent border-b-2 border-[#fed7aa]  appearance-none focus:border-[#fed7aa]  focus:outline-none focus:ring-0 peer"
            placeholder=" "
            required=""
          />
          <label
            htmlFor="img"
            className="peer-focus:font-medium absolute text-md text-gray-600 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#fed7aa]  peer-focus:dark:text-[#fed7aa]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Image URL
          </label>
        </div>{" "}
        <div className="relative z-0 w-full mb-3 group">
          <textarea
            name="msg"
            id="msg"
            rows={4}
            className="mb-3 block p-2.5 w-full text-md text-[#fed7aa]  bg-transparent rounded-lg border-1 border-[#fed7aa]  focus:ring-[#fed7aa]  focus:border-[#fed7aa]  placeholder-[#fed7aa] "
            placeholder="Leave a comment..."
            defaultValue={""}
          />
        </div>{" "}
        <button
          type="submit"
          className="btn text-center text-white bg-[#3E001F] hover:bg-transparent border-0"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default Form;
