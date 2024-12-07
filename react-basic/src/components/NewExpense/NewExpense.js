import NewExpenseForm from "./NewExpenseForm";
import "./NewExpense.css";
import { useState } from "react";
import NewExpenseCreate from "./NewExpenseCreate";

const NewExpense = (props) => {
  const [isFormHidden, setFormHidden] = useState(true)
    
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onSaveNewExpenseData(expenseData);
  };

  const hideFormHandler = () => {
    setFormHidden(true)
  }

  const toggleFormHandler = () => {
    setFormHidden(false)
  }

  let newExpenseContent
  if (isFormHidden) {
    newExpenseContent = <NewExpenseCreate onToggleForm={toggleFormHandler}></NewExpenseCreate>
  } else {
    newExpenseContent = <NewExpenseForm onHideExpenseForm={hideFormHandler} onSaveNewExpenseData={saveExpenseDataHandler} />
  }

  return (
    <div className="new-expense">
      {newExpenseContent}
    </div>
  );
};

export default NewExpense;
