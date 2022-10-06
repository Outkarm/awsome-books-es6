export const bookShelf = document.querySelector('#book-shelf');
export const theForm = document.querySelector('#main-form');
export const libraryArea = document.querySelector('#the-library-name');
export const bookSectionAdder = document.querySelector('#add-new-book');
export const contactUsOn = document.querySelector('#contact-section');

// defining the constructor for new book objects to be added
export default class BookCreate {
  constructor(Title, Author) {
    this.title = Title;
    this.author = Author;
    this.Id = Math.floor(Math.random() * 1000000);
  }

  // ensure that the existing storage in memory is loaded into the array
  static collection =
    JSON.parse(localStorage.getItem('bookStorageArray')) || [];
}
