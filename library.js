const get = document.getElementById.bind(document);
const query = document.querySelector.bind(document);

let addBookBtn = get('add-book');
let addBookModal = get('add-book-modal');
let addBookForm = get('add-book-form');
let errorMsg = get('errorMsg');
let titleInput = get('title');
let authorInput = get('author');
let pagesInput = get('pages');
let isReadInput = get('isRead');
let overlay = get('overlay');
let cardGrid = get('card-grid')

class Book {
    constructor(
      title = 'Unknown',
      author = 'Unknown',
      pages = '0',
      isRead = false
    ) {
      this.title = title
      this.author = author
      this.pages = pages
      this.isRead = isRead
    }
  }

class Library {
  constructor() {
    this.books = []
  }

  addBook(newBook) {
    if (!this.isInLibrary(newBook)) {
      this.books.push(newBook)
    }
  }

  removeBook(title) {
    this.books = this.books.filter((book) => book.title !== title)
  }

  getBook(title) {
    return this.books.find((book) => book.title === title)
  }

  isInLibrary (newBook) {
    return this.books.some((book) => book.title === newBook.title) 
  }

}

const myLibrary = new Library();

Book.prototype.toggleRead = function () {
    this.isRead = !this.isRead;
}

const openAddBookModal = () => {
    addBookForm.reset();
    addBookModal.classList.add('active');
    overlay.classList.add('active');
}
  
const closeAddBookModal = () => {
    addBookModal.classList.remove('active');
    overlay.classList.remove('active');
    errorMsg.classList.remove('active');
    errorMsg.textContent = '';
}

const getBookFromUserInput = () => {
    var title = titleInput.value;
    var author = authorInput.value;
    var pages = pagesInput.value;
    var isRead = isReadInput.checked;
    return new Book (title, author, pages, isRead);
}

const createBookCard = (book) => {
  const bookCard = document.createElement('div');
  const title = document.createElement('p');
  const author = document.createElement('p');
  const pages = document.createElement('p');
  const btnGroup = document.createElement('div');
  const btnRead = document.createElement('button');
  const btnRemove = document.createElement('button');

  bookCard.classList.add('book-card');
  title.classList.add('title');
  btnGroup.classList.add('button-group');
  btnRead.classList.add('btn');
  btnRemove.classList.add('btn');
  btnRead.onclick = toggleRead;
  btnRemove.onclick = removeBookCard;

  title.textContent = book.title;
  author.textContent = "By "+ book.author;
  pages.textContent = "Pages: " + book.pages;
  btnRemove.textContent = 'Remove';

  if (book.isRead) {
    btnRead.textContent = 'Read';
    btnRead.classList.add ('btn-light-green');
  } else {
    btnRead.textContent = 'Unread';
    btnRead.classList.add ('btn-light-red');
  }

  bookCard.appendChild(title);
  bookCard.appendChild(author);
  bookCard.appendChild(pages);
  bookCard.appendChild(btnGroup);
  bookCard.appendChild(btnRead);
  bookCard.appendChild(btnRemove);
  cardGrid.appendChild(bookCard);

}

// TODO 
const toggleRead = (e) => {
  let title = e.target.parentNode.firstChild.textContent;
  let indexToChange = myLibrary.books.map(book => book.title).indexOf(title);

  if (myLibrary.books[indexToChange].isRead){
    e.target.classList.remove('btn-light-green');
    e.target.classList.add('btn-light-red');
    e.target.textContent = "Unread";
    myLibrary.books[indexToChange].toggleRead();
    
  } else if (myLibrary.books[indexToChange].isRead == false) {
    e.target.classList.remove('btn-light-red');
    e.target.classList.add('btn-light-green');
    e.target.textContent = "Read";
    myLibrary.books[indexToChange].toggleRead();
  }
  
}

const removeBookCard = (e) => {

}

const formSubmitted = (e) => {
  // needed to prevent the page from reloading
  e.preventDefault();

  const newBook = getBookFromUserInput();
  myLibrary.addBook(newBook);
  createBookCard (newBook);


  closeAddBookModal();
}

// clicking on .modal will cause the click event to propagate like this
// .modal -> #modal-root -> body while clicking outside the modal will only go through #modal-root -> body.
// Since we can stop the propagation of click events completely, and if that does not interfere with any other code,
// we only need to listen for click events in both .modal and
// #modal-root. A "modal-root" click will dismiss the modal, 
// and a "modal" click will stop propagating the click event so never reaches the "modal-root".
// For extra clarity, here's the code working in codepen.io: https://codepen.io/nbalaguer/pen/PVbEjm


const mistBorn = new Book ("Mistborn", "Brandon Sanderson", 1020, false);
const wayOfKings = new Book ("Way of Kings", "Brandon Sanderson", 1420, true);

myLibrary.addBook(mistBorn);
createBookCard(mistBorn);
myLibrary.addBook(wayOfKings);
createBookCard(wayOfKings);



// Events / On Click
addBookBtn.addEventListener('click', openAddBookModal);
addBookForm.addEventListener('submit', formSubmitted);
overlay.addEventListener('click', closeAddBookModal);




// const buttons = document.querySelectorAll('button');
// buttons.forEach(button => button.addEventListener("click", ));
