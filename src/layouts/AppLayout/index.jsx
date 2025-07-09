import React from "react";
import { Link, NavLink, Outlet } from "react-router";

import "./styles.css";

class AppLayout extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="app-layout">
        <h1>{this.props.title || "Expense Tracker"}</h1>
        <nav className="navigation">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/reporting">Reporting</NavLink>
        </nav>
        <main>
          <Link to="/add-expense" className="add-btn">
            &#10010; ADD
          </Link>
          <Outlet />
        </main>
      </div>
    );
  }
}

export default AppLayout;
