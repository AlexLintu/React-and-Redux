import React from "react";
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";

// Redux
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    // Provider docs: https://react-redux.js.org/api/provider
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1>Redux Test</h1>
        </header>
        <PostForm />
        <hr />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
