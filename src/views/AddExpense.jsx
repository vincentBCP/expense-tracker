import { useContext } from "react";
import { useNavigate } from "react-router";

import { AppContext } from "../context/AppContext";
import ExpenseForm from "../components/ExpenseForm";

const AddExpense = () => {
  const { addExpense } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <ExpenseForm
      onSubmit={(formData) => {
        addExpense({
          id: (Math.random() + 1).toString(36).substring(7),
          ...formData,
        });
        navigate(-1);
      }}
    />
  );
};

export default AddExpense;
