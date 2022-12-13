const Books = require('./books');
const Genre = require('./genre');
const Users = require('./users');

Genre.hasMany(Books, {
    foreignKey: 'users_id',
    onDelete: 'CASCADE',
});

Books.hasOne(Genre, {
    foreignKey: 'users_id',
    onDelete: 'CASCADE',
});

// A user can have many books saved
Users.hasMany(Books, {
    foreignKey: 'users_id',
    onDelete: 'CASCADE',
  });

  module.exports = { Users, Books };