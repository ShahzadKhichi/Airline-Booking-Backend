const { PORT } = require("./config");

const express = require("express");

const app = express();

app.listen(PORT, () => console.log("server is running on port : " + PORT));
