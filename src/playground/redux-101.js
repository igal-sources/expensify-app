import { createStore } from "redux";

// Action generators - function that return action objects

const add = ({ a, b }) => {
  return a + b;
};

console.log(add({ a: 1, b: 13 }));

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy: incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy: decrementBy
});

const setCount = ({ count = 1 } = {}) => ({
  type: "SET",
  count: count
});

const resetCount = () => ({
  type: "RESET",
  reset: 0
});

//
// Reducers
// 1. Reducers are pure functions.
//    The output is only determined by the input.
//    This function's output what it returns it is only
//    determined by the things that get passed in.
// sample:

// correct pure function: const add = (a, b) => { return a + b; };
// NOT correct pure function
// const result;
// const add = (a, b) => { result = a + b; };

// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy
      };
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy
      };
    case "SET":
      return {
        count: action.count
      };
    case "RESET":
      return {
        count: action.reset
      };
    default:
      return state;
  }
};

const store = createStore(countReducer);

store.subscribe(() => {
  console.log("subscribe", store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());
store.dispatch(decrementCount({ decrementBy: 3 }));
store.dispatch(setCount({ count: 101 }));
