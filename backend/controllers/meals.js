const models = require("../models/index");

module.exports = {
  list,
  add,
};

async function list(req, res, next) {
  try {
    const meals = await models.meals.findAll();
    setTimeout(() => {
      res.status(200).json(meals);
    }, 3000);
  } catch (e) {
    res.status(500).send({
      message: "An error occurred",
    });
    next(e);
  }
}

async function add(req, res, next) {
  try {
    const meals = await models.meals.create({
      name: req.body.name,
      restaurant_id: req.body.restaurant_id,
    });
    res.status(200).json(meals);
  } catch (e) {
    console.log(e);
    res.status(500).send({
      message: "An error occurred",
    });
    next(e);
  }
}
