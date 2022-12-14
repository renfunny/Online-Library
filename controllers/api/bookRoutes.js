const router = require("express").Router();
const { User, Book } = require("../../models");

//one book by id
router.get("/:id", async (req, res) => {
  try {
    const bookData = await Book.findByPk(req.params.id);
    if (!bookData) {
      res.status(404).json({ message: "No book with this id!" });
      return;
    }
    const book = bookData.get({ plain: true });
    console.log(book);
    res.render(`book`, book);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
