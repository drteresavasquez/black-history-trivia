const loader = (selectorId, append = false) => {
  const domString = `
  <div id="loader-component" class="loader-overlay">
    <div class="loader-content">
      <div class="spinner-border" role="status">
        <span class="content sr-only">Loading...</span>
      </div>
    </div>
  </div>`;
  if (append) {
    document.querySelector(selectorId).innerHTML += domString;
  } else {
    document.querySelector(selectorId).innerHTML = domString;
  }
};
const removeLoader = () => {
  const loaderExists = document.querySelector('#loader-component');
  if (loaderExists) {
    loaderExists.remove();
  }
};

export { loader, removeLoader };
