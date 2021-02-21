import getCategories from '../../helpers/data/categoryData';

const learnCategorySelect = () => {
  document.querySelector('#learn-body').innerHTML = `
  <div class="play-loader spinner-border text-light" role="status">
    <span class="sr-only">Loading...</span>
  </div>`;

  getCategories().then((resp) => {
    const categoryItems = resp.map((category) => `<button type="button" id="learn-category-select--${category.id}" class="btn learn-category-button">${category.name}</button>`).join('');

    document.querySelector('#learn-body').innerHTML = `<div class="learn-categories">${categoryItems}</div>`;
  });
};
export default learnCategorySelect;
