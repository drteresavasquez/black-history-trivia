import playIntro from '../components/play/playIntro';
import playQuestion from '../components/play/playQuestion';

const playEvents = () => {
  const playBody = document.querySelector('#play-body');
  playBody.addEventListener('click', (e) => {
    const [eventId, itemId] = e.target.id.split('--');

    if (eventId.includes('play-category-select')) playIntro(itemId);
    if (eventId === 'play-quiz-start') playQuestion();
  });
};

export default playEvents;