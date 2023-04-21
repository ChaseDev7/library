function Book(title, author, pages, readStatus) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.readStatus = readStatus,
    this.book = function() {
        return `${title} by ${author}. ${pages} pages. ${readStatus}.`
    }
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", "Unread");

console.log(theHobbit.book());

// const title = document.createElement("div");
// const body = document.querySelector("body");
// title.textContent = theHobbit.title;
// body.appendChild(title);

const btnAddBook = document.querySelector(".add-book");

btnAddBook.addEventListener("click", addBook);

function addBook() {
    const newBook = document.querySelector(".new-book");
    newBook.style.margin = "15px";
    newBook.style.padding = "20px";
    newBook.style.border = "1px solid black";
    newBook.style.borderRadius = "20px";
    
    function addTitle() {
        const bookTitleLabel = document.createElement("label");
        bookTitleLabel.classList.add("title-label");
        bookTitleLabel.setAttribute("for", "title-name");
        bookTitleLabel.textContent = "Book Title:";
        bookTitleLabel.style.paddingRight = "10px";
        newBook.appendChild(bookTitleLabel);
        const bookTitle = document.createElement("input");
        bookTitle.setAttribute("type", "text");
        bookTitle.setAttribute("id", "title-name");
        bookTitle.setAttribute("name", "title-name");
        newBook.appendChild(bookTitle);
    }

    addTitle();

    function addAuthor() {
        const bookAuthorLabel = document.createElement("label");
    bookAuthorLabel.classList.add("author-label");
    bookAuthorLabel.setAttribute("for", "author-name");
    bookAuthorLabel.textContent = "Author Name:";
    bookAuthorLabel.style.paddingRight = "10px";
    newBook.appendChild(bookAuthorLabel);
    const bookAuthor = document.createElement("input");
    bookAuthor.setAttribute("type", "text");
    bookAuthor.setAttribute("id", "author-name");
    bookAuthor.setAttribute("name", "author-name");
    newBook.appendChild(bookAuthor);
    }

    addAuthor();
}