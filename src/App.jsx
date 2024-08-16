import Meals from "./component/meals/Meals";
import Header from "./component/header/Header";
import { useHttpCall } from "./hooks/useHttpCall";
import { useState } from "react";

function App() {
  const {
    data: meals,
    isLoading,
    error,
  } = useHttpCall("http://localhost:3000/meals");

  const [cartItems, setCartItems] = useState({});

  const numberOfItems = Object.values(cartItems).reduce((sum, itemNumber) => sum +=itemNumber, 0);

  function handleAddToCart(id) {
    console.log(id);
    setCartItems((prevState) => {
      return { ...prevState, [id]: (prevState[id] ?? 0) + 1 };
    });
    
  }

  return (
    <>
      <Header numberOfItems={numberOfItems}/>
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
