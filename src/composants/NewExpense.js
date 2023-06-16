import react from "react";
import '../styles/NewExpense.css'
import ExpenseForm from './ExpenseForm'
const NewExpense = (props) => {
    let exp = props.AddExpense;
    return (
        <div className="new-expense" >
<ExpenseForm  exp={exp} />
        </div>
    );
}
export default NewExpense;