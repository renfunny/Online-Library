const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Books model
class Books extends Model {}

// create fields/columns for Books model
Books.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    subtitle: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cover: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: TEXT('medium'),
    },
    published_year: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true
    },
    average_rating: {
        type: DECIMAL,
    },
    page_num: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true
    },
    ratings_count: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true
    },
  },
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'books'
  }
);

module.exports = Books;