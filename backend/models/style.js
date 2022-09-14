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
    restaurant_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: false,
      field: "restaurant_id",
      references: {
        key: "id",
        model: "restaurants",
      },
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
    tableName: "style",
    timestamps: true,
    underscored: true,
    indexes: [],
  };

  const Style = sequelize.define("style", attributes, options);

  /* Style.associations = (models) => {
    Style.belongsTo(models.restaurants, {
      foreignKey: "id",
      as: "style_id",
    });
  }; */

  return Style;
};
