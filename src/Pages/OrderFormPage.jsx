import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const OrderFormPage = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const { selectedProduct } = useContext(StoreContext);

  function handleSubmit(e) {
    e.preventDefault();
    // pass name + product to success page using navigate state
    navigate("/success", { state: { name, product: selectedProduct } });
  }

  if (!selectedProduct) {
    return <p className="text-center mt-10">⚠️ No product selected.</p>;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 max-w-md mx-auto bg-white shadow rounded"
    >
      <h2 className="text-xl font-bold mb-4">Order {selectedProduct.name}</h2>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border p-2 rounded mb-4"
        required
      />
      <button
        type="submit"
        className="w-full bg-green-500 text-white px-4 py-2 rounded"
      >
        Place Order
      </button>
    </form>
  );
};

export default OrderFormPage;
