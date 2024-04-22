class Book {
    constructor(id, title, author, year, available = true) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
        this.available = available;
    }

    static getById(id) {
        return new Book(id, "Book" + id, "Author" + id, 2000 + id, Math.random() > 0.5);
    }

    borrow() {
        this.available = false;
    }

    return() {
        this.available = true;
    }
}

module.exports = Book;

