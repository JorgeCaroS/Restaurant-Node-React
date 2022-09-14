const express = require("express");
const router = express.Router();
const restaurantController = require("../controllers/restaurants");

router.get("/list", restaurantController.list);
router.post("/add", restaurantController.add);
router.post("/query", restaurantController.query);

module.exports = router;
