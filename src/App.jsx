import { BrowserRouter, Routes, Route } from "react-router";
import AppProvider from "./context/AppContext";
import AppLayout from "./layouts/AppLayout";
import Home from "./views/Home";
import ExpenseLayout from "./layouts/ExpenseLayout";
import AddExpense from "./views/AddExpense";
import EditExpense from "./views/EditExpense";
import Reporting from "./views/Reporting";
import AuthProvider from "./context/AuthContext";
import Login from "./views/Login";
import Authenticated from "./components/Authenticated";

const App = () => {
  return (
    <AuthProvider>
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path="login" element={<Login />} />
            <Route element={<AppLayout />}>
              <Route
                path="/"
                element={
                  <Authenticated>
                    <Home />
                  </Authenticated>
                }
              />
              <Route
                path="reporting"
                element={
                  <Authenticated>
                    <Reporting />
                  </Authenticated>
                }
              />
            </Route>
            <Route element={<ExpenseLayout />}>
              <Route
                path="add-expense"
                element={
                  <Authenticated>
                    <AddExpense />
                  </Authenticated>
                }
              />
              <Route
                path="edit-expense/:id"
                element={
                  <Authenticated>
                    <EditExpense />
                  </Authenticated>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </AuthProvider>
  );
};

export default App;
