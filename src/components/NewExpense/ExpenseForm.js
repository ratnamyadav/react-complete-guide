import './ExpenseForm.css'
import {useState} from "react";

const ExpenseForm = (props) => {
  const [expense, setExpense] = useState({
    title: '',
    amount: '',
    date: ''
  })

  const titleChangeHandler = (event) => {
    setExpense((prevExpense) => {
      return {
        ...prevExpense,
        title: event.target.value
      }
    });
  }

  const amountChangeHandler = (event) => {
    setExpense((prevExpense) => {
      return {
        ...prevExpense,
        amount: +event.target.value
      }
    });
  }

  const dateChangeHandler = (event) => {
    setExpense((prevExpense) => {
      return {
        ...prevExpense,
        date: event.target.value
      }
    });
  }

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(expense);
    props.onSaveExpenseDataHandler(expense);
    setExpense({
      title: '',
      amount: '',
      date: ''
    })
  }

  return (<form onSubmit={submitHandler}>
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label>Title</label>
        <input type="text" value={expense.title} onChange={titleChangeHandler} />
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input type="number" value={expense.amount} min="0.01" step="0.01" onChange={amountChangeHandler} />
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input type="date" value={expense.date} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
      </div>
    </div>
    <div className="new-expense__actions">
      <button>Add Expense</button>
    </div>
  </form>);
}

export default ExpenseForm;
