import React from "react";
// connect: connects your component to the redux store right here.
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";

export const ExpenseList = (props) => (
  <div>
    {props.expenses.length === 0 ? (
      <p>No expenses</p>
    ) : (
      props.expenses.map(expense => {
        return <ExpenseListItem key={expense.id} {...expense} />;
      })
    )}
  </div>
);

// Here this is where we provide the information about what we want to connect.
// Gets the information on the store does the component need all of it.
// connect(): This function lets us determine what information from the store
//            we want our component to be able to access and the stores state
//            actually gets passed in.

const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);

// const ConnectedExpenseList = connect(state => {
//   return {
//     expenses: state.expenses
//   };
// })(ExpenseList);

// export default ConnectedExpenseList;
