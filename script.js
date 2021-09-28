const closeButton = document.querySelector('.close-nav');
const openButton = document.querySelector('.open-nav');
const nav = document.querySelector('.nav');

closeButton.addEventListener('click', () => {
  nav.classList.toggle('navigation-open');
});

openButton.addEventListener('click', () => {
  nav.classList.toggle('navigation-open');
});
