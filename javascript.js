const myLibrary = [];

function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function () {
    if (this.read === 'yes') {
        console.log(`${this.title} by ${this.author}, ${this.pages} pages, already read.`)
    } else {
        console.log(`${this.title} by ${this.author}, ${this.pages} pages, not read yet.`)
    }
}


function addBookToLibrary () {
    let title = prompt('What is the title of the book?');
    let author = prompt('Who is the author of this book');
    let pages = prompt('How many pages does this book have?');
    let read = prompt('Have you read it?');
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function displayBooks(myLibrary) {
    for (let item of myLibrary) {
        const container = document.querySelector('#content');
        const book = document.createElement('div');
        const title = document.createElement('div');
        const author = document.createElement('div');
        const pages = document.createElement('div');
        const read = document.createElement('div');
        book.setAttribute('class', 'book');
        title.setAttribute('class', 'title');
        author.setAttribute('class', 'author');
        pages.setAttribute('class', 'pages');
        read.setAttribute('class', 'read');
        title.textContent = `${item.title}`;
        author.textContent = `${item.author}`;
        pages.textContent = `${item.pages}`;
        read.textContent = `${item.read}`;
        book.append(title, author, pages, read);
        container.append(book);
    }
}

const openNewBookButton = document.querySelector('[data-open-modal]');
const closeNewBookButton = document.querySelector('[data-close-modal]');
const modal = document.querySelector('[data-modal]');

openNewBookButton.addEventListener('click', () => {
    modal.showModal();
})

closeNewBookButton.addEventListener('click', () => {
    modal.close()
})
