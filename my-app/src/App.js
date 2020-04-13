import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PostList from "./components/PostList";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header"></header>
        <Route exact path="/" component={PostList} />
      </div>
    </Router>
  );
}

export default App;
