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

checkBox.addEventListener('change', onCheckBoxClick);

menuContainer.insertAdjacentHTML('beforeend', menuMarkup);

function createMenuMarkup(menuItems) {
  return menuItems.map(menuItemsTpl).join('');
}

function onCheckBoxClick(event) {
  if (event.target.checked) {
    body.classList.add(Theme.DARK);
  } else {
    body.classList.remove(Theme.DARK);
    body.classList.add(Theme.LIGHT);
  }
}
