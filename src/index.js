import menuItemsTpl from '../src/templates/menu-items.hbs';
import menu from './menu.json';

const menuContainer = document.querySelector('.js-menu');
const menuMarkup = createMenuMarkup(menu);

menuContainer.insertAdjacentHTML('beforeend', menuMarkup);

console.log(menuMarkup);

function createMenuMarkup(menuItems) {
  return menuItems.map(menuItemsTpl).join('');
}
