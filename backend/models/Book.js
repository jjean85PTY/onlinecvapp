const { Schema, model } = require('mongoose');

const bookSchema = new Schema({
  title: String,
  author: String,
  isbn: String,
  imagePath: String,
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = model('Book', bookSchema);

