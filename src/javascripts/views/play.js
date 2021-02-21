import playEvents from '../events/playEvents';
import playCategorySelect from '../components/play/playCategorySelect';

const play = () => {
  document.querySelector('#app').innerHTML = '<div id="play-body"></div>';
  playCategorySelect();
  playEvents();
};

export default play;
