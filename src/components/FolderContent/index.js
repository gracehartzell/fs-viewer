/**
 *
 * FolderContent
 *
 */

import React from "react";
import PropTypes from "prop-types";
import { fetchFolderContent } from "../../api";
import File from "../File";
import Folder from "../Folder";

const propTypes = {
  /** Name of folder */
  name: PropTypes.string.isRequired,
  /** Path of folder */
  path: PropTypes.string.isRequired,
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

class FolderContent extends React.Component {
  state = { content: [], loading: false, error: null };

  // Fetch folder content on mount:
  async componentDidMount() {
    const { path } = this.props;
    this.setState({ loading: true });
    try {
      const content = await fetchFolderContent(path);
      this.setState({ content, loading: false });
    } catch (error) {
      console.warn("Something's wrong...", error);
      this.setState({ error, loading: false });
    }
  }

  render() {
    const { loading, error, content } = this.state;
    const { name, match, location, history, depth } = this.props;
    // Show error if broken
    if (error) {
      return (
        <p style={{ fontWeight: "bold", color: "red" }}>
          Uh-Oh! Couldn't fetch folder contents for {name}!
        </p>
      );
    }
    // Show loading animation
    if (loading) {
      return (
        <p
          style={{
            color: "white",
            fontWeight: "bold",
            marginTop: "0",
            fontSize: "11px",
            padding: "0",
            marginLeft: `${(depth + 1) * 15}px`,
          }}
        >
          Loading...
        </p>
      );
    }

    // Render all folder content
    return content.map(foldOrFile => {
      if (foldOrFile.type === "folder") {
        return (
          <div key={foldOrFile.name}>
            <Folder
              depth={depth + 1}
              {...foldOrFile}
              history={history}
              location={location}
              match={match}
            />
          </div>
        );
      }
      return (
        <div key={foldOrFile.name}>
          <File depth={depth + 1} {...foldOrFile} history={history} />
        </div>
      );
    });
  }
}

FolderContent.propTypes = propTypes;

export default FolderContent;
