const myLibrary = [];

function Book(title, author, read) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.read = read;
}


function addBookToLibrary(title, author) {
  const book = new Book(title, author);
  myLibrary.push(book);
}

addBookToLibrary('The Silent Forest', 'Elena Woods');
addBookToLibrary('Quantum Dreams', 'Max Planckman');
addBookToLibrary('Midnight Skies', 'Luna Nightshade');
addBookToLibrary('Code & Chaos', 'Ada Sterling');
addBookToLibrary('Echoes of Tomorrow', 'J.D. Veritas');

const list = document.querySelector(".book-list");

function showBooks() {
  for (let book of myLibrary) {
    const item = document.createElement("li");
    item.textContent = `${book.title} by ${book.author}`;
    list.appendChild(item);
  }
}

showBooks()