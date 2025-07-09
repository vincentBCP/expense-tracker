import { useCallback, useContext, useMemo, useState } from "react";

import ExpenseList from "../../components/ExpenseList";
import { AppContext } from "../../context/AppContext";
import { formatMoney } from "../../utils/formatMoney";
import Filters from "../../components/Filters";

import "./styles.css";
import { getFirstDayOfMonth, getLastDayOfMonth } from "../../utils";
import { Link } from "react-router";

const Reporting = () => {
  const { categories, getFilteredExpenses } = useContext(AppContext);
  const [filters, setFilters] = useState({
    category: null,
    from: getFirstDayOfMonth(),
    to: getLastDayOfMonth(),
  });

  const filteredExpenses = useMemo(
    () => getFilteredExpenses(filters.from, filters.to, filters.category),
    [filters, getFilteredExpenses]
  );

  const getTotalByCategories = useCallback(
    (category) => {
      let total = 0;

      filteredExpenses
        .filter((expense) => expense.category === category)
        .forEach((expense) => {
          total += expense.amount;
        });

      return total;
    },
    [filteredExpenses]
  );

  return (
    <>
      <Filters value={filters} onChange={setFilters} />
      <div className="category-totals">
        {categories.map((category) => (
          <div key={category.name} style={{ backgroundColor: category.color }}>
            <span>{category.name}</span>
            <span>{formatMoney(getTotalByCategories(category.name))}</span>
          </div>
        ))}
      </div>
      <ExpenseList
        dateFrom={filters.from}
        dateTo={filters.to}
        category={filters.category}
        showDate
      />
    </>
  );
};

export default Reporting;
