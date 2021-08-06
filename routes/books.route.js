const { Router } = require("express");
const { booksController } = require("../controllers/books.controller");

const router = Router();

router.post("/", booksController.createBook);
router.get("/", booksController.getBooks);
router.patch("/:id", booksController.editBooks);
router.delete("/:id", booksController.removeBooks);

module.exports = router;
