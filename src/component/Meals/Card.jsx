import useCartValue from "../../hooks/useCartValue";
import Button from "../shared/Button";
import { Quantity } from "../shared/Quantity";

export default function Card({ meal }) {
  const { cart, handleAddToCart, handleMinusItemCart, handlePlusItemCart, handleRemoveItemCart } =
    useCartValue();

  const mealAdded = !!cart[meal.id];

  function handleMinusCartItem() {
    cart[meal.id].quantity > 1 ? handleMinusItemCart(meal.id): handleRemoveItemCart(meal.id);
  }

  return (
    <article
      id={meal.id}
      className="bg-yellow-900 text-center rounded-lg h-full"
    >
      <img
        src={meal.image}
        alt={meal.name}
        loading="lazy"
        className="object-fit"
      />
      <div className="p-3 grid grid-rows-7">
        <h4 className=" text-xl ">{meal.name}</h4>
        <div className="text-yellow-500 ">{meal.price} $</div>
        <p className="mx-4 row-span-3">{meal.description}</p>
        {!mealAdded && (
          <Button className="row-span-2 my-4 h-10" onClick={() => handleAddToCart(meal)}>
            Add to cart
          </Button>
        )}

        {mealAdded && (
          <Quantity.Root className="row-span-2 my-4 p-2 h-10" >
            <Quantity.Minus
              onQuantityChange={handleMinusCartItem}
            />
            <Quantity.Value quantity={cart[meal.id].quantity}></Quantity.Value>
            <Quantity.Plus
              onQuantityChange={() => handlePlusItemCart(meal.id)}
            />
          </Quantity.Root>
        )}
      </div>
    </article>
  );
}
