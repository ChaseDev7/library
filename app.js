const newBookForm = document.querySelector("#new-book-form");
newBookForm.style.display = "none";
const btnAddBook = document.querySelector(".add-book");
let buttonClick = false;

// Book object constructor
function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages + " pages",
    this.read = read
}

// Book library array
let myLibrary = [];

let newBook;

newBookForm.addEventListener("submit", addBookToLibrary);

function addBookToLibrary(event) {
    event.preventDefault();

    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked;

    newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    newBookForm.style.display = "none";
    showBookLibrary();
    console.log(myLibrary);
}

function showBookLibrary() {
    let libraryDiv = document.querySelector("#library");
    const books = document.querySelectorAll(".book");
    books.forEach(book => libraryDiv.removeChild(book));
    
    for (let i = 0; i < myLibrary.length; i++) {
        newBookCard(myLibrary[i]);
    }
}

function newBookCard(card) {
    const library = document.querySelector("#library");
    const bookDiv = document.createElement("div");
    const titleDiv = document.createElement("div");
    const authorDiv = document.createElement("div");
    const pagesDiv = document.createElement("div");
    const btnRemoveBook = document.createElement("button");
    const btnReadBook = document.createElement("button");
    const bookButtonDiv = document.createElement("div");

    bookButtonDiv.classList.add("book-buttons-container");

    bookDiv.classList.add("book");
    bookDiv.setAttribute("id", myLibrary.indexOf(card));

    titleDiv.innerHTML = `<p style="font-weight: 900; margin: 2px">${card.title}</p>`;
    titleDiv.setAttribute("id", "title");
    bookDiv.appendChild(titleDiv);

    authorDiv.innerHTML = `<p style="margin: 2px">by "${card.author}"</p>`;
    authorDiv.setAttribute("id", "author");
    bookDiv.appendChild(authorDiv);

    pagesDiv.innerHTML = `<p style="margin: 2px; font-size: 12px">${card.pages}</p>`;
    pagesDiv.setAttribute("id", "pages");
    bookDiv.appendChild(pagesDiv);

    bookDiv.appendChild(bookButtonDiv);

    btnReadBook.classList.add("read-book");
    bookButtonDiv.appendChild(btnReadBook);

    if (card.read === false) {
        btnReadBook.textContent = "Unread";
        btnReadBook.style.backgroundColor = "rgb(236, 229, 229)";
    } else {
        btnReadBook.textContent = "Read";
        btnReadBook.style.backgroundColor = "rgb(86, 160, 86)";
        btnReadBook.style.color = "white";
    }

    btnRemoveBook.classList.add("remove-book");
    btnRemoveBook.setAttribute("id", "remove-book-id");
    btnRemoveBook.innerHTML = `
    <span class="material-symbols-outlined" id="add-book-id">delete</span>
    <p style="margin: 0px">Remove</p>
    `;
    bookButtonDiv.appendChild(btnRemoveBook);

    library.appendChild(bookDiv);

    btnRemoveBook.addEventListener("click", () => {
        myLibrary.splice(myLibrary.indexOf(card), 1);
        showBookLibrary();
    });

    btnReadBook.addEventListener("click", () => {
        card.read = !card.read;
        showBookLibrary();
    });
}

if (buttonClick == false) {
    btnAddBook.addEventListener("click", addBook);
    buttonClick = true;
} else if (buttonClick == true) {
    btnAddBook.removeEventListener();
}

function addBook() {
    newBookForm.style.display = "flex";
    newBookForm.style.flexDirection = "column";
    newBookForm.style.alignItems = "center";

    const titleText = document.querySelector("#title");
    titleText.value = "";

    const authorText = document.querySelector("#author");
    authorText.value = "";

    const pagesText = document.querySelector("#pages");
    pagesText.value = "";

    const readChecked = document.querySelector("#read");
    read.checked = false;
}