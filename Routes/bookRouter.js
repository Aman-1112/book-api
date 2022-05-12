const express = require('express');
const bookRouter=express.Router();

const {getAllBooks,createBook,getBook,updateBook,deleteBook} = require('../Controllers/book');

bookRouter
.route('/books')
.get(getAllBooks)
.post(createBook)

bookRouter
.route('/book/:id')
.get(getBook)
.patch(updateBook)
.delete(deleteBook)

module.exports=bookRouter;