// defining the function that creates the node and adds it to the bookShelf
import { bookShelf } from './transition.js';
import { removeBook, removeFromLocal } from './total-remove.js';

const addToLibraryShelf = (e) => {
  const newShelf = document.createElement('div');
  const bookDetails = document.createElement('p');

  const removeBtn = document.createElement('button');
  removeBtn.classList.add('removeBtnStyle');

  bookDetails.innerText = `"${e.title}" by ${e.author}`;

  removeBtn.innerText = 'Remove';
  newShelf.appendChild(bookDetails);
  newShelf.classList.add('book-shelf-layout');
  newShelf.appendChild(removeBtn);
  newShelf.id = e.Id;
  bookShelf.appendChild(newShelf);
  newShelf.classList.add('darker-background');

  // adding the event listener to the remove button of each book
  removeBtn.addEventListener('click', () => {
    removeBook(newShelf);

    removeFromLocal(e.Id);
  });
};

export default addToLibraryShelf;
