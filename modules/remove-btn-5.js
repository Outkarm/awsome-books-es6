const removeButton = () => {
  this.container.addEventListener('click', (e) => {
    // delete elements from screen
    this.removeBook(e.target);
    // remove book from local storage
    this.deleteBook();
  });
};

export default removeButton;
