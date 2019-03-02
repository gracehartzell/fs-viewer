import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Folder from "./components/Folder";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">File System Viewer</header>
        <Router>
          <Route
            path="/"
            render={({ history }) => (
              <Folder name="my-laptop" path="/my-laptop" history={history} />
            )}
          />
        </Router>
      </div>
    );
  }
}

export default App;
