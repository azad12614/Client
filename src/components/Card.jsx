import { Link } from "react-router-dom";
function Card({ product }) {
  const stock = () => {
    if (product.items > 0) {
      return <button className="btn btn-primary">In Stock</button>;
    } else {
      return <button className="btn btn-primary">TBA</button>;
    }
  };
  return (
    <div className="card card-compact text-center text-white bg-base-100 shadow-xl">
      <figure>
        <img src="https://picsum.photos/250/200" alt="Product image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p>
          Items: {product.items} <br></br> Prices: {product.price}
        </p>
        <div className="card-actions justify-evenly">
          {stock()}
          <Link to={`/product/${product?._id}`}>
            <button className="btn btn-primary">Buy At ${product.price}</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
