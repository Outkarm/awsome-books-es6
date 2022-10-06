const addBookToList = (book) => {
  const div = document.createElement("div");
  div.setAttribute("class", "min-container");
  div.innerHTML = `
    <p>${book.title}</p>
    <p>${book.author}</p>
    <button class= "remove-btn">Remove</button>
    <hr>
    `;
  container.append(div);
};

export default addBookToList;
