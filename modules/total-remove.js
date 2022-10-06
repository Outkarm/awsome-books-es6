import BookCreate, { bookShelf } from "./app.js";
import dynamicStorageRefresher from "./dynamic-update-function.js";

// the function that will remove the book from the screen
export const removeBook = (book) => {
  bookShelf.removeChild(book);
};

// the function that will remove the book from the local storage
export const removeFromLocal = (bookId) => {
  BookCreate.collection.forEach((e) => {
    if (e.Id === bookId) {
      const initArr = BookCreate.collection.indexOf(e);
      BookCreate.collection.splice(initArr, 1);
    }
  });
  dynamicStorageRefresher(BookCreate.collection);
};
