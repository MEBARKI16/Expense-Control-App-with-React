import '../styles/ExpenseDate.css'
const ExpenseDate = (props) => {
    const { date } = props;

    const day = date.getDate();
    const options = { month: 'long', locale: 'fr-FR' };
  const month = date.toLocaleString('default', options);
    const year = date.getFullYear();
    return (
        <div className="expense-date">
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
        </div>
    );
}
export default ExpenseDate;