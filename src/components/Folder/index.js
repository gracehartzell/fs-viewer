/**
 *
 * Folder
 *
 */

import React, { Fragment } from "react";
import PropTypes from "prop-types";

const propTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

class Folder extends React.Component {
  onOpenFolder = () => {
    console.log("OPENING FOLDER");
  };

  render() {
    const { name } = this.props;

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
      </Fragment>
    );
  }
}

Folder.propTypes = propTypes;

export default Folder;
