import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [fetching, setFetching] = useState(true);
  const [categories] = useState([
    {
      name: "utilities",
    },
    {
      name: "miscellaneous",
    },
    {
      name: "entertainment",
    },
    {
      name: "food",
    },
    {
      name: "transportation",
    },
    {
      name: "liesure",
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

  const addExpense = (expense) => {
    setExpenses((expenses) => [...expenses, expense]);
  };

  return (
    <AppContext.Provider
      value={{
        fetching,
        categories,
        expenses,
        addExpense,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
