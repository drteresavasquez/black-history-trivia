import getCategories from '../../helpers/data/categoryData';
import { loader } from '../loader';

const playCategorySelect = () => {
  loader('#play-body');

  getCategories().then((resp) => {
    const categoryItems = resp.map((category) => `<button type="button" id="play-category-select--${category.id}" class="btn play-category-button">${category.name}</button>`).join('');

    document.querySelector('#play-body').innerHTML = `<div class="play-categories">${categoryItems}</div>`;
  });
};
export default playCategorySelect;
