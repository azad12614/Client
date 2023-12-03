import { Link } from "react-router-dom";
function Card({ product }) {
  const pic = product?.image;
  return (
    <div className="card card-compact bg-[#fed7aa] shadow-xl">
      <figure>
        <img src={`${pic}`} alt="Product image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title justify-evenly">{product.name}</h2>
        <p className="font-semibold">Genre: {product.genre}</p>
        <p className="font-semibold">Release Date: {product.date}</p>
        <p className="font-semibold">Platform: {product.platform}</p>
        <div className="card-actions justify-evenly">
          <Link to={`/product/${product?._id}`}>
            <button className="btn btn-primary">Buy At ${product.price}</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
