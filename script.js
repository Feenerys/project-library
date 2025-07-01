const myLibrary = [];

function Book(title, author, pages, read) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.read = read;
  this.pages = pages;
}

function addBookToLibrary(title, author, pages, status) {
  const book = new Book(title, author, pages, status);
  myLibrary.push(book);
}

function removeFromLibrary(id) {
  const index = myLibrary.findIndex((book) => book.id == id);
  myLibrary.splice(index, 1);
}

addBookToLibrary("The Silent Forest", "Elena Woods", 123, true);
addBookToLibrary("Quantum Dreams", "Max Planckman", 423, true);
addBookToLibrary("Midnight Skies", "Luna Nightshade", 234, false);
addBookToLibrary("Code & Chaos", "Ada Sterling", 61, false);
addBookToLibrary("Echoes of Tomorrow", "J.D. Veritas", 131, true);

const list = document.querySelector(".book-list");

function renderBook(book) {
  const item = document.createElement("li");
  item.textContent = `${book.title} by ${book.author}, ${book.pages} pages`;
  item.dataset.id = book.id;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "x";

  deleteButton.addEventListener("click", () => {
    const element = document.querySelector(`[data-id="${item.dataset.id}"]`);
    element.remove();
    removeFromLibrary(book.id);
    console.log(myLibrary);
  });

  const readButton = document.createElement("button");
  readButton.textContent = book.read ? "unread" : "read";

  readButton.addEventListener("click", () => {
    if (book.read == true) {
      book.read = false;
      readButton.textContent = "read";
    } else {
      book.read = true;
      readButton.textContent = "unread";
    }
  });

  item.appendChild(readButton);
  item.appendChild(deleteButton);
  list.appendChild(item);
}

function showBooks() {
  for (let book of myLibrary) {
    renderBook(book);
  }
}

function showNewBook() {
  renderBook(myLibrary[myLibrary.length - 1]);
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
  showNewBook();
  dialog.close();
  event.preventDefault();
});
