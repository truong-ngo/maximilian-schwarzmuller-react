import { useEffect, useState } from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem";
import * as mealService from "../../service/api-meals.service";

const AvailableMeals = (props) => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setError] = useState(false);

  useEffect(() => {
    async function get() {
      setIsLoading(true);
      try {
        const res = await mealService.getMeals("meals.json");
        setMeals(res);
      } catch {
        setError(true)
      }
      setIsLoading(false);
    }
    get();
  }, []);

  let mealsJSX = meals.map((m) => (
    <MealItem
      price={m.price}
      name={m.name}
      description={m.description}
      key={m.id}
      id={m.id}
    ></MealItem>
  ));

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (hasError && !isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Something went wrong!</p>
      </section>
    );
  }

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsJSX}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
