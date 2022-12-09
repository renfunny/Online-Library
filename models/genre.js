const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Genre model
class Genre extends Model {}

// create fields/columns for Genre model
Genre.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false
    },
  },
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'genre'
  }
);

module.exports = Genre;