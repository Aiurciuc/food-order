import { useContext } from "react";

import { CartContext } from "../context/CartContext";

export default function useCartValue() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useValue must be used within a ValueProvider");
  }
  return context;
}
