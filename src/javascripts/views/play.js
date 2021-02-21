import playEvents from '../events/playEvents';
import playCategorySelect from '../components/play/playCategorySelect';

const play = () => {
  document.querySelector('#app').innerHTML = '<div class="d-flex button-row"><div id="back-btn"><i class="fas fa-chevron-left"></i> BACK</div><div id="logout-button"></div></div>';
  document.querySelector('#app').innerHTML += '<div id="play-body"></div>';
  playCategorySelect();
  playEvents();
};

export default play;
