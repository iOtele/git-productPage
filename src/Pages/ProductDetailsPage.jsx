import React from "react";
import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { products } from "../assets/assets";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { setSelectedProduct } = useContext(StoreContext);

  const product = products.find((p) => p.id === Number(id));

  if (!product) return <p>Product not found</p>;

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow rounded">
      <h2 className="text-xl font-bold">{product.name}</h2>
      <img src={product.image} alt={product.name} className="w-40 my-4" />
      <p>{product.description}</p>
      <p className="text-lg font-semibold mt-2">${product.price}</p>

      <Link
        to="/order"
        onClick={() => setSelectedProduct(product)}
        className="block mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Order Now
      </Link>
    </div>
  );
};

export default ProductDetailsPage;
