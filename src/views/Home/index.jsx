import React from "react";

import { formatMoney } from "../../utils";

import "./styles.css";
import ExpenseList from "../../components/ExpenseList";
import ExpenseForm from "../../components/ExpenseForm";
import { Link } from "react-router";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      fetching: true,
      showForm: false,
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
    this.setState({ showForm: !this.state.showForm });
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
    return <ExpenseList />;
  }
}

export default Home;
