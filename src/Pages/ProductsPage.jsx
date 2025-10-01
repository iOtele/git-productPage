import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../Context/StoreContext";
const ProductsPage = () => {
  const { products } = useContext(StoreContext);
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold text-center mb-6">
        Our Digital Products
      </h2>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white shadow rounded-lg p-4 flex flex-col items-center"
          >
            <img
              src={p.image}
              alt={p.name}
              className="w-32 h-32 object-cover mb-4"
            />
            <h3 className="text-lg font-semibold">{p.name}</h3>
            <p className="text-gray-600">Price: ${p.price}</p>
            <Link
              to={`/products/${p.id}`}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
