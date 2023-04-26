const bookContainer = document.querySelector(".book-container");
let bookListing = document.createElement("div");
bookListing.classList.add(".book-listing");
const newBook = document.querySelector("#new-book-form");
newBook.style.display = "none";
const btnAddBook = document.querySelector(".add-book");
let buttonClick = false;

const btnReadBook = document.querySelector(".read-book");
btnReadBook.style.display = "none";
btnReadBook.style.backgroundColor = "rgb(236, 229, 229)";
btnReadBook.style.color = "black";
// const btnRemoveBook = document.querySelector(".remove-book");

let myLibrary = [];


function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}

Object.setPrototypeOf(Book.prototype, myLibrary);

function showNewBookInLibrary() {
    let bookDiv = document.createElement("div");
    bookDiv.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        bookDiv.innerHTML = `<div class="book-listing">
        <p style="font-size: 25px; font-weight: 900">${book.title}</p>
            <p>${book.author}</p>
            <p>${book.pages}</p>
            <button class="read-book">${book.read}</button>
            </div>`;
        console.log(book.read);
        // if (book.read === true) {
        //     btnReadBook.textContent = "Read";
        // } else if (book.read === false) {
        //     btnReadBook.textContent = "Unread";
        // }
        bookContainer.appendChild(bookDiv);
    }
    console.log(myLibrary);
}

function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked;
    let newBookListing = new Book(title, author, pages, read);
    myLibrary.push(newBookListing);
    showNewBookInLibrary();
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

newBook.addEventListener("submit", submitBook);

function submitBook(event) {
    event.preventDefault();
    addBookToLibrary();
}

// function checkReadStatus() {
//     if (isBookRead == false) {
//         btnReadBook.style.backgroundColor = "rgb(236, 229, 229)";
//         btnReadBook.textContent = "Unread";
//         btnReadBook.style.color = "black";
//     } else if (isBookRead == true) {
//         btnReadBook.style.backgroundColor = "rgb(86, 160, 86)";
//         btnReadBook.textContent = "Read";
//         btnReadBook.style.color = "white";
//     }
// }

// btnReadBook.addEventListener("click", changeReadStatus);

// function changeReadStatus() {
//     if (isBookRead == false) {
//         isBookRead = true;
//     } else if (isBookRead == true) {
//         isBookRead = false;
//     }
//     checkReadStatus();
// }