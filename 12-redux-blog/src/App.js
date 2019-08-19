import React from "react";

import Posts from "./components/Posts";
import PostForm from "./components/PostForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Redux Test</h1>
      </header>
      <PostForm />
      <hr />
      <Posts />
    </div>
  );
}

export default App;
