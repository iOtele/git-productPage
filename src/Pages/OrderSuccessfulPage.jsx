import React from "react";
import { useLocation, Link } from "react-router-dom";

const OrderSuccessfulPage = () => {
  const { state } = useLocation();

  if (!state) {
    return <p className="text-center mt-10">No order found.</p>;
  }

  const { name, product } = state;

  return (
    <div className="grid place-content-center min-h-screen">
      <div className="p-6 max-w-md mx-auto bg-white shadow rounded text-center">
        <h1 className="text-2xl font-bold text-green-600">
          🎉 Order Successful!
        </h1>
        <p className="mt-2">
          Thank you, <span className="font-semibold">{name}</span>.
        </p>
        <p className="mt-1">
          You ordered: <span className="font-semibold">{product.name}</span>
        </p>
        <p className="mt-1">Price: N{product.price}</p>

        <Link
          to="/products"
          className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded"
        >
          Back to Products
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccessfulPage;
