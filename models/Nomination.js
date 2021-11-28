const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Nomination extends Model {}

Nomination.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5],
      },
    },
    
    barge_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5],
      },
    },

    move_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },

    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5],
      },
    },

    tank_number: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },

    inspector_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5],
      },
    },

    counterparty_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5],
      },
    },
  },

  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "nomination",
  }
);

module.exports = Nomination;
