import { useContext, useMemo } from "react";

import { formatMoney } from "../../utils";
import { AppContext } from "../../context/AppContext";
import ExpenseItem from "./ExpenseItem";

import "./styles.css";

const ExpenseList = ({ dateFrom, dateTo, category, showDate }) => {
  const { fetching, getFilteredExpenses } = useContext(AppContext);

  const filteredExpenses = useMemo(
    () =>
      getFilteredExpenses(
        dateFrom || new Date(),
        dateTo || new Date(),
        category
      ),
    [getFilteredExpenses, dateFrom, dateTo, category]
  );

  const total = useMemo(() => {
    let total = 0;

    filteredExpenses.forEach((expense) => {
      total += expense.amount;
    });

    return total;
  }, [filteredExpenses]);

  const renderItems = () => {
    if (showDate) {
      const items = [];

      let lastDate = "";

      filteredExpenses.forEach((expense) => {
        if (lastDate !== expense.date) {
          lastDate = expense.date;
          items.push(
            <p key={expense.date} className="date-header">
              {expense.date}
            </p>
          );
        }
        items.push(<ExpenseItem key={expense.id} expense={expense} />);
      });

      return items;
    }

    return filteredExpenses.map((expense) => (
      <ExpenseItem key={expense.id} expense={expense} />
    ));
  };

  return (
    <div className="expense-list">
      {fetching && <p className="loader">Loading...</p>}
      {!fetching && filteredExpenses.length < 1 && (
        <p className="empty">No expenses.</p>
      )}
      {!fetching && renderItems()}
      {!fetching && filteredExpenses.length > 0 && (
        <p className="total">Total: {formatMoney(total)}</p>
      )}
    </div>
  );
};

export default ExpenseList;
