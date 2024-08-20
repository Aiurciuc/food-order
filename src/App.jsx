import Meals from "./component/meals/Meals";
import Header from "./component/header/Header";
import { useHttpCall } from "./hooks/useHttpCall";
import { useRef } from "react";
import Cart from "./component/cart/Cart";
import CartProvider from "./context/CartContext";
import useCartValue from "./hooks/useCartValue";

function App() {
  const {
    data: meals,
    isLoading,
    error,
  } = useHttpCall("http://localhost:3000/meals");

  const dialog = useRef(null);

  function handleCartClick() {
    dialog.current.showModal();
  }

  return (
    <CartProvider>
      <Header handleCartClick={handleCartClick} />
      <Cart ref={dialog} />
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
