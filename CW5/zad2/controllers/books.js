const books = [{ id: 1, title: 'Book Title', publishingYear: 2021, authorId: 1 }];

exports.list = (req, res) => {
    res.render('books', { books });
};
