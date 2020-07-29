const el = document.getElementById('btn');
const ele = document.getElementById('btn_t');
const closeButton = document.getElementById('close');
const menu = document.getElementById('menu');

el.addEventListener('click', e => {
  e.preventDefault();
  menu.classList.add('opened');
});

ele.addEventListener('click', e => {
  e.preventDefault();
  menu.classList.add('opened');
});

closeButton.addEventListener('click', e => {
  e.preventDefault();
  menu.classList.remove('opened');
});
