const newBook = document.querySelector("#new-book-form");
newBook.style.display = "none";
const btnAddBook = document.querySelector(".add-book");
let buttonClick = false;

const btnReadBook = document.createElement("div");
btnReadBook.classList.add(".read-book");
const btnRemoveButton = document.createElement("div");
btnRemoveButton.classList.add(".remove-button");

// Book library array
let myLibrary = [];

// Book object constructor
function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
    // if (Book.read == true) {
    //     btnReadBook.style.backgroundColor = "rgb(236, 229, 229)";
    //     btnReadBook.style.color = "black";
    // } else if (Book.read == false) {
    //     btnReadBook.style.backgroundColor = "rgb(86, 160, 86)";
    //     btnReadBook.style.color = "white";
    // }
}

Book.prototype.toggleRead = function() {
    this.read = !this.read;
}

function toggleRead(index) {
    myLibrary[index].toggleRead();
    showNewBookInLibrary();
}

function showNewBookInLibrary() {
    let libraryDiv = document.querySelector("#library");
    libraryDiv.innerHTML = "";
    
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookDiv = document.createElement("div");
        bookDiv.setAttribute("class", "book-listing");
        bookDiv.innerHTML = `
            <p style="font-size: 25px; font-weight: 900; margin: 5px 5px 5px 0px">${book.title}</p>
            <p style="margin: 3px 0px">by "${book.author}"</p>
            <p style="font-size: 12px; margin: 3px 0px">${book.pages} pages</p>
            <div class="book-buttons-container">
                <button class="read-book" onclick="toggleRead(${i})">${book.read ? "Read" : "Unread"}</button>
                <button class="remove-book" onclick="removeBook(${i})"><span class="material-symbols-outlined" id="remove-book-id">delete</span>Remove Book</button>
            </div>
        `;

        if (book.read == true) {
            btnReadBook.style.backgroundColor = "rgb(86, 160, 86)";
            btnReadBook.style.color = "white";
        } else if (book.read == false) {
            btnReadBook.style.backgroundColor = "rgb(236, 229, 229)";
            btnReadBook.style.color = "black";
        }

        libraryDiv.appendChild(bookDiv);
    }
    console.log(myLibrary);
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    showNewBookInLibrary();
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