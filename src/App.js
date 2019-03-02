import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">File System Viewer</header>
        <Router>
          <Route
            path="/"
            render={() => <h1 style={{ color: "red" }}>Has rendered!</h1>}
          />
        </Router>
      </div>
    );
  }
}

export default App;
