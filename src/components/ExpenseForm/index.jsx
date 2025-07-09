import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { formatDate } from "../../utils";

import "./styles.css";

const ExpenseForm = ({ onClose }) => {
  const { categories, addExpense } = useContext(AppContext);

  const [formData, setFormData] = useState({
    date: formatDate(new Date()),
  });

  const handleSubmit = (ev) => {
    ev.preventDefault();
    addExpense(formData);
    onClose();
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <label>Date</label>
      <input
        type="date"
        value={formData.date || ""}
        onChange={(ev) =>
          setFormData((formData) => ({
            ...formData,
            date: ev.target.value,
          }))
        }
        required
      />

      <label>Category</label>
      <select
        name="category"
        value={formData.category || ""}
        onChange={(ev) =>
          setFormData((formData) => ({
            ...formData,
            category: ev.target.value,
          }))
        }
        required
      >
        <option value="" />
        {categories.map((category) => (
          <option key={category.name} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>

      <label>Name</label>
      <input
        name="name"
        value={formData.name || ""}
        onChange={(ev) =>
          setFormData((formData) => ({
            ...formData,
            name: ev.target.value,
          }))
        }
        required
      />

      <label>Amount</label>
      <input
        type="number"
        name="amount"
        value={formData.amount || ""}
        onChange={(ev) =>
          setFormData((formData) => ({
            ...formData,
            amount: ev.target.value,
          }))
        }
        required
      />

      <button type="submit">ADD EXPENSE</button>
    </form>
  );
};

export default ExpenseForm;
