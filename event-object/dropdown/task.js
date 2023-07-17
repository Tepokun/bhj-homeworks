const btn = document.querySelector('.dropdown__value');
const list = document.querySelector('.dropdown__list');
const links = document.querySelectorAll('a');

btn.addEventListener('click', show);

function show(event) {
  list.classList.toggle('dropdown__list_active');
}

for (let link of links) {
  link.addEventListener('click', rename);
}

function rename(event) {
  event.preventDefault();
  btn.textContent = event.target.textContent;
  list.classList.remove('dropdown__list_active');
}
