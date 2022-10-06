const appendBook = () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.querySelector('.title').value;
    const author = document.querySelector('.author').value;
    this.addBookToList({ title, author });
    this.bookList.push({ title, author });
    localStorage.setItem('books', JSON.stringify(this.bookList));
    this.clearFields();
  });
};

export default appendBook;
