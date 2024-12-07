import Card from "../UI/Card";
import "./Expense.css"
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";


const Expense = (data) => {
  const [filterYear, setFilterYear] = useState('2020')
  
  const filterYearHandler = year => {
    setFilterYear(year);
  }

  let filteredExpense = data.data.filter(item => item.date.getFullYear() == filterYear);

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filterYear} onFilteringYear={filterYearHandler} />
        <ExpenseChart expenses={filteredExpense} />
        <ExpenseList list={filteredExpense}/>
      </Card>
    </div>
  );
}

export default Expense;
