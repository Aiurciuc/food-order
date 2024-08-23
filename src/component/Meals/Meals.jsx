import MealCard from "./MealCard";

export default function Meals({ meals }) {
  return (
    <section className="grid min-w-24 grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 p-4 mx-12 my-8">
      {meals.map((meal) => (
        <MealCard key={meal.id} meal={meal} />
      ))}
    </section>
  );
}
