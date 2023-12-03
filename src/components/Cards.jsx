import { useLoaderData } from "react-router-dom";
import Card from "./card";

function Cards() {
  const products = useLoaderData();
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mx-auto">
        {products.map((product) => (
          <Card key={product._id} product={product}></Card>
        ))}
      </div>
    </>
  );
}

export default Cards;
