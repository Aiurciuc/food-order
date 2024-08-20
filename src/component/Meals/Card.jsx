import useCartValue from "../../hooks/useCartValue";
import Button from "../shared/Button";

export default function Card({ meal }) {
  const { handleAddToCart } = useCartValue();
  return (
    <article id={meal.id} className="bg-yellow-900 text-center rounded-lg h-full">
      <img src={meal.image} alt={meal.name} loading="lazy" className="object-fit" />
      <div className="p-3">
        <h4 className=" text-2xl my-4 ">{meal.name}</h4>
        <div className="text-yellow-500 my-4">{meal.price} $</div>
        <p className="mx-4 h-32">{meal.description}</p>
        <Button className="my-4" onClick={() => handleAddToCart(meal)}>
          Add to cart
        </Button>
      </div>
    </article>
  );
}
