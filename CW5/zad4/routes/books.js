const express = require('express');
const router = express.Router();
const booksController = require('../controllers/books');

router.get('/list', booksController.list);
router.post('/add', booksController.addBook);
router.delete('/delete/:id', booksController.deleteBook);

router.get('/:id', booksController.getBookById);

module.exports = router;
