import react , {useState} from "react";

import '../styles/ExpenseForm.css'
const ExpenseForm = (props) => {
    const [title,setTilte] = useState();
    const [amount,setAmount] = useState();
    const [date,setDate] = useState();
    const handelTitle = event => {
        setTilte(event.target.value);
    }
    const handelDate = event => {
        setDate(event.target.value);
    }
    const handelAmount = event => {
        setAmount(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const x = [title,amount,date];
        props.exp(x);
        setTilte('');
        setAmount('');
        setDate('');
      }
    return (
        <form onSubmit={handleSubmit}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={title} onChange={handelTitle} required/>
                </div>
                <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" value={amount} onChange={handelAmount} min={0.01} step={0.01} required/>
                </div>
                <div className="new-expense__control">
                <label>Date</label>
                <input type="date" value={date} onChange={handelDate} min={31/12/2019} required/>
                </div>
            </div>
            <button type="submit" className="new-expense__actions">Add Expense</button>
        </form>
    );
}
export default ExpenseForm;