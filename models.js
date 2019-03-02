const database = require("./output.json");

module.exports = {
  Folder: {
    getFolderContent: pathArray => {
      let tempFolderContent = null;
      for (let i = 0; i < pathArray.length; i++) {
        const currentPathName = pathArray[i];

        if (i === 0) {
          tempFolderContent = database.children;
        } else {
          const nextFolder = tempFolderContent.find(
            item => item.name === currentPathName,
          );
          tempFolderContent = nextFolder.children;
        }
      }

      return tempFolderContent.map(child => {
        const copy = Object.assign({}, child);
        delete copy.children;
        return copy;
      });
    },
  },
};
