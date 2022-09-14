const models = require("../models/index");

module.exports = {
  list,
  add,
  query,
};

async function list(req, res, next) {
  try {
    const restaurants = await models.restaurants.findAll({
      include: [
        {
          model: models.meals,
          as: "meals",
        },
        {
          model: models.style,
          as: "style",
        },
      ],
    });
    res.status(200).json(restaurants);
  } catch (e) {
    res.status(500).send({
      message: e,
    });
    next(e);
  }
}

async function add(req, res, next) {
  try {
    const restaurants = await models.restaurants.create({
      name: req.body.name,
    });
    res.status(200).json(restaurants);
  } catch (e) {
    res.status(500).send({
      message: "An error occurred",
    });
    next(e);
  }
}

async function query(req, res, next) {
  console.log(req.body);
  const style = req.body.find((item) => item.name === "style");
  const meal = req.body.find((item) => item.name === "meal");
  console.log(style);
  console.log(meal);

  const options = [
    {
      model: models.meals,
      as: "meals",
      where: {},
    },
    {
      model: models.style,
      as: "style",
      where: {},
    },
  ];

  if (meal !== undefined) {
    options[0].where.name = meal.meal;
  }

  if (style !== undefined) {
    options[1].where.name = style.style;
  }

  try {
    const restaurants = await models.restaurants.findAll({
      include: options,
    });

    setTimeout(() => {
      res.status(200).json(restaurants);
    }, 2000);
  } catch (e) {
    res.status(500).send({
      message: e,
    });
    next(e);
  }
}
