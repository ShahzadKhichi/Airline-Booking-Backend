const { serverConfig, logger } = require("./config");

const express = require("express");

const app = express();

app.use(express.json());

//routes import

const router = require("./routes/index");

//routes

app.use("/api", router);

app.listen(serverConfig.PORT, () => {
  console.log("server is running on port : " + serverConfig.PORT);
  logger.info("successfull started the sever", "root", {});
});
