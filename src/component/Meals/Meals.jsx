
import { useHttpCall } from "../../hooks/useHttpCall";
import Card from "./Card"

export default function Meals() {

  const { data: meals, isLoading, error } = useHttpCall('http://localhost:3000/meals');

  return <section className="grid min-w-24 grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 p-4 mx-12 my-8">
    { isLoading && <span>Loading ... </span>}
    { !isLoading && meals.map((meal) => <Card key={meal.id} price={meal.price}
      name={meal.name}
      description={meal.description}
      image={`http://localhost:3000/${meal.image}`}

     />) }
  </section>
}