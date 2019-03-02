import mockDB from "../data.json";

export const fetchFolderContent = async path => {
  // Turn into arr and get rid of first empty string.
  const pathArr = path.split("/").splice(1);

  let tempFolderContent = null;
  for (let i = 0; i < pathArr.length; i++) {
    const currentPathName = pathArr[i];

    if (i === 0) {
      tempFolderContent = mockDB.children;
    } else {
      const nextFolder = tempFolderContent.find(
        item => item.name === currentPathName,
      );
      tempFolderContent = nextFolder.children;
    }
  }

  const folderContent = tempFolderContent.map(child => {
    const copy = Object.assign({}, child);
    delete copy.children;
    return copy;
  });

  return await new Promise(resolve =>
    setTimeout(() => resolve(folderContent), 500),
  );
};
