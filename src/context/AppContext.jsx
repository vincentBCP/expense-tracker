import { createContext, useEffect, useState, useCallback } from "react";
import { formatDate } from "../utils";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [fetching, setFetching] = useState(true);
  const [categories] = useState([
    {
      name: "utilities",
      color: "red",
    },
    {
      name: "miscellaneous",
      color: "orange",
    },
    {
      name: "entertainment",
      color: "green",
    },
    {
      name: "food",
      color: "violet",
    },
    {
      name: "transportation",
      color: "indigo",
    },
    {
      name: "liesure",
      color: "blue",
    },
  ]);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetch("../../expenses.json")
      .then((resp) => resp.json())
      .then((expenses) => {
        setTimeout(() => {
          setExpenses(expenses);
          setFetching(false);
        }, 500);
      })
      .catch((err) => console.error(err));
  }, []);

  const getFilteredExpenses = useCallback(
    (dateFrom, dateTo, category) => {
      let filteredExpenses = expenses;

      if (dateFrom && dateTo) {
        const dates = [formatDate(dateFrom)];

        const startDate = new Date(dateFrom.getTime());

        while (formatDate(startDate) !== formatDate(dateTo)) {
          startDate.setDate(startDate.getDate() + 1);
          dates.push(formatDate(startDate));
        }

        filteredExpenses = filteredExpenses
          .filter((expense) => dates.includes(expense.date))
          .sort((a, b) => {
            if (a.date < b.date) return -1;
            if (a.date > b.date) return 1;
            return 0;
          });
      }

      if (category) {
        filteredExpenses = filteredExpenses.filter(
          (expense) => expense.category === category
        );
      }

      return filteredExpenses;
    },
    [expenses]
  );

  const addExpense = (expense) => {
    setExpenses((expenses) => [...expenses, expense]);
  };

  const updateExpense = (expense) => {
    setExpenses((expenses) => {
      const updatedExpenses = [...expenses];
      const index = updatedExpenses.findIndex((e) => e.id === expense.id);
      updatedExpenses[index] = { ...expense };

      return updatedExpenses;
    });
  };

  const deleteExpense = (expense) => {
    setExpenses((expenses) => [...expenses].filter((e) => e.id !== expense.id));
  };

  return (
    <AppContext.Provider
      value={{
        fetching,
        categories,
        expenses,
        addExpense,
        updateExpense,
        deleteExpense,
        getFilteredExpenses,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
