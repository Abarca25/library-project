let myLibrary = [];
const addBookButton = document.querySelector("#add-book");
const addBookContainer = document.querySelector(".add-book-background");
const submitBook = document.querySelector(".submit-book");
const bookEntryForm = document.querySelector("#book-entry-form");

function Book(title,name,pages,read){
    this.title = title;
    this.name = name;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title,name,pages,read){
    let newBook = new Book(title,name,pages,read)
    myLibrary.push(newBook);
    
}

function displayNewBook(book){
        const booksContainer = document.querySelector(".books-container");
        const newBook = document.createElement("div");
        newBook.classList.add("book");

        const title = document.createElement("h4");
        const name = document.createElement("p");
        const pages = document.createElement("p");
        const read = document.createElement("p")
        const deleteButton = document.createElement("button")
        deleteButton.setAttribute("id","delete")
        const markReadButton = document.createElement("button");
        markReadButton.setAttribute("id","have-read")
        
        title.innerText = book.title.value;
        name.innerText = `by ${book.author.value}`;
        pages.innerText = `pages ${book.pages.value}`;
        read.innerText = `read: ${book.read.value}`;
        deleteButton.innerText = "Delete";
        markReadButton.innerText = "Mark Read";

        newBook.appendChild(title);
        newBook.appendChild(name);
        newBook.appendChild(pages);
        newBook.appendChild(read);
        newBook.appendChild(deleteButton);
        newBook.appendChild(markReadButton);

        booksContainer.appendChild(newBook);
}

addBookButton.addEventListener("click", () => {
    addBookContainer.style.display = "flex";
})

document.querySelector("form").onsubmit = (e) => {
    e.preventDefault();
    addBookToLibrary(e.target.title.value,e.target.author.value,e.target.pages.value,e.target.read.value);
    displayNewBook(e.target);
    addBookContainer.style.display = "none";
    bookEntryForm.reset();
}

addBookContainer.addEventListener("click", (e) => {
    if(e.currentTarget === e.target){
        addBookContainer.style.display = "none";
        bookEntryForm.reset();
    }
    else {
        addBookContainer.style.display ="flex"
    }
        
}

)