import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// Redux Integration
import { createStore } from "redux";

// ACTION (function that returns and object)
const increment = () => {
  return {
    type: "INCREMENT"
  };
};

const decrement = () => {
  return {
    type: "DECREMENT"
  };
};

// REDUCER
const counter = (state = 5, action) => {
  switch (action.type) {
    // ALways returning a new state object and never mutating the initial state we started with
    case "INCREMENT":
      return state + 1; // Returning the new state (state = 6)
    case "DECREMENT":
      return state - 1; // Returning the new state (currentState - 1)
    default:
      return state; // Returning the previous/initial state (state = 5)
  }
};

// STORE (Global State)
let store = createStore(counter);

// Display it in the console:
store.subscribe(() => console.log(store.getState()));

// DISPATCH
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(increment());

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
