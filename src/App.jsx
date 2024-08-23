import Meals from "./component/meals/Meals";
import Header from "./component/header/Header";
import { useHttpCall } from "./hooks/useHttpCall";
import { useRef } from "react";
import Cart from "./component/cart/Cart";
import CartProvider from "./context/CartContext";
import Checkout from "./component/checkout/Checkout";

function App() {
  const {
    data: meals,
    isLoading,
    error,
  } = useHttpCall("http://localhost:3000/meals");

  const cartRef = useRef(null);
  const checkoutRef = useRef(null);


  function handleCartClick() {
    cartRef.current.showModal();
  }

  function handleOpenCheckout() {
    cartRef.current.close();
    checkoutRef.current.showModal();
  }


  return (
    <CartProvider>
      <Header handleCartClick={handleCartClick} />
      <Cart handleOpenCheckout={handleOpenCheckout} ref={cartRef} />
      <Checkout ref={checkoutRef} />

      {!isLoading && (
        <Meals
          meals={meals.map((meal) => ({
            ...meal,
            image: `http://localhost:3000/${meal.image}`,
          }))}
        />
      )}
    </CartProvider>
  );
}

export default App;
