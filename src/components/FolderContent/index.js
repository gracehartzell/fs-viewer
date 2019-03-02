/**
 *
 * FolderContent
 *
 */

import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  /** Name of folder */
  name: PropTypes.string.isRequired,
};

class FolderContent extends React.Component {
  render() {
    const { name } = this.props;

    return (
      <p
        style={{
          color: "white",
          fontWeight: "bold",
          marginTop: "0",
          fontSize: "11px",
          padding: "0",
        }}
      >
        Folder contents!
        {name}
      </p>
    );
  }
}

FolderContent.propTypes = propTypes;

export default FolderContent;
