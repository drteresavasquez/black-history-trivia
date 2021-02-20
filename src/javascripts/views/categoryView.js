import getCategories from '../helpers/data/categoryData';

const categoryViewer = () => {
  getCategories().then((response) => response.forEach((element) => {
    document.querySelector('#app').innerHTML += `
    <button id="cat-btns" type="button" class="btn btn-outline-success">${element.name}</button>`;
  }));
};
export default categoryViewer;
