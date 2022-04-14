import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (expense) => {
    console.log('Got data', expense);
    expense.date = new Date(expense.date);
    expense.id = Math.random().toString();
    props.onAddExpense(expense);
  }

  return <div className="new-expense">
    <ExpenseForm onSaveExpenseDataHandler={saveExpenseDataHandler} />
  </div>
}

export default NewExpense;
