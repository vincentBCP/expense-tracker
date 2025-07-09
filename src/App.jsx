import { BrowserRouter, Routes, Route } from "react-router";
import AppProvider from "./context/AppContext";
import AppLayout from "./layouts/AppLayout";
import Home from "./views/Home";
import ExpenseLayout from "./layouts/ExpenseLayout";
import AddExpense from "./views/AddExpense";
import EditExpense from "./views/EditExpense";
import Reporting from "./views/Reporting";

const App = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="reporting" element={<Reporting />} />
          </Route>
          <Route element={<ExpenseLayout />}>
            <Route path="add-expense" element={<AddExpense />} />
            <Route path="edit-expense/:id" element={<EditExpense />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
