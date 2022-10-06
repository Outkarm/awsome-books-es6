import {
  theForm,
  bookSectionAdder,
  contactUsOn,
} from "./modules/transition.js";
import { navigator } from "./modules/page-display-function.js";
import collectionPopulator from "./modules/collection-populate.js";
import { DateTime } from "./modules/luxon.js";
import bookCreator from "./modules/create-book.js";

bookSectionAdder.classList.add("hidden");
contactUsOn.classList.add("hidden");

// invoking the function to display the books on screen
collectionPopulator();

// adding the submit event listener to the theForm
theForm.addEventListener("submit", (e) => {
  e.preventDefault();
  bookCreator();
  theForm.reset();
});

navigator();

const dateBox = document.querySelector(".date");
const d = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
dateBox.innerText = d.toLocaleString();
