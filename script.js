const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const close = document.getElementById('close');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('show');
  hamburger.classList.toggle('toggle');
});

close.addEventListener('click', () => {
  menu.classList.remove('show');
  hamburger.classList.remove('toggle');
});

