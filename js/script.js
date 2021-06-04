
const displayBooks = document.querySelector(".lib")

const btnNewBookForm = document.querySelector(".btnAdd")
const FormNewBook = document.querySelector(".newBookForm")
const btnConfirmNewBook = document.querySelector(".btnConfirm")

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
    let title = document.querySelector("#inputTitle").value
    let author = document.querySelector("#inputAuthor").value
    let pages = document.querySelector("#inputPages").value
    let read = document.querySelector("#inputRead").value

    const NewBook = new Book (title, author, pages, read)

    addBookToLibrary(NewBook);
    printLibrary()

    document.querySelector("#inputTitle").value = ""
    document.querySelector("#inputAuthor").value = ""
    document.querySelector("#inputPages").value = ""
    document.querySelector("#inputRead").value = ""

    FormNewBook.style.display = "none"
}

const theHobbit = new Book("The Hobbit", "J.R.R Tolkin", "295 pages", "yes");
const mobyDick = new Book("Moby Dick", "Herman Melville", "814 pages", "no");
const dracula = new Book("Dracula", "Bram Stoker", "592 pages", "yes")

addBookToLibrary(theHobbit);
addBookToLibrary(mobyDick);
addBookToLibrary(dracula);
printLibrary();