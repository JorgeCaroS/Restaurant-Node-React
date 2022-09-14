const express = require("express");
const router = express.Router();
const mealsController = require("../controllers/meals");

router.get("/list", mealsController.list);
router.post("/add", mealsController.add);

module.exports = router;
