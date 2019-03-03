/**
 *
 * File
 *
 */
import React from "react";
import PropTypes from "prop-types";
import fileIcons from "file-icons-js";
import "file-icons-js/css/style.css";
import { StyledButton } from "../../styles/GlobalStyles";

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
    const iconClass = fileIcons.getClassWithColor(name);
    console.log("Got it?", iconClass);
    return (
      <StyledButton depth={depth} onClick={this.onFileClick}>
        <i className={iconClass} /> {name}
      </StyledButton>
    );
  }
}

File.propTypes = propTypes;

export default File;
