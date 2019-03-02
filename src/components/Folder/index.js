/**
 *
 * Folder
 *
 */

import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import FolderContent from "../FolderContent";

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
  match: PropTypes.shape({
    url: PropTypes.string,
    path: PropTypes.string,
    params: PropTypes.object,
    isExact: PropTypes.bool,
  }),
  location: PropTypes.shape({
    pathname: PropTypes.string,
    hash: PropTypes.string,
    state: PropTypes.object,
    search: PropTypes.string,
  }),
};

class Folder extends React.Component {
  onOpenFolder = () => {
    const { path, history, match, location } = this.props;
    if (location.pathname === match.url) return history.push(path);
    // Closing folder (going back up to parent url/path)
    return history.push(match.url);
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

        <Route
          path={`${path}`}
          render={({ history, match, location }) => (
            <FolderContent name={name} />
          )}
        />
      </Fragment>
    );
  }
}

Folder.propTypes = propTypes;

export default Folder;
