import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import { DUMMY_MEALS } from "./dummy-meals";
import MealItem from "./MealItem";

const MEALS = DUMMY_MEALS;

const AvailableMeals = (props) => {
  let meals = MEALS.map((m) => (
    <MealItem
      price={m.price}
      name={m.name}
      description={m.description}
      key={m.id}
      id={m.id}
    ></MealItem>
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{meals}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
