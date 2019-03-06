const { Folder } = require("./models");

module.exports = {
  folderApi: (req, res) => {
    const { path } = req.query;
    const pathArray = path.split("/").splice(1);

    const folderContent = Folder.getFolderContent(pathArray);
    return res.status(200).json(folderContent);
  },
};
