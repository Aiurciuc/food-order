import useCartValue from "../../hooks/useCartValue";
import { Quantity } from "../shared/Quantity";

export default function CartItem({ meal }) {
  const {
    handlePlusItemCart,
    handleMinusItemCart,
    handleRemoveItemCart
    } = useCartValue();


  return (
    <div key={meal.id} className="my-1">
      <li className="flex justify-between items-center">
        <span>
          {meal.name} : { " "}
          <span className="text-yellow-500">
            {meal.quantity} x ${meal.price}
          </span>
        </span>

        <Quantity.Root>
          <Quantity.Minus
            onQuantityChange={() =>
              handleMinusItemCart(meal.id)
            }
          />
          <Quantity.Value quantity={meal.quantity}></Quantity.Value>
          <Quantity.Plus
            onQuantityChange={() =>
              handlePlusItemCart(meal.id)
            }
          />
          <Quantity.Reset
            onQuantityChange={() =>
              handleRemoveItemCart(meal.id)
            }
          ></Quantity.Reset>
        </Quantity.Root>
      </li>
    </div>
  );
}
