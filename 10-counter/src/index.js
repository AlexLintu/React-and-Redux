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
const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

// STORE (Global State)
let store = createStore(counter);

// Display it in the console:
store.subscribe(() => console.log(store.getState()));

// DISPATCH
store.dispatch(increment());
store.dispatch(decrement());

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();