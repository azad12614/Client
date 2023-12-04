import { useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();

  function formHandle(event) {
    event.preventDefault();
    const fname = event.target.first_name.value;
    const lname = event.target.last_name.value;
    const subject = event.target.subject.value;
    const message = event.target.message.value;
    const product = {
      fname,
      lname,
      subject,
      message
    };
    fetch("http://localhost:3000/contact-us", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          navigate("/");
        }
      });
  }
  return (
    <>
      <form
        method="POST"
        onSubmit={formHandle}
        className="m-auto gap-y-2 w-96 bg-[#982176] p-5 rounded-lg border-1 border-[#fed7aa] text-[#fed7aa] font-semibold">
      <h1 className="text-center text-4xl font-semibold text-white pb-4">Contact Us</h1>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-3 group">
            <input
              type="text"
              name="first_name"
              id="first_name"
              className="font-medium block py-2.5 px-0 w-full text-md bg-transparent border-b-2 text-[#fed7aa] border-[#fed7aa] appearance-none dark:text-[#fed7aa] dark:border-[#fed7aa] dark:focus:border-[#fed7aa] focus:outline-none focus:ring-0 focus:border-[#fed7aa] peer"
              placeholder=" "
              required="y"
            />
            <label
              htmlFor="first_name"
              className="peer-focus:font-medium absolute text-md text-gray-600 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#fed7aa] peer-focus:dark:text-[#fed7aa] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              First name
            </label>
          </div>
          <div className="relative z-0 w-full mb-3 group">
            <input
              type="text"
              name="last_name"
              id="last_name"
              className="font-medium block py-2.5 px-0 w-full text-md bg-transparent border-b-2 text-[#fed7aa] border-[#fed7aa] appearance-none dark:text-[#fed7aa] dark:border-[#fed7aa] dark:focus:border-[#fed7aa] focus:outline-none focus:ring-0 focus:border-[#fed7aa] peer"
              placeholder=" "
              required="y"
            />
            <label
              htmlFor="last_name"
              className="peer-focus:font-medium absolute text-md text-gray-600 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#fed7aa] peer-focus:dark:text-[#fed7aa] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Last name
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-3 group">
            <input
              type="text"
              name="subject"
              id="subject"
              className="font-medium block py-2.5 px-0 w-full text-md bg-transparent border-b-2 text-[#fed7aa] border-[#fed7aa] appearance-none dark:text-[#fed7aa] dark:border-[#fed7aa] dark:focus:border-[#fed7aa] focus:outline-none focus:ring-0 focus:border-[#fed7aa] peer"
              placeholder=" "
              required="y"
            />
            <label
              htmlFor="subject"
              className="peer-focus:font-medium absolute text-md text-gray-600 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#fed7aa] peer-focus:dark:text-[#fed7aa] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Subject
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-1 md:gap-6">
            <textarea
              id="message"
              rows={4}
              className="mb-3 block p-2.5 w-full text-md text-[#fed7aa] bg-transparent rounded-lg border-1 border-gray-300 focus:ring-[#fed7aa] focus:border-[#fed7aa] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#fed7aa] dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Leave a comment..."
              defaultValue={""}
            />
        </div>{" "}
        <button
          type="submit"
          className="btn text-center text-white bg-[#3E001F] hover:bg-transparent border-0"
        >
          Send a Massage
        </button>
      </form>
    </>
  );
}

export default Form;
