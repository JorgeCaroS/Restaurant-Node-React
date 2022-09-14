const models = require("../models/index");

module.exports = {
  list,
  add,
};

async function list(req, res, next) {
  try {
    const styles = await models.style.findAll();
    setTimeout(() => {
      res.status(200).json(styles);
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
    const styles = await models.style.create({
      name: req.body.name,
      restaurant_id: req.body.restaurant_id,
    });
    res.status(200).json(styles);
  } catch (e) {
    res.status(500).send({
      message: "An error occurred",
    });
    next(e);
  }
}
