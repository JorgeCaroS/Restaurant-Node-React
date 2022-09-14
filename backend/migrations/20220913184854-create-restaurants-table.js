"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("restaurants", {
      id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: "id",
      },
      name: {
        type: Sequelize.STRING(255),
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        field: "name",
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date(),
        primaryKey: false,
        autoIncrement: false,
        field: "created_at",
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date(),
        primaryKey: false,
        autoIncrement: false,
        field: "updated_at",
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("restaurants");
  },
};
