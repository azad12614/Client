function Form() {
  return (
    <>
      <form className="m-auto p-5 rounded-lg border-1 border-success text-success font-semibold">
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-3 group">
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              className="font-medium block py-2.5 px-0 w-full text-md bg-transparent border-b-2 text-success border-success appearance-none dark:text-success dark:border-success dark:focus:border-success focus:outline-none focus:ring-0 focus:border-success peer"
              placeholder=" "
              required=""
            />
            <label
              htmlFor="floating_first_name"
              className="peer-focus:font-medium absolute text-md text-gray-600 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-success peer-focus:dark:text-success peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              First name
            </label>
          </div>
          <div className="relative z-0 w-full mb-3 group">
            <input
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              className="font-medium block py-2.5 px-0 w-full text-md bg-transparent border-b-2 text-success border-success appearance-none dark:text-success dark:border-success dark:focus:border-success focus:outline-none focus:ring-0 focus:border-success peer"
              placeholder=" "
              required=""
            />
            <label
              htmlFor="floating_last_name"
              className="peer-focus:font-medium absolute text-md text-gray-600 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-success peer-focus:dark:text-success peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Last name
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-3 group">
            <input
              type="text"
              name="floating_subject"
              id="floating_subject"
              className="font-medium block py-2.5 px-0 w-full text-md bg-transparent border-b-2 text-success border-success appearance-none dark:text-success dark:border-success dark:focus:border-success focus:outline-none focus:ring-0 focus:border-success peer"
              placeholder=" "
              required=""
            />
            <label
              htmlFor="floating_subject"
              className="peer-focus:font-medium absolute text-md text-gray-600 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-success peer-focus:dark:text-success peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Subject
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-1 md:gap-6">
            <textarea
              id="message"
              rows={4}
              className="mb-3 block p-2.5 w-full text-md text-success bg-transparent rounded-lg border-1 border-gray-300 focus:ring-success focus:border-success dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-success dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Leave a comment..."
              defaultValue={""}
            />
        </div>{" "}
        <button
          type="submit"
          className="text-white bg-success hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-3 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Send a Massage
        </button>
      </form>
    </>
  );
}

export default Form;
