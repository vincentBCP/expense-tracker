import React from "react";

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
          <a href="#" className="active">
            Home
          </a>
          <a href="#">Reporting</a>
        </nav>
        <main>{this.props.children}</main>
      </div>
    );
  }
}

export default AppLayout;
