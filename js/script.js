const library = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype.info = function() {
    return `${this.title} by ${this.author} has ${this.pages} pages and I have ${this.read} it`;
}

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 304, 'not read');


function addBookToLibrary() {
    
}



