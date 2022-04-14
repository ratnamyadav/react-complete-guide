import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from "react";

function App() {
  const [expenses, updateExpenses] = useState([
    { id: 1, title: 'Car insurance', amount: 123, date: new Date(2021, 2, 28) },
    { id: 2, title: 'Maid', amount: 1000, date: new Date(2021, 2, 29) },
    { id: 3, title: 'Petrol', amount: 23, date: new Date(2021, 2, 30) }
  ])

  const addExpense = (expense) => {
    console.log([...expenses, expense]);
    updateExpenses([...expenses, expense]);
  }

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpense} />
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
