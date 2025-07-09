import { Outlet, Link, useNavigate } from "react-router";

import "./styles.css";

const ExpenseLayout = () => {
  const navigate = useNavigate();

  return (
    <div className="expense-layout">
      <h1>Expense Tracker</h1>
      <Link
        to="/"
        onClick={(ev) => {
          ev.preventDefault();
          navigate(-1);
        }}
      >
        Back
      </Link>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default ExpenseLayout;
