import getCategories from '../../helpers/data/categoryData';
import { loader } from '../loader';

const learnCategorySelect = () => {
  loader('#learn-body');

  getCategories().then((resp) => {
    const categoryItems = resp.map((category) => `<button type="button" id="learn-category-select--${category.id}" class="btn learn-category-button">${category.name}</button>`).join('');

    document.querySelector('#learn-body').innerHTML = `<div class="learn-categories">${categoryItems}</div>`;
  });
};
export default learnCategorySelect;
