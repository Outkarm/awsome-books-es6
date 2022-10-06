import BookCreate from "./transition.js";
import addToLibraryShelf from "./add-to-library-shelf.js";

// function that will get from storage and add to the collection
const collectionPopulator = () => {
  BookCreate.collection.forEach((element) => {
    addToLibraryShelf(element);
  });
};

export default collectionPopulator;
