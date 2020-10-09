import menuItemsTpl from '../src/templates/menu-items.hbs';
import menu from './menu.json';

const menuContainer = document.querySelector('.js-menu');
const checkBox = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');
const menuMarkup = createMenuMarkup(menu);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

body.classList.add(Theme.LIGHT);

const savedTheme = localStorage.getItem('Theme');

if (savedTheme === Theme.DARK) {
  checkBox.checked = true;
  body.classList.add(Theme.DARK);
}

if (savedTheme === Theme.LIGHT) {
  checkBox.checked = false;
  body.classList.add(Theme.LIGHT);
}

checkBox.addEventListener('change', onCheckBoxClick);

menuContainer.insertAdjacentHTML('beforeend', menuMarkup);

function createMenuMarkup(menuItems) {
  return menuItems.map(menuItemsTpl).join('');
}

function onCheckBoxClick(event) {
  if (event.target.checked) {
    body.classList.remove(Theme.LIGHT);
    body.classList.add(Theme.DARK);
    localStorage.setItem('Theme', Theme.DARK);
  } else {
    body.classList.remove(Theme.DARK);
    body.classList.add(Theme.LIGHT);
    localStorage.setItem('Theme', Theme.LIGHT);
  }
}
