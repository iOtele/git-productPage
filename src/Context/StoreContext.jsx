import React, { createContext, useState } from "react";
import { products } from "../assets/assets";

export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <StoreContext.Provider
      value={{ selectedProduct, setSelectedProduct, products }}
    >
      {children}
    </StoreContext.Provider>
  );
};
export default StoreProvider;
