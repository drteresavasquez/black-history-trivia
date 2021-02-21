import playIntro from '../components/play/playIntro';
import playQuestion from '../components/play/playQuestion';
import playFeedback from '../components/play/playFeedback';

const playEvents = () => {
  const playBody = document.querySelector('#play-body');
  playBody.addEventListener('click', (e) => {
    const [eventId, itemId] = e.target.id.split('--');
    if (eventId.includes('play-category-select')) playIntro(itemId);
    if (eventId === 'play-quiz-start') playQuestion();
    if (eventId === 'play-question-submit') playFeedback();
    if (eventId === 'play-next-question') playQuestion();
  });
};

export default playEvents;
