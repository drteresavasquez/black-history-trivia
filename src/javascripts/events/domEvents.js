import flashcards from '../views/flashcards';
import play from '../views/play';

const domEvents = () => {
  const domBody = document.querySelector('body');
  domBody.addEventListener('click', (e) => {
    if (e.target.id === 'game-card') {
      play();
    }
    if (e.target.id === 'learn-card') {
      flashcards();
    }
  });
};

export default domEvents;
