const { Router } = require('express');
const Book = require('../models/Book');
const router = Router();
const {unlink} = require('fs-extra');
const path = require('path');
const { resolve } = require('path');



router.get('/', async (req, res) => {
  //console.log(req.body);
  //res.send('received');
  const books = await Book.find();
  res.json(books);
});

router.post('/', async (req, res) => {
  const { title, author, isbn } = req.body;
  const imagePath = '/uploads/' + req.file.filename;
  const newBook = new Book({ title, author, isbn, imagePath });
  await newBook.save();
  //console.log(newBook);
  res.json({ message: 'Book Saved' });
});

router.delete('/:id', async (req, res) => {
  const book = await Book.findByIdAndDelete(req.params.id);
  unlink(path.resolve('./backend/public' + book.imagePath));
  //console.log(book);
  res.json({ message: 'Book Deleted' });
});

module.exports = router;

