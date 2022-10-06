const deleteBook = () => {
  const books = bookList;
  books.forEach((book, index) => {
    books.splice(index, 1);
  });
  localStorage.setItem("books", JSON.stringify(books));
};

export default deleteBook;
