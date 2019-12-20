// ****************
// Expenses Reducer
// ****************

const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      // The filter() method creates a new array with all elements
      // that pass the test implemented by the provided function.
      // Here: return new array with all elements that are NOT equal to this id.
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_EXPENSE":
      return state.map(expense => {
        if (expense.id === action.id) {
          // Spreading the expense object with action.updates to one object.
          // If in action.updates there is a key that match to key in expense object,
          // it will override it.
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};
