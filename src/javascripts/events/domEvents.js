import logoutButton from '../components/logoutButton';
import flashcards from '../views/flashcards';
import leaderboard from '../views/leaderboard';
import learnPlay from '../views/learnPlay';
import play from '../views/play';
import profile from '../views/profile';

const domEvents = () => {
  const domBody = document.querySelector('body');
  domBody.addEventListener('click', (e) => {
    // e.stopPropagation();

    if (e.target.id === 'back-btn') {
      learnPlay();
    }
    if (e.target.id === 'game-card') {
      play();
    }
    if (e.target.id === 'learn-card') {
      flashcards();
    }
    if (e.target.id === 'leaderboard-card') {
      leaderboard();
    }
    if (e.target.id === 'profile-card') {
      profile();
      logoutButton();
    }
  });
};

export default domEvents;
