const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create our Genre model
class Genre extends Model {}

// create fields/columns for Genre model
Genre.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    book_id: {
      type: DataTypes.INTEGER,
      references: {
        model: `Books`,
        key: `id`,
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "genre",
  }
);

module.exports = Genre;
