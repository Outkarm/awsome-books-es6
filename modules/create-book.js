import BookCreate from "./app.js";
import addToLibraryShelf from "./add-to-shelf.js";
import dynamicStorageRefresher from "./dynamic-update-function.js";

// the function that creates the new book object from the constructor
const bookCreator = () => {
  const titleof = document.querySelector("#title").value;
  const authorof = document.querySelector("#author").value;
  const newBook = new BookCreate(titleof, authorof);
  BookCreate.collection.push(newBook);
  addToLibraryShelf(newBook);
  dynamicStorageRefresher(BookCreate.collection);
};

export default bookCreator;
