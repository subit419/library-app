const myLibrary = [];
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

Book.prototype.toggleRead = function () {
    this.isReadread = !this.isRead;
}

function addBookToLibrary (Book) {
    this.book = Book;
    myLibrary.push(this.book);
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

const addBook = (e) => {
  e.preventDefault();
  const newBook = getBookFromUserInput();
  addBookToLibrary(newBook);
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

addBookToLibrary (mistBorn);
addBookToLibrary (wayOfKings);



// Events / On Click
addBookBtn.addEventListener('click', openAddBookModal);
addBookForm.addEventListener('submit', addBook);
overlay.addEventListener('click', closeAddBookModal);




// const buttons = document.querySelectorAll('button');
// buttons.forEach(button => button.addEventListener("click", ));
