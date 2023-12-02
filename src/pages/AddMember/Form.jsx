import { useNavigate } from "react-router-dom";

function Form() {
  
  const navigate = useNavigate();

  function formHandle(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const role = event.target.role.value;
    const img = event.target.img.value;
    const msg = event.target.msg.value;
    const member = {
      name,role,img,msg
    };
    fetch("http://localhost:3000/add-member", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(member),
    })
    .then((res) => res.json())
    .then((data) => {
      if(data.acknowledged){
        navigate('/');
      }
    });
  }
  return (
    <>
      <form
        method="POST"
        onSubmit={formHandle}
        className="m-auto p-5 rounded-lg border-1 border-success text-success font-semibold"
      >
        <div className="grid md:grid-cols-1 md:gap-2">
          <div className="relative z-0 w-full mb-3 group">
            <input
              type="text"
              name="name"
              id="name"
              className="font-medium block py-2.5 px-0 w-full text-md bg-transparent border-b-2 border-success appearance-none focus:border-success focus:outline-none focus:ring-0 peer"
              placeholder=" "
              required=""
            />
            <label
              htmlFor="name"
              className="peer-focus:font-medium absolute text-md text-gray-600 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-success peer-focus:dark:text-success peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name
            </label>
          </div>
          <div className="relative z-0 w-full mb-3 group">
            <input
              type="text"
              name="role"
              id="role"
              className="font-medium block py-2.5 px-0 w-full text-md bg-transparent border-b-2 border-success appearance-none focus:border-success focus:outline-none focus:ring-0 peer"
              placeholder=" "
              required=""
            />
            <label
              htmlFor="role"
              className="peer-focus:font-medium absolute text-md text-gray-600 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-success peer-focus:dark:text-success peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
            className="font-medium block py-2.5 px-0 w-full text-md bg-transparent border-b-2 border-success appearance-none focus:border-success focus:outline-none focus:ring-0 peer"
              placeholder=" "
            required=""
          />
          <label
            htmlFor="img"
            className="peer-focus:font-medium absolute text-md text-gray-600 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-success peer-focus:dark:text-success peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Image URL
          </label>
        </div>{" "}
        <div className="relative z-0 w-full mb-3 group">
        <textarea
        name="msg"
              id="msg"
              rows={4}
              className="mb-3 block p-2.5 w-full text-md text-success bg-transparent rounded-lg border-1 border-success focus:ring-success focus:border-success placeholder-success"
              placeholder="Leave a comment..."
              defaultValue={""}
            />
        </div>{" "}
        <button
          type="submit"
          className="text-white bg-success hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-3 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default Form;
