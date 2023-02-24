const Book = require("./Book");
const User = require("./User");

Book.belongsTo(User, {
  foreignKey: "user_id",
});

// A user can have many books saved
User.hasMany(Book, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

module.exports = { User, Book };
