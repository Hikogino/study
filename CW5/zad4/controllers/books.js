let books = []; 
let nextId = 1; 

exports.list = (req, res) => {
    res.render('books', { books });
};

exports.addBook = (req, res) => {
    const { title, publishingYear, authorId } = req.body;
    const book = { id: nextId++, title, publishingYear, authorId };
    books.push(book);
    res.redirect('/book/list');
};

exports.deleteBook = (req, res) => {
    const { id } = req.params;
    books = books.filter(book => book.id !== parseInt(id));
    res.redirect('/book/list');
};

exports.getBookById = (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find(book => book.id === id);
    if (book) {
        res.render('book', { book });
    } else {
        res.status(404).send('Book not found');
    }
};

