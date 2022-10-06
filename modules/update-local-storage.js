// defining a dynamic update function for the local storage
const dynamicStorageRefresher = (arrayStorage) => {
  localStorage.setItem("bookStorageArray", JSON.stringify(arrayStorage));
};

export default dynamicStorageRefresher;
