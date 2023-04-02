const bookName = document.querySelector('#book-name');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const status = document.querySelector('#status');
const submit = document.querySelector('#submit');
const myBooks = document.querySelector('.book-container');



const myLibrary = [];

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
const artOfWar = new Book('The Art of War', 'Sun Tzu', 288, 'not read')
const donQ = new Book('Don Quixote', 'Miguel de Cervantes', 1072, 'not read')
const lordFlies = new Book('Lord of the Flies', 'William Golding', 224, 'not read' )
myLibrary.push(theHobbit, artOfWar, donQ, lordFlies);



function addBookToLibrary() {
    submit.addEventListener('click', () => {
        event.preventDefault();
        let newBook = new Book(bookName.value, author.value, pages.value, status.value);
        myLibrary.push(newBook);
        console.log(myLibrary);
    });
}



function displayBooks() {
    for (let n = 0; n <= myLibrary.length; n++) {
        const cardMarkup = `<p>${myLibrary[n].title}</p>
                            <p>Author: ${myLibrary[n].author}</p>
                            <p>Pages: ${myLibrary[n].pages}</p>
                            <p>${myLibrary[n].read}</p>`
        let addBook = document.createElement('div');
        addBook.classList.add('cards');
        addBook.innerHTML = cardMarkup;
        myBooks.appendChild(addBook);
    }
}









displayBooks();
addBookToLibrary();
console.log(displayBooks());

