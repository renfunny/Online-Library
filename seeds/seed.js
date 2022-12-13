const sequelize = require("../config/connection");
const { Users, Books, Genre } = require("../models");

const userData = require("./userData.json");
const booksData = require("./booksData.json");
const genreData = require("./genreData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await Users.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const book of booksData) {
    await Books.create({
      ...book,
    });
  }

  for (const genre of genreData) {
    await Genre.create({
      ...genre,
    });
  }

  process.exit(0);
};

seedDatabase();
