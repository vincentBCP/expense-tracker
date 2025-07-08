import React from "react";

import { formatMoney } from "../../utils";

import "./styles.css";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      fetching: true,
      expenses: [],
    };
  }

  componentDidMount() {
    fetch("../../expenses.json")
      .then((resp) => resp.json())
      .then((expenses) => {
        setTimeout(() => {
          this.setState({ expenses, fetching: false });
        }, 500);
      })
      .catch((err) => console.err(err));
  }

  handleAdd() {
    alert("Add");
  }

  handleEdit(expense) {
    alert(`Edit ${expense.name}`);
  }

  handleDelete(expense) {
    alert(`Delete ${expense.name}`);
  }

  getTotal() {
    let total = 0;

    this.state.expenses.forEach((expense) => (total += expense.amount));

    return total;
  }

  render() {
    return (
      <>
        <button className="add-btn" onClick={this.handleAdd.bind(this)}>
          &#10010; ADD
        </button>
        <div className="expense-list">
          {this.state.fetching && <p className="loader">Loading...</p>}
          {!this.state.fetching && this.state.expenses.length < 1 && (
            <p className="empty">No expenses.</p>
          )}
          {!this.state.fetching &&
            this.state.expenses.map((expense) => (
              <div className="expense">
                <span>{expense.name}</span>
                <span>{expense.category}</span>
                <span>{formatMoney(expense.amount)}</span>
                <div className="actions">
                  <button
                    className="edit-btn"
                    onClick={this.handleEdit.bind(this, expense)}
                  >
                    &#9998;
                  </button>
                  <button
                    className="remove-btn"
                    onClick={this.handleDelete.bind(this, expense)}
                  >
                    &#10006;
                  </button>
                </div>
              </div>
            ))}
          {!this.state.fetching && this.state.expenses.length > 0 && (
            <p className="total">Total: {formatMoney(this.getTotal())}</p>
          )}
        </div>
      </>
    );
  }
}

export default Home;
