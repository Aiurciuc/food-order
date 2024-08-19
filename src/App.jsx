import Meals from "./component/meals/Meals";
import Header from "./component/header/Header";
import { useHttpCall } from "./hooks/useHttpCall";
import { useRef, useState } from "react";
import Cart from "./component/cart/Cart";

function App() {
  const {
    data: meals,
    isLoading,
    error,
  } = useHttpCall("http://localhost:3000/meals");

  const [cartItems, setCartItems] = useState({});
  const dialog = useRef(null);

  const numberOfItems = Object.values(cartItems).reduce(
    (sum, itemNumber) => (sum += itemNumber.numberOfItems),
    0
  );

  function handleAddToCart(id) {
    setCartItems((prevState) => {
      return {
        ...prevState,
        [id]: {
          ...(prevState[id] ?? meals.find((meal) => meal.id === id)),
          numberOfItems: (prevState[id]?.numberOfItems ?? 0) + 1,
        },
      };
    });
  }

  function handleCartClick() {
    dialog.current.showModal();
  }

  function handleQuantityChange(id, numberOfItems) {
    if (!numberOfItems) {
      setCartItems((prevState) => {
        delete prevState[id];
        return {
          ...prevState,
        };
      });
    } else {
      setCartItems((prevState) => ({
        ...prevState,
        [id]: {
          ...prevState[id],
          numberOfItems,
        },
      }));
    }
  }

  return (
    <>
      <Header numberOfItems={numberOfItems} handleCartClick={handleCartClick} />
      <Cart
        ref={dialog}
        cartItems={cartItems}
        onQuantityChange={handleQuantityChange}
      />
      {!isLoading && (
        <Meals
          meals={meals.map((meal) => ({
            ...meal,
            image: `http://localhost:3000/${meal.image}`,
          }))}
          onAddToCart={handleAddToCart}
        />
      )}
    </>
  );
}

export default App;
