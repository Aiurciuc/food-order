import { Quantity } from "../shared/Quantity";

export default function CartItem({ meal, onQuantityChange }) {
  return (
    <div key={meal.id} className="my-1">
      <li className="flex justify-between items-center">
        <span>
          {meal.name} : { " "}
          <span className="text-yellow-500">
            {meal.numberOfItems} x ${meal.price}
          </span>
        </span>

        <Quantity.Root>
          <Quantity.Minus
            onQuantityChange={() =>
              onQuantityChange(meal.id, meal.numberOfItems - 1)
            }
          />
          <Quantity.Value quantity={meal.numberOfItems}></Quantity.Value>
          <Quantity.Plus
            onQuantityChange={() =>
              onQuantityChange(meal.id, meal.numberOfItems + 1)
            }
          />
          <Quantity.Reset
            onQuantityChange={() =>
              onQuantityChange(meal.id, 0)
            }
          ></Quantity.Reset>
        </Quantity.Root>
      </li>
    </div>
  );
}
