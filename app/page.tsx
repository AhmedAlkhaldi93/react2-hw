import { HomePage } from "@/components/home-page/HomePage";
import { Meal } from "@/components/meal/Meal";
import { MEAL_SHARE_API } from "@/data/mealShareApi";

type MealType = {
  id: number;
  title: string;
  description: string;
  location: string;
  when: string;
  max_reservations: number;
  price: number;
}
export default async function Home() {
  const dataResponse = await fetch(`${MEAL_SHARE_API.BASE_URL}meals`)
  const data = await dataResponse.json();

  return (
    <div>
      <HomePage/>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      <div className="grid grid-cols-3 gap-4">
      {(data as MealType[]).map((meal) => (
        <Meal key={meal.id}
          title={meal.title}
          description={meal.description}
          location={meal.location}
          date={meal.when}
          max_reservations={meal.max_reservations}
          price={meal.price}
        />
      ))}
      </div>
    </div>
  );
};