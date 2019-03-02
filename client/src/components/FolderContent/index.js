/**
 *
 * FolderContent
 *
 */

import React, { useState, useEffect } from "react";
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

const FolderContent = ({ name, depth, match, location, history, path }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [content, setContent] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      /* If folder content is already in local storage, set it in state and avoid making an api call */
      let content = JSON.parse(localStorage.getItem(path));
      if (!content) {
        console.warn("Made api call and set response in localStorage");
        content = await fetchFolderContent(path);
        localStorage.setItem(path, JSON.stringify(content));
      }

      setContent(content);
      setLoading(false);
    } catch (error) {
      console.warn("Errrrrror", error);
      setLoading(false);
      setError(error);
      return;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Show error if broke
  if (error) {
    return (
      <p style={{ fontWeight: "bold", color: "red" }}>
        Ooops: cound not fetch folder contents for {name}
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
          marginLeft: `${(depth + 1) * 15}px`,
          marginTop: "0",
          fontSize: "11px",
          padding: "0",
        }}
      >
        Loading...
      </p>
    );
  }

  // Render all folder content and chuckle at that pun
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
};

FolderContent.propTypes = propTypes;

export default FolderContent;
