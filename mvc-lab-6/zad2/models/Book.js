class Book {
    constructor(id, title, author, year, available = true) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
        this.available = available;
    }

    static getAll() {
        return [
            new Book(1, "Book1", "Author1", 2021),
            new Book(2, "Book2", "Author2", 2022),
            new Book(3, "Book3", "Author3", 2023),
            new Book(4, "Book4", "Author4", 2024),
            new Book(5, "Book5", "Author5", 2025),
        ];
    }
}

module.exports = Book;
