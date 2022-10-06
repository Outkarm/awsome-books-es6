const getDate = () => {
  const time = document.querySelector('.time');
  const date = new Date();
  const now = date.toString().split(' ').splice(1, 4);
  let pe;
  if (date.getHours() >= 12) {
    pe = 'pm';
  } else {
    pe = 'am';
  }
  const mon = `${now[0]} ${now[1]}th ${now[2]}, ${now[3]} ${pe}`;
  time.innerHTML = mon;
};

export default getDate;
