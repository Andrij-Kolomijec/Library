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
    let title = document.querySelector('#submit-title').value;
    let author = document.querySelector('#submit-author').value;
    let pages = document.querySelector('#submit-pages').value;
    let read = document.querySelector('#submit-read').checked;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function displayBook(myLibrary) {
    for (let item of myLibrary.slice(-1)) {
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

// New book button

const openNewBookButton = document.querySelector('[data-open-modal]');
const closeNewBookButton = document.querySelector('[data-close-modal]');
const submitNewBook = document.querySelector('[data-submit-modal]');
const modal = document.querySelector('[data-modal]');
const form = document.querySelector('form');

openNewBookButton.addEventListener('click', () => {
    modal.showModal();
})

submitNewBook.addEventListener('click', (e) => {
    e.preventDefault();
    form.reportValidity(); // shows messages
    if (form.checkValidity()) { // return true/false if form is valid
        addBookToLibrary();
        displayBook(myLibrary);
        document.querySelector("Form").reset();
        modal.close();
    }
})

form.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        form.reportValidity();
        if (form.checkValidity()) {
            addBookToLibrary();
            displayBook(myLibrary);
            document.querySelector("Form").reset();
            modal.close();
        }
    }
})


closeNewBookButton.addEventListener('click', () => {
    modal.close();
})

modal.addEventListener("click", e => { // to close the window when clicking outside
    const dialogDimensions = modal.getBoundingClientRect()
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      modal.close()
    }
  })
