let myLibrary = [];
const addBookButton = document.querySelector("#add-book");
const addBookContainer = document.querySelector(".add-book-background");
const submitBook = document.querySelector(".submit-book");
const bookEntryForm = document.querySelector("#book-entry-form");

let tempBook1 = new Book("Flying Chimps","Stinky Chimp",200,"yes",1);
let tempBook2 = new Book("Exploding Turkey","Banana Man",120,"no",2);
let tempBook3 = new Book("Bumpy","Monkas",40,"yes",3);

myLibrary.push(tempBook1,tempBook2,tempBook3);

function Book(title,name,pages,read,index){
    this.title = title;
    this.name = name;
    this.pages = pages;
    this.read = read;
    this.index = index
}

function addBookToLibrary(title,name,pages,read){
    let newBook = new Book(title,name,pages,read,myLibrary.length + 1);
    myLibrary.push(newBook);
    
}

function displayNewBook(book){
        const booksContainer = document.querySelector(".books-container");
        const newBook = document.createElement("div");
        newBook.setAttribute("id",book.index);

        newBook.classList.add("book");

        const title = document.createElement("h4");
        const name = document.createElement("p");
        const pages = document.createElement("p");
        const read = document.createElement("p")
        const deleteButton = document.createElement("button")
        deleteButton.setAttribute("id","delete")
        const markReadButton = document.createElement("button");
        markReadButton.setAttribute("id","have-read")
        
        title.innerText = book.title;
        title.setAttribute("class","title");

        name.innerText = `by ${book.name}`;
        name.setAttribute("class","author");

        pages.innerText = `pages ${book.pages}`;
        pages.setAttribute("class","pages");

        read.innerText = `Read: ${book.read}`;
        read.setAttribute("class","has-read");

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
    displayNewBook(myLibrary[myLibrary.length - 1]);
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

myLibrary.forEach((book) => {
    displayNewBook(book);
});

document.querySelectorAll("#delete").forEach((button) => {
    button.addEventListener("click", (e) => {
        myLibrary.splice(myLibrary[e.target.parentElement.id - 1],1)
        e.target.parentElement.remove();
        
    })
})

document.querySelectorAll("#have-read").forEach((button) => {
    button.addEventListener("click", (e) => {
        const parent = e.target.parentElement;
        let hasRead = parent.children[3];
        
        if (myLibrary[parent.id - 1].read === "yes") {
            myLibrary[parent.id - 1].read = "no";
            hasRead.innerText = `Read: no`;
        } else {
            myLibrary[parent.id - 1].read = "yes";
            hasRead.innerText = `Read: yes`;
        }
    })
})