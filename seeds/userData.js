const { User } = require("../models");

const userData = [
  {
    email: "ren99cordova@gmail.com",
    password: "password12345",
  },
  {
    email: "icaro12@hotmail.com",
    password: "password12345",
  },
  {
    email: "kendalbastien@gmail.com",
    password: "password12345",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
