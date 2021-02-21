import playIntro from '../components/play/playIntro';
import playQuestion from '../components/play/playQuestion';
import playFeedback from '../components/play/playFeedback';
import { addQuizTime } from '../helpers/data/currentQuizData';
import leaderboard from '../views/leaderboard';

const playEvents = () => {
  const playBody = document.querySelector('#play-body');
  playBody.addEventListener('click', (e) => {
    const [eventId, itemId] = e.target.id.split('--');
    if (eventId.includes('play-category-select')) playIntro(itemId);
    if (eventId === 'play-quiz-start') {
      addQuizTime();
      playQuestion();
    }
    if (eventId === 'play-question-submit') playFeedback();
    if (eventId === 'play-next-question') playQuestion();
    if (eventId === 'play-show-leaderboard') leaderboard();
  });
};

export default playEvents;
