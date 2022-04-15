import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import {useState} from "react";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020')
  const filteredExpenses = props.expenses.filter((e) => e.date.getFullYear().toString() === filteredYear);

  const expenseFilterChangeHandler = (filter) => {
    setFilteredYear(filter);
  }

  let expensesContent = <p>No expenses found.</p>

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map(expense => (
        <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
    ));
  }

  return (
      <Card className="expenses">
        <ExpensesFilter filteredYear={filteredYear} onExpenseFilterChangeHandler={expenseFilterChangeHandler} />
        { expensesContent }
      </Card>
  )
}

export default Expenses;
