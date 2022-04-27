import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";
import {useState} from "react";

const NewExpense = (props) => {
  const [expenseShown, setExpenseShown] = useState(false)

  const saveExpenseDataHandler = (expense) => {
    console.log('Got data', expense);
    expense.date = new Date(expense.date);
    expense.id = Math.random().toString();
    props.onAddExpense(expense);
    setExpenseShownFn();
  }

  const setExpenseShownFn = () => {
    setExpenseShown(!expenseShown);
  }

  return <div className="new-expense">
    {expenseShown ? <ExpenseForm onSaveExpenseDataHandler={saveExpenseDataHandler} /> : <button onClick={setExpenseShownFn}>Add Expense</button>}
  </div>
}

export default NewExpense;
