import getCategories from '../../helpers/data/categoryData';

const playCategorySelect = () => {
  getCategories().then((resp) => {
    const categoryItems = resp.map((category) => `<button type="button" id="play-category-select--${category.id}" class="play-cat-btns btn btn-light play-category-button">${category.name}</button>`).join('');

    document.querySelector('#play-body').innerHTML = `<h2 class="text-white">Select a Category</h2><div class="play-categories">${categoryItems}</div>`;
  });
};
export default playCategorySelect;
