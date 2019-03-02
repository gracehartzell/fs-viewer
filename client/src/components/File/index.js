/**
 *
 * File
 *
 */
import React from "react";
import PropTypes from "prop-types";
import { DocumentText } from "grommet-icons";

const propTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
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

class File extends React.Component {
  onFileClick = () => {
    const { path, history } = this.props;
    return history.push(path);
  };

  render() {
    const { name, depth } = this.props;
    return (
      <button
        style={{
          outline: "none",
          border: "none",
          background: "none",
          fontWeight: "bold",
          color: "white",
          padding: "0",
          marginLeft: `${depth * 15}px`,
          marginBottom: "5px",
        }}
        onClick={this.onFileClick}
      >
        <DocumentText color="white" size="small" /> {name}
      </button>
    );
  }
}

File.propTypes = propTypes;

export default File;
