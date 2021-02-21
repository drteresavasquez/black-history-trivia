import getCategories from '../../helpers/data/categoryData';

const playCategorySelect = () => {
  document.querySelector('#play-body').innerHTML = `
  <div class="play-loader spinner-border text-light" role="status">
    <span class="sr-only">Loading...</span>
  </div>`;

  getCategories().then((resp) => {
    const categoryItems = resp.map((category) => `<button type="button" id="play-category-select--${category.id}" class="btn play-category-button">${category.name}</button>`).join('');

    document.querySelector('#play-body').innerHTML = `<div class="play-categories">${categoryItems}</div>`;
  });
};
export default playCategorySelect;
