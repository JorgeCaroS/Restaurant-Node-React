const express = require("express");
const router = express.Router();
const styleController = require("../controllers/style");

router.get("/list", styleController.list);
router.post("/add", styleController.add);

module.exports = router;
