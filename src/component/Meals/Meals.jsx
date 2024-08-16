import Card from "./Card";

export default function Meals({ meals, onAddToCart }) {
  return (
    <section className="grid min-w-24 grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 p-4 mx-12 my-8">
      {meals.map((meal) => (
        <Card
          id={meal.id}
          key={meal.id}
          price={meal.price}
          name={meal.name}
          description={meal.description}
          image={meal.image}
          handleClick={onAddToCart}
        />
      ))}
    </section>
  );
}
