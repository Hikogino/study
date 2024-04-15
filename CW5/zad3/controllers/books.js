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

