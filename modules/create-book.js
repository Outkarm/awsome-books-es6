import BookCreate from './transition.js';
import addToLibraryShelf from './add-to-library-shelf.js';
import dynamicStorageRefresher from './update-local-storage.js';

// the function that creates the new book object from the constructor
const bookCreator = () => {
  const titleof = document.querySelector('#title').value;
  const authorof = document.querySelector('#author').value;
  const newBook = new BookCreate(titleof, authorof);
  BookCreate.collection.push(newBook);
  addToLibraryShelf(newBook);
  dynamicStorageRefresher(BookCreate.collection);
};

export default bookCreator;
