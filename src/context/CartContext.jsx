import { createContext, useEffect, useReducer } from "react";
import { cartReducer } from "../utils/cartReducer";
import { getLocalStorage, setLocalStorage } from "../utils/localstorage";

export const CartContext = createContext({});

function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, getLocalStorage('CART') || {} );

  
  
  useEffect(() => {
    setLocalStorage('CART', cart)
  }, [cart])
  
  function handleAddToCart(meal) {
    dispatch({ type: "add", meal });
  }

  function handlePlusItemCart(id) {
    dispatch({ type: "plus", id });
  }

  
  function handleMinusItemCart(id) {
    dispatch({ type: "minus", id });
  }

  
  function handleRemoveItemCart(id) {
    dispatch({ type: "remove", id });
  }

  function handleClearCart() {
    dispatch({ type: "clear" });
  }

  const value = {
    cart,
    handleAddToCart,
    handlePlusItemCart,
    handleMinusItemCart,
    handleRemoveItemCart,
    handleClearCart
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartProvider;
