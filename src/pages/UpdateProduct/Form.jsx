import { useLoaderData, useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();
  const product = useLoaderData();

  function formHandle(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const genre = event.target.genre.value;
    const date = event.target.date.value;
    const img = event.target.img.value;
    const platform = event.target.platform.value;
    const price = event.target.price.value;
    const description = event.target.description.value;
    const products = {
      name, genre, date, img, platform, price,description
    };
    fetch(`http://localhost:3000/update/${product?._id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(products),
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
        method="PUT"
        onSubmit={formHandle}
        className="mx-auto my-10 gap-y-2 w-96 bg-[#982176] p-5 rounded-lg border-1 border-[#fed7aa] text-[#fed7aa] font-semibold"
      >
        <div className="grid md:grid-cols-1 md:gap-2">
          <h1 className="text-center text-4xl font-semibold text-white pb-4">
            Update your Product
          </h1>
          <div className="relative z-0 w-full mb-3 group">
            <input
              type="text"
              name="name"
              id="name"
              className="font-medium block py-2.5 px-0 w-full text-md bg-transparent border-b-2 text-[#fed7aa] border-[#fed7aa] appearance-none dark:text-[#fed7aa] dark:border-[#fed7aa] dark:focus:border-[#fed7aa] focus:outline-none focus:ring-0 focus:border-[#fed7aa] peer"
              placeholder=" "
              required=""
              defaultValue={product?.name}
            />
            <label
              htmlFor="name"
              className="peer-focus:font-medium absolute text-md text-gray-600 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#fed7aa] peer-focus:dark:text-[#fed7aa] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              NAME
            </label>
          </div>
          <div className="relative z-0 w-full mb-3 group">
            <input
              type="text"
              name="genre"
              id="genre"
              className="font-medium block py-2.5 px-0 w-full text-md bg-transparent border-b-2 text-[#fed7aa] border-[#fed7aa] appearance-none dark:text-[#fed7aa] dark:border-[#fed7aa] dark:focus:border-[#fed7aa] focus:outline-none focus:ring-0 focus:border-[#fed7aa] peer"
              placeholder=" "
              required=""
              defaultValue={product?.genre}
            />
            <label
              htmlFor="genre"
              className="peer-focus:font-medium absolute text-md text-gray-600 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#fed7aa] peer-focus:dark:text-[#fed7aa] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              GENRE
            </label>
          </div>
        </div>
        <div className="relative z-0 w-full mb-3 group">
          <input
            type="text"
            name="date"
            id="date"
            className="font-medium block py-2.5 px-0 w-full text-md bg-transparent border-b-2 text-[#fed7aa] border-[#fed7aa] appearance-none dark:text-[#fed7aa] dark:border-[#fed7aa] dark:focus:border-[#fed7aa] focus:outline-none focus:ring-0 focus:border-[#fed7aa] peer"
            placeholder=" "
            required=""
            defaultValue={product?.date}
          />
          <label
            htmlFor="date"
            className="peer-focus:font-medium absolute text-md text-gray-600 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#fed7aa] peer-focus:dark:text-[#fed7aa] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            RELEASE DATE
          </label>
        </div>
        <div className="relative z-0 w-full mb-3 group">
          <input
            type="text"
            name="img"
            id="img"
            className="font-medium block py-2.5 px-0 w-full text-md bg-transparent border-b-2 text-[#fed7aa] border-[#fed7aa] appearance-none dark:text-[#fed7aa] dark:border-[#fed7aa] dark:focus:border-[#fed7aa] focus:outline-none focus:ring-0 focus:border-[#fed7aa] peer"
            placeholder=" "
            required=""
            defaultValue={product?.img}
          />
          <label
            htmlFor="img"
            className="peer-focus:font-medium absolute text-md text-gray-600 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#fed7aa] peer-focus:dark:text-[#fed7aa] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            IMAGE
          </label>
        </div>
        <div className="relative z-0 w-full mb-3 group">
          <input
            type="text"
            name="platform"
            id="platform"
            className="font-medium block py-2.5 px-0 w-full text-md bg-transparent border-b-2 text-[#fed7aa] border-[#fed7aa] appearance-none dark:text-[#fed7aa] dark:border-[#fed7aa] dark:focus:border-[#fed7aa] focus:outline-none focus:ring-0 focus:border-[#fed7aa] peer"
            placeholder=" "
            required=""
            defaultValue={product?.platform}
          />
          <label
            htmlFor="platform"
            className="peer-focus:font-medium absolute text-md text-gray-600 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#fed7aa] peer-focus:dark:text-[#fed7aa] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            PLATFORM
          </label>
        </div>
        <div className="relative z-0 w-full mb-3 group">
          <input
            type="text"
            name="price"
            id="price"
            className="font-medium block py-2.5 px-0 w-full text-md bg-transparent border-b-2 text-[#fed7aa] border-[#fed7aa] appearance-none dark:text-[#fed7aa] dark:border-[#fed7aa] dark:focus:border-[#fed7aa] focus:outline-none focus:ring-0 focus:border-[#fed7aa] peer"
            placeholder=" "
            required=""
            defaultValue={product?.price}
          />
          <label
            htmlFor="price"
            className="peer-focus:font-medium absolute text-md text-gray-600 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#fed7aa] peer-focus:dark:text-[#fed7aa] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            PRICE
          </label>
        </div>
        <div className="relative z-0 w-full mb-3 group">
        <textarea
              id="description"
              name="description"
              rows={4}
              className="mb-3 block p-2.5 w-full text-md text-[#fed7aa] bg-transparent rounded-lg border-1 border-gray-300 focus:ring-[#fed7aa] focus:border-[#fed7aa] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#fed7aa] dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Leave a Description..."
              defaultValue={product?.description}
            />
        </div>
        {" "}
        <button
          type="submit"
          className="btn text-center text-white bg-[#3E001F] hover:bg-transparent border-0"
        >
          Update
        </button>
      </form>
    </>
  );
}

export default Form;
