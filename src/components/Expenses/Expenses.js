import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import {useState} from "react";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020')
  const filteredExpenses = props.expenses.filter((e) => e.date.getFullYear().toString() === filteredYear);

  const expenseFilterChangeHandler = (filter) => {
    setFilteredYear(filter);
  }

  return (
      <Card className="expenses">
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesFilter filteredYear={filteredYear} onExpenseFilterChangeHandler={expenseFilterChangeHandler} />
        <ExpensesList filteredExpenses={filteredExpenses}></ExpensesList>
      </Card>
  )
}

export default Expenses;
