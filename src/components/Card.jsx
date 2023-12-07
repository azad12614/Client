import { Link } from "react-router-dom";
function Card({ product }) {
  const pic = product?.image;
  return (
    <div className="card card-compact bg-[#161A30] shadow-xl text-white">
      <figure>
        <img
          className="object-cover h-52 w-64"
          src={`${pic}`}
          alt="Product image"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title justify-evenly text-[#fed7aa] font-bold text-2xl">
          {product.name}
        </h2>
        <p className="font-semibold sm:text-md text-lg">
          Release Date: <span className="text-[#fed7aa]">{product.date}</span>
        </p>
        <p className="font-semibold sm:text-md text-lg">
          Genre: <span className="text-[#fed7aa]">{product.genre}</span>
        </p>
        <p className="font-semibold sm:text-md text-lg">
          Platform: <span className="text-[#fed7aa]">{product.platform}</span>
        </p>
        <div className="card-actions justify-evenly">
          <Link to={`/product/${product?._id}`}>
            <button className="btn btn-primary text-center text-[#FFFFFF] hover:bg-transparent border-0">
              Buy At ${product.price}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
