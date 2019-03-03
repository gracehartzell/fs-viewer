const { Folder } = require("./models");
const util = require("util");
const chalk = require("chalk");

module.exports = {
  folderApi: (req, res) => {
    const { path } = req.query;
    const pathArray = path.split("/").splice(1);

    const folderContent = Folder.getFolderContent(pathArray);
    console.log(
      "Check folder content: ",
      chalk.bold.blue(util.inspect(folderContent, { deep: 1 })),
    );
    return res.status(200).json(folderContent);
  },
};
