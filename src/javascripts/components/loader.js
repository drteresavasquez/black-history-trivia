const loader = (selecctorId, append = false) => {
  const domString = `
  <div id="loader-component" class="play-loader spinner-border text-light" role="status">
    <span class="sr-only">Loading...</span>
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
