import react, {useState} from 'react';
import ExpenseItems from './composants/ExpenseItems'
import NewExpense from './composants/NewExpense'
function App() {
  let expenses1 = [
    {
      id: '1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: '2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: '3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: '4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const [expenses,setExpenses] = useState(expenses1);
  const AddExpense = (expense) => {
    setExpenses([
      ...expenses,
      {
        id: (expenses.length + 1),
        title: expense[0],
        amount: expense[1],
        date: new Date(expense[2]),
      },
    ]);
    console.log(expenses);
  };
  
  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense AddExpense={AddExpense}/>
    {  expenses.map(exp => <ExpenseItems title={exp.title} amount={exp.amount} date={exp.date} />)}

    </div>
  );
}

export default App;
