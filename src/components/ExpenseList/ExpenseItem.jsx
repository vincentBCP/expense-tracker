import { formatMoney } from "../../utils/formatMoney";

const ExpenseItem = ({ expense }) => {
  const handleEdit = () => {
    alert(`Edit ${expense.name}`);
  };

  const handleDelete = () => {
    alert(`Delete ${expense.name}`);
  };

  return (
    <div className="expense">
      <span>{expense.name}</span>
      <span>{expense.category}</span>
      <span>{formatMoney(expense.amount)}</span>
      <div className="actions">
        <button className="edit-btn" onClick={handleEdit}>
          &#9998;
        </button>
        <button className="remove-btn" onClick={handleDelete}>
          &#10006;
        </button>
      </div>
    </div>
  );
};

export default ExpenseItem;
