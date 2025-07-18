import { HomePage } from "@/components/home-page/HomePage";
import { Meal } from "@/components/meal/Meal";
import { MEAL_SHARE_API } from "@/data/mealShareApi";


export default async function Home() {
  const dataResponse = await fetch(`${MEAL_SHARE_API.BASE_URL}meals`)
  const data = await dataResponse.json();

  return (
    <div>
      <HomePage/>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};