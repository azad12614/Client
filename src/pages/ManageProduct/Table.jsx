import { useEffect, useState } from "react";
import { useLoaderData,useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


function Table() {
  //   const [products, setProducts] = useState({})
  //   useEffect(() => {
  //     fetch("http://localhost:3000/all-products")
  //       .then((res) => res.json())
  //       .then((data) => setProducts(data));
  //   }, []);
  const navigate = useNavigate();
  const products = useLoaderData();
  function handleDelete(id){
    fetch(`http://localhost:3000/delete/${id}`,{
      method: "DELETE"
    }).then((res) => res.json())
    .then((data) => {
      if (data.acknowledged) {
        navigate("/");
      }
    })
    
  }
  return (
    <>
      <div className="m-2 z-[0]">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Items</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product) => (
              <tr className="hover" key={product._id}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.items}</td>
                <td>
                  <Link to={`/product/${product?._id}`}>
                    <button className="btn btn-primary">Details</button>
                  </Link>
                  <button className="btn btn-warning" onClick={()=>handleDelete(product?._id)}>Delete</button>
                  <Link to={`/update/${product?._id}`}>
                    <button className="btn btn-outline">Update</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
