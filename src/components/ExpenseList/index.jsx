import { useContext, useMemo } from "react";

import { formatMoney } from "../../utils";
import { AppContext } from "../../context/AppContext";
import ExpenseItem from "./ExpenseItem";

import "./styles.css";

const ExpenseList = () => {
  const { fetching, expenses } = useContext(AppContext);

  const total = useMemo(() => {
    let total = 0;

    expenses.forEach((expense) => (total += Number(expense.amount)));

    return total;
  }, [expenses]);

  return (
    <div className="expense-list">
      {fetching && <p className="loader">Loading...</p>}
      {!fetching && expenses.length < 1 && (
        <p className="empty">No expenses.</p>
      )}
      {!fetching &&
        expenses.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} />
        ))}
      {!fetching && expenses.length > 0 && (
        <p className="total">Total: {formatMoney(total)}</p>
      )}
    </div>
  );
};

export default ExpenseList;
