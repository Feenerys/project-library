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

addBookToLibrary("The Silent Forest", "Elena Woods");
addBookToLibrary("Quantum Dreams", "Max Planckman");
addBookToLibrary("Midnight Skies", "Luna Nightshade");
addBookToLibrary("Code & Chaos", "Ada Sterling");
addBookToLibrary("Echoes of Tomorrow", "J.D. Veritas");

const list = document.querySelector(".book-list");

function showBooks() {
  for (let book of myLibrary) {
    const item = document.createElement("li");
    item.textContent = `${book.title} by ${book.author}`;
    list.appendChild(item);
  }
}

function showNewBook() {
  const item = document.createElement("li");
  console.log(myLibrary[myLibrary.length - 1]);
  item.textContent = `${myLibrary[myLibrary.length - 1].title} by ${myLibrary[myLibrary.length - 1].author}`;
  list.appendChild(item)
}

showBooks();

const dialog = document.querySelector("dialog");
const newButton = document.querySelector(".new-button");
const closeButton = document.querySelector(".close-dialog");

newButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});

const addButton = document.querySelector(".add-button");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");

addButton.addEventListener("click", (event) => {
  console.log(titleInput.value);
  addBookToLibrary(titleInput.value, authorInput.value);
  showNewBook()
  event.preventDefault();
  dialog.close();
});
