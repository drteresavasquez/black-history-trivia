const play = () => {
  document.querySelector('#app').innerHTML = '<div class="d-flex button-row"><div id="back-btn"><i class="fas fa-chevron-left"></i> BACK</div><div id="logout-button"></div></div>';
  document.querySelector('#app').innerHTML += 'Play!';
};

export default play;
