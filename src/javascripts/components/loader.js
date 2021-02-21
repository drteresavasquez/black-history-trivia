const loader = (selecctorId, append = false) => {
  const domString = `
  <div id="loader-component" class="loader-overlay">
    <div class="loader-content">
      <div class="spinner-border" role="status">
        <span class="content sr-only">Loading...</span>
      </div>
    </div>
  </div>`;
  if (append) {
    document.querySelector(selecctorId).innerHTML += domString;
  } else {
    document.querySelector(selecctorId).innerHTML = domString;
  }
};
const removeLoader = () => {
  document.querySelector('#loader-component').remove();
};

export { loader, removeLoader };
