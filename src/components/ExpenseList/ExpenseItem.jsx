import { useNavigate } from "react-router";
import { formatMoney } from "../../utils/formatMoney";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const ExpenseItem = ({ expense }) => {
  const { deleteExpense } = useContext(AppContext);
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/edit-expense/${expense.id}`);
  };

  const handleDelete = () => {
    const c = confirm("Are you sure you want to delete this expense?");

    if (!c) return;

    deleteExpense(expense);
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
