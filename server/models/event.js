"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Event.belongsTo(models.Ride, {
        foreignKey: "id_ride",
        as: "ride",
      });
    }
  }
  Event.init(
    {
      name: DataTypes.STRING,
      time: DataTypes.STRING,
      id_ride: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Event",
    }
  );
  return Event;
};
