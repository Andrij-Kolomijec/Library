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

// All of your book objects are going to be stored in a simple array, 
// so add a function to the script (not the constructor) that can take 
// user’s input and store the new book objects into an array. 

function addBookToLibrary () {
    let title = prompt('What is the title of the book?');
    let author = prompt('Who is the author of this book');
    let pages = prompt('How many pages does this book have?');
    let read = prompt('Have you read it?');
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}


// Write a function that loops through the array and displays each book on the page. 
// You can display them in some sort of table, or each on their own “card”. 
// It might help for now to manually add a few books to your array so you can see the display.