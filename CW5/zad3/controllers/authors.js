const authors = [{ id: 1, name: 'Author Name' }];

exports.list = (req, res) => {
    res.render('authors', { authors });
};
