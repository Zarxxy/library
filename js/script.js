//Global variables
let myLibrary = [];
const tableWithBooks = document.querySelector(".lib");

//Button variables
const btnToOpenNewBookForm = document.querySelector(".btnAdd");
const FormForNewBook = document.querySelector(".newBookForm");
const btnToConfirmNewBook = document.querySelector(".btnConfirm");

//Event listener for buttons
btnToOpenNewBookForm.addEventListener("click", () => {
    openTheForm();
})

btnToConfirmNewBook.addEventListener("click", () => {
    createNewBook();
    renderLibrary();
    resetForm();
})

//Constructor for book object
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

//Adds new book objects into the myLibrary array
function addBookToLibrary(book) {    
    myLibrary.push(book);
}

//Creates and renders the table, with the data, from the myLibrary array
function renderLibrary(){
    while(tableWithBooks.firstChild) tableWithBooks.removeChild(tableWithBooks.firstChild);
    let i = 0
    myLibrary.forEach(book => {
        let row = document.createElement("tr");
        row.setAttribute("data-index", i);        

        Object.values(book).forEach(text => {
            let cell = document.createElement("td");
            let textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);

        })
        tableWithBooks.appendChild(row);
        let btnRemove = document.createElement("button");
        btnRemove.classList.add("btnRemove");
        btnRemove.innerHTML = "X";
        btnRemove.setAttribute("data-index", i)
        row.appendChild(btnRemove);
        i++
    })
    const btnRemove = document.querySelectorAll(".btnRemove")
    btnRemove.forEach((button => 
    button.addEventListener("click", (e) => {
        let i = e.target.getAttribute("data-index");
        removeBook(i);
    })))
}

//Opens the form to add new books
function openTheForm() {
    FormForNewBook.style.display = "flex";
}

//Creates a new book object from the user input  
function createNewBook() {
    let title = document.querySelector("#inputTitle").value;
    let author = document.querySelector("#inputAuthor").value;
    let pages = document.querySelector("#inputPages").value + " pages";
    let read = ""
    if (document.getElementById("inputReadYes").checked){
        read = "Yes"
    }else {
        read = "No"
    }

    if (checkDuplicate(title)) {
        return
    } else {
        const NewBook = new Book (title, author, pages, read)
        addBookToLibrary(NewBook);
    }  
}

//Closes and resets the new book form
function resetForm(){
    document.querySelector("#inputTitle").value = "";
    document.querySelector("#inputAuthor").value = "";
    document.querySelector("#inputPages").value = "";
    document.querySelector("#inputReadYes").checked = false;
    document.querySelector("#inputReadNo").checked = false;

    FormForNewBook.style.display = "none";
}

//Checks the array for dupilcates
function checkDuplicate(title) {
    if (myLibrary.some(book => book.title === title)) {
        resetForm()
        alert("This book is already in your library!")
        return true
    } else {
        return false
    }    
}

//Removes a book from the Array and table
function removeBook(i){
    let elementToRemove = document.querySelector(`[data-index= "${i}"]`);
    elementToRemove.remove();
    myLibrary.splice(i, 1);
    renderLibrary();
    console.log(myLibrary)
}

const theHobbit = new Book("The Hobbit", "J.R.R Tolkin", "295 pages", "yes");
const mobyDick = new Book("Moby Dick", "Herman Melville", "814 pages", "no");
const dracula = new Book("Dracula", "Bram Stoker", "592 pages", "yes")

addBookToLibrary(theHobbit);
addBookToLibrary(mobyDick);
addBookToLibrary(dracula);
renderLibrary();