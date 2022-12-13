const router = require("express").Router();
const { Users, Books, Genre } = require("../models");
const { sync } = require("../models/books");
const withAuth = require("../utils/auth");

router.get(`/`, (req, res) => {
  res.render(`home`);
});

module.exports = router;

router.get(`/book/:id`, async (req, res) => {
  try {
    const bookData = await Books.findByPk(req.params.id, {
      include: [
        {
          model: Users,
          attributes: [`saved_books`],
        },
      ],
    });

    const book = bookData.get({ plain: true });

    res.render(`book`, {
      ...book,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
