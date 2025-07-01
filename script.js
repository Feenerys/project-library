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

function addBookToLibrary(title, author, status) {
  const book = new Book(title, author, status);
  myLibrary.push(book);
}

addBookToLibrary("The Silent Forest", "Elena Woods", true);
addBookToLibrary("Quantum Dreams", "Max Planckman", true);
addBookToLibrary("Midnight Skies", "Luna Nightshade", false);
addBookToLibrary("Code & Chaos", "Ada Sterling", false);
addBookToLibrary("Echoes of Tomorrow", "J.D. Veritas", true);

const list = document.querySelector(".book-list");

function renderBook(book) {
  const item = document.createElement("li");
  item.textContent = `${book.title} by ${book.author}, ${book.read ? "read" : "not read"}`;
  item.dataset.id = book.id;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "x";
  deleteButton.className = "delete";

  deleteButton.addEventListener("click", () => {
    const element = document.querySelector(`[data-id="${item.dataset.id}"]`);
    element.remove();
  });

  const readButton = document.createElement("button");
  readButton.textContent = "read"

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
