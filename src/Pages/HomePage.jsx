import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Digital Store</h1>
      <p className="text-lg text-gray-600 mb-6">
        Your one-stop shop for digital products
      </p>
      <Link
        to="/products"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
      >
        Browse Products
      </Link>
    </div>
  );
};

export default Home;
