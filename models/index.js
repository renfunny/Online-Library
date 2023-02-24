const Book = require("./book");
const User = require("./user");

Book.belongsTo(User, {
  foreignKey: "user_id",
});

// A user can have many books saved
User.hasMany(Book, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

module.exports = { User, Book };
