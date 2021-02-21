import getCategories from '../../helpers/data/categoryData';
import { loader } from '../loader';

const learnCategorySelect = () => {
  loader('#learn-body');

  getCategories().then((resp) => {
    const categoryItems = resp.map((category) => `<button type="button" id="learn-category-select--${category.id}" class="play-cat-btns btn btn-light learn-category-button">${category.name}</button>`).join('');

    document.querySelector('#learn-body').innerHTML = `<h2 class="text-white">Select a Category</h2><div class="learn-categories">${categoryItems}</div>`;
  });
};
export default learnCategorySelect;
