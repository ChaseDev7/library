const newBook = document.querySelector("#new-book-form");
newBook.style.display = "none";
const btnAddBook = document.querySelector(".add-book");
const bookListButtons = document.querySelector(".button-container");
let buttonClick = false;
const btnSubmitBook = document.querySelector(".submit-new-book");

const bookListing = document.querySelector(".book-listing");
bookListing.style.display = "none";

const btnReadBook = document.querySelector(".read-book");
let isBookRead = false;
btnReadBook.style.backgroundColor = "rgb(236, 229, 229)";
btnReadBook.textContent = "Unread";
btnReadBook.style.color = "black";
const btnRemoveBook = document.querySelector(".remove-book");

let myLibrary = [];


function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}

Object.setPrototypeOf(Book.prototype, myLibrary);

function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked;
    let newBookListing = new Book(title, author, pages, read);
    console.log(newBookListing);
}

if (buttonClick == false) {
    btnAddBook.addEventListener("click", addBook);
    buttonClick = true;
} else if (buttonClick == true) {
    btnAddBook.removeEventListener();
}

function addBook() {
    newBook.style.display = "flex";
    newBook.style.flexDirection = "column";
    newBook.style.alignItems = "center";
}

btnSubmitBook.addEventListener("submit", submitBook);

function submitBook(event) {
    event.preventDefault();
    alert("Book sumitted...");
}

function checkReadStatus() {
    if (isBookRead == false) {
        btnReadBook.style.backgroundColor = "rgb(236, 229, 229)";
        btnReadBook.textContent = "Unread";
        btnReadBook.style.color = "black";
    } else if (isBookRead == true) {
        btnReadBook.style.backgroundColor = "rgb(86, 160, 86)";
        btnReadBook.textContent = "Read";
        btnReadBook.style.color = "white";
    }
}

btnReadBook.addEventListener("click", changeReadStatus);

function changeReadStatus() {
    if (isBookRead == false) {
        isBookRead = true;
    } else if (isBookRead == true) {
        isBookRead = false;
    }
    checkReadStatus();
}

bookListButtons.style.display = "flex";
bookListButtons.style.flexDirection = "row";
bookListButtons.style.justifyContent = "end";

btnRemoveBook.addEventListener("click", closeBookListing);

function closeBookListing() {
    bookListing.style.display = "none";
}

addBookToLibrary();