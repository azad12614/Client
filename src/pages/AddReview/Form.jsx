import { Link } from "react-router-dom";
function Form() {
  return (
    <>
      <form
        method="POST"
        className="m-auto w-96 bg-[#161A30] px-10 pt-4 pb-3 rounded-lg border-1 border-[#B6BBC4] text-[#B6BBC4] font-semibold"
      >
        <h1 className="text-center text-4xl font-semibold text-white pb-4">
          Add Review
        </h1>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-3 group">
            <input
              type="text"
              name="first_name"
              id="first_name"
              className="font-medium block py-2.5 px-0 w-full text-md bg-transparent border-b-2 border-[#B6BBC4] appearance-none focus:border-[#B6BBC4] focus:outline-none focus:ring-0 peer"
              placeholder=" "
              required="y"
            />
            <label
              htmlFor="first_name"
              className="peer-focus:font-medium absolute text-md text-[#B6BBC4] dark:text-[#B6BBC4] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#B6BBC4] peer-focus:dark:text-[#B6BBC4] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              First name
            </label>
          </div>
          <div className="relative z-0 w-full mb-3 group">
            <input
              type="text"
              name="last_name"
              id="last_name"
              className="font-medium block py-2.5 px-0 w-full text-md bg-transparent border-b-2 border-[#B6BBC4] appearance-none focus:border-[#B6BBC4] focus:outline-none focus:ring-0 peer"
              placeholder=" "
              required="y"
            />
            <label
              htmlFor="last_name"
              className="peer-focus:font-medium absolute text-md text-[#B6BBC4] dark:text-[#B6BBC4] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#B6BBC4] peer-focus:dark:text-[#B6BBC4] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Last name
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-3 group">
            <input
              type="text"
              name="Product"
              id="Product"
              className="font-medium block py-2.5 px-0 w-full text-md bg-transparent border-b-2 border-[#B6BBC4] appearance-none focus:border-[#B6BBC4] focus:outline-none focus:ring-0 peer"
              placeholder=" "
              required="y"
            />
            <label
              htmlFor="Product"
              className="peer-focus:font-medium absolute text-md text-[#B6BBC4] dark:text-[#B6BBC4] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#B6BBC4] peer-focus:dark:text-[#B6BBC4] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Product Name
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-1 md:gap-6">
          <textarea
            id="message"
            rows={4}
            className="mb-3 block p-2.5 w-full text-md text-[#B6BBC4] bg-transparent rounded-lg border-1 border-gray-300 focus:ring-[#B6BBC4] focus:border-[#B6BBC4] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#B6BBC4] dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Leave a comment..."
            defaultValue={""}
          />
        </div>{" "}
        <Link to={"/"}>
          <button
            type="submit"
            className="btn text-center text-[#fed7aa] bg-[#31304D] hover:bg-transparent border-0"
          >
            Send a Review
          </button>
        </Link>{" "}
      </form>
    </>
  );
}

export default Form;
