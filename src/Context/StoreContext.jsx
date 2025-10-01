import { createContext, useState } from "react";
import { products } from "../assets/assets";

export const StoreContext = createContext();

export function StoreProvider({ children }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <StoreContext.Provider
      value={{ selectedProduct, setSelectedProduct, products }}
    >
      {children}
    </StoreContext.Provider>
  );
}
