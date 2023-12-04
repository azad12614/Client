import { useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();

  function formHandle(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const genre = event.target.genre.value;
    const date = event.target.date.value;
    const image = event.target.image.value;
    const platform = event.target.platform.value;
    const price = event.target.price.value;
    const description = event.target.description.value;
    const product = {
      name,
      genre,
      date,
      image,
      platform,
      price,
      description,
    };
    fetch("http://localhost:3000/add-product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          navigate("/manage-product");
        }
      });
  }
  return (
    <>
      <form
        method="POST"
        onSubmit={formHandle}
        className="mx-auto mt-2 gap-y-2 w-96 bg-[#31304D] p-5 rounded-lg border-1 border-[#B6BBC4] text-[#B6BBC4] font-semibold"
      >
        <h1 className="text-center text-4xl font-semibold text-white pb-4">
          Add Product
        </h1>
        <div className="grid md:grid-cols-1 md:gap-2">
          <div className="relative z-0 w-full mb-3 group">
            <input
              type="text"
              name="name"
              id="name"
              className="font-medium block py-2.5 px-0 w-full text-md bg-transparent border-b-2 border-[#B6BBC4] appearance-none focus:border-[#B6BBC4] focus:outline-none focus:ring-0 peer"
              placeholder=""
              required="y"
            />
            <label
              htmlFor="name"
              className="peer-focus:font-medium absolute text-md text-[#B6BBC4] dark:text-[#B6BBC4] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#B6BBC4] peer-focus:dark:text-[#B6BBC4] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              NAME
            </label>
          </div>
          <div className="relative z-0 w-full mb-3 group">
            <input
              type="text"
              name="genre"
              id="genre"
              className="font-medium block py-2.5 px-0 w-full text-md bg-transparent border-b-2 border-[#B6BBC4] appearance-none focus:border-[#B6BBC4] focus:outline-none focus:ring-0 peer"
              placeholder=""
              required="y"
            />
            <label
              htmlFor="genre"
              className="peer-focus:font-medium absolute text-md text-[#B6BBC4] dark:text-[#B6BBC4] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#B6BBC4] peer-focus:dark:text-[#B6BBC4] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              GENRE
            </label>
          </div>
          <div className="relative z-0 w-full mb-3 group">
            <input
              type="text"
              name="date"
              id="date"
              className="font-medium block py-2.5 px-0 w-full text-md bg-transparent border-b-2 border-[#B6BBC4] appearance-none focus:border-[#B6BBC4] focus:outline-none focus:ring-0 peer"
              placeholder=""
              required="y"
            />
            <label
              htmlFor="date"
              className="peer-focus:font-medium absolute text-md text-[#B6BBC4] dark:text-[#B6BBC4] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#B6BBC4] peer-focus:dark:text-[#B6BBC4] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              RELEASE DATE
            </label>
          </div>
          <div className="relative z-0 w-full mb-3 group">
            <input
              type="text"
              name="image"
              id="image"
              className="font-medium block py-2.5 px-0 w-full text-md bg-transparent border-b-2 border-[#B6BBC4] appearance-none focus:border-[#B6BBC4] focus:outline-none focus:ring-0 peer"
              placeholder=" "
              required=""
            />
            <label
              htmlFor="image"
              className="peer-focus:font-medium absolute text-md text-[#B6BBC4] dark:text-[#B6BBC4] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#B6BBC4] peer-focus:dark:text-[#B6BBC4] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              IMAGE
            </label>
          </div>
        </div>
        <div className="relative z-0 w-full mb-3 group">
          <input
            type="text"
            name="platform"
            id="platform"
            className="font-medium block py-2.5 px-0 w-full text-md bg-transparent border-b-2 border-[#B6BBC4] appearance-none focus:border-[#B6BBC4] focus:outline-none focus:ring-0 peer"
            placeholder=" "
            required="y"
          />
          <label
            htmlFor="platform"
            className="peer-focus:font-medium absolute text-md text-[#B6BBC4] dark:text-[#B6BBC4] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#B6BBC4] peer-focus:dark:text-[#B6BBC4] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            PLATFORM
          </label>
        </div>
        <div className="relative z-0 w-full mb-3 group">
          <input
            type="text"
            name="price"
            id="price"
            className="font-medium block py-2.5 px-0 w-full text-md bg-transparent border-b-2 border-[#B6BBC4] appearance-none focus:border-[#B6BBC4] focus:outline-none focus:ring-0 peer"
            placeholder=" "
            required="y"
          />
          <label
            htmlFor="price"
            className="peer-focus:font-medium absolute text-md text-[#B6BBC4] dark:text-[#B6BBC4] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#B6BBC4] peer-focus:dark:text-[#B6BBC4] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            PRICE
          </label>
        </div>
        <div className="relative z-0 w-full mb-3 group">
          <textarea
            id="description"
            name="description"
            rows={4}
            className="mb-3 block p-2.5 w-full text-md text-[#B6BBC4] bg-transparent rounded-lg border-1 border-gray-300 focus:ring-[#B6BBC4] focus:border-[#B6BBC4] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#B6BBC4] dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Leave a Description..."
            defaultValue={""}
          />
        </div>
        <button
          type="submit"
          className="btn text-center text-dark bg-[#F0ECE5] hover:bg-transparent border-0"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default Form;
