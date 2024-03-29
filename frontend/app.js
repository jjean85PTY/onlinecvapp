//alert('works');

import "./styles/app.css";
import UI from './UI';

document.addEventListener('DOMContentLoaded', () => {
  const ui = new UI();
  ui.renderBooks();
})  

/* tambien lo quitamo
import BookService from "./services/BookService";'./services/BookService' 
*/

/*
//require('./styles/app.css')

*/

document.getElementById('book-form')
    .addEventListener('submit', e => {
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const isbn = document.getElementById('isbn').value;
        const image = document.getElementById('image').files;

        const formData = new FormData();
        formData.append('image', image[0]);
        formData.append('title', title);
        formData.append('author', author);
        formData.append('isbn', isbn);

        /* const bookService = new BookService(formData)
        bookService.postBook(formData) */

        //console.log(title, author, isbn, image)
        const ui = new UI(); 
        ui.addANewBook(formData);
        ui.renderMessage('Book added', 'success', 3000);
        e.preventDefault();
    });


document.getElementById('books-cards')
  .addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
      const ui = new UI();
      ui.deleteBook(e.target.getAttribute('_id'));
      ui.renderMessage('Book Successfully Deleted', 'danger', 3000);
    }
    e.preventDefault();
});
