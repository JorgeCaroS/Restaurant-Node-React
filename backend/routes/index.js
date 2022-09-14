const express = require("express");
const router = express.Router();
const restaurantRouter = require("./restaurant");
const mealsRouter = require("./meals");
const styleRouter = require("./style");
const { cacheInit } = require("../cache/cache");

router.use("/restaurants", restaurantRouter);
router.use("/meals", cacheInit, mealsRouter);
router.use("/style", cacheInit, styleRouter);

module.exports = router;
