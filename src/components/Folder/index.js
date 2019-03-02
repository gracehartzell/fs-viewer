/**
 *
 * Folder
 *
 */

import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

const propTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  /** React router history to forward down to files/folders */
  history: PropTypes.shape({
    push: PropTypes.func,
    action: PropTypes.string,
    block: PropTypes.func,
    createHref: PropTypes.func,
    go: PropTypes.func,
    goBack: PropTypes.func,
    goForward: PropTypes.func,
    length: PropTypes.number,
    replace: PropTypes.func,
  }).isRequired,
};

class Folder extends React.Component {
  onOpenFolder = () => {
    const { history, path } = this.props;
    history.push(path);
    console.log("HISTORY", history);
  };

  render() {
    const { path, name } = this.props;

    return (
      <Fragment>
        <button
          style={{
            outline: "none",
            border: "none",
            background: "none",
            fontWeight: "bold",
            color: "white",
            padding: "0",
            marginBottom: "5px",
          }}
          onClick={this.onOpenFolder}
        >
          {name}
        </button>

        <Route path={path} render={() => <h1> Folder Content </h1>} />
      </Fragment>
    );
  }
}

Folder.propTypes = propTypes;

export default Folder;
