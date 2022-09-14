const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const attributes = {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: "id",
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      field: "name",
    },
    createdAt: {
      type: DataTypes.DATE,
      field: "created_at",
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: "updated_at",
    },
  };
  const options = {
    tableName: "restaurants",
    timestamps: true,
    underscored: true,
    indexes: [],
  };

  const Restaurants = sequelize.define("restaurants", attributes, options);

  /* Restaurants.associations = (models) => {
     Restaurants.hasMany(models.meals, {
      foreignKey: "id",
      as: "meal_id",
    });

    Restaurants.hasMany(models.style, {
      foreignKey: "id",
      as: "style_id",
    }); 
  }; */

  return Restaurants;
};
