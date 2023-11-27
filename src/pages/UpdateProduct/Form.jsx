import { useLoaderData, useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();
  const product = useLoaderData();

  function formHandle(event) {
    event.preventDefault();
    const name = event.target.floating_name.value;
    const price = event.target.floating_price.value;
    const items = event.target.floating_items.value;
    const products = {
      name: name,
      price: price,
      items: items,
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
          navigate("/");
        }
      });
  }
  return (
    <>
      <form
        method="PUT"
        onSubmit={formHandle}
        className="m-auto my-1 p-5 rounded-lg border-1"
      >
        <div className="grid md:grid-cols-1 md:gap-2">
          <div className="relative z-0 w-full mb-3 group">
            <input
              type="text"
              name="floating_name"
              id="floating_name"
              className="font-medium block py-2.5 px-0 w-full text-md bg-transparent border-b-2 text-success border-success appearance-none dark:text-success dark:border-success dark:focus:border-success focus:outline-none focus:ring-0 focus:border-success peer"
              placeholder=" "
              required=""
              defaultValue={product?.name}
            />
            <label
              htmlFor="floating_name"
              className="peer-focus:font-medium absolute text-md text-gray-600 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-success peer-focus:dark:text-success peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name
            </label>
          </div>
          <div className="relative z-0 w-full mb-3 group">
            <input
              type="text"
              name="floating_price"
              id="floating_price"
              className="font-medium block py-2.5 px-0 w-full text-md bg-transparent border-b-2 text-success border-success appearance-none dark:text-success dark:border-success dark:focus:border-success focus:outline-none focus:ring-0 focus:border-success peer"
              placeholder=" "
              required=""
              defaultValue={product?.price}
            />
            <label
              htmlFor="floating_price"
              className="peer-focus:font-medium absolute text-md text-gray-600 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-success peer-focus:dark:text-success peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Price
            </label>
          </div>
        </div>
        <div className="relative z-0 w-full mb-3 group">
          <input
            type="text"
            name="floating_items"
            id="floating_items"
            className="font-medium block py-2.5 px-0 w-full text-md bg-transparent border-b-2 text-success border-success appearance-none dark:text-success dark:border-success dark:focus:border-success focus:outline-none focus:ring-0 focus:border-success peer"
            placeholder=" "
            required=""
            defaultValue={product?.items}
          />
          <label
            htmlFor="floating_items"
            className="peer-focus:font-medium absolute text-md text-gray-600 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-success peer-focus:dark:text-success peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            items
          </label>
        </div>{" "}
        <button
          type="submit"
          className="text-white bg-success hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-3 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Update
        </button>
      </form>
    </>
  );
}

export default Form;
