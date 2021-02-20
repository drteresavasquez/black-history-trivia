import flashcards from '../views/flashcards';
import leaderboard from '../views/leaderboard';
import learnPlay from '../views/learnPlay';
import play from '../views/play';

const navEvents = () => {
  document.querySelector('#nav-home').addEventListener('click', () => {
    learnPlay();
  });
  document.querySelector('#nav-learn').addEventListener('click', () => {
    flashcards();
  });
  document.querySelector('#nav-play').addEventListener('click', () => {
    play();
  });
  document.querySelector('#nav-leaderboard').addEventListener('click', () => {
    leaderboard();
  });
};

export default navEvents;
