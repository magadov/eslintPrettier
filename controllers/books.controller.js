const Book = require('../models/Book.model');

module.exports.booksController = {

  createBook: async (req, res) => {
    const { name } = req.body;
    try {
      await Book.create({
        name
      });
      res.json('Книга успешно добавлена');
    } catch (e) {
      res.json(e.message);
    }
  },
  editBooks: async (req, res) => {
    const { name } = req.body;
    try {
      await Book.findByIdAndUpdate(req.params.id, {
        name
      },
        { new: true });
      res.json('Книга успешна редактирована')
    } catch (e) {
      res.json(e.message)
    }
  },

  getBooks: async (req, res) => {
    try {
      const books = await Book.find({});
      res.json(books);
    } catch (e) {
      res.json(e.message())
    }
  },

  removeBooks: async (req, res) => {
    try {
      await Book.findByIdAndDelete(req.params.id,
        { new: true });
      res.json('Книга удалена')
    }catch (e) {
      res.json(e.message())
    }
  }

}