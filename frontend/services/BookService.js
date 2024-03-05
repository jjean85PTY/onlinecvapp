//import { relative } from "path";
//import { type } from "os";


class BookService {  

    constructor() {
        //this.URI = 'http://localhost:3000/api/books'; //para desarrollo
        this.URI = '/api/books';  //para production
    }

    async getBooks() {
        const response = await fetch(this.URI);
        const books = await response.json();
        return books;
    
    }

    async postBook(book) {
        const res = await fetch(this.URI, {
            method: 'POST',
            body: book
        });
        const data = await res.json();
        return data;
        console.log(data)
    }

    async deleteBook(bookId) {
        const res = await fetch(`${this.URI}/${bookId}`, {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'DELETE'
        });
        const data = await res.json();
        console.log(data)
    }

    /* async editBook(bookId) {
        const res = await fetch(`${this.URI}/${bookId}`, {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'UPDATE'
        });
        const data = await res.json();
        console.log(data)
    } */

}

//module.exports = BookService.js;
export default BookService;