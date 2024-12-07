import { useContext, useRef } from "react";
import Input from "../UI/Input";
import classes from "./MealItemForm.module.css";
import CartContext from "../../context/cart.context";
import React from "react";

const MealItemForm = (props) => {
  const amountRef = useRef();
  
  const ctx = useContext(CartContext);
  const submitHandler = (event) => {
    event.preventDefault()
    ctx.addItem({...props.item, amount: +amountRef.current.value.value})
  }
  
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountRef}
        label="Amount"
        input={{
          id: "amount_" + props.item.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit" className={classes.button}>+ Add</button>
    </form>
  );
};

export default MealItemForm;
