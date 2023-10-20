class Library {
    #books;

    constructor(books) {

        if (books.every(num => books.indexOf(num) === books.lastIndexOf(num))) {
            this.#books = books;
        } else {
            throw new Error('Имеются повторяющиеся книги')
        }
    }

    get allBooks() {
        return this.#books;
    }

    addBook(title) {
        if (this.#books.includes(title)) {
            throw new Error("Такая книга уже есть");
        } else { this.#books.push(title) }
    }

    removeBook(title) {
        if (this.#books.includes(title)) {
            const index = this.#books.indexOf(title);
            this.#books.splice(index, 1)
        } else { throw new Error("Такой книги нет"); }
    }

    hasBook(title) {
        if (this.#books.includes(title)) {
            return true
        } else { return false }
    }
}

const lib = new Library([]);

lib.addBook('Games of thrones');
lib.addBook('Games of thrones2');
lib.addBook('Games of thrones3');

// lib.addBook('Games of thrones2');

// lib.removeBook('Games of thrones2');

console.log(lib.allBooks);

console.log(lib.hasBook('Games of thrones'));

const lib2 = new Library(['Games of thrones', 'Games of thrones2', 'Games of thrones5']);

console.log(lib2);