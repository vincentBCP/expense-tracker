import { useContext } from "react";
import { useNavigate, useParams } from "react-router";
import ExpenseForm from "../components/ExpenseForm";
import { AppContext } from "../context/AppContext";

const EditExpense = () => {
  const { expenses, updateExpense } = useContext(AppContext);
  const params = useParams();
  const navigate = useNavigate();

  const expense = expenses.find((expense) => expense.id == params.id);

  const handleSubmit = (formData) => {
    updateExpense({ ...expense, ...formData });
    navigate(-1);
  };

  return <ExpenseForm expense={expense} onSubmit={handleSubmit} />;
};

export default EditExpense;
