"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Ride extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Ride.hasMany(models.Event, {
        as: "event",
      });
      Ride.belongsTo(models.User, {
        foreignKey: "id_user",
        as: "user",
      });
    }
  }
  Ride.init(
    {
      name: DataTypes.STRING,
      distance: DataTypes.INTEGER,
      start_time: DataTypes.STRING,
      final_time: DataTypes.STRING,
      start_location: DataTypes.STRING,
      final_location: DataTypes.STRING,
      time: DataTypes.STRING,
      id_user: DataTypes.INTEGER,
      date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Ride",
    }
  );
  return Ride;
};
