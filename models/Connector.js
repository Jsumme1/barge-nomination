const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Connector extends Model {}

Connector.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    nomination_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "nomination",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "vote",
  }
);

module.exports = Connector;
