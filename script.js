let myLibrary = [];

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