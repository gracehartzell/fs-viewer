import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Folder from "./components/Folder";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">File Tree Viewer</header>
        <Router>
          <Route
            path="/"
            render={({ history, location, match }) => (
              <Folder
                depth={0}
                history={history}
                match={match}
                location={location}
                name="my-laptop"
                path="/my-laptop"
              />
            )}
          />
        </Router>
      </div>
    );
  }
}

export default App;
