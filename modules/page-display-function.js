import { libraryArea, bookSectionAdder, contactUsOn } from './transition.js';

const firstNav = document.querySelector('.nav-1 button');
const secondNav = document.querySelector('.nav-2 button');
const thirdNave = document.querySelector('.nav-3 button');

export const listToDiplay = () => {
  libraryArea.classList.remove('hidden');
  bookSectionAdder.classList.add('hidden');
  contactUsOn.classList.add('hidden');
  firstNav.classList.add('selected');
  secondNav.classList.remove('selected');
  thirdNave.classList.remove('selected');
};

export const displayForm = () => {
  libraryArea.classList.add('hidden');
  bookSectionAdder.classList.remove('hidden');
  contactUsOn.classList.add('hidden');
  firstNav.classList.remove('selected');
  secondNav.classList.add('selected');
  thirdNave.classList.remove('selected');
};

export const displayContact = () => {
  libraryArea.classList.add('hidden');
  bookSectionAdder.classList.add('hidden');
  contactUsOn.classList.remove('hidden');
  firstNav.classList.remove('selected');
  secondNav.classList.remove('selected');
  thirdNave.classList.add('selected');
};

export const navigator = () => {
  firstNav.onclick = listToDiplay;
  secondNav.onclick = displayForm;
  thirdNave.onclick = displayContact;
};
