const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create our Books model
class Books extends Model {}

// create fields/columns for Books model
Books.init(
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
    },

    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: `Genre`,
        key: `name`,
      },
    },
    cover: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    link: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "books",
  }
);

module.exports = Books;
