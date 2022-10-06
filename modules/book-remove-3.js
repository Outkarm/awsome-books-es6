const removeBook = (el) => {
  if (el.classList.contains("remove-btn")) {
    el.parentElement.remove();
  }
};

export default removeBook;
