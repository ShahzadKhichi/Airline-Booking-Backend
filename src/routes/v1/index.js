const express = require("express");

const router = express.Router();

const { infoController } = require("../../controllers/index");

router.get("/info", infoController.info);

module.exports = router;
