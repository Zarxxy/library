
const tableWithBooks = document.querySelector(".lib");

const btnToOpenNewBookForm = document.querySelector(".btnAdd");
const FormForNewBook = document.querySelector(".newBookForm");
const btnToConfirmNewBook = document.querySelector(".btnConfirm");

btnToOpenNewBookForm.addEventListener("click", () => {
    openTheForm();
})

btnToConfirmNewBook.addEventListener("click", () => {
    closeTheForm();
})

let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {    
    myLibrary.push(book);
}

function printLibrary(){
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

function openTheForm() {
    FormForNewBook.style.display = "flex";
}

function closeTheForm() {
    let title = document.querySelector("#inputTitle").value;
    let author = document.querySelector("#inputAuthor").value;
    let pages = document.querySelector("#inputPages").value + " pages";
    let read = document.querySelector("#inputRead").value;

    const NewBook = new Book (title, author, pages, read)

    addBookToLibrary(NewBook);
    printLibrary();

    document.querySelector("#inputTitle").value = "";
    document.querySelector("#inputAuthor").value = "";
    document.querySelector("#inputPages").value = "";
    document.querySelector("#inputRead").value = "";

    FormForNewBook.style.display = "none";
}

function removeBook(i){
    let elementToRemove = document.querySelector(`[data-index= "${i}"]`);
    elementToRemove.remove();
    myLibrary.splice(i, 1);
    printLibrary();
    console.log(myLibrary)
}

const theHobbit = new Book("The Hobbit", "J.R.R Tolkin", "295 pages", "yes");
const mobyDick = new Book("Moby Dick", "Herman Melville", "814 pages", "no");
const dracula = new Book("Dracula", "Bram Stoker", "592 pages", "yes")

addBookToLibrary(theHobbit);
addBookToLibrary(mobyDick);
addBookToLibrary(dracula);
printLibrary();