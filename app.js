function Book(title, author, pages, readStatus) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.readStatus = readStatus,
    this.book = function() {
        bookTitleListing = title;
        authorNameListing = author;
        pageCountListing = pages;
        return ``;
    }
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", "Unread");


let bookTitleListing = document.querySelector(".book-title-listing");
let authorNameListing = document.querySelector(".author-name-listing");
let pageCountListing = document.querySelector(".page-count-listing");
const newBook = document.querySelector(".new-book");
newBook.style.display = "none";
const btnAddBook = document.querySelector(".add-book");
const btnClose = document.querySelector(".close-container");
const bookListItem = document.querySelector(".button-container");
const titleContainer = document.querySelector(".book-title-container");
const authorContainer = document.querySelector(".book-author-container");
const pageCountContainer = document.querySelector(".page-count-container");
let buttonClick = false;
const bookTitleLabel = document.createElement("label");
const bookTitle = document.createElement("input");
const bookAuthorLabel = document.createElement("label");
const bookAuthor = document.createElement("input");
const bookPageCountLabel = document.createElement("label");
const bookPageCount = document.createElement("input");
const bookListing = document.querySelector(".book-listing");
const btnReadBook = document.querySelector(".read-book");
let isBookRead = false;
btnReadBook.style.backgroundColor = "rgb(236, 229, 229)";
btnReadBook.textContent = "Unread";
btnReadBook.style.color = "black";
const btnRemoveBook = document.querySelector(".remove-book");
const bookCount = document.querySelector(".book-count");
let bookCounter = 0;

if (buttonClick == false) {
    btnAddBook.addEventListener("click", addBook);
    buttonClick = true;
} else if (buttonClick == true) {
    btnAddBook.removeEventListener();
}

function addBook() {
    newBook.style.display = "flex";
    newBook.style.flexDirection = "column";
    btnClose.style.alignItems = "end";

    btnClose.addEventListener("click", closeContainer);

    function closeContainer() {
        newBook.style.display = "none";
        bookTitle.value = "";
        bookAuthor.value = "";
    }

    bookTitleLabel.classList.add("title-label");
    bookTitleLabel.setAttribute("for", "title-name");
    bookTitleLabel.textContent = "Book Title:";
    bookTitleLabel.style.margin = "10px";
    titleContainer.appendChild(bookTitleLabel);
    
    bookTitle.setAttribute("type", "text");
    bookTitle.setAttribute("id", "title-name");
    bookTitle.setAttribute("name", "title-name");
    bookTitle.style.margin = "10px";
    titleContainer.appendChild(bookTitle);

    bookAuthorLabel.classList.add("author-label");
    bookAuthorLabel.setAttribute("for", "author-name");
    bookAuthorLabel.textContent = "Author Name:";
    bookAuthorLabel.style.margin = "10px";
    authorContainer.appendChild(bookAuthorLabel);

    bookAuthor.setAttribute("type", "text");
    bookAuthor.setAttribute("id", "author-name");
    bookAuthor.setAttribute("name", "author-name");
    bookAuthor.style.margin = "10px";
    authorContainer.appendChild(bookAuthor);
    
    bookPageCountLabel.classList.add("page-count-label");
    bookPageCountLabel.setAttribute("for", "page-count");
    bookPageCountLabel.textContent = "Page Count:";
    bookPageCountLabel.style.margin = "10px";
    pageCountContainer.appendChild(bookPageCountLabel);

    bookPageCount.setAttribute("type", "text");
    bookPageCount.setAttribute("id", "page-count");
    bookPageCount.setAttribute("name", "page-count");
    bookPageCount.style.margin = "10px";
    pageCountContainer.appendChild(bookPageCount);
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

btnClose.addEventListener("click", closeContainer);

function closeContainer() {
    newBook.style.display = "none";
    bookTitle.value = "";
    bookAuthor.value = "";
    bookPageCount.value = "";
}

bookListItem.style.display = "flex";
bookListItem.style.flexDirection = "row";
bookListItem.style.justifyContent = "end";

btnRemoveBook.addEventListener("click", closeBookListing);

function closeBookListing() {
    bookListing.style.display = "none";
}

bookListing.append(theHobbit.book());