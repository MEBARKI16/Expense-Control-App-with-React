import '../styles/ExpenseItems.css'
import ExpenseDate from './ExpenseDate'
import react from 'react';
import { useState } from 'react';
const ExpenseItem = (props) => {
    const [title,setTilte] = useState(props.title);
    const { date } = props;
    function changeTitle()
    {    
       
        setTilte('amine');
        console.log(title);
      
    }
    return (
         <div className='expense-item'>
           <ExpenseDate date={date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={changeTitle}>change title</button>
         </div>
    );
}
export default ExpenseItem;