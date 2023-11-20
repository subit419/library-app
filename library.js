const myLibrary = [];

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
    addBookForm.reset()
    addBookModal.classList.add('active')
    overlay.classList.add('active')
}
  
const closeAddBookModal = () => {
    addBookModal.classList.remove('active')
    overlay.classList.remove('active')
    errorMsg.classList.remove('active')
    errorMsg.textContent = ''
}

const mistBorn = new Book ("Mistborn", "Brandon Sanderson", 1020, false);
const wayOfKings = new Book ("Way of Kings", "Brandon Sanderson", 1420, true);

addBookToLibrary (mistBorn);
addBookToLibrary (wayOfKings);
console.log (myLibrary[0]);
console.log (myLibrary[1]);


// document.getElementById("add-book").addEventListener("click", );;
// const buttons = document.querySelectorAll('button');
// buttons.forEach(button => button.addEventListener("click", ));
