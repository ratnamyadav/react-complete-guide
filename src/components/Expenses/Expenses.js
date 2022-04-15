import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import {useState} from "react";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020')

  const expenseFilterChangeHandler = (filter) => {
    setFilteredYear(filter);
  }

  return (
      <Card className="expenses">
        <ExpensesFilter filteredYear={filteredYear} onExpenseFilterChangeHandler={expenseFilterChangeHandler} />
        <ExpenseItem title={props.expenses[0].title} amount={props.expenses[0].amount} date={props.expenses[0].date}></ExpenseItem>
        <ExpenseItem title={props.expenses[1].title} amount={props.expenses[1].amount} date={props.expenses[1].date}></ExpenseItem>
        <ExpenseItem title={props.expenses[2].title} amount={props.expenses[2].amount} date={props.expenses[2].date}></ExpenseItem>
      </Card>
  )
}

export default Expenses;
