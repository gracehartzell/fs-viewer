const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { folderApi } = require("./api");

const app = express();
const port = process.env.PORT || 3002;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (...args) => folderApi(...args));

app.listen(port, () => console.log(`Listening on port ${port}`));
