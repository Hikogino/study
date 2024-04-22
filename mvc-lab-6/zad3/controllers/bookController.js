const Book = require('../models/Book');
const User = require('../models/User');

exports.getBookDetails = (req, res) => {
    const book = Book.getById(req.params.id);
    const user = User.getById(req.session.userId);
    const didUserBorrowTheBook = user && user.findBorrowedBookById(book.id);
    res.render('book-details', { title: `${book.title} by ${book.author}`, book, didUserBorrowTheBook });
};

exports.postBookBorrow = (req, res) => {
    const book = Book.getById(req.params.id);
    const user = User.getById(req.session.userId);
    if (book.available && user) {
        book.borrow();
        user.borrowBook(book);
        res.redirect('/books/borrow/success');
    }
};

exports.getBookBorrowSuccess = (req, res) => {
    res.render('success', { title: 'Success', message: 'Book borrowed successfully' });
};

exports.postBookReturn = (req, res) => {
    const book = Book.getById(req.params.id);
    const user = User.getById(req.session.userId);
    if (!book.available && user) {
        book.return();
        user.returnBook(book.id);
        res.redirect('/books/return/success');
    }
};

exports.getBookReturnSuccess = (req, res) => {
    res.render('success', { title: 'Success', message: 'Book returned successfully' });
};
