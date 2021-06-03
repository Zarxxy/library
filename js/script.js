
const displayBooks = document.querySelector(".lib")

const btnNewBookForm = document.querySelector(".btnAdd")
const FormNewBook = document.querySelector(".newBookForm")
const btnConfirmNewBook = document.querySelector(".btnConfrim")

btnNewBookForm.addEventListener("click", () => {
    openTheForm()
})

btnConfirmNewBook.addEventListener("click", () => {
    closeTheForm()
})

let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary(book) {
    
    myLibrary.push(book);
}

function printLibrary(){
    myLibrary.forEach(book => {
        let row = document.createElement("tr");

        Object.values(book).forEach(text => {
            let cell = document.createElement("td");
            let textNode =document.createTextNode(text);
            cell.appendChild(textNode)
            row.appendChild(cell)
        })
        displayBooks.appendChild(row);
    })
}

function openTheForm() {
    FormNewBook.style.display = "flex"
}

function closeTheForm() {
    FormNewBook.style.display = "none"
}

const theHobbit = new Book("The Hobbit", "J.R.R Tolkin", "295 pages", "yes");
const mobyDick = new Book("Moby Dick", "Herman Melville", "814 pages", "no");
const dracula = new Book("Dracula", "Bram Stoker", "592 pages", "yes")

addBookToLibrary(theHobbit);
addBookToLibrary(mobyDick);
addBookToLibrary(dracula);
printLibrary();